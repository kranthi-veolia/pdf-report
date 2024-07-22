/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { membraneStyle } from './desalination_style';
import { ArialB600, RationValWidth, getFloatVal } from '../../fonts/font';

const borderColor = '#B3D3D7';
let tablewidth = 100;
let headercount = 1;
const rowWidthInc = 3;
let defaultUnit = { 'Volume Flow': 'm3/hr', 'Pressure': 'bar', 'Temperature': '°C', 'Liquid Volume': 'gal', 'Flux': 'gfd', 'Power': 'kW' };

const MembraneSeparator = (props) => {
  const { system_units, items1, tableWidth, pageWidth, serialNum } = props;
  let { subSerialNum } = props;
  defaultUnit = system_units;
  tablewidth = tableWidth;
  const herder_val = [];
  Object.keys(items1).forEach((d) => {
    if (d === 'Type') {
      herder_val.push({ h: 'Unitop', h1: ['Type', 'ID'] });
    } else if (d === 'ID') {
    } else {
      herder_val.push(d);
    }
  });
  console.log(herder_val);
  headercount = herder_val.length;
  const splitHeaderData = (ele, parentInd) => {
    return Object.prototype.toString.call(ele) === '[object Array]' ? (
      ele.map((dta, ind) => (
        <View key={ind}
          style={[
            { width: RationValWidth((tablewidth / headercount) / ele.length - 2), borderTop: 1, borderLeft: 1, borderColor },
            parentInd === 0 && { width: RationValWidth((tablewidth / headercount) * rowWidthInc) / ele.length },
            ind === 0 && { borderLeft: 0 }
          ]}
        >
          <Text
            style={[
              membraneStyle.tableCell, membraneStyle.restChild, { fontFamily: ArialB600, padding: '5 0' }
            ]}
          >
            {dta}
          </Text>
        </View>
      ))
    ) : (
      <Text
        style={[membraneStyle.tableCell, membraneStyle.restChild, { fontFamily: ArialB600, padding: '5 0' }]}
      >
        {ele}
      </Text>
    );
  };
  const createHeader = (item) => {
    return (
      <View style={[membraneStyle.tableRow, { width: RationValWidth(tablewidth - 3) }]}>
        {item.map((ele, ind) => {
          return (
            <View key={ind}
              style={[
                membraneStyle.tableCol,
                { width: RationValWidth((tablewidth / headercount)) },
                ind === 0 && { width: RationValWidth(tablewidth / headercount) * rowWidthInc }
              ]}
            >
              {Object.prototype.toString.call(ele) === '[object Object]' ? (
                Object.keys(ele).map((data, keyInd) => (
                  <View key={keyInd}
                    style={[
                      membraneStyle.flexDirection,
                    ]}
                  >
                    {splitHeaderData(ele[data], ind)}
                  </View>
                ))
              ) : (
                <View>
                  <Text
                    style={[
                      membraneStyle.tableCell, membraneStyle.restChild, { fontFamily: ArialB600, padding: '4 5' },
                    ]}
                  >
                    {ele.toLowerCase() === 'waste' ? 'Conc.' : ele}
                    {ele.toLowerCase() === 'recovery' && ' (%)'}
                    {ele.toLowerCase() === 'electrode' && ' Bleed'}
                  </Text>
                  <Text style={[membraneStyle.restChild, { fontSize: RationValWidth(16), fontFamily: ArialB600 }]}>
                    {ele.toLowerCase() === 'recovery' ? '' : `(${defaultUnit['Volume Flow']})`}
                  </Text>
                </View>
              )}
            </View>
          );
        })}
      </View>
    );
  };

  const createContent = (items, herder_val) => {
    return (
      <View style={{ width: '100%' }}>
        {items.Type.map((typeData, typeindex) => {
          return (
            <View
              style={[
                membraneStyle.tablebodyRow1, { width: RationValWidth(tablewidth), margin: '0' }
              ]}
              key={typeindex}
            >
              <View
                style={[
                  membraneStyle.flexDirection,
                  { width: RationValWidth(tablewidth / headercount) * rowWidthInc },
                ]}>
                <View style={[membraneStyle.tablebodyCol1]}>
                  <Text style={[membraneStyle.tableCell, { padding: '4 0' }]}>{typeData}</Text>
                </View>
                <View style={[membraneStyle.tablebodyCol1]}>
                  {items.ID[typeData].map((itemData, i) => {
                    return (
                      <View key={i}
                        style={[
                          { borderBottom: 1, borderColor },
                          i === items.ID[typeData].length - 1 && { borderBottom: 0 }
                        ]}>
                        <Text style={membraneStyle.tableCell}>{itemData}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
              {herder_val.map((headerVal, headerInd) => {
                return (
                  Object.prototype.toString.call(headerVal) === '[object String]' && (
                    <View key={headerInd}
                      style={[
                        membraneStyle.tablebodyCol1,
                        { width: RationValWidth(tablewidth / headercount) },
                      ]}>
                      {items.ID[typeData].map((v, i) => {
                        return (
                          <View key={i}
                            style={[
                              { borderBottom: 1, borderColor },
                              i === items.ID[typeData].length - 1 && { borderBottom: 0 }
                            ]}>
                            <Text
                              style={[
                                membraneStyle.tableCell,
                                !(items[headerVal][v] && { fontFamily: ArialB600 })
                              ]}>
                              {getFloatVal(items[headerVal][v]) ? getFloatVal(items[headerVal][v]) : '-'}</Text>
                          </View>
                        );
                      })}
                    </View>
                  ));
              })}
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <View id="dynamic-height">
      <View style={[membraneStyle.textHeader, { width: RationValWidth(pageWidth) }]}>
        {/* <SubLine lineWidth='10px' lineHeight='12' /> */}
        {/* <Text style={{ marginTop: -4, paddingLeft: 15, color: '#0062A9' }}>&#95;&#95;</Text> */}
        <Text style={{ paddingLeft: 0 }}>{serialNum}.{subSerialNum++}</Text>
        <Text style={{ paddingLeft: 5 }}>Desalination \ Demineralization \ Membrane Separator (MEMS) Unit-Level Flow Summary</Text>
      </View>
      <View style={[membraneStyle.mainTable, { width: RationValWidth(tablewidth) }]}>
        {createHeader(herder_val)}
        {createContent(items1, herder_val)}
      </View>
    </View>
  );
};

export default MembraneSeparator;
