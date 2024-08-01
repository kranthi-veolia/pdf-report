/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react';
import { Text, View, Image } from '@react-pdf/renderer';
import reportErrorImage from '../icons/ReportErrors.jpg';
import reportWarningImage from '../icons/ReportWarnings.jpg';
import SubLine from '../createLine';
import { Styles } from '../tableStyles';

//  Displaying Errors and Warnings Table
function DisplayReports(props) {
  const { errors, serialNum } = props;
  const hearder_val = ['Unit Op', 'Type', 'Description']; // static value for header ---> Kranthi
  const Errors = [];
  const Warning = [];
  // const C1Width = 70; // 2st Coloum Width ----> Kranthi
  // const C2Width = 70; // 2nd Coloum Width ----> Kranthi
  // const C3Width = 400; // 3rd Coloum Width ----> Kranthi
  // getting unitop values ---> Kranthi
  const ReportKeys = errors.map((d) => d.name);
  // getting errors and warning value ---> Kranthi
  const ReportErrors = errors.map((d) => d.data.map((v) => { return v.toLowerCase().indexOf('warning') === 0 ? Warning.push(v) : Errors.push(v); }));
  return (
    <View>
      {/* Header ---> Kranthi */}
      {/* <View style={Styles.mainHeader}>
        <Text style={[Styles.mainHeaderText, { paddingRight: 5 }]}>{serialNum}  Notifications</Text> */}
      {/* I reduced the line width to accommodate the text and added a margin left. --->kranthi */}
      {/* <SubLine lineWidth='77%' lineHeight='24' style={{marginLeft: 5}} /> */}
      {/* </View> */}
      {(() => {
        // if no errors and warnings in the data we are not displaying table only text
        if (Errors.length === 0 && Warning.length === 0) {
          return (<View style={Styles.noReportssubHeader}>
            <Text style={{ padding: '1' }}>None detected in the current design.</Text>
          </View>);
        }
        return (
          <View style={[Styles.table, { width: '100%' }]}>
            {/* 1st Rows ---> Kranthi */}
            <View style={Styles.tableRow}>
              <Text style={Styles.tableCellTextHeader}>Total Number of Errors ( <Image style={Styles.textImage} src={reportErrorImage} /> ) = {Errors.length}</Text>
            </View>
            <View style={Styles.tableRow}>
              <Text style={Styles.tableCellTextHeader}>Total Number of Warnings ( <Image style={Styles.textImage} src={reportWarningImage} /> ) = {Warning.length}</Text>
            </View>
            {/* Header value ---> Kranthi */}
            <View style={Styles.tableRow}>
              {hearder_val.map((val, i) => {
                return (<View key={i} style={[
                  Styles.tableHeader, {width: '100%', borderTopRightRadius: 0 },
                  (i === 0 && {width: '20%' }),
                  (i === 1 && {width: '20%' }),
                  i === hearder_val.length - 1 && { borderRightWidth: 0, paddingLeft: 10, alignItems: 'left' },
                ]}>
                  <Text style={[Styles.tableCellHeader]}>{val}</Text>
                </View>);
              })}
            </View>
            {ReportKeys.map((keys, i) => {
              return (
                <View key={i} style={[Styles.tableRow, (i !== ReportKeys.length - 1) && {
                  borderBottom: 1,
                  borderBottomColor: '#818B8D'
                }]}>
                  {/* 1st coloumn ---> Kranthi */}
                  <View style={[Styles.tableRCText, {width: '20%',  height: 'auto' }]}>
                    <Text style={[Styles.tableCell, { margin: 'auto 0', textAlign: 'center' }]}>{keys}</Text>
                  </View>
                  <View style={Styles.tableColumn}>
                    {(() => {
                      const unique_unitop = errors.filter((val) => { // filter value of unitops ---> Kranthi
                        return val.name === keys;
                      });
                      return (unique_unitop[0].data.map((text, u_i) => {
                        return (
                          <View key={u_i} style={Styles.tableRow}>
                            {/* 2nd coloumn ---> Kranthi */}
                            <View style={[Styles.tableRCText, {width: '20%'}]}>
                              {(text.toLowerCase().indexOf('warning') === 0) && ( // checking for warnings ---> Kranthi
                                <Image style={Styles.image} src={reportWarningImage} />
                              )}
                              {(text.toLowerCase().indexOf('fatal error') === 0) && ( // checking for errors ---> Kranthi
                                <Image style={Styles.image} src={reportErrorImage} />
                              )}
                            </View>
                            {/* 3rd coloumn ---> Kranthi */}
                            <View style={[Styles.tableRCText, { paddingLeft: 10, alignItems: 'left', width: '100%'}]} >
                              <Text style={[Styles.tableCell, { alignItems: 'left', width: '70%'}]}>{text.split('\n')[0]}</Text>
                            </View>
                          </View>
                        );
                      }));
                    })()}
                  </View>
                </View>
              );
            })}
          </View>
        );
      })()}
    </View>
  );
};

export default DisplayReports;