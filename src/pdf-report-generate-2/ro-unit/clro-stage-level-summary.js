/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { membraneStyle } from './ro-unit-style';
import SubLine from '../createLine';
import { ArialB600, RationValWidth } from '../fonts/font';
import TableHeader from '../header';

const borderColor = '#B3D3D7';
let tablewidth = 1140;
let headercount = 1;
let rowWidthInc = 3;
let defaultUnit = { 'Volume Flow': 'm3/hr', 'Pressure': 'bar', 'Temperature': '°C', 'Liquid Volume': 'gal', 'Flux': 'gfd', 'Power': 'kW' };

const CLROStageLevelSummary = (props) => {
  const { system_units, clro_elem_summary, tableWidth, pageWidth, serialNum } = props;
  let { subSerialNum } = props;
  defaultUnit = system_units || defaultUnit;
  tablewidth = tableWidth;
  const herder_val = ['Cycle', 'Element', 'Recovery', 'Feed Flow', 'Feed Press', 'Feed TDS', 'Conc Flow', 'Perm Flow', 'Perm TDS'];
  const getSingleRowWidth = (count) => {
    if (count) {
      return RationValWidth((tablewidth / headercount) * rowWidthInc / count - 2);
    }
    return RationValWidth(tablewidth / headercount) * rowWidthInc;
  };
  headercount = herder_val.length;
  const splitHeaderData = (ele, data) => {
    return Object.prototype.toString.call(ele) === '[object Array]' ? (
      ele.map((dta, ind) => (
        <View key={Math.random().toString(36).slice(2)} style={[
          { width: getSingleRowWidth(ele.length), borderTop: 1, borderLeft: 1, borderColor, justifyContent: 'center' },
          ind === 0 && { borderLeft: 0 },
        ]} >
          <Text
            style={[
              membraneStyle.tableCell, membraneStyle.restChild,
              { fontFamily: ArialB600 }
            ]}
          >
            {dta}
          </Text>
        </View>
      ))
    ) : (
      <View style={{ width: '100%', justifyContent: 'center' }}>
        <Text style={[
          membraneStyle.tableCell,
          membraneStyle.restChild,
          { fontFamily: ArialB600}
        ]}>
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
            <View key={Math.random().toString(36).slice(2)} style={[
              membraneStyle.tableCol,
              ind === item.length - 1 && { borderRight: 0 },
              { width: RationValWidth(tablewidth / headercount) }
            ]}>
              {Object.prototype.toString.call(ele) === '[object Object]' ? (
                Object.keys(ele).map((data, keyInd) => (
                  <View key={Math.random().toString(36).slice(2)} style={[membraneStyle.flexDirection]} >
                    {splitHeaderData(ele[data], ele)}
                  </View>
                ))
              ) : (
                <View>
                  <Text style={[membraneStyle.tableCell, membraneStyle.restChild, { fontFamily: ArialB600 }]}>
                    {ele}
                  </Text>
                  {(() => {
                    return (
                      <Text style={[
                        membraneStyle.tableCell,
                        membraneStyle.restChild,
                        { fontFamily: ArialB600, padding: '0 0 2 0' }
                      ]}>
                        {ele === 'Recovery' ? '(%)' : ''}
                        {(['Feed Flow', 'Conc Flow', 'Perm Flow'].indexOf(ele) >= 0) ? `(${system_units['Volume Flow']})` : ''}
                        {(['Feed Press'].indexOf(ele) >= 0) ? `(${system_units.Pressure})` : ''}
                        {(['Feed TDS', 'Perm TDS'].indexOf(ele) >= 0) ? `(mg/L)` : ''}
                      </Text>
                    );
                  })()}
                </View>
              )}
            </View>
          );
        })}
      </View >
    );
  };
  function getFlowValue(item, num = 2) {
    if (system_units['Volume Flow'] === 'm3/s') {
      if (item >= 0.01) {
        return Number.parseFloat(item).toFixed(num);
      }
      return Number.parseFloat(item).toExponential(num);
    }
    return Number.parseFloat(item).toFixed(num);
  }
  const createContent = (items, parentkey) => {
    return (
      <View style={{ width: '100%' }}>
        {items['CLRO Unit ID'].map((key, keyind) => {
          const clroContent = items[key];
          return (
            <View key={Math.random().toString(36).slice(2)}>
              {Object.keys(clroContent.Elements).map((data, index) => {
                return (
                  <View key={Math.random().toString(36).slice(2)}>
                    {Object.keys(clroContent.Elements[data]).map((ele, ind) => {
                      const obj = clroContent.Elements[data][ele];
                      return (
                        <View key={Math.random().toString(36).slice(2)} style={[
                          { flexDirection: 'row', width: '100%' },
                          ((Object.keys(clroContent.Elements).length - 1 !== index) || Object.keys(clroContent.Elements[data]).length - 1 !== ind) && { borderBottom: 1, borderBottomColor: borderColor }
                        ]}>
                          <Text style={[membraneStyle.tableCell, membraneStyle.restChild, { width: RationValWidth((tablewidth / headercount)), borderRight: 1, borderRightColor: borderColor }]}>
                            {data}
                          </Text>
                          <Text style={[
                            membraneStyle.tableCell, membraneStyle.restChild,
                            { width: RationValWidth((tablewidth / headercount)), borderRight: 1, borderRightColor: borderColor }
                          ]}>{ele}</Text>
                          {herder_val.map((hVal, hvalInd) => {
                            if (obj[hVal]) {
                              return (
                                <Text key={Math.random().toString(36).slice(2)} style={[
                                  membraneStyle.tableCell, membraneStyle.restChild,
                                  { width: RationValWidth((tablewidth / headercount)) },
                                  (hvalInd !== herder_val.length - 1 && { borderRight: 1, borderRightColor: borderColor })
                                ]}>{getFlowValue(obj[hVal], 2)}</Text>
                              );
                            }
                            return <Text key={Math.random().toString(36).slice(2)} />;
                          })}
                        </View>
                      );
                    })}
                  </View>
                );
              })}
            </View>
          );
        })}
      </View >
    );
  };
  return (
    <View id='dynamic-height'>
      <View style={[membraneStyle.mainHeader, { width: RationValWidth(pageWidth) }]}>
        <View style={{ width: '60%' }} >
          <Text>{serialNum}. CLRO Section Summary</Text>
        </View>
        <SubLine lineWidth='100%' lineHeight='24' />
      </View>
      <View style={[membraneStyle.textHeader, { width: RationValWidth(pageWidth), marginTop: 15 }]} bookmark={{ title: `${serialNum}.${subSerialNum} CLRO Flow Summary (Element Level) ` }} >
        <Text style={{ marginTop: -4, paddingLeft: 5, color: '#0062A9' }}>&#95;&#95;</Text>
        <Text style={{ paddingLeft: 5 }}>{serialNum}.{subSerialNum++}</Text>
        <Text style={{ paddingLeft: 5 }}>CLRO Flow Summary (Element Level) </Text>
      </View>

      <View style={{ width: RationValWidth(tablewidth), margin: '0 15' }}>
        <View style={[membraneStyle.mainTable, { marginTop: 10 }]}>
          {createHeader(herder_val)}
          {createContent(clro_elem_summary)}
        </View>
      </View>
      <View break>
        <View style={[membraneStyle.textHeader, { width: RationValWidth(pageWidth), marginTop: 15 }]}
          bookmark={{
            title: `${serialNum}.${subSerialNum} CLRO Stream Composition `
          }} >
          <Text style={{ marginTop: -4, paddingLeft: 5, color: '#0062A9' }}>&#95;&#95;</Text>
          <Text style={{ paddingLeft: 5 }}>{serialNum}.{subSerialNum++}</Text>
          <Text style={{ paddingLeft: 5 }}>CLRO Stream Composition </Text>
        </View>
        {(() => {
          tablewidth -= 100;
          let table2HeaderKey = [''];
          let catkey = [];
          return (
            <View className='UIGrid' style={{margin: '0 15'}}>
              <View id='grid'>
                {(() => {
                  const table2Header = [''];
                  clro_elem_summary['CLRO Unit ID'].map((clroData, ind) => {
                    const clroKey = Object.keys(clro_elem_summary[clroData].Concentrations);
                    const clroVal = Object.values(clro_elem_summary[clroData].Concentrations);
                    clroKey.map((clroData1, clroInd) => {
                      if (clroData1 === 'Feed') {
                        table2Header.push(clroData1);
                        table2HeaderKey = table2HeaderKey.concat(clroData1);
                        catkey = Object.keys(clro_elem_summary[clroData].Concentrations[clroData1][clroData1]);
                      } else {
                        table2Header.push({
                          tab: clroData1,
                          tab2: Object.keys(clroVal[Object.keys(clroVal)[clroInd]])
                        });
                        table2HeaderKey = table2HeaderKey.concat(Object.keys(clroVal[Object.keys(clroVal)[clroInd]]));
                      }
                      return table2Header;
                    });
                  });
                  headercount = table2HeaderKey.length;
                  return (
                    <View style={[membraneStyle.mainTable, { marginTop: 10 }]}>
                      <View style={[membraneStyle.tableRow, membraneStyle.tableCol, { width: RationValWidth(tablewidth) }]}>
                        <Text style={[membraneStyle.tableCell, membraneStyle.restChild, { fontFamily: ArialB600 }]}>Concentrations (mg/L as ion)</Text>
                      </View>
                      <View style={[membraneStyle.tableRow, { width: RationValWidth(tablewidth) }]}>
                        <TableHeader tableWidth={tablewidth} headerval={table2Header} />
                      </View>
                      <View>
                        {clro_elem_summary['CLRO Unit ID'].map((key, index) => {
                          const clroContent = clro_elem_summary[key];
                          return catkey.map((eleData, eleDataInd) => {
                            return (
                              <View style={[
                                { flexDirection: 'row' },
                                catkey.length - 1 !== eleDataInd && { borderBottom: 1, borderColor }
                              ]}>
                                {Object.keys(clroContent.Concentrations).map((element, elementInd) => {
                                  return Object.keys(clroContent.Concentrations[element]).map((ele, ind) => {
                                    return (
                                      <>
                                        {element === 'Feed' && (
                                          <>
                                            <View style={{ flexDirection: 'row', width: (RationValWidth(tablewidth / headercount)), borderRight: 1, borderColor }}>
                                              <Text style={[membraneStyle.tableCell, membraneStyle.restChild]}>{eleData}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', width: (RationValWidth(tablewidth / headercount)), borderRight: 1, borderColor }}>
                                              <Text style={[membraneStyle.tableCell, membraneStyle.restChild]}>
                                                {getFlowValue(clroContent.Concentrations[element][ele][eleData], 2)}
                                              </Text>
                                            </View>
                                          </>
                                        )}
                                        {element !== 'Feed' && (
                                          <View style={[
                                            (Object.keys(clroContent.Concentrations[element]).length - 1 !== ind || Object.keys(clroContent.Concentrations).length - 1 !== elementInd) && { borderRight: 1, borderColor },
                                            { width: RationValWidth(tablewidth / headercount) }
                                          ]}>
                                            <Text style={[membraneStyle.tableCell, membraneStyle.restChild]}>
                                              {getFlowValue(clroContent.Concentrations[element][ele][eleData], 2)}
                                            </Text>
                                          </View>
                                        )}
                                      </>
                                    );
                                  });
                                })}
                              </View>
                            );
                          });
                        })}
                      </View>
                    </View>
                  );
                })()}
              </View>
            </View>
          );
        })()}
      </View>
    </View>
  );
};
export default CLROStageLevelSummary;