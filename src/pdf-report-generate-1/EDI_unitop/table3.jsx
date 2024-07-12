/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import SubLine from '../createLine';
import { Styles } from '../tableStyles';

// Displaying EDI 3rd Table
function Table3(props) {
  const { system_summary, design_summary, serialNum } = props;
  let { subSerialNum } = props;
  const hearder_val = ['Category', 'Parameter']; // Static Header values ----> Kranthi
  const header_val2 = [];
  const multiple_steams = [];
  // pushing all EDI Unit ID' in  empty array ----> Kranthi
  system_summary['EDI Unit ID'].forEach(element => {
    header_val2.push(element);
  });
  // we are spliting steam data into multiple array with consisting of 6 steam in every single array ----> Kranthi
  while (header_val2.length > 0) {
    multiple_steams.push(hearder_val.concat(header_val2.splice(0, 5)));
  }
  const C1Width = 89; // 2st Coloum Width ----> Kranthi
  const C2Width = 190; // 2nd Coloum Width ----> Kranthi
  const C3Width = 52; // 3rd Coloum Width ----> Kranthi
  // using this function we are handling values  ----> Kranthi
  const appendNumberText = (value) => {
    if (value === undefined) {
      return '-';
    }
    if (Number.isNaN(Number(value))) { // checking values is number or not ----> Kranthi
      const split_Val = value.split(' '); // spliting all the value with space ----> Kranthi
      if (split_Val.length > 1) { // checking split value have more that two vlaue  ----> Kranthi
        const num_val = Number(split_Val[0]).toFixed(2);
        const text_val = split_Val[1];
        return `${num_val} ${text_val}`; // combing text and value ----> Kranthi
      }
      const split_perval = value.split('%'); // spliting all the value with % ----> Kranthi
      if (split_perval.length > 1) { // checking split value have more that two vlaue  ----> Kranthi
        const num_val = Number(split_perval[0]).toFixed(2);
        return `${num_val}`; // showing text ----> Kranthi
      }
      return value;
    }
    return Number(value).toFixed(2);
  };
  //  Static Values of category and parmeters -->Kranthi
  const key_value = [
    {
      key: 'Input Parameters',
      subKey: [
        { key: 'Stack Model', keyVal: 'Stack Model' },
        { key: 'Target Resistivity', keyVal: 'Target Resistivity' },
        { key: 'Product Flow', keyVal: 'Product Flow' },
        { key: 'Flow per stack', keyVal: 'Flow per stack' },
        { key: 'Target Silica guarantee', keyVal: 'Target Silica guarantee' },
        { key: 'Rectifier efficiency', keyVal: 'Rectifier efficiency' },
        { key: 'Rectifier DC output', keyVal: 'Rectifier DC output' },
        { key: 'Co-Current Flow', keyVal: 'Co-Current Flow' },
      ],
    },
    {
      key: 'Feedwater Parameters',
      subKey: [
        { key: 'Temperature', keyVal: 'Temperature' },
        { key: 'TEA', keyVal: 'TEA' },
        { key: 'TEC', keyVal: 'TEC' },
        { key: 'pH', keyVal: 'pH' },
        { key: 'Alkalinity', keyVal: 'Alkalinity' },
        { key: 'Hardness', keyVal: 'Hardness' },
        { key: 'Fe++', keyVal: 'Fe++' },
        { key: 'Mn++', keyVal: 'Mn++' },
        { key: 'B', keyVal: 'B' },
        { key: 'Silica', keyVal: 'Silica' },
        { key: 'Cond', keyVal: 'Conductvity' },
        // { key: 'Charge Balance', keyVal: 'Charge Balance' },
      ],
    },
    {
      key: 'Calculated Output Parameters',
      subKey: [
        { key: 'Product Flow Rate', keyVal: 'Product Flow Rate' },
        { key: 'Product Resistivity', keyVal: 'Product Resistivity' },
        {
          key: 'Product Silica guarantee level',
          keyVal: 'Product Silica guarantee level',
        },
        { key: 'Predicted Silica product', keyVal: 'Predicted Product Silica' },
        { key: 'Predicted Boron product', keyVal: 'Predicted Product Boron' },
        {
          key: 'Product Sodium guarantee level',
          keyVal: 'Product Sodium guarantee level',
        },
        {
          key: 'Product Chloride guarantee level',
          keyVal: 'Product Chloride guarantee level',
        },
        {
          key: 'Product Sulfate guarantee level',
          keyVal: 'Product Sulfate guarantee level',
        },
        {
          key: 'Maximum Allowable Recovery',
          keyVal: 'Maximum Allowable Recovery',
        },
        { key: 'Number of EDI Stack', keyVal: 'No. of E-Cells EDI Stacks' },
        { key: 'Current', keyVal: 'Current' },
        { key: 'Voltage', keyVal: 'Voltage' },
        { key: 'E-Factor', keyVal: 'E-Factor' },
        { key: 'DC power', keyVal: 'DC power' },
        { key: 'AC power consumption', keyVal: 'AC power consumption' },
        { key: 'AC energy', keyVal: 'AC energy' },
        { key: 'Feed pressure', keyVal: 'Feed pressure' },
        {
          key: 'Predicted Product outlet pressure',
          keyVal: 'Predicted Product outlet pressure',
        },
        { key: 'Feed Inlet', keyVal: 'Feed Inlet' },
        { key: 'Concentrate Outlet', keyVal: 'Concentrate Outlet' },
        { key: 'Electrode Bleed', keyVal: 'Electrode Bleed' },
      ],
    },
  ];
  const sub_heading = ['0-0', '0-6', '2-0']; // where we need sub heading boarder by kranthi
  const Main_heading = ['2-9', '2-14']; // where we need Main heading boarder by kranthi
  return (
    <View style={{ marginTop: 5 }} break>
      {/* sub HEading of Stripper Summary ---> Kranthi */}
      <View style={[Styles.subHeader, { marginTop: 15 }]}>
        {/* <SubLine lineWidth='10px' lineHeight='12' /> */}
        <Text style={{ marginTop: -4, paddingLeft: 15, color: '#0062A9' }}>&#95;&#95;</Text>
        <Text style={{ paddingLeft: 5 }}>{serialNum}.{subSerialNum++}</Text>
        <Text style={{ paddingLeft: 5 }}>EDI Design Parameters</Text>
      </View>
      {
        // Multiple tables accourding to EDI Unit ID
        multiple_steams.map((values, i) => {
          return (
            <View key={i} break={i > 0} style={[Styles.table, { marginTop: 10, width: ((C1Width + C2Width) + ((values.length - 2) * 52)) }]}>
              <View style={Styles.tableRow}>
                {values.map((val, i) => {
                  // header row
                  return (
                    <View key={i} style={[
                      Styles.tableHeader, { width: C3Width, borderTopRightRadius: 0 },
                      i === 0 && { width: C1Width, borderTopLeftRadius: 5 },
                      i === 1 && { paddingLeft: 10, alignItems: 'left', width: C2Width },
                      i === values.length - 1 && { borderTopRightRadius: 5 },
                    ]}>
                      <Text style={[Styles.tableCellHeader]}>{val}</Text>
                    </View>);
                })}
              </View>
              {key_value.map((keys, k_i) => {
                return (
                  <View style={Styles.tableRow} key={k_i}>
                    <View style={[Styles.tableColumn, (k_i === key_value.length - 1) ? {
                      borderBottom: 0, borderBottomColor: '#818B8D'
                    } : { borderBottom: 1, borderBottomColor: '#818B8D' }]}>
                      <View style={Styles.tableRow}>
                        {/* grouping category for EDI Unit ID */}
                        <View style={[Styles.tableRCText, { width: C1Width, height: 'auto' }]}>
                          <Text style={[Styles.tableCell, { margin: 'auto 0', textAlign: 'center', }]}>{keys.key}</Text>
                        </View>
                        <View>
                          <View style={Styles.tableColumn}>
                            {keys.subKey.map((subKey, i) => {
                              // looping key value of EDI Unit ID
                              return (
                                <View style={Styles.tableRow} key={i}>
                                  <View style={[
                                    Styles.tableRCText,
                                    (Main_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                                    (sub_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' },
                                    { paddingLeft: 10, alignItems: 'left', width: (C2Width - C3Width) }
                                  ]}>
                                    <Text style={Styles.tableCell}>{subKey.keyVal}</Text>
                                  </View>
                                  <View style={[
                                    Styles.tableRCText,
                                    (Main_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                                    (sub_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' }, { width: C3Width }
                                  ]}>
                                    <Text style={Styles.tableCell}>{design_summary.Units[keys.key][subKey.key]}</Text>
                                  </View>
                                  {values.slice(2).map((val, h_i) => {
                                    // we are looping for multiple columns of Parameter values
                                    return (
                                      <View key={h_i}
                                        style={[
                                          Styles.tableRCText,
                                          (h_i === values.slice(2).length - 1) && { borderRightWidth: 0 },
                                          (Main_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                                          (sub_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' }, { width: C3Width }
                                        ]}>
                                        {(() => {
                                          // checking for No. of E-Cells EDI Stacks
                                          if (subKey.keyVal === 'No. of E-Cells EDI Stacks') {
                                            return (<Text style={Styles.tableCell}>{system_summary[val][subKey.key].toFixed(0)}</Text>);
                                          }
                                          return (<Text
                                            style={Styles.tableCell}>{appendNumberText(design_summary.Parameter[keys.key][val][subKey.key])}</Text>);

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
                    </View>
                  </View>
                );
              })}
            </View>
          );
        })}
    </View>
  );
};

export default Table3;