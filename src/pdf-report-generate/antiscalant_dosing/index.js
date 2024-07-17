/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { antiscalantDosingStyle } from './antiscalant_style';
import { ArialB600, RationValWidth, getFloatVal } from '../fonts/font';
import { Styles } from '../tableStyles';
import SubLine from '../createLine';

const borderColor = '#B3D3D7';
let tablewidth = 100;
let headercount = 1;
const rowWidthInc = 3;
let defaultUnit = { 'Volume Flow': 'm3/hr', 'Pressure': 'bar', 'Temperature': '°C', 'Liquid Volume': 'gal', 'Flux': 'gfd', 'Power': 'kW' };

const AntiscalantDosing = (props) => {
  const { argo_summary, tableWidth, pageWidth, serialNum } = props;
  let { subSerialNum } = props;
  console.log(argo_summary);
  // defaultUnit = system_units;
  tablewidth = tableWidth;
  const herder_val = ['Dosed In', 'Antiscalant', { h: 'Dosage in Feed', h1: ['ppm', 'Kg/day'] }];
  headercount = herder_val.length;
  const splitHeaderData = (ele, parentInd) => {
    console.log(RationValWidth((tablewidth / headercount) / ele.length - 2), ele, (tablewidth / headercount), ele.length - 2, (tablewidth / headercount) / (ele.length - 2));
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
              antiscalantDosingStyle.tableCell, antiscalantDosingStyle.restChild, { fontFamily: ArialB600, padding: '5 0' }
            ]}
          >
            {dta}
          </Text>
        </View>
      ))
    ) : (
      <Text
        style={[antiscalantDosingStyle.tableCell, antiscalantDosingStyle.restChild, { fontFamily: ArialB600, padding: '5 0' }]}
      >
        {ele}
      </Text>
    );
  };
  const createHeader = (item) => {
    return (
      <View style={[antiscalantDosingStyle.tableRow, { width: RationValWidth(tablewidth - 3) }]}>
        {item.map((ele, ind) => {
          return (
            <View key={ind}
              style={[
                antiscalantDosingStyle.tableCol,
                { width: RationValWidth((tablewidth / headercount)) },
                // ind === 0 && { width: RationValWidth(tablewidth / headercount) * rowWidthInc }
              ]}
            >
              {Object.prototype.toString.call(ele) === '[object Object]' ? (
                Object.keys(ele).map((data, keyInd) => (
                  <View key={keyInd}
                    style={[
                      antiscalantDosingStyle.flexDirection,
                    ]}
                  >
                    {splitHeaderData(ele[data], ind)}
                  </View>
                ))
              ) : (
                <View>
                  <Text
                    style={[
                      antiscalantDosingStyle.tableCell, antiscalantDosingStyle.restChild, { fontFamily: ArialB600, padding: '4 5' },
                    ]}
                  >
                    {ele.toLowerCase() === 'waste' ? 'Conc.' : ele}
                    {ele.toLowerCase() === 'recovery' && ' (%)'}
                    {ele.toLowerCase() === 'electrode' && ' Bleed'}
                  </Text>
                  {/* <Text style={[antiscalantDosingStyle.restChild, { fontSize: RationValWidth(16), fontFamily: ArialB600 }]}>
                    {ele.toLowerCase() === 'recovery' ? '' : `(${defaultUnit['Volume Flow']})`}
                  </Text> */}
                </View>
              )}
            </View>
          );
        })}
      </View>
    );
  };

  const createContent = (items, herder_val) => {
    console.log(items);
    return (
      <View style={{ width: '100%' }}>
        {Object.keys(items).map((typeData, typeindex) => {
          return (
            <View
              style={[
                antiscalantDosingStyle.tablebodyRow1, { width: RationValWidth(tablewidth), margin: '0' }
              ]}
              key={typeindex}
            >
              <View
                style={[
                  antiscalantDosingStyle.flexDirection,
                  { width: RationValWidth(tablewidth / headercount) * rowWidthInc },
                ]}>
                <View style={[antiscalantDosingStyle.tablebodyCol1]}>
                  <Text style={[antiscalantDosingStyle.tableCell, { padding: '4 0' }]}>{items[typeData]['Dosed In']}</Text>
                </View>
                <View style={[antiscalantDosingStyle.tablebodyCol1]}>
                  <Text style={[antiscalantDosingStyle.tableCell, { padding: '4 0' }]}>{items[typeData].Antiscalant}</Text>
                </View>
                <View style={[antiscalantDosingStyle.flexDirection]}>
                  <View style={[antiscalantDosingStyle.tablebodyCol1, {width: RationValWidth((tablewidth / headercount) / 1.33)}]}>
                    <Text style={[antiscalantDosingStyle.tableCell, { padding: '4 0', marginRight:'30%' }]}>{items[typeData]['Dosage ppm in Feed']}</Text>
                  </View>
                  <View style={[antiscalantDosingStyle.tablebodyCol1, {width: RationValWidth((tablewidth / headercount) / 1.33)}]}>
                    <Text style={[antiscalantDosingStyle.tableCell, { padding: '4 0', marginRight:'30%' }]}>{items[typeData]['Dosage kgperday in Feed']}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <View id="dynamic-height">
      {/* Header of the page */}
      <View style={Styles.mainHeader} >
        <Text style={[Styles.mainHeaderText, { paddingRight: 5 }]} >{serialNum}. Antiscalant Dosage summary</Text>
        {/* I reduced the line width to accommodate the text and added a margin left. --->kranthi */}
        <SubLine lineWidth='60%' lineHeight='24' />
      </View>
      <View style={[antiscalantDosingStyle.mainTable, { width: RationValWidth(tablewidth) }]}>
        {createHeader(herder_val)}
        {createContent(argo_summary, herder_val)}
      </View>
    </View>
  );
};

export default AntiscalantDosing;
