/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import SubLine from '../createLine';
import { Styles } from '../tableStyles';

// Displaying Docked Summary Table
function Table2(props) {
  const { system_summary, ventil_summary, serialNum } = props;
  let { subSerialNum } = props;
  const hearder_val = ['EDI Unit ID']; // Static Header values ----> Kranthi
  const header_val2 = [];
  const multiple_steams = [];
  // pushing all steam numbers in  empty array ----> Kranthi
  system_summary['EDI Unit ID'].forEach(element => {
    header_val2.push(element);
  });
  // we are spliting steam data into multiple array with consisting of 6 steam in every single array ----> Kranthi
  while (header_val2.length > 0) {
    multiple_steams.push(hearder_val.concat(header_val2.splice(0, 5)));
  }
  const C1Width = 195; // 2st Coloum Width ----> Kranthi
  const C2Width = 50; // 2nd Coloum Width ----> Kranthi
  const C3Width = 70; // 3rd Coloum Width ----> Kranthi
  // using this function we are handling values  ----> Kranthi
  const appendNumberText = (value) => {
    if (value === undefined) {
      return ' ';
    }
    if (Number.isNaN(Number(value))) { // checking values is number or not ----> Kranthi
      const split_Val = value.split(' '); // spliting all the value with space ----> Kranthi
      if (split_Val.length > 1) { // checking split value have more that two vlaue  ----> Kranthi
        const num_val = Number(split_Val[0]).toFixed(2);
        const text_val = split_Val[1];
        return `${num_val} ${text_val}`; // combing text and value ----> Kranthi
      }
      return value;
    }
    return Number(value).toFixed(2);
  };
  //  Static Values of category and parmeters -->Kranthi
  const key_value = [
    {
      'key': 'Electrode Gas Generation',
      'subkey': [
        {
          'key': 'Electrode Gas Generation',
          'keyValue': 'Electrode Gas Generation'
        }, {
          'key': 'H2',
          'keyValue': 'H2'
        },
        {
          'key': 'C2',
          'keyValue': 'C2'
        },
        {
          'key': '-',
          'keyValue': '-'
        }
      ]
    },
    {
      'key': 'Blower/Ventilation Sizing for H2',
      'subkey': [
        {
          'key': 'Blower/Ventilation Sizing for H2',
          'keyValue': 'Blower/Ventilation Sizing for H2'
        }, {
          'key': 'Explosion limit of H2 in Air',
          'keyValue': 'Explosion limit of H2 in Air'
        },
        {
          'key': 'Design Safety Factor',
          'keyValue': 'Design Safety Factor'
        },
        {
          'key': 'Ventilation Blower/Fan',
          'keyValue': 'Ventilation Blower/Fan'
        },
        {
          'key': 'Size',
          'keyValue': 'Size'
        }
      ]
    },
    {
      'key': 'Blower/Ventilation Sizing for Cl2',
      'subkey': [
        {
          'key': 'Blower/Ventilation Sizing for Cl2',
          'keyValue': 'Blower/Ventilation Sizing for Cl2'
        },
        {
          'key': 'Explosion limit of Cl2 in Air',
          'keyValue': 'Explosion limit of Cl2 in Air'
        },
        {
          'key': 'Design Safety Factor',
          'keyValue': 'Design Safety Factor'
        },
        {
          'key': 'Ventilation Blower/Fan',
          'keyValue': 'Ventilation Blower/Fan'
        },
        {
          'key': 'Size',
          'keyValue': 'Size'
        }
      ]
    }
  ];
  const Main_heading = ['0-3', '1-4']; // where we need sub heading boarder ---> Kranthi
  const sub_heading = ['1-2', '2-2']; // where we need Main heading boarder ---> Kranthi
  return (
    <View style={{ marginTop: 5 }}>
      {/* sub HEading of Stripper Summary ---> Kranthi */}
      <View style={[Styles.subHeader, { marginTop: 0 }]}>
        {/* <SubLine lineWidth='10px' lineHeight='12' /> */}
        <Text style={{ marginTop: -4, paddingLeft: 15, color: '#0062A9' }}>&#95;&#95;</Text>
        <Text style={{ paddingLeft: 5 }}>{serialNum}.{subSerialNum++}</Text>
        <Text style={{ paddingLeft: 5 }}>Ventilation Sizing</Text>
      </View>
      {
        // Multiple tables accourding to steam numbers
        multiple_steams.map((values, ind) => {
          return (
            <View key={ind} break={ind > 1} style={[Styles.table, { marginTop: 10, width: (195 + ((values.length - 1) * 70)) }]}>
              <View style={Styles.tableRow}>
                <Text style={Styles.tableCellTextHeader} >Total Number of EDI Unitop = {system_summary['EDI Unit ID'].length}</Text>
              </View>
              <View style={Styles.tableRow}>
                {values.map((val, i) => {
                  // header row
                  return (
                    <View key={i} style={[
                      Styles.tableHeader, { width: C3Width, borderTopRightRadius: 0 },
                      (i === 0 && { width: C1Width, paddingLeft: 10, alignItems: 'left' }),
                      (i === 1 && { width: C3Width }),
                      i === values.length - 1 && { borderRightWidth: 0 },
                    ]}>
                      <Text style={[Styles.tableCellHeader]}>{val}</Text>
                    </View>);
                })}
              </View>
              {key_value.map((keys, k_i) => {
                return (
                  <View style={Styles.tableRow} key={k_i}>
                    {/* <View style={[Styles.tableColumn, (k_i === key_value.length - 1) ? {
                      borderBottom: 0, borderBottomColor: '#818B8D'
                    } : { borderBottom: 1, borderBottomColor: '#818B8D' }]}> */}
                    {/* <View style={Styles.tableRow}> */}
                    {/* grouping category for EDI Unit ID */}
                    {/* <View style={[Styles.tableRCText, { width: C1Width, height: 'auto' }]}> */}
                    {/* <Text>{keys.key}</Text>
                        </View> */}
                    <View>
                      <View style={Styles.tableColumn}>
                        {/* <View style={Styles.tableRow}> */}
                        {/* grouping category for EDI Unit ID */}
                        {/* <View style={[Styles.tableRCText, { width: (195 + ((values.length - 1) * 70))}]}>
                            <Text style={Styles.tableCell}>{keys.key}</Text>
                        </View> */}
                        {keys.subkey.map((subKey, i) => {
                          // looping key value of EDI Unit ID
                          return (
                            <View style={Styles.tableRow} key={i}>
                              <View style={[
                                Styles.tableRCText,
                                (Main_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                                (sub_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' },
                                { paddingLeft: 10, alignItems: 'left', width: (C1Width - C2Width) }
                              ]}>
                                <Text style={[Styles.tableCell, (i === 0 && Styles.tableCellsubHeader)]}>{subKey.keyValue}</Text>
                              </View>
                              <View style={[
                                Styles.tableRCText,
                                (Main_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                                (sub_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' }, { width: C2Width }
                              ]}>
                                <Text style={Styles.tableCell}>{ventil_summary.units[keys.key][subKey.key]}</Text>
                              </View>
                              {values.slice(1).map((val, h_i) => {
                                // console.log(ventil_summary[val][keys.key][subKey.key])
                                // we are looping for multiple columns of Parameter values
                                return (
                                  <View key={h_i}
                                    style={[
                                      Styles.tableRCText,
                                      (h_i === values.slice(1).length - 1) && { borderRightWidth: 0 },
                                      (Main_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                                      (sub_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' }, { width: C3Width }
                                    ]}>
                                    {(() => {
                                      // checking for No. of E-Cells EDI Stacks
                                      //   if(subKey.keyVal === 'No. of E-Cells EDI Stacks'){
                                      //     return (<Text style={Styles.tableCell}>{system_summary[val][subKey.key].toFixed(0)}</Text>);
                                      //   }
                                      return (
                                        <Text
                                          style={Styles.tableCell}>{appendNumberText(ventil_summary[val][keys.key][subKey.key])}</Text>
                                      );
                                    })()}
                                  </View>
                                );
                              })}
                            </View>
                          );
                        })}
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          );
        })}
    </View>
  );
}
export default Table2;