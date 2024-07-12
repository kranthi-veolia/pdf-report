/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable quotes */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { membraneStyle } from './ro-unit-style';
import SubLine from '../createLine';
import { ArialB600, RationValWidth } from '../fonts/font';

const borderColor = '#B3D3D7';
let tablewidth = 1140;
let headercount = 1;
const rowWidthInc = 2;
let defaultUnit = { 'Volume Flow': 'm3/hr', 'Pressure': 'bar', 'Temperature': '°C', 'Liquid Volume': 'gal', 'Flux': 'gfd', 'Power': 'kW' };

const DetailedDesign = (props) => {
  const { system_units, rodata, tableWidth, pageWidth } = props;
  defaultUnit = system_units || defaultUnit;
  // console.log(rodata);
  tablewidth = tableWidth;
  const herder_val = [
    'Stage',
    'Housing',
    'Elements',
    'Element Type',
    `Element Age   (yr) `,
    { header1: `Pressure Change, ${defaultUnit.Pressure}`, header2: ['Boost', 'Loss'] },
    `Permeate P  (${defaultUnit.Pressure})`,
    rodata.abFactor === 0 ? 'A-Value ACP' : 'A-Factor',
    rodata.abFactor === 0 ? 'B-Value ACP' : 'B-Factor'
  ];
  const getSingleRowWidth = (count) => {
    if (count) {
      return RationValWidth((tablewidth / headercount) * rowWidthInc / count - 2);
    }
    return RationValWidth(tablewidth / headercount) * rowWidthInc;
  };
  headercount = herder_val.length;
  const splitHeaderData = (ele) => {
    return Object.prototype.toString.call(ele) === '[object Array]' ? (
      ele.map((dta, ind) => (
        <View key={ind}
          style={[
            { width: getSingleRowWidth(ele.length), borderTop: 1, borderLeft: 1, borderColor },
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
      <Text
        style={[membraneStyle.tableCell, membraneStyle.restChild, { fontFamily: ArialB600 }]}
      >
        {ele}
      </Text>
    );
  };
  const createHeader = (item) => {
    return (
      <View style={[membraneStyle.tableRow, { width: RationValWidth(tablewidth) }]}>
        {item.map((ele, ind) => {
          return (
            <View key={ind}
              style={[
                membraneStyle.tableCol,
                ind === item.length - 1 && { borderRight: 0 },
                { width: RationValWidth((tablewidth / headercount)), height: RationValWidth(50) },
                Object.prototype.toString.call(ele) === '[object Object]' && Object.keys(ele).length > 1 &&
                { width: getSingleRowWidth() }
              ]}
            >
              {Object.prototype.toString.call(ele) === '[object Object]' ? (
                Object.keys(ele).map((data, keyInd) => (
                  <View key={keyInd} style={[membraneStyle.flexDirection]} >
                    {splitHeaderData(ele[data])}
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
        })}
      </View>
    );
  };
  const createContent = (items) => {
    return (
      <View style={{ width: '100%' }}>
        {items.map((typeData, typeindex) => {
          if (typeData.pressureVessels === 0) {
            return <Text key={typeindex} />;
          }
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
                {['stage', 'pressureVessels', 'elementsperVessel', 'elementModel', 'elementAge', 'interStageBoostPressure', 'interStagePressureLoss', 'permeatePressure', 'fluxAnnual', 'saltPassageAnnual'].map((data, ind) => {
                  return (
                    <View key={ind} style={[membraneStyle.tablebodyCol1, ind === herder_val.length && { borderRight: 0 }]}>
                      {(() => {
                        if (data === 'fluxAnnual' || data === 'saltPassageAnnual') {
                          if (rodata.abFactor === 0) {
                            return (
                              <Text style={membraneStyle.tableCell}>
                                {data === 'fluxAnnual' && (Number(typeData[data]) === 1 ? '5.00' : typeData[data])}
                                {data === 'saltPassageAnnual' && (Number(typeData[data]) === 1 ? '7.00' : typeData[data])}
                              </Text>
                            );
                          }
                          return (
                            <Text style={membraneStyle.tableCell}>
                              {data === 'fluxAnnual' && (Number(typeData[data]) === 5 ? '1.00' : typeData[data])}
                              {data === 'saltPassageAnnual' && (Number(typeData[data]) === 7 ? '1.00' : typeData[data])}
                            </Text>
                          );
                        }
                        if (data === 'elementModel') {
                          return (
                            <Text style={membraneStyle.tableCell}>
                              {(() => {
                                if (typeData[data]) {
                                  return typeData[data].split("").map((text, textInd) => {
                                    return <Text key={textInd}>{text}</Text>;
                                  });
                                }
                                return '0.00';
                              })()}
                            </Text>
                          );
                        }
                        return (<Text style={membraneStyle.tableCell}>{typeData[data]}</Text>);
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
    <View id="dynamic-height">
      <View style={[membraneStyle.textHeader, { width: RationValWidth(pageWidth) }]}>
        <SubLine lineWidth='10px' lineHeight='12' />
        <Text style={{ paddingLeft: 5 }}>Table 2. Detailed Design </Text>
      </View>
      {Object.keys(rodata.ro_dict).length > 0 && Object.keys(rodata.ro_dict).map((ele, ind) => {
        return (
          <View key={ind} style={{ width: RationValWidth(tablewidth), margin: '0 15' }}>
            <View style={[membraneStyle.textHeader]}><Text>{ele} Array Design </Text></View>
            <View style={[membraneStyle.mainTable, { marginBottom: 20 }]}>
              {createHeader(herder_val)}
              {createContent(rodata.ro_dict[ele]['grid-data'])}
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default DetailedDesign;
