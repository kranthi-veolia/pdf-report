/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import SubLine from '../createLine';
import { Styles } from '../tableStyles';

// displaying Steam Data tabke in Report ----> Kranthis
function ChemicalDosageTable1(props) {
  const { chemical_dosage, serialNum } = props;
  let { subSerialNum } = props;
  const hearder_val = ['Chemical Dosing Unit ID']; // Static Header values ----> Kranthi
  const header_val2 = [];
  const multiple_steams = [];
  // pushing all steam numbers in  empty array ----> Kranthi
  chemical_dosage['Chemical Dosing Unit ID'].forEach(element => {
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
    { 'Key': 'Upstream unit', 'KeyText': 'Upstream unit' },
    { 'Key': 'Downstream unit', 'KeyText': 'Downstream unit' },
    { 'Key': 'Chemical', 'KeyText': 'Chemical' },
    { 'Key': 'Supplied Form', 'KeyText': 'Supplied Form' },
    { 'Key': 'Dosing Endpoint', 'KeyText': 'Dosing Endpoint' },
    { 'Key': 'Target Value', 'KeyText': 'Target Value' },
    { 'Key': 'Dosage Rate', 'KeyText': 'Dosage Rate' },
    { 'Key': 'Mass Flow Rate', 'KeyText': 'Mass Flow Rate' },
    { 'Key': 'Concentration as Metered', 'KeyText': 'Concentration as Metered' },
    { 'Key': 'Specific Gravity as Metered', 'KeyText': 'Specific Gravity as Metered' },
    { 'Key': 'Metered Flow Rate', 'KeyText': 'Metered Flow Rate' },
    { 'Key': 'Avg Cons.As Metered', 'KeyText': 'Avg Cons.As Metered' },
    { 'Key': 'Avg Cons.As Supplied', 'KeyText': 'Avg Cons.As Supplied' },
    { 'Key': 'Avg Cons.As Supplied with SF', 'KeyText': 'Avg Cons.As Supplied with SF' }
  ];

  const sub_heading = ['0-0', '0-7', '0-9', '0-10']; // where we need sub heading boarder ---> Kranthi
  const Main_heading = ['0-1', '0-5']; // where we need Main heading boarder ---> Kranthi
  return (
    <View>
      {/* Header of CHEM_DOSE Summary ---> Kranthi */}
      <View style={Styles.mainHeader}>
        <Text style={[Styles.mainHeaderText, { paddingRight: 5 }]}>{serialNum}. Chemical Dosing Unitop Summary</Text>
        {/* I reduced the line width to accommodate the text and added a margin left. --->kranthi */}
        <SubLine lineWidth='57%' lineHeight='24' style={{marginLeft: 5}}/>
      </View>
      {/* sub HEading of CHEM_DOSE Summary ---> Kranthi */}
      <View style={[Styles.subHeader, { marginTop: 10 }]}>
        {/* <SubLine lineWidth='10px' lineHeight='12' /> */}
        {/* <Text style={{ marginTop: -4, paddingLeft: 15, color: '#0062A9' }}>&#95;&#95;</Text> */}
        <Text style={{ paddingLeft: 0 }}>{serialNum}.{subSerialNum++}</Text>
        <Text style={{ paddingLeft: 5 }}>Docked Summary</Text>
      </View>
      {
        // Multiple tables accourding to CHEM_DOSE Unit ID numbers
        multiple_steams.map((values, ind) => {
          return (
            <View key={ind} break={ind > 1} style={[Styles.table, { marginTop: 10, width:'100%' }]}>
              <View style={Styles.tableRow}>
                <Text style={Styles.tableCellTextHeader} >Total Number of Chemical Dosing = {chemical_dosage['Chemical Dosing Unit ID'].length}</Text>
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
                    {/* parametes */}
                    <View style={[
                      Styles.tableRCText,
                      (Main_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                      (sub_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' },
                      { paddingLeft: 10, alignItems: 'left' }
                    ]}>
                      <Text style={[Styles.tableCell]}>{keys.KeyText}</Text>
                    </View>
                    {/* units of Unitop ID */}
                    <View style={[
                      Styles.tableRCText,
                      (Main_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                      (sub_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' }
                    ]}>
                      <Text style={Styles.tableCell}>{chemical_dosage.units[keys.Key]}</Text>
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
                            // checking for chemical_dosage Info data
                            // Checking for not a number value ---> Kranthi
                            if (keys.Key === 'Downstream unit') {
                              return (
                                chemical_dosage[val]['Downstream unit'].split(',').map((unitops, index) => {
                                  return (unitops !== ' ' && <Text key={index} style={Styles.tableCell}>{unitops}</Text>);
                                })
                              );
                            }
                            if (keys.Key === 'Target Value' || keys.Key === 'Chemical' || keys.Key === 'Supplied Form' || keys.Key === 'Dosing Endpoint' || keys.Key === 'Upstream unit') {
                              return (<Text style={Styles.tableCell}>{chemical_dosage[val][keys.Key]}</Text>);
                            }
                            if (keys.Key === 'Avg Cons.As Supplied with SF' || keys.Key === 'Avg Cons.As Supplied' || keys.Key === 'Avg Cons.As Metered' || keys.Key === 'Metered Flow Rate') {
                              return (<Text style={Styles.tableCell}>{chemical_dosage[val][keys.Key].toFixed(4)}</Text>);
                            }
                            return (<Text style={Styles.tableCell}>{chemical_dosage[val][keys.Key].toFixed(2)}</Text>); // adding decimal to values     ---> Kranthi
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
};

export default ChemicalDosageTable1;