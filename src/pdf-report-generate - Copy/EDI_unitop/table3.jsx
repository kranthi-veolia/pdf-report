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
  // const C1Width = 89; // 2st Coloum Width ----> Kranthi
  // const C2Width = 190; // 2nd Coloum Width ----> Kranthi
  // const C3Width = 52; // 3rd Coloum Width ----> Kranthi
  // using this function we are handling values  ----> Kranthi
  const appendNumberText = (value, decimalVal) => {
    if (value === undefined) {
      return '-';
    }
    if (Number.isNaN(Number(value))) { // checking values is number or not ----> Kranthi
      const split_Val = value.split(' '); // spliting all the value with space ----> Kranthi
      if (split_Val.length > 1) { // checking split value have more that two vlaue  ----> Kranthi
        const numMatch = value.match(/[0-9]*\.?[0-9]+/g);  // extracts number from string
        if(numMatch) {
          const num = numMatch[0];
          if(!Number.isNaN(num)){
            const formattedNum = Number(num).toFixed(2);  // formats it to 2 dp
            return value.replace(num, formattedNum);  // substitutes new formatted number into original string
          }
        }}
      const split_perval = value.split('%'); // spliting all the value with % ----> Kranthi
      if (split_perval.length > 1) { // checking split value have more that two vlaue  ----> Kranthi
        let decimalValue = 2; // default set decimal value is 2.
        if (decimalVal >= 0) { // if decimal value is exits then update the decimalValue.
          decimalValue = decimalVal;
        }
        const num_val = Number(split_perval[0]).toFixed(decimalValue);
        return `${num_val}`; // showing text ----> Kranthi
      }
      return value;
    }
    if (decimalVal >= 0) {
      return Number(value).toFixed(decimalVal);
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
        // { key: 'Flow per stack', keyVal: 'Flow per stack' },
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
        { key: 'H2S', keyVal: 'H2S' },
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
          decimalVal: 0
        },
        { key: 'Predicted Silica product', keyVal: 'Predicted Product Silica', decimalVal: 1 },
        { key: 'Predicted Boron product', keyVal: 'Predicted Product Boron' },
        {
          key: 'Product Sodium guarantee level',
          keyVal: 'Product Sodium guarantee level',
          decimalVal: 1
        },
        {
          key: 'Product Chloride guarantee level',
          keyVal: 'Product Chloride guarantee level',
          decimalVal: 1
        },
        {
          key: 'Product Sulfate guarantee level',
          keyVal: 'Product Sulfate guarantee level',
          decimalVal: 1
        },
        {
          key: 'Maximum Allowable Recovery',
          keyVal: 'Maximum Allowable Recovery',
          decimalVal: 1
        },
        { key: 'Number of E-Cell EDI Stack', keyVal: 'No. of E-Cells EDI Stacks' },
        { key: 'Current', keyVal: 'Current', decimalVal: 1 },
        { key: 'Voltage', keyVal: 'Voltage', decimalVal: 1 },
        { key: 'E-Factor', keyVal: 'E-Factor' },
        { key: 'DC power', keyVal: 'DC power' },
        { key: 'AC power consumption', keyVal: 'AC power consumption' },
        { key: 'AC energy', keyVal: 'AC energy' },
        { key: 'Feed pressure', keyVal: 'Feed pressure', decimalVal: 1 },
        {
          key: 'Predicted Product outlet pressure',
          keyVal: 'Predicted Product outlet pressure',
          decimalVal: 1
        },
        { key: 'Feed Inlet', keyVal: 'Feed Inlet', decimalVal: 1 },
        { key: 'Concentrate Outlet', keyVal: 'Concentrate Outlet' },
        { key: 'Electrode Bleed', keyVal: 'Electrode Bleed' },
      ],
    },
  ];
  const sub_heading = ['0-0', '0-6', '2-0']; // where we need sub heading boarder by kranthi
  const Main_heading = ['2-9', '2-14']; // where we need Main heading boarder by kranthi
  return (
    <View style={{ marginTop: 15 }} break>
      {/* sub HEading of Stripper Summary ---> Kranthi */}
      <View style={[Styles.subHeader, { marginTop: 15 }]}>
        {/* <SubLine lineWidth='10px' lineHeight='12' /> */}
        {/* <Text style={{ marginTop: -4, paddingLeft: 15, color: '#0062A9' }}>&#95;&#95;</Text> */}
        <Text style={{ paddingLeft: 0 }}>{serialNum}.{subSerialNum++}</Text>
        <Text style={{ paddingLeft: 5 }}>EDI Design Parameters</Text>
      </View>
      {
        // Multiple tables accourding to EDI Unit ID
        multiple_steams.map((values, i) => {
          return (
            <View key={i} break={i > 0} style={[Styles.table, { marginTop: 10, width: '100%' }]}>
              <View style={Styles.tableRow}>
                {values.map((val, i) => {
                  // calculating width for table column and column 1.
                  const C1Width = `${(100 / (values.length)) * 2}%`;
                  const Cwidth = `${(100 / (values.length))}%`;
                  // header row
                  return (
                    <View key={i} style={[
                      Styles.tableHeader, { width: Cwidth, borderTopRightRadius: 0 },
                      i === 0 && { borderTopLeftRadius: 5 },
                      i === 1 && { paddingLeft: 10, alignItems: 'left', width: C1Width },
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
                        <View style={[Styles.tableRCText, { height: 'auto' }]}>
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
                                    { paddingLeft: 10, alignItems: 'left' }
                                  ]}>
                                    <Text style={Styles.tableCell}>{subKey.keyVal}</Text>
                                  </View>
                                  <View style={[
                                    Styles.tableRCText,
                                    (Main_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                                    (sub_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' }
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
                                          (sub_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' }
                                        ]}>
                                        {(() => {
                                          // checking for No. of E-Cells EDI Stacks
                                          if (subKey.keyVal === 'No. of E-Cells EDI Stacks') {
                                            return (<Text style={Styles.tableCell}>{system_summary[val][subKey.key].toFixed(0)}</Text>);
                                          }
                                          return (<Text
                                            style={Styles.tableCell}>{appendNumberText(design_summary.Parameter[keys.key][val][subKey.key], subKey.decimalVal)}</Text>);
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