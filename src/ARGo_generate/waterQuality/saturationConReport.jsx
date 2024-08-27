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
  //   const key_value = [
  //     { Key: '-', KeyText: '-', saturation: 'CCPP', limits: 'LSI', max: '% of Max'},
  //     { Key: 'CaCO3', KeyText: 'Calcium Carbonate', saturation: resultsData.Saturation.CaCO3.toFixed(2), limits: resultsData.Limits.CaCO3.toFixed(2), max: resultsData['% of Max'].CaCO3.toFixed(2)},
  //     { Key: '-', KeyText: '-', saturation: 'Saturation', limits: '-', max: '% of Max'},
  //     { Key: 'CaSO4', KeyText: 'Calcium Sulphate', saturation: resultsData.Saturation.CaSO4.toFixed(2), limits: resultsData.Limits.CaSO4.toFixed(2), max: resultsData['% of Max'].CaSO4.toFixed(2)},
  //     { Key: 'BaSO4', KeyText: 'Barium Sulphatee', saturation: resultsData.Saturation.BaSO4.toFixed(2), limits: resultsData.Limits.BaSO4.toFixed(2), max: resultsData['% of Max'].BaSO4.toFixed(2)},
  //     { Key: 'SrSO4', KeyText: 'Strontium Sulphate', saturation: resultsData.Saturation.SrSO4.toFixed(2), limits: resultsData.Limits.SrSO4.toFixed(2), max: resultsData['% of Max'].SrSO4.toFixed(2)},
  //     { Key: 'CaF2', KeyText: 'Calcium Fluoride', saturation: resultsData.Saturation.CaF2.toFixed(2), limits: resultsData.Limits.CaF2.toFixed(2), max: resultsData['% of Max'].CaF2.toFixed(2)},
  //     { Key: 'CaHPO4', KeyText: 'Calcium Phosphate', saturation: resultsData.Saturation.CaHPO4.toFixed(2), limits: resultsData.Limits.CaHPO4.toFixed(2), max: resultsData['% of Max'].CaHPO4.toFixed(2)},
  //     { Key: '-', KeyText: '-', saturation: 'Brine Conc', limits: 'Limit', max: '% of Max'},
  //     { Key: 'Fe', KeyText: 'Iron', saturation: resultsData.Saturation.Fe.toFixed(2), limits: resultsData.Limits.Fe.toFixed(2), max: resultsData['% of Max'].Fe.toFixed(2)},
  //     { Key: 'Mn', KeyText: 'Manganese', saturation: resultsData.Saturation.Mn.toFixed(2), limits: resultsData.Limits.Mn.toFixed(2), max: resultsData['% of Max'].Mn.toFixed(2)},
  //     { Key: 'Al', KeyText: 'Aluminium', saturation: resultsData.Saturation.Al.toFixed(2), limits: resultsData.Limits.Al.toFixed(2), max: resultsData['% of Max'].Al.toFixed(2)},
  //     { Key: 'SiO2', KeyText: 'Silica', saturation: resultsData.Saturation.SiO2.toFixed(2), limits: resultsData.Limits.SiO2.toFixed(2), max: resultsData['% of Max'].SiO2.toFixed(2)},];
  return (
    <View>
      <View style={[Styles.table, { marginTop: 10, width:'100%' }]}>
        <View style={Styles.tableRow}>
          {header.map((keys, i) => {
            return (<View style={[
              Styles.tableHeader, { width: '100%', borderTopRightRadius: 0, },
              (i === 0 && { width: '200%', paddingLeft: 10, alignItems: 'left' }),
            ]}>
              <Text style={[Styles.tableCellHeader]}>{keys}</Text>
            </View>);
          })}
        </View>
        {/* </View> */}
        {Object.keys(saturation).map((key, k_i) => { console.log(saturation[key]);
          return (
            <View style={Styles.tableRow} key={k_i}>
              <View style={[
                Styles.tableRCText,
                { paddingLeft: 10, alignItems: 'left', width:'200%' }
              ]}>
                <Text style={Styles.tableCell}>{key}</Text>
              </View>
              <>
                {header.slice(1).map((keys, k_i) => {
                  return (<View style={[
                    Styles.tableRCText,
                  ]}>
                    <Text style={Styles.tableCell}>{saturation[key][keys].toFixed(2)}</Text>
                  </View>);
                })}
              </>

              {/* <View style={[
                Styles.tableRCText,
              ]}>
                <Text style={Styles.tableCell}>{key.saturation}</Text>
              </View>
              <View style={[
                Styles.tableRCText,
              ]}>
                <Text style={Styles.tableCell}>{key.limits}</Text>
              </View>
              <View style={[
                Styles.tableRCText,
              ]}>
                <Text style={Styles.tableCell}>{key.max}</Text>
              </View> */}
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default DisplaySaturationConc;