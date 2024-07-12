/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React, { useState } from 'react';
import { Text, View } from '@react-pdf/renderer';
import { streamStyle } from './streamSummary_style';
import SubLine from '../../createLine';
import { RationValWidth, ArialRegural, ArialB600, getFloatVal } from '../../fonts/font';
import FSDBalance from '../flow-balance/fsdBalance';
import MembraneSeparator from '../membrane-separator/desalination';

let tablewidth = 100;
const radius = 10;
let tableCount = 0;

const StreamSummary = (props) => {
  const { stream_output, tableWidth, unit_set_dict, pageWidth, serialNum, invoice } = props;
  let { subSerialNum } = props;
  const [rowCount] = useState(6);
  const [headerParameterWidth] = useState(2);
  tablewidth = tableWidth;
  const items = Object.keys(stream_output);
  const getUnitValue = (item) => {
    if (item === 'Pressure') {
      return `${unit_set_dict.Pressure}` || 'atm';
    } if (item === 'Flow') {
      return `${unit_set_dict['Volume Flow']}` || 'gpm';
    } return '';
  };
  const getTableHeaderWidth = (headerData) => {
    return RationValWidth(tablewidth);
  };
  const getWidthVal = (count) => {
    let columnWidth = RationValWidth(tablewidth);
    columnWidth = (columnWidth / (rowCount + headerParameterWidth)) * count;
    return columnWidth;
  };

  const getAllKeyValue = (headerData) => {
    const rowData2 = {
      flow: `Flow, ${getUnitValue('Flow')}`,
      temp: `Temperature, ${unit_set_dict.Temperature}`,
      press: `Pressure, ${getUnitValue('Pressure')}`,
      tds: 'TDS, mg/l',
      ph: 'pH',
      malk: 'Alkalinity, ppm CaCO3',
      hardness: 'Hardness, ppm as CaCO3 ',
      density: 'Density, kg/m3',
      ionic_strength: 'Ionic Strength',
      osmotic_pressure: `Osmotic Pressure, ${getUnitValue('Pressure')}`,
      conductivity: 'Conductivity at 25°C, µS/cm '
    };

    const obj = {};
    headerData.map((ele) => {
      if (stream_output[ele]) {
        const { sat_indices, prop_dict } = stream_output[ele];
        const allVal = {
          flow: prop_dict.flow,
          temp: prop_dict.temp,
          press: prop_dict.press,
          tds: prop_dict.tds,
          ph: prop_dict.ph,
          malk: prop_dict.malk,
          hardness: stream_output[ele].hardness,
          density: sat_indices.density,
          ionic_strength: stream_output[ele].ionic_strength,
          osmotic_pressure: sat_indices.osmotic_pressure,
          conductivity: sat_indices.conductivity
        };
        Object.keys(allVal).map((key) => {
          if (obj[key] && obj[key].length) {
            obj[key].push(allVal[key]);
          } else {
            obj[key] = [rowData2[key]];
            obj[key].push(allVal[key]);
          }
          return obj;
        });
      }
      return obj;
    });
    return obj;
  };
  const createContent = (headerData) => {
    const allcombinedData = getAllKeyValue(headerData);
    const data = Object.keys(allcombinedData);
    return (
      data.map((ele, index) => {
        const parameter = allcombinedData[ele];
        return (
          <View key={index}
            style={[
              streamStyle.tableRow1, { width: getTableHeaderWidth(headerData) },
            ]}
          >
            {
              parameter.map((childEle, childInd) => {
                return (
                  <View key={childInd}
                    style={[
                      streamStyle.tableCol1, { width: getWidthVal(1), borderTop: 0, },
                      childInd === 0 && { width: getWidthVal(headerParameterWidth) },
                      childInd > 0 && { borderLeft: 0 },
                      (index === data.length - 1 && childInd === 0) && { borderBottomLeftRadius: radius },
                      (index === data.length - 1 && childInd === parameter.length - 1) && { borderBottomRightRadius: radius }
                    ]}
                  >
                    <Text style={[streamStyle.tableCell, streamStyle.firstChild, { fontFamily: ArialRegural }]}>
                      {getFloatVal(childEle)}
                    </Text>
                  </View>
                );
              })
            }
          </View>
        );
      })
    );
  };
  const createHeader = (headerData) => {
    headerData.unshift('Parameter');
    return (
      <View break>
        <View
          style={[
            streamStyle.tableRow, { width: getTableHeaderWidth(headerData) },
            tableCount > 1 && { marginTop: RationValWidth(25) }
          ]}>
          {headerData.map((ele, ind) => {
            return (
              <View key={ind}
                style={[
                  streamStyle.tableCol, { width: getWidthVal(1) },
                  ind === 0 && [{ width: getWidthVal(headerParameterWidth), borderTopLeftRadius: radius }],
                  ind > 0 && { borderLeft: 0 },
                  ind === headerData.length - 1 && { borderTopRightRadius: radius }
                ]}
              >
                <Text
                  style={[
                    streamStyle.tableCell, { fontFamily: ArialB600},
                    ind === 0 && streamStyle.firstChild,
                    ind > 0 && streamStyle.restChild,
                  ]}>
                  {ele}
                </Text>
              </View>
            );
          })}
        </View>
        {createContent(headerData)}
      </View>
    );
  };
  const createTable = (data) => {
    const spalitArray = [];
    tableCount += 1;
    let countData = Math.ceil(data.length / 6);
    for (let i = 0; i < countData; i++) {
      spalitArray.push(data.splice(0, rowCount));
    }
    const finalTable = spalitArray.map((ele, ind) => {
      return (
        <View key={ind} style={{ marginTop: 10 }}>
          {createHeader(ele)}
        </View>
      );
    });
    return finalTable;
  };
  return (
    <View style={{ width: '100%', flexDirection: 'column', marginBottom: RationValWidth(32) }}>
      <View style={[streamStyle.mainHeader, { width: RationValWidth(pageWidth) }]}>
        <Text style={[streamStyle.mainHeaderText, { paddingRight: 5, }]}>{serialNum}. Flowsheet Design Summary (Continued)
        </Text>
        <SubLine lineWidth='90%' lineHeight='24' />
      </View>
      <View style={[streamStyle.textHeader, { marginTop: 15 }]} bookmark={{ title: `${serialNum}.${subSerialNum} Stream Property Summary` }}>
        {/* <SubLine lineWidth='10px' lineHeight='12' /> */}
        <Text style={{ marginTop: -4, paddingLeft: 15, color: '#0062A9' }}>&#95;&#95;</Text>
        <Text style={{ paddingLeft: 5 }}>{serialNum}.{subSerialNum++}</Text>
        <Text style={{ paddingLeft: 5 }}>Stream Property Summary</Text>
      </View>
      {createTable(items, stream_output)}
      {invoice.coverpage_dict && Object.keys(invoice.coverpage_dict).length && invoice.coverpage_dict.flow_bal && Object.keys(invoice.coverpage_dict.flow_bal).length && (
        <View break
          style={[
            { margin: '15 auto 0 auto', width: '100%' }
          ]}
          bookmark={{ title: `${serialNum}.${subSerialNum} FSD Flow Balance` }} >
          <FSDBalance
            pageWidth={1140}
            tableWidth={820}
            items={invoice.coverpage_dict.flow_bal}
            serialNum={serialNum}
            subSerialNum={subSerialNum++}
          />
        </View>
      )}
      {invoice.coverpage_dict.flow_summary && Object.keys(invoice.coverpage_dict).length && Object.keys(invoice.coverpage_dict.flow_summary).length && (
        <View break
          style={[
            { margin: '0 auto', width: '100%' }
          ]}
          bookmark={{ expanded: true, title: `${serialNum}.${subSerialNum} Desalination \\ Demineralization \\ Membrane Separator (MEMS) Unit-Level Flow Summary` }}>
          <MembraneSeparator
            pageWidth={1140}
            system_units={invoice.system_units}
            items1={invoice.coverpage_dict.flow_summary}
            tableWidth={870}
            serialNum={serialNum}
            subSerialNum={subSerialNum++}
          />
        </View>
      )}
    </View>
  );
};

export default StreamSummary;
