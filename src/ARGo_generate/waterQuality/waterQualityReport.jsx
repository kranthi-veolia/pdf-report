/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { Styles } from '../tableStyles';

function DisplayWaterQuality(props) {
  const { waterData } = props;
  return (
    <View>
      <View style={[Styles.table, { marginTop: 10, width:'90%' }]}>
        <View style={Styles.tableRow}>
          <View style={[
            Styles.tableHeader, { width: '100%', borderTopRightRadius: 0, alignItems: 'left', paddingLeft: 10 },
          ]}>
            <Text style={[Styles.tableCellHeader]}>Water Quality Data</Text>
          </View>
        </View>
        <View style={Styles.tableRow}>
          <View style={[
            Styles.tableRCText,
            { paddingLeft: 10, alignItems: 'left' }
          ]}>
            <Text style={Styles.tableCell}>Ion</Text>
          </View>
          <View style={[
            Styles.tableRCText,
            { paddingLeft: 10, alignItems: 'left' }
          ]}>
            <Text style={Styles.tableCell}>Raw Feed</Text>
          </View>
          <View style={[
            Styles.tableRCText,
            { paddingLeft: 10, alignItems: 'left' }
          ]}>
            <Text style={Styles.tableCell}>Brine</Text>
          </View>
          <View style={[
            Styles.tableRCText,
            { paddingLeft: 10, alignItems: 'left' }
          ]}>
            <Text style={Styles.tableCell}>Units</Text>
          </View>
        </View>
        {Object.keys(waterData['Raw Feed']).map((key, k_i) => {
          return (
            <View style={Styles.tableRow} key={k_i}>
              <View style={[
                Styles.tableRCText,
                { paddingLeft: 10, alignItems: 'left' }
              ]}>
                <Text style={Styles.tableCell}>{key}</Text>
              </View>
              <View style={[
                Styles.tableRCText,
              ]}>
                <Text style={Styles.tableCell}>{waterData['Raw Feed']? waterData['Raw Feed'][key].toFixed(2) : '-'}</Text>
              </View>
              <View style={[
                Styles.tableRCText,
              ]}>
                <Text style={Styles.tableCell}>{waterData.Brine? waterData.Brine[key].toFixed(2) : '-'}</Text>
              </View>
              <View style={[
                Styles.tableRCText,
              ]}>
                <Text style={Styles.tableCell}>{key === 'CCPP'? 'ppm CaCO3': ((key === 'ph' || key === 'LSI' || key === 'SDI' || key === 'Ionic Strength')? '-': 'ppm')}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default DisplayWaterQuality;