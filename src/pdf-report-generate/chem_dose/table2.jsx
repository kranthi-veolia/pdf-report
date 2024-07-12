/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import SubLine from '../createLine';
import { Styles } from '../tableStyles';
// displaying Steam Data tabke in Report ----> Kranthi
function ChemicalDosageTable2(props) {
  const { agg_chem_dose_dict, serialNum } = props;
  let { subSerialNum } = props;
  const hearder_val = ['Chemical Type']; // Static Header values ----> Kranthi
  const total_header_val = [];
  let header_val2 = [];
  const multiple_steams = [];
  // pushing all steam numbers in  empty array ----> Kranthi
  Object.keys(agg_chem_dose_dict).forEach((element) => {
    total_header_val.push(element);
    header_val2.push(element);
  });
  header_val2 = header_val2.filter((item) => {
    return item !== 'units';
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
    { 'Key': 'Chemical Dosing Unit ID', 'KeyText': 'Chemical Dosing Unit ID' },
    { 'Key': 'Chemical', 'KeyText': 'Chemical' },
    { 'Key': 'Supplied Form', 'KeyText': 'Supplied Form' },
    { 'Key': 'Concentration as Supplied', 'KeyText': 'Concentration as Supplied' },
    { 'Key': 'Specific Gravity as Supplied', 'KeyText': 'Specific Gravity as Supplied' },
    { 'Key': 'Total Consumption', 'KeyText': 'Total Consumption' },
    { 'Key': 'Mass Flow Rate', 'KeyText': 'Tot.Cons Mass Flow Rate' },
    { 'Key': 'As Supplied', 'KeyText': 'Tot.Cons As Supplied' },
    { 'Key': 'As Supplied with SF', 'KeyText': 'Tot.Cons As Supplied with SF' },
  ];

  const sub_heading = []; // where we need sub heading boarder ---> Kranthi
  const Main_heading = ['0-0', '0-4']; // where we need Main heading boarder ---> Kranthi
  return (
    <View style={{ marginTop: 10 }}>
      {/* sub HEading of Chemical Dosing Summary ---> Kranthi */}
      <View style={[Styles.subHeader, { marginTop: 10 }]}>
        {/* <SubLine lineWidth='10px' lineHeight='12' /> */}
        {/* <Text style={{ marginTop: -4, paddingLeft: 15, color: '#0062A9' }}>&#95;&#95;</Text> */}
        <Text style={{ paddingLeft: 0 }}>{serialNum}.{subSerialNum++}</Text>
        <Text style={{ paddingLeft: 5 }}>Aggregated by Chemical Type – Supplied Form</Text>
      </View>
      {
        // Multiple tables accourding to Chemical Dosing Unit ID numbers
        multiple_steams.map((values, ind) => {
          return (
            <View key={ind} break={ind > 1} style={[Styles.table, { marginTop: 10, width:'100%' }]}>
              <View style={Styles.tableRow}>
                <Text style={Styles.tableCellTextHeader} >Total Number of Chemical Type = {total_header_val.length - 1}</Text>
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
                      { paddingLeft: 10, alignItems: 'left' },
                    ]}>
                      <Text style={[Styles.tableCell]}>{keys.Key}</Text>
                    </View>
                    {/* units of Unitop ID */}
                    <View style={[
                      Styles.tableRCText,
                      (Main_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                      (sub_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' }
                    ]}>
                      <Text style={Styles.tableCell}>{agg_chem_dose_dict.units[keys.KeyText]}</Text>
                    </View>
                    {values.slice(1).map((val, h_i) => {
                      // we are looping for multiple columns of Parameter values
                      return (
                        <View key={h_i} style={[
                          Styles.tableRCText,
                          (h_i === values.slice(1).length - 1) && { borderRightWidth: 0 },
                          (Main_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                          (sub_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' }
                        ]}>
                          {(() => {
                            // checking for chemical_dosage Info data
                            // Checking for not a number value ---> Kranthi
                            if (keys.Key === 'Chemical Dosing Unit ID') {
                              return (
                                agg_chem_dose_dict[val]['Chemical Dosing Unit ID'].split(',').map((unitops, index) => {
                                  return (unitops !== ' ' && <Text key={index} style={Styles.tableCell}>{unitops.replace('-', '')}</Text>);
                                })
                              );
                            }
                            if (keys.Key === 'Chemical' || keys.Key === 'Supplied Form' || keys.Key === 'Total Consumption') {
                              return (<Text style={Styles.tableCell}>{agg_chem_dose_dict[val][keys.KeyText]}</Text>);
                            }
                            if (keys.Key === 'As Supplied with SF' || keys.Key === 'As Supplied' || keys.Key === 'Mass Flow Rate') {
                              return (<Text style={Styles.tableCell}>{Number(agg_chem_dose_dict[val][keys.KeyText]).toFixed(4)}</Text>);
                            }
                            return (<Text style={Styles.tableCell}>{Number(agg_chem_dose_dict[val][keys.KeyText]).toFixed(2)}</Text>); // adding decimal to values     ---> Kranthi
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

export default ChemicalDosageTable2;
