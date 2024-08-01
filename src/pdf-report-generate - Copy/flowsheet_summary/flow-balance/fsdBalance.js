/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';

import { Text, View } from '@react-pdf/renderer';
import { fsdStyle } from './fsdBalance_style';
import { ArialRegural, RationValWidth, ArialB600, getFloatVal } from '../../fonts/font';

let tablewidth = 1140;
let headercount = 1;
const borderColor = '#B3D3D7';
const FSDBalance = (props) => {
  const { items, tableWidth, pageWidth, serialNum } = props;
  let { subSerialNum } = props;
  tablewidth = tableWidth;
  const header = [
    'Parameter',
    { header1: 'Incoming' },
    { header1: 'Outgoing', header2: ['Product', 'Waste'] },
  ];
  headercount = header.length;
  const appendData = (ele, parentInd) => {
    return Object.prototype.toString.call(ele) === '[object Array]' ? (
      ele.map((dta, ind) => (
        <View key={ind}
          style={[{ width: RationValWidth((tablewidth / headercount) / ele.length - 2) }, ind > 0 && { borderLeft: 1, borderLeftColor: borderColor }]}
        >
          <Text
            style={[
              fsdStyle.tableCell, { fontFamily: ArialB600, padding: '4 10' },
              parentInd === 0 ? fsdStyle.firstChild : fsdStyle.restChild,
            ]}
          >
            {dta}
          </Text>
        </View>
      ))
    ) : (
      <Text
        style={[fsdStyle.tableCell, { fontFamily: ArialB600, padding: '4 10' }, parentInd === 0 ? fsdStyle.firstChild : fsdStyle.restChild]}
      >
        {ele}
      </Text>
    );
  };
  const createHeader = (item) => {
    return (
      <View style={[fsdStyle.tableRow, { width: RationValWidth(tablewidth) }]}>
        {item.map((ele, ind) => {
          return (
            <View key={ind}
              style={
                [fsdStyle.tableCol, { width: RationValWidth((tablewidth / headercount)) }, ind === item.length - 1 && { borderRight: 0 }]
              }
            >
              {Object.prototype.toString.call(ele) === '[object Object]' ? (
                Object.keys(ele).map((data, keyInd) => (
                  <View key={keyInd}
                    style={[fsdStyle.flexDirection, keyInd > 0 && { borderTop: 1, borderColor }]}
                  >
                    {appendData(ele[data], ind)}
                  </View>
                ))
              ) : (
                <Text
                  style={[
                    fsdStyle.tableCell, { fontFamily: ArialB600 }, ind === 0 && fsdStyle.firstChild, ind > 0 && fsdStyle.restChild]
                  }
                >
                  {ele}
                </Text>
              )}
            </View>
          );
        })}
      </View>
    );
  };
  const getWidthVal = (count) => {
    return count * (RationValWidth((tablewidth / headercount) / 4));
  };
  const seTableDataValue = (item) => {
    return (
      item.map((ele, ind) =>
        <View key={ind}
          style={[
            fsdStyle.tableCol1, { width: RationValWidth(((tablewidth / headercount)) / 2) },
            ind === 0 && { width: getWidthVal(3) },
            ind === 1 && { width: getWidthVal(1) + 2 },
            ind === 2 && { width: RationValWidth((tablewidth / headercount) - 2) },
            item.length === 1 && { width: RationValWidth(tablewidth / 2) },
            item.length - 1 === ind && { borderRight: 0 }
          ]}
        >
          {Object.prototype.toString.call(ele) === '[object Array]' ? (
            ele.map((dat, childInd) =>
              <Text key={childInd}
                style={[
                  fsdStyle.tableCell, { margin: 'auto', fontFamily: ArialRegural },
                  ind === 0 && fsdStyle.firstChild,
                  ind > 0 && fsdStyle.restChild
                ]}
              >
                {getFloatVal(dat)}
              </Text>
            )
          ) : (
            <Text
              style={[
                fsdStyle.tableCell, { margin: 'auto', fontFamily: ArialRegural, padding: '5 0' },
                ind === 0 && [fsdStyle.firstChild, { fontFamily: ArialRegural }],
                ind > 0 && fsdStyle.restChild
              ]}
            >
              {getFloatVal(ele)}
            </Text>
          )}
        </View>
      )
    );
  };
  const getTableValue = (item, data, value) => {
    let finalData;
    if (Object.prototype.toString.call(data) === '[object Object]') {
      finalData = Object.values(data);
      finalData.unshift(value);
    } else {
      finalData = [`${value} = ${getFloatVal(data)}%`];
    }
    return (
      seTableDataValue(finalData)
    );
  };
  const createContent = (items) => {
    const obj = ['Unit ID (Stream no.)', 'Flow', 'Flow - Total', 'Overall Flow Sheet Recovery'];
    const data = Object.keys(items);
    return (
      <View style={[{ width: RationValWidth(tablewidth) }, fsdStyle.contentBoreder]}>
        {data.map((item, parentInd) => (
          <View key={parentInd}
            style={[fsdStyle.tableRow1]}
          >
            {getTableValue(item, items[item], obj[parentInd])}
          </View>
        ))}
      </View>
    );
  };
  return (
    <View style={{ width: RationValWidth(pageWidth), flexDirection: 'column' }}>
      <View style={[fsdStyle.textHeader]}>
        {/* <SubLine lineWidth='10px' lineHeight='12' /> */}
        {/* <Text style={{ marginTop: -4, paddingLeft: 15, color: '#0062A9' }}>&#95;&#95;</Text> */}
        <Text style={{ paddingLeft: 0 }}>{serialNum}.{subSerialNum++}</Text>
        <Text style={{ paddingLeft: 5 }}>FSD Flow Balance</Text>
      </View>
      {/* <View style={[fsdStyle.subtextHeader, { flexDirection: 'row', }]}>
        <Text style={{ fontSize: RationValWidth(20) }}>&#8226;</Text>
        <Text style={{ marginLeft: RationValWidth(20) }}>Tabulate flow Rate and system Recovery at the FSD level</Text>
      </View> */}
      {createHeader(header)}
      {createContent(items)}
    </View>
  );
};
export default FSDBalance;
