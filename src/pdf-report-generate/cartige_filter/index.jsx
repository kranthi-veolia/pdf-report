/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import SubLine from '../createLine';
import { Styles } from '../tableStyles';
// displaying CF tabke in Report ----> Kranthi
function DisplayCF(props) {
  const { cf_summary, serialNum } = props;
  let { subSerialNum } = props;
  const hearder_val = ['CF Unit ID']; // Static Header values ----> Kranthi
  const header_val2 = [];
  const multiple_steams = [];
  // pushing all CF numbers in  empty array ----> Kranthi
  cf_summary['CF Unit ID'].forEach(element => {
    header_val2.push(element);
  });
  // we are spliting CF dat into multiple array with consisting of 6 CF in every single array ----> Kranthi
  while (header_val2.length > 0) {
    multiple_steams.push(hearder_val.concat(header_val2.splice(0, 5)));
  }
  // const C1Width = 195; // 2st Coloum Width ----> Kranthi
  // const C2Width = 70; // 2nd Coloum Width ----> Kranthi
  // const C3Width = 70; // 3rd Coloum Width ----> Kranthi
  //  Static Values of category and parmeters -->Kranthi
  const key_value = [
    { Key: 'Upstream unit', KeyText: 'Upstream unit' },
    { Key: 'Downstream unit', KeyText: 'Downstream unit' },
    { Key: 'Feed Temperature', KeyText: 'Feed Temperature' },
    { Key: 'Flow Capacity', KeyText: 'Flow Capacity' },
    { Key: 'Filter Type', KeyText: 'Filter Type' },
    { Key: 'Number of Filters', KeyText: 'Number of Filters' },
    { Key: 'Design Flow Per TIE', KeyText: 'Design Flow Per TIE' },
    { Key: 'Actual Flow per TIE', KeyText: 'Actual Flow per TIE' },
    // { Key: 'Specific Energy Consumption', KeyText: 'Specific Energy Consumption' },
    { Key: 'Inlet Pressure', KeyText: 'Inlet Pressure' },
    { Key: 'Outlet Pressure', KeyText: 'Outlet Pressure' },
    { Key: 'Pressure Drop', KeyText: 'Pressure Drop' },
  ];

  const sub_heading = ['0-0']; // where we need sub heading boarder ---> Kranthi
  const Main_heading = ['0-1', '0-7']; // where we need Main heading boarder ---> Kranthi
  return (
    <View>
      {/* Header of CF Summary ---> Kranthi */}
      <View style={Styles.mainHeader}>
        <Text style={[Styles.mainHeaderText, { paddingRight: 5 }]}>{serialNum}. CF Unitop Summary</Text>
        {/* I reduced the line width to accommodate the text and added a margin left. --->kranthi */}
        <SubLine lineWidth='75%' lineHeight='24' style={{marginLeft: 5}} />
      </View>
      {/* sub HEading of CF Summary ---> Kranthi */}
      <View style={[Styles.subHeader, { marginTop: 10 }]} /* bookmark={{ title: `${serialNum}.${subSerialNum} Docked Summary` }} */ >
        {/* <SubLine lineWidth='10px' lineHeight='12' /> */}
        {/* <Text style={{ marginTop: -4, paddingLeft: 15, color: '#0062A9' }}>&#95;&#95;</Text> */}
        <Text style={{ paddingLeft: 0 }}>{serialNum}.{subSerialNum++}</Text>
        <Text style={{ paddingLeft: 5 }}>Docked Summary</Text>
      </View>
      {
        // Multiple tables accourding to CF numbers
        multiple_steams.map((values, ind) => {
          return (
            <View key={ind} break={ind > 1} style={[Styles.table, { marginTop: 10, width:'100%' }]}>
              <View style={Styles.tableRow}>
                <Text style={Styles.tableCellTextHeader} >Total Number of CF Unitop = {cf_summary['CF Unit ID'].length}</Text>
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
                      <Text style={Styles.tableCell}>{cf_summary.units[keys.Key]}</Text>
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
                            if (keys.Key === 'Downstream unit') {
                              return (
                                cf_summary[val][keys.Key].split(',').map((unitops, index) => {
                                  return (unitops !== ' ' && <Text key={index} style={Styles.tableCell}>{unitops}</Text>);
                                })
                              );
                            }
                            // Checking for Number of Filters,Upstream unit and Upstream unit ---> Kranthi
                            if (keys.Key === 'Upstream unit' || keys.Key === 'Filter Type' || keys.Key === 'Number of Filters') {
                              return (<Text style={Styles.tableCell}>{cf_summary[val][keys.Key]}</Text>);
                            }
                            return (<Text style={Styles.tableCell}>{cf_summary[val][keys.Key].toFixed(2)}</Text>); // adding decimal to values     ---> Kranthi
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

export default DisplayCF;