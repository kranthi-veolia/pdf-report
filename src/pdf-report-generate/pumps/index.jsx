/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
// import { pumps_styles } from './pumps_styles';
import SubLine from '../createLine';
import { Styles } from '../tableStyles';
import { getFloatVal } from '../fonts/font';
// displaying Steam Data tabke in Report ----> Kranthi
function DisplayPump(props) {
  const { pumps, serialNum } = props;
  let { subSerialNum } = props;
  const hearder_val = ['Pump Unit ID']; // Static Header values ----> Kranthi
  const header_val2 = [];
  const multiple_steams = [];
  // pushing all steam numbers in  empty array ----> Kranthi
  pumps['Pump Unit ID'].forEach(element => {
    header_val2.push(element);
  });
  // we are spliting steam data into multiple array with consisting of 6 steam in every single array ----> Kranthi
  while (header_val2.length > 0) {
    multiple_steams.push(hearder_val.concat(header_val2.splice(0, 5)));
  }
  // const C1Width = 195; // 2st Coloum Width ----> Kranthi
  // const C2Width = 70; // 2nd Coloum Width ----> Kranthi
  // const C3Width = 70; // 3rd Coloum Width ----> Kranthi
  //  Static Values of category and parmeters -->Kranthi
  const key_value = [
    { Key: 'RO Unit Attached', KeyText: 'RO Unit Attached' },
    { Key: 'Upstream unit', KeyText: 'Upstream unit' },
    { Key: 'Downstream unit', KeyText: 'Downstream unit' },
    { Key: 'Feed Temperature', KeyText: 'Feed Temperature' },
    { Key: 'Flow Rate', KeyText: 'Flow Rate' },
    { Key: 'Inlet Pressure', KeyText: 'Inlet Pressure' },
    { Key: 'Discharge Pressure', KeyText: 'Discharge Pressure' },
    // { Key: 'Pressure Boost', KeyText: 'Pressure Boost' },
    { Key: 'Power Consumption', KeyText: 'Power Consumption' },
    { Key: 'Combined Efficiency', KeyText: 'Combined Efficiency' },
    { Key: 'Pump Efficiency', KeyText: 'Pump Efficiency' },
    { Key: 'Motor Efficiency', KeyText: 'Motor Efficiency' },
    { Key: 'VFD Efficiency', KeyText: 'VFD Efficiency' },
  ];

  // const sub_heading = ['0-0', '0-1', '0-7', '0-9', '0-12']; // where we need sub heading boarder ---> Kranthi
  const sub_heading = ['0-0', '0-1', '0-6', '0-7']; // where we need sub heading boarder ---> Kranthi
  const Main_heading = ['0-2', '0-4']; // where we need Main heading boarder ---> Kranthi
  return (
    <View>
      {/* Header of Stripper Summary ---> Kranthi */}
      <View style={Styles.mainHeader}>
        <Text style={[Styles.mainHeaderText]}>{serialNum}. Pump Summary</Text>
        {/* I reduced the line width to accommodate the text and added a margin left. --->kranthi */}
        <SubLine lineWidth='78%' lineHeight='24' style={{marginLeft: 5}}/>
      </View>
      {/* sub HEading of Stripper Summary ---> Kranthi */}
      <View style={[Styles.subHeader, { marginTop: 15 }]} /* bookmark={{ title: `${serialNum}.${subSerialNum} Docked Summary` }} */ >
        {/* <SubLine lineWidth='10px' lineHeight='12' /> */}
        {/* <Text style={{ marginTop: -4, paddingLeft: 15, color: '#0062A9' }}>&#95;&#95;</Text> */}
        <Text style={{ paddingLeft: 0 }}>{serialNum}.{subSerialNum++}</Text>
        <Text style={{ paddingLeft: 5 }}>Docked Summary</Text>
      </View>
      {
        // Multiple tables accourding to steam numbers
        multiple_steams.map((values, ind) => {
          return (
            <View key={ind} break={ind > 1} style={[Styles.table, { marginTop: 10, width:'100%' }]}>
              <View style={Styles.tableRow}>
                <Text style={Styles.tableCellTextHeader} >Total Number of Pumps = {pumps['Pump Unit ID'].length}</Text>
              </View>
              <View style={Styles.tableRow}>
                {values.map((val, i) => {
                  // calculating width for table column and column 1.
                  const C1Width = `${(100/(values.length))*2}%`;
                  const Cwidth = `${(100/(values.length))}%`;
                  // header row
                  return (
                    <View key={i} style={[
                      Styles.tableHeader, { width: Cwidth, borderTopRightRadius: 0 },
                      (i === 0 && { width: C1Width, paddingLeft: 10, alignItems: 'left' }),
                      i === values.length - 1 && { borderRightWidth: 0 },
                    ]}>
                      <Text style={[Styles.tableCellHeader]}>{val}</Text>
                    </View>);
                })}
              </View>
              {key_value.map((keys, k_i) => {
                return (
                  <View style={Styles.tableRow} key={k_i}>
                    <View style={[
                      Styles.tableRCText,
                      (Main_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                      (sub_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' },
                      { paddingLeft: 10, alignItems: 'left' }
                    ]}>
                      <Text style={Styles.tableCell}>{keys.KeyText}</Text>
                    </View>
                    {/* units of Unitop ID */}
                    <View style={[
                      Styles.tableRCText,
                      (Main_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                      (sub_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' }
                    ]}>
                      <Text style={Styles.tableCell}>{pumps.units[keys.Key]}</Text>
                    </View>
                    {values.slice(1).map((val, h_i) => {
                      // we are looping for multiple columns of Parameter values
                      return (
                        <View key={h_i}
                          style={[
                            Styles.tableRCText,
                            (h_i === values.slice(1).length - 1) && { borderRightWidth: 0 },
                            (Main_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                            (sub_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' }
                          ]}>
                          {(() => {
                            // checking for Stream Info data
                            // we do have data in stream_ouput_data for data we getting that in ppm_dict ------> kranthi
                            // checking for Ion Concentration and data is in  ppm_dict------> kranthi
                            // checking for Stream Property and data is in  prop_dict------> kranthi
                            // checking for Saturation Data and data is in  sat_indices------> kranthi
                            if (keys.Key === 'Downstream unit' || keys.Key === 'RO Unit Attached') {
                              return (
                                pumps[val][keys.Key].split(',').map((unitops, index) => {
                                  return (unitops !== ' ' && <Text key={index} style={Styles.tableCell}>{unitops}</Text>);
                                })
                              );
                            }
                            if (keys.Key === 'Upstream unit' || keys.Key === 'Pressure Boost' || keys.Key === 'Specific Energy Consumption') { // Checking for RO Unit Attached,Upstream unit and Downstream unit ---> Kranthi
                              return (<Text style={Styles.tableCell}>{pumps[val][keys.Key]}</Text>);
                            }
                            return (<Text style={Styles.tableCell}>{getFloatVal(pumps[val][keys.Key])}</Text>); // adding decimal to values     ---> Kranthi
                          })()}
                        </View>
                      );
                    })}
                  </View>
                );
              })}
              <View style={[Styles.tableRow, { borderTopWidth: 0.5, borderColor: '#B3D3D7' }]}>
                {/* <Text style={Styles.tableCellTextHeader} >Total Power Consumption (kW) = {pumps['Total Power Consumption (kW)'].toFixed(2)}</Text> */}
              </View>
            </View>
          );
        })}
    </View>
  );
};
export default DisplayPump;