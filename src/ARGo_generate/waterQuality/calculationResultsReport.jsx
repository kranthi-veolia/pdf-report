/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { Styles } from '../tableStyles';

function DisplayCalculatedResults(props) {
  const { resultsData, product, checkLSI } = props;
  const caco3_Keys = Object.keys(resultsData?.['Calcium Carbonate']);
  const key_value = [
    { Key: '-', KeyText: '-', saturation: caco3_Keys?.[0] ?? '-', limits: caco3_Keys?.[1] ?? '-', max: caco3_Keys?.[2] ?? '-'},
    { Key: 'CaCO3', KeyText: 'Calcium Carbonate', saturation: resultsData?.['Calcium Carbonate']?.[caco3_Keys?.[0]] ?? '-', limits: resultsData?.['Calcium Carbonate']?.[caco3_Keys?.[1]] ?? '-', max: resultsData?.['Calcium Carbonate']?.[caco3_Keys?.[2]] ?? '-'},
    { Key: '-', KeyText: '-', saturation: 'Saturation', limits: 'Limit', max: '% of Max'},
    { Key: 'CaSO4', KeyText: 'Calcium Sulphate', saturation: resultsData?.Saturation?.CaSO4 ?? '-', limits: resultsData?.Limits?.CaSO4 ?? '-', max: resultsData?.['% of Max']?.CaSO4?.toFixed(2) ?? '-'},
    { Key: 'BaSO4', KeyText: 'Barium Sulphate', saturation: resultsData?.Saturation?.BaSO4 ?? '-', limits: resultsData?.Limits?.BaSO4 ?? '-', max: resultsData?.['% of Max']?.BaSO4?.toFixed(2) ?? '-'},
    { Key: 'SrSO4', KeyText: 'Strontium Sulphate', saturation: resultsData?.Saturation?.SrSO4 ?? '-', limits: resultsData?.Limits?.SrSO4 ?? '-', max: resultsData?.['% of Max']?.SrSO4?.toFixed(2) ?? '-'},
    { Key: 'CaF2', KeyText: 'Calcium Fluoride', saturation: resultsData?.Saturation?.CaF2 ?? '-', limits: resultsData?.Limits?.CaF2 ?? '-', max: resultsData?.['% of Max']?.CaF2?.toFixed(2) ?? '-'},
    { Key: 'CaHPO4', KeyText: 'Calcium Phosphate', saturation: resultsData?.Saturation?.CaHPO4 ?? '-', limits: resultsData?.Limits?.CaHPO4 ?? '-', max: resultsData?.['% of Max']?.CaHPO4?.toFixed(2) ?? '-'},
    { Key: '-', KeyText: '-', saturation: 'Brine Conc', limits: 'Limit', max: '% of Max'},
    { Key: 'Fe', KeyText: 'Iron', saturation: resultsData?.Saturation?.Fe ?? '-', limits: resultsData?.Limits?.Fe ?? '-', max: resultsData?.['% of Max']?.Fe?.toFixed(2) ?? '-'},
    { Key: 'Mn', KeyText: 'Manganese', saturation: resultsData?.Saturation?.Mn ?? '-', limits: resultsData?.Limits?.Mn ?? '-', max: resultsData?.['% of Max']?.Mn?.toFixed(2) ?? '-'},
    { Key: 'Al', KeyText: 'Aluminium', saturation: resultsData?.Saturation?.Al ?? '-', limits: resultsData?.Limits?.Al ?? '-', max: resultsData?.['% of Max']?.Al?.toFixed(2) ?? '-'},
    { Key: 'SiO2', KeyText: 'Silica', saturation: resultsData?.Saturation?.SiO2 ?? '-', limits: resultsData?.Limits?.SiO2 ?? '-', max: resultsData?.['% of Max']?.SiO2?.toFixed(2) ?? '-'}
  ];
  return (
    <View>
      <View style={[Styles.table, { marginTop: 10, width:'100%' }]}>
        <View style={Styles.tableRow}>
          <View style={[
            Styles.tableHeader, { width: '100%', borderTopRightRadius: 6,
              borderTopLeftRadius: 6, borderRightWidth:0, alignItems: 'left', paddingLeft: 10 },
          ]}>
            <Text style={[Styles.tableCellHeader]}>Calculation Results</Text>
          </View>
        </View>
        <View style={Styles.tableRow}>
          <View style={[
            Styles.tableRCText,
            { paddingLeft: 10, alignItems: 'left', borderRightWidth:0, }
          ]}>
            <Text style={Styles.tableCellHeader}>{`Calculation based on use of ${product}`}</Text>
          </View>
        </View>
        {key_value.map((key, k_i) => {
          return (
            <View style={Styles.tableRow} key={k_i}>
              <View style={[
                Styles.tableRCText,
                { paddingLeft: 10, alignItems: 'left' },
                k_i === Object.keys(key_value).length - 1 && { borderBottomWidth: 0 },
              ]}>
                <Text style={key.KeyText === '-' ? Styles.tableCellHeader : Styles.tableCell}>{key.KeyText}</Text>
              </View>
              <View style={[
                Styles.tableRCText,
                k_i === Object.keys(key_value).length - 1 && { borderBottomWidth: 0 },
              ]}>
                <Text style={key.KeyText === '-' ? Styles.tableCellHeader : Styles.tableCell}>{key.saturation}</Text>
              </View>
              <View style={[
                Styles.tableRCText,
                k_i === Object.keys(key_value).length - 1 && { borderBottomWidth: 0 },
              ]}>
                <Text style={key.KeyText === '-' ? Styles.tableCellHeader : Styles.tableCell}>{key.limits}</Text>
              </View>
              <View style={[
                Styles.tableRCText, {borderRightWidth:0, },
                k_i === Object.keys(key_value).length - 1 && { borderBottomWidth: 0 },
              ]}>
                <Text style={key.KeyText === '-' ? Styles.tableCellHeader : Styles.tableCell}>{key.max}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default DisplayCalculatedResults;