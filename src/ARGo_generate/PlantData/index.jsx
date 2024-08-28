import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { Styles } from '../tableStyles';

function DisplayPlantData(props) {
  const { plantData } = props;
  return (
    <View>
      <View style={[Styles.table, { marginTop: 10, width:'100%' }]}>
        <View style={Styles.tableRow}>
          <View style={[
            Styles.tableHeader, { width: '100%', borderTopRightRadius: 6,
              borderTopLeftRadius: 6, borderRightWidth:0, alignItems: 'left', paddingLeft: 10 },
          ]}>
            <Text style={[Styles.tableCellHeader]}>Plant Data</Text>
          </View>
        </View>
        {Object.keys(plantData).map((keys, k_i) => {
          return (
            <View style={Styles.tableRow} key={k_i}>
              <View style={[
                Styles.tableRCText,
                { paddingLeft: 10, alignItems: 'left' },
                k_i === Object.keys(plantData).length - 1 && { borderBottomWidth: 0 },
              ]}>
                <Text style={Styles.tableCell}>{keys}</Text>
              </View>
              <View style={[
                Styles.tableRCText,
                { borderRightWidth: 0 },
                k_i === Object.keys(plantData).length - 1 && { borderBottomWidth: 0 },
              ]}>
                <Text style={Styles.tableCell}>{plantData[keys]? plantData[keys] : '-'}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default DisplayPlantData;