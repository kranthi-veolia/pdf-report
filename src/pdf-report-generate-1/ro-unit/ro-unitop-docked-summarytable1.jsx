/* eslint-disable no-console */
/* eslint-disable max-len */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import SubLine from '../createLine';
import { Styles } from '../tableStyles';

// Displaying Docked summary Table
function ROSystemLevelSummary(props) {
  const { ro_system_dict } = props;
  const hearder_val = ['RO Unit ID']; // Static Header values ----> Kranthi
  const header_val2 = [];
  const multiple_steams = [];
  // pushing all steam numbers in  empty array ----> Kranthi
  ro_system_dict['RO Unit ID'].forEach(element => {
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
    { key: 'Upstream unit', KeyText: 'Upstream unit' },
    { key: 'Downstream unit', KeyText: 'Downstream unit' },
    { key: 'Feed Flow', KeyText: 'Feed Flow' },
    { key: 'Product Flow', KeyText: 'Product Flow' },
    { key: 'Concentrate Flow', KeyText: 'Concentrate Flow' },
    { key: 'RO Unit Recovery', KeyText: 'RO Unit Recovery' },
    { key: 'Average Flux', KeyText: 'Average Flux' },
    { key: 'Breakdown by Stage', KeyText: 'Breakdown by Stage' },
    { key: 'Total Membrane Area', KeyText: 'Total Membrane Area ' },
    { key: 'Feed Temperature', KeyText: 'Feed Temperature' },
    { key: 'Feed Pressure', KeyText: 'Feed Pressure' },
    { key: 'Interstage Pressure', KeyText: 'Interstage Pressure' },
    { key: 'Product Pressure *', KeyText: 'Product Pressure *' },
    { key: 'Feed TDS', KeyText: 'Feed TDS' },
    { key: 'Feed pH', KeyText: 'Feed pH' },
    { key: 'Permeate TDS', KeyText: 'Permeate TDS' },
    { key: 'Permeate pH', KeyText: 'Permeate pH' },
    { key: 'Concentrate TDS', KeyText: 'Concentrate TDS' },
    { key: 'Concentrate pH', KeyText: 'Concentrate pH' },
  ];
  const sub_heading = ['0-0', '0-5', '0-14', '0-16']; // where we need sub heading boarder ---> Kranthi
  const Main_heading = ['0-1', '0-8', '0-12']; // where we need Main heading boarder ---> Kranthi
  return (
    <View style={{ marginTop: 0 }}>
      {/* Header of Stripper Summary ---> Kranthi */}
      <View style={Styles.mainHeader}>
        <Text style={[Styles.mainHeaderText, { paddingRight: 5 }]}>RO Unitop System-Level Summary</Text>
        <SubLine lineWidth='57%' lineHeight='24' />
      </View>
      {/* sub HEading of Stripper Summary ---> Kranthi */}
      <View style={Styles.subHeader}>
        <SubLine lineWidth='10px' lineHeight='12' />
        <Text style={{ paddingLeft: 5 }}>Table 1. Docked summary</Text>
      </View>
      {
        // Multiple tables accourding to steam numbers
        multiple_steams.map((values, ind) => {
          return (
            <View key={ind} break={ind > 1} style={[Styles.table, { width: (195 + ((values.length - 1) * 70)) }]}>
              <View style={Styles.tableRow}>
                <Text style={Styles.tableCellTextHeader} >Total Number of EDI Unitop = {ro_system_dict['RO Unit ID'].length}</Text>
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
                      <Text style={Styles.tableCell}>{ro_system_dict.units[keys.key]}</Text>
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
                            if (keys.key === 'Downstream unit') {
                              return (
                                ro_system_dict[val][keys.key].split(',').map((unitops, index) => {
                                  return (unitops!==' ' && <Text key={index} style={Styles.tableCell}>{unitops}</Text>);
                                })
                              );
                            }
                            if (keys.key === 'Breakdown by Stage' || keys.key === 'Interstage Pressure') {
                              const split_array = ro_system_dict[val][keys.key].split(',').map((unitops) => {
                                return Number(unitops).toFixed(2);
                              });
                              // const multiple_split_array = [];
                              // while (header_val2.length > 0) {
                              //   multiple_split_array.push(split_array.splice(0, 3));
                              // }
                              return (

                                <Text style={Styles.tableCell}>({split_array.join(', ')})</Text>
                                // multiple_split_array.map((unitops, index) => {
                                //   return (unitops!==' ' && <Text key={index} style={Styles.tableCell}>{unitops.toString()}</Text>);
                                // })
                              );
                            }
                            if (keys.key === 'Number of EDI Stack') {
                              return (<Text style={Styles.tableCell}>{ro_system_dict[val][keys.key].toFixed(0)}</Text>);
                            } if (keys.key === 'Co-Current Flow' || keys.key === 'Upstream unit') {
                              return (<Text style={Styles.tableCell}>{ro_system_dict[val][keys.key]}</Text>);
                            }
                            return (<Text style={Styles.tableCell}>{ro_system_dict[val][keys.key].toFixed(2)}</Text>);

                          })()}
                        </View>);
                    })}
                  </View>);
              })}
            </View>
          );
        })}
    </View>
  );
}

export default ROSystemLevelSummary;
