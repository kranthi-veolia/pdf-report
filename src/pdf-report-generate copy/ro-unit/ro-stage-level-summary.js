/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
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
  const { system_units, rodata, ro_summary, tableWidth, pageWidth, serialNum } = props;
  let { subSerialNum } = props;
  const { ro_stage_dict } = ro_summary;
  defaultUnit = system_units || defaultUnit;
  tablewidth = tableWidth;
  const herder_val = [
    'Stage',
    'Housing',
    'Elements',
    'Element Type',
    { header1: `Flow (${defaultUnit['Volume Flow']})`, header2: ['Feed', 'Conc.', 'Perm.'] },
    'Recovery                (%)',
    `Flux                    (${defaultUnit.Flux})`,
    { header1: `Pressure (${defaultUnit.Pressure})`, header2: ['Feed', 'dP'] },
    { header1: `TDS (mg/L)`, header2: ['Feed', 'Perm.'] },
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
            { width: getSingleRowWidth(ele.length), borderTop: 1, borderLeft: 1, borderColor, justifyContent: 'center' },
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
      <View style={{ width: '100%', justifyContent: 'center' }}>
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
                  <Text style={[membraneStyle.tableCell, { padding: '5 0' }]}>{stage}</Text>
                </View>
                {/* {Object.keys(items[stage]).map((data, ind) => { */}
                {['Housing', 'Elements', 'Element Type', 'Flow', 'Conc.', 'Perm.', '% Recovery', 'Flux', 'Feed Pressure', 'Pressure dp', 'Feed TDS mg/L', 'Perm TDS mg/L', 'Last Elem Beta'].map((data, ind) => {
                  return (
                    <View key={ind} style={[membraneStyle.tablebodyCol1, Object.keys(items[stage]).length - 1 === ind && { borderRight: 0 }]}>
                      {(() => {
                        if (data === 'Element Type') {
                          if (rodata[parentkey] && rodata[parentkey]['grid-data'] && rodata[parentkey]['grid-data'][typeindex] && rodata[parentkey]['grid-data'][typeindex].elementModel) {
                            return (
                              <Text style={membraneStyle.tableCell}>
                                {rodata[parentkey]['grid-data'][typeindex].elementModel.split("").map((text, textInd) => {
                                  return <Text key={textInd}>{text}</Text>;
                                })}
                              </Text>
                            );
                          }
                          return (
                            <Text style={membraneStyle.tableCell}>
                              {(() => {
                                if (rodata[parentkey]) {
                                  return rodata[parentkey]['grid-data'][0].elementModel.split("").map((text, textInd) => {
                                    return <Text key={textInd}>{text}</Text>;
                                  });
                                }
                                return '-';
                              })()}
                            </Text>
                          );
                        }
                        if(data === 'Flux' && defaultUnit.Flux === 'm/s') {
                          return (
                            <Text style={membraneStyle.tableCell}>{(items[stage][data]).toExponential(2)}</Text>
                          );
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
        <View style={{ width: '100%' }}>
          <Text>{serialNum}. RO Unitop Stage-Level Summary</Text>
        </View>
        {/* I reduced the line width to accommodate the text and added a margin left. --->kranthi */}
        <SubLine lineWidth='100%' lineHeight='24' />
      </View>
      <View style={[membraneStyle.textHeader, { width: RationValWidth(pageWidth), marginTop: 15 }]} /* bookmark={{ title: `${serialNum}.${subSerialNum} Docked Summary ` }} */ >
        {/* <SubLine lineWidth='10px' lineHeight='12' /> */}
        {/* <Text style={{ marginTop: -4, paddingLeft: 5, color: '#0062A9' }}>&#95;&#95;</Text> */}
        <Text style={{ paddingLeft: 0 }}>{serialNum}.{subSerialNum}</Text>
        <Text style={{ paddingLeft: 5 }}>Docked Summary </Text>
      </View>
      {Object.keys(ro_stage_dict).length > 0 && Object.keys(ro_stage_dict).map((ele, ind) => {
        if (ele.toLocaleLowerCase().indexOf('ro') >= 0) {
          return (
            <View key={ind} style={{ width: RationValWidth(tablewidth), margin: '15 auto 0 auto' }}>
              <View break>
                <View style={[membraneStyle.textHeader]}>
                  {/* <Text style={{ marginTop: -4, color: '#0062A9' }}>&#95;&#95;</Text> */}
                  <Text style={{ paddingLeft: 0 }}>{serialNum}.{subSerialNum}.{++ind}</Text>
                  <Text style={{ paddingLeft: 5 }}>{ele} Array Design </Text>
                </View>
                <View style={[membraneStyle.mainTable, { marginTop: 10 }]}>
                  {createHeader(herder_val)}
                  {createContent(ro_stage_dict[ele].Stage, ele)}
                </View>
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