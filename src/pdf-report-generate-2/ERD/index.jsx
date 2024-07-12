/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import SubLine from '../createLine';
import { Styles } from '../tableStyles';
// displaying Steam Data table in Report ----> Kranthi
function DisplayERD(props) {
  const { erd_summary, serialNum } = props;
  let { subSerialNum } = props;
  const hearder_val = ['ERD Unit ID']; // Static Header values ----> Kranthi
  const header_val2 = [];
  const multiple_steams = [];
  // pushing all steam numbers in  empty array ----> Kranthi
  erd_summary['ERD Unit ID'].forEach(element => {
    header_val2.push(element);
  });
  // we are spliting steam data into multiple array with consisting of 6 steam in every single array ----> Kranthi
  while (header_val2.length > 0) {
    multiple_steams.push(hearder_val.concat(header_val2.splice(0, 5)));
  }
  const C1Width = 195; // 2st Coloum Width ----> Kranthi
  const C2Width = 70; // 2nd Coloum Width ----> Kranthi
  const C3Width = 70; // 3rd Coloum Width ----> Kranthi
  //  Static Values of category and parmeters -->Kranthi
  const key_value = [
    { Key: 'ERD Type', KeyText: 'ERD Type' },
    { Key: 'RO Unit Attached', KeyText: 'RO Unit Attached' },
    { Key: 'Installed Location', KeyText: 'Installed Location' },
    { Key: 'LP Discharge Pressure', KeyText: 'LP Discharge Pressure' },
    { Key: 'Net Transfer Efficiency', KeyText: 'Net Transfer Efficiency' },
    { Key: 'Boost Pressure', KeyText: 'Boost Pressure' },
    { Key: 'Leakage (Reject in HP OUT)', KeyText: 'Leakage (Reject in HP OUT)' },
    { Key: 'Mixing at Membrane Feed', KeyText: 'Mixing at Membrane Feed' },
    { Key: 'Total Power Consumption', KeyText: 'Total Power Consumption' },
    { Key: 'HP Pump', KeyText: 'HP Pump' },
    { Key: 'Circulation Pump', KeyText: 'Circulation Pump' },
    { Key: 'Energy Recovered', KeyText: 'Energy Recovered' },
    { Key: 'Power Saving', KeyText: 'Power Saving' },
  ];

  // const sub_heading = ['0-0', '0-1', '0-7', '0-9', '0-12']; // where we need sub heading boarder ---> Kranthi
  const sub_heading = ['0-0', '0-3', '0-5', '0-7']; // where we need sub heading boarder ---> Kranthi
  const Main_heading = ['0-2']; // where we need Main heading boarder ---> Kranthi
  return (
    <View>
      {/* Header of Stripper Summary ---> Kranthi */}
      <View style={Styles.mainHeader}>
        <Text style={[Styles.mainHeaderText, { paddingRight: 5 }]}>{serialNum}. ERD Unitop Summary (WIP)</Text>
        <SubLine lineWidth='65%' lineHeight='24' />
      </View>
      {/* sub HEading of Stripper Summary ---> Kranthi */}
      <View style={[Styles.subHeader, { marginTop: 15 }]} /* bookmark={{ title: `${serialNum}.${subSerialNum} Docked Summary` }} */ >
        {/* <SubLine lineWidth='10px' lineHeight='12' /> */}
        <Text style={{ marginTop: -4, paddingLeft: 15, color: '#0062A9' }}>&#95;&#95;</Text>
        <Text style={{ paddingLeft: 5 }}>{serialNum}.{subSerialNum++}</Text>
        <Text style={{ paddingLeft: 5 }} >Docked Summary</Text>
      </View>
      {
        // Multiple tables accourding to steam numbers
        multiple_steams.map((values, ind) => {
          return (
            <View key={ind} break={ind > 1} style={[Styles.table, { marginTop: 10, width: (195 + ((values.length - 1) * 70)) }]}>
              <View style={Styles.tableRow}>
                <Text style={Styles.tableCellTextHeader} >Total Number of ERD Unitop = {erd_summary['ERD Unit ID'].length}</Text>
              </View>
              <View style={Styles.tableRow}>
                {values.map((val, i) => {
                  // header row
                  return (
                    <View key={i} style={[
                      Styles.tableHeader, { width: C3Width, borderTopRightRadius: 0 },
                      (i === 0 && { width: C1Width, paddingLeft: 10, alignItems: 'left' }),
                      (i === 1 && { width: C2Width }),
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
                      { paddingLeft: 10, alignItems: 'left', width: 125 }
                    ]}>
                      <Text style={Styles.tableCell}>{keys.KeyText}</Text>
                    </View>
                    {/* units of Unitop ID */}
                    <View style={[
                      Styles.tableRCText,
                      (Main_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                      (sub_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' },
                      { width: C3Width }
                    ]}>
                      <Text style={Styles.tableCell}>{erd_summary.units[keys.Key]}</Text>
                    </View>
                    {values.slice(1).map((val, h_i) => {
                      // we are looping for multiple columns of Parameter values
                      return (
                        <View key={h_i}
                          style={[
                            Styles.tableRCText,
                            (h_i === values.slice(1).length - 1) && { borderRightWidth: 0 },
                            (Main_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                            (sub_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' }, { width: C3Width }
                          ]}>
                          {(() => {
                            // checking for Stream Info data
                            // we do have data in stream_ouput_data for data we getting that in ppm_dict ------> kranthi
                            // checking for Ion Concentration and data is in  ppm_dict------> kranthi
                            // checking for Stream Property and data is in  prop_dict------> kranthi
                            // checking for Saturation Data and data is in  sat_indices------> kranthi
                            if (keys.Key === 'RO Unit Attached') {
                              return (
                                erd_summary[val][keys.Key].split(',').map((unitops, index) => {
                                  return (unitops !== ' ' && <Text key={index} style={Styles.tableCell}>{unitops}</Text>);
                                })
                              );
                            }
                            if (keys.Key === 'ERD Type' || keys.Key === 'Installed Location') { // Checking for RO Unit Attached,Upstream unit and Downstream unit ---> Kranthi
                              return (<Text style={Styles.tableCell}>{erd_summary[val][keys.Key]}</Text>);
                            }
                            return (<Text style={Styles.tableCell}>{erd_summary[val][keys.Key] === '-' ? erd_summary[val][keys.Key] : erd_summary[val][keys.Key].toFixed(2)}</Text>); // adding decimal to values     ---> Kranthi
                          })()}
                        </View>
                      );
                    })}
                  </View>
                );
              })}
            </View>
          );
        })}
    </View>
  );
};

export default DisplayERD;