/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable quotes */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { membraneStyle } from './ro-unit-style';
import SubLine from '../createLine';
import { ArialB600, RationValWidth, getFloatVal } from '../fonts/font';

const borderColor = '#B3D3D7';
let tablewidth = 1140;
let headercount = 1;
let rowWidthInc = 3;
let defaultUnit = { 'Volume Flow': 'm3/hr', 'Pressure': 'bar', 'Temperature': '°C', 'Liquid Volume': 'gal', 'Flux': 'gfd', 'Power': 'kW' };

const ROStageLevelSummary = (props) => {
  const { system_units, rodata, ro_summary, tableWidth, pageWidth } = props;
  const {ro_stage_dict} = ro_summary;
  defaultUnit = system_units || defaultUnit;
  tablewidth = tableWidth;
  const herder_val = [
    'Stage',
    'Housing',
    'Elements',
    'Element Type',
    { header1: `Flow, ${defaultUnit['Volume Flow']}`, header2: ['Feed', 'Conc.', 'Perm.'] },
    '%                       Recovery',
    `Flux                    (${defaultUnit.Flux})`,
    { header1: `Pressure, ${defaultUnit.Pressure}`, header2: ['Feed', 'dP'] },
    { header1: `TDS, mg/L`, header2: ['Feed', 'Perm.'] },
    'Last                 Element                   Beta'
  ];
  const getSingleRowWidth = (count) => {
    if (count) {
      return RationValWidth((tablewidth / headercount) * rowWidthInc / count - 2);
    }
    return RationValWidth(tablewidth / headercount) * rowWidthInc;
  };
  headercount = herder_val.length;
  const splitHeaderData = (ele, data) => {
    const count = Object.keys(data).length + 1;
    return Object.prototype.toString.call(ele) === '[object Array]' ? (
      ele.map((dta, ind) => (
        <View key={ind}
          style={[
            { width: getSingleRowWidth(ele.length), borderTop: 1, borderLeft: 1, borderColor, height: `${RationValWidth(100 / count)}px`, justifyContent: 'center' },
            ind === 0 && { borderLeft: 0 },
          ]}
        >
          <Text
            style={[
              membraneStyle.tableCell, membraneStyle.restChild, { fontFamily: ArialB600 }
            ]}
          >
            {dta}
          </Text>
        </View>
      ))
    ) : (
      <View style={{ height: `${RationValWidth(100 / count)}px`, width: '100%', justifyContent: 'center' }}>
        <Text
          style={[membraneStyle.tableCell, membraneStyle.restChild, { fontFamily: ArialB600 }]}
        >
          {ele}
        </Text>
      </View>
    );
  };
  const getColumnCount = (ele) => {
    let count = 1;
    if (Object.prototype.toString.call(ele) === '[object Object]') {
      Object.keys(ele).map((data) => {
        if (Object.prototype.toString.call(ele[data]) === '[object Array]') {
          if (count < ele[data].length) {
            count = ele[data].length;
          }
        }
        return count;
      });
    }
    return count;
  };
  const createHeader = (item) => {
    return (
      <View style={[membraneStyle.tableRow, { width: RationValWidth(tablewidth) }]}>
        {item.map((ele, ind) => {
          rowWidthInc = getColumnCount(ele);
          return (
            <View key={ind}
              style={[
                membraneStyle.tableCol,
                ind === item.length - 1 && { borderRight: 0 },
                { width: RationValWidth((tablewidth / headercount)) },
                Object.prototype.toString.call(ele) === '[object Object]' && Object.keys(ele).length > 1 &&
                { width: getSingleRowWidth() }
              ]}
            >
              {Object.prototype.toString.call(ele) === '[object Object]' ? (
                Object.keys(ele).map((data, keyInd) => (
                  <View key={keyInd} style={[membraneStyle.flexDirection]} >
                    {splitHeaderData(ele[data], ele)}
                  </View>
                ))
              ) : (
                <View>
                  <Text style={[membraneStyle.tableCell, membraneStyle.restChild, { fontFamily: ArialB600 }]}>
                    {ele}
                  </Text>
                </View>
              )}
            </View>
          );
        })
        }
      </View >
    );
  };
  const createContent = (items, parentkey) => {
    return (
      <View style={{ width: '100%' }}>
        {Object.keys(items).map((stage, typeindex) => {
          return (
            <View
              style={[
                membraneStyle.tablebodyRow1, { width: RationValWidth(tablewidth), margin: '0 auto' }
              ]}
              key={typeindex}
            >
              <View
                style={[
                  membraneStyle.flexDirection,
                  { width: RationValWidth(tablewidth) }
                ]}>
                <View style={[membraneStyle.tablebodyCol1]}>
                  <Text style={membraneStyle.tableCell}>{stage}</Text>
                </View>
                {Object.keys(items[stage]).map((data, ind) => {
                  return (
                    <View key={ind} style={[membraneStyle.tablebodyCol1, Object.keys(items[stage]).length - 1 === ind && { borderRight: 0 }]}>
                      {(() => {
                        if (data === 'Element Type') {
                          if (rodata[parentkey] && rodata[parentkey]['grid-data'] && rodata[parentkey]['grid-data'][typeindex] && rodata[parentkey]['grid-data'][typeindex].elementModel) {
                            return (<Text style={membraneStyle.tableCell}>{rodata[parentkey]['grid-data'][typeindex].elementModel}</Text>);
                          }
                          return (<Text style={membraneStyle.tableCell}>{rodata[parentkey]['grid-data'][0].elementModel}</Text>);
                        }
                        const val = items[stage][data].toString();
                        if (val.indexOf('.') >= 0) {
                          return (
                            <Text style={membraneStyle.tableCell}>{getFloatVal(items[stage][data])}</Text>
                          );
                        }
                        return (<Text style={membraneStyle.tableCell}>{items[stage][data]}</Text>);
                      })()}
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View >
    );
  };
  return (
    <View id='dynamic-height'>
      <View style={[membraneStyle.mainHeader, { width: RationValWidth(pageWidth) }]}>
        <View style={{ width: '90%' }}>
          <Text>RO Unitop Stage-Level Summary</Text>
        </View>
        <SubLine lineWidth='100%' lineHeight='24' />
      </View>
      <View style={[membraneStyle.textHeader, { width: RationValWidth(pageWidth) }]} bookmark={{title:'Docked summary '}}>
        <SubLine lineWidth='10px' lineHeight='12' />
        <Text style={{ paddingLeft: 5 }}>Docked summary </Text>
      </View>
      {Object.keys(ro_stage_dict).length > 0 && Object.keys(ro_stage_dict).map((ele, ind) => {
        if (ele.toLocaleLowerCase().indexOf('ro') === 0) {
          return (
            <View key={ind} style={{ width: RationValWidth(tablewidth), margin: '0 auto' }}>
              <View style={[membraneStyle.textHeader]}><Text>{ele} Array Design </Text></View>
              <View style={[membraneStyle.mainTable, { marginBottom: 20 }]}>
                {createHeader(herder_val)}
                {createContent(ro_stage_dict[ele].Stage, ele)}
              </View>
            </View>
          );
        }
        return (<Text key={ind} />);
      })}
    </View>
  );
};

export default ROStageLevelSummary;
