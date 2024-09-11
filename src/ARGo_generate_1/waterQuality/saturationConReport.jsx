/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { Styles } from '../tableStyles';

function DisplaySaturationConc(props) {
  const { saturation, product } = props;
  console.log(saturation);
  const header =['Saturation', 'CaCO3', 'CaSO4', 'BaSO4', 'SrSO4', 'CaF2', 'Fe', 'Mn', 'Al', 'SiO2', 'CaHPO4'];
  return (
    <View>
      <View style={[Styles.table, { marginTop: 10, width:'100%' }]}>
        <View style={Styles.tableRow}>
          {header.map((keys, i) => {
            return (<View style={[
              Styles.tableHeader, { width: '100%' },
              (i === 0 && { width: '200%', paddingLeft: 10, alignItems: 'left', borderTopLeftRadius: 6, }),
              i === header.length - 1 && { borderRightWidth: 0, borderTopRightRadius: 6, },
            ]}>
              <Text style={[Styles.tableCellHeader]}>{keys}</Text>
            </View>);
          })}
        </View>
        {/* </View> */}
        {Object.keys(saturation).map((key, k_i) => {
          return (
            <View style={Styles.tableRow} key={k_i}>
              <View style={[
                Styles.tableRCText,
                { paddingLeft: 10, alignItems: 'left', width:'200%' },
                k_i === Object.keys(saturation).length - 1 && { borderBottomWidth: 0 },
              ]}>
                <Text style={Styles.tableCell}>{key}</Text>
              </View>
              <>
                {header.slice(1).map((keys, h_i) => {
                  return (<View key={h_i} style={[
                    Styles.tableRCText,
                    k_i === Object.keys(saturation).length - 1 && { borderBottomWidth: 0 },
                  ]}>
                    <Text style={Styles.tableCell}>{saturation[key][keys].toFixed(2)}</Text>
                  </View>);
                })}
              </>
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default DisplaySaturationConc;