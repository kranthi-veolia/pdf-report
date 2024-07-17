/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
// import { Styles } from './Styles';
import SubLine from '../createLine';
import { Styles } from '../tableStyles';

// displaying Steam Data tabke in Report ----> Kranthi
function DisplayFeedProductWaste(props) {
  const { feed_product_waste, unit_set_dict, serialNum } = props;

  const hearder_val = ['Category', 'Parameter']; // Static Header values ----> Kranthi
  const header_val2 = [];
  const multiple_steams = [];
  feed_product_waste['Unit ID'].forEach(element => {
    header_val2.push(element); // pushing ebi unitop name to header ---> Kranthi
  });
  // we are spliting steam data into multiple array with consisting of 6 steam in every single array ----> Kranthi
  while (header_val2.length > 0) {
    multiple_steams.push(hearder_val.concat(header_val2.splice(0, 6)));
  }
  // checking for units in stream Property category----> Kranthi
  const getUnitValue = (item) => {
    if (item === 'Pressure') {
      return `${unit_set_dict.Pressure}` || 'atm';
    } if (item === 'Flow') {
      return `${unit_set_dict['Volume Flow']}` || 'gpm';
    } return '';
  };
  // console.log(multiple_steams);
  // const C1Width = 70; // 2st Coloum Width ----> Kranthi
  // const C2Width = 157; // 2nd Coloum Width ----> Kranthi
  // const C3Width = 52; // 3rd Coloum Width ----> Kranthi
  // const C4Width = 52; // 3rd Coloum Width ----> Kranthi
  // using this function we are handling values  ----> Kranthi
  const appendNumberText = (value) => {
    if (value === undefined) {
      return ' ';
    }
    if (Number.isNaN(Number(value))) { // checking values is number or not ----> Kranthi
      const split_Val = value.split(' '); // spliting all the value with space ----> Kranthi
      if (split_Val.length > 1) { // checking split value have more that two vlaue  ----> Kranthi
        const num_val = Number(split_Val[0]).toFixed(2);
        const text_val = split_Val[1];
        return `${num_val} ${text_val}`; // combing text and value ----> Kranthi
      }
      return value;
    }
    return Number(value).toFixed(2);
  };
  // console.log(header_val2, stream_ouput_data, stream_input_dict)
  //  Static Values of category and parmeters -->Kranthi
  const key_value = [
    {
      key: 'Information',
      subKey: [
        { key: 'Water Source', keyVal: 'Information', unit: '' }
      ],
    },
    {
      key: 'Ion Concentration',
      subKey: [
        { keyVal: 'Calcium (Ca)', key: 'Ca++', unit: 'mg/L' },
        { keyVal: 'Magnesium (Mg)', key: 'Mg++', unit: 'mg/L' },
        { keyVal: 'Sodium (Na)', key: 'Na+', unit: 'mg/L' },
        { keyVal: 'Potassium (K)', key: 'K+', unit: 'mg/L' },
        { keyVal: 'Ammonia - N (NH4)', key: 'NH4+', unit: 'mg/L' },
        { keyVal: 'Barium (Ba)', key: 'Ba++', unit: 'mg/L' },
        { keyVal: 'Strontium (Sr)', key: 'Sr++', unit: 'mg/L' },
        { keyVal: 'Iron (Fe)', key: 'Fe++', unit: 'mg/L' },
        { keyVal: 'Manganese (Mn)', key: 'Mn++', unit: 'mg/L' },
        { keyVal: 'Sulfate (SO4)', key: 'SO4--', unit: 'mg/L' },
        { keyVal: 'Chloride (Cl)', key: 'Cl-', unit: 'mg/L' },
        { keyVal: 'Fluoride (F)', key: 'F-', unit: 'mg/L' },
        { keyVal: 'Nitrate (NO3)', key: 'NO3-', unit: 'mg/L' },
        { keyVal: 'Bromide (Br)', key: 'Br-', unit: 'mg/L' },
        { keyVal: 'Phosphate (PO4)', key: 'PO4---', unit: 'mg/L' },
        { keyVal: 'Boron (B)', key: 'B-', unit: 'mg/L' },
        { keyVal: 'Silica (SiO2)', key: 'SiO2', unit: 'mg/L' },
        { keyVal: 'Hydrogen Sulfide (H2S)', key: 'H2S', unit: 'mg/L' },
        { keyVal: 'Bicarbonate (HCO3)', key: 'HCO3-', unit: 'mg/L' },
        { keyVal: 'Carbon Dioxide (CO2)', key: 'CO2', unit: 'mg/L' },
        { keyVal: 'Carbonate (CO3)', key: 'CO3--', unit: 'mg/L' },
        { keyVal: 'TDS', key: 'TDS', unit: 'mg/L' },
      ],
    },
    {
      key: 'Stream Property',
      subKey: [
        { key: 'Flow', keyVal: 'flow', unit: getUnitValue('Flow') },
        { key: 'Pressure', keyVal: 'press', unit: getUnitValue('Pressure') },
        { key: 'Temperature', keyVal: 'temp', unit: unit_set_dict.Temperature },
        { key: 'pH', keyVal: 'ph', unit: '' },
        { key: 'Alkalinity', keyVal: 'malk', unit: 'ppm CaCO3' },
        { key: 'Conductivity at 25°C', keyVal: 'conductivity', unit: 'µS/cm' },
        { key: 'Hardness', keyVal: 'hardness', unit: 'ppm as CaCO3' },
        { key: 'Density', keyVal: 'density', unit: 'kg/m3' },
        { key: 'Ionic Strength', keyVal: 'ionic_str', unit: '' },
        { key: 'Osm.Pressure', keyVal: 'Osm. Pressure', unit: getUnitValue('Pressure') },
      ],
    },
    {
      key: 'Saturation Data',
      subKey: [
        { key: 'BaSO4', keyVal: 'baso4', unit: '%' },
        { key: 'CaF2', keyVal: 'caf2', unit: '%' },
        { key: 'Mg(OH)2', keyVal: 'mgoh2', unit: '%' },
        { key: 'SiO2', keyVal: 'sio2', unit: '%' },
        { key: 'SrSO4', keyVal: 'srso4', unit: '%' },
        { key: 'Struvite', keyVal: 'struvite', unit: '%' },
        { key: 'LSI', keyVal: 'lsi', unit: '' },
        { key: 'S&DI', keyVal: 'sdi', unit: '' },
      ],
    },
  ];

  const sub_heading = ['1-8', '1-17', '1-20', '2-2', '2-7']; // where we need sub heading boarder by kranthi
  const Main_heading = []; // where we need Main heading boarder by kranthi
  return (
    <View>
      {/* Header of the page */}
      <View style={Styles.mainHeader} >
        <Text style={[Styles.mainHeaderText, { paddingRight: 5 }]} >{serialNum}. Feed-Product-Waste Summary</Text>
        {/* I reduced the line width to accommodate the text and added a margin left. --->kranthi */}
        <SubLine lineWidth='60%' lineHeight='24' />
      </View>
      {
        // Multiple tables accourding to steam numbers
        multiple_steams.map((values, ind) => {
          // calculating width for table column and column 1.
          const C1Width = `${(100/(values.length))*2}%`;
          const Cwidth = `${(100/(values.length))}%`;
          const C2width = `${((100/(values.length))*2)+5}%`;
          const C3width = `${((100/(values.length))*2)-5}%`;
          return (
            <View key={ind} break={ind > 0} style={[Styles.table, { marginTop: 15, width: '100%' }]}>
              <View style={Styles.tableRow}>
                {values.map((val, i) => {
                  // header row
                  return (
                    <View key={i} style={[
                      Styles.tableHeader, { width: Cwidth, borderTopRightRadius: 0 },
                      i === 0 && { borderTopLeftRadius: 5 },
                      i === 1 && { paddingLeft: 10, alignItems: 'left', width: C1Width },
                      i === values.length - 1 && { borderTopRightRadius: 5 },
                    ]}>
                      <Text style={[Styles.tableCellHeader]}>{val}</Text>
                    </View>
                  );
                })}
              </View>
              {
                key_value.map((keys, k_i) => {
                  return (
                    <View style={Styles.tableRow} key={k_i}>
                      <View style={[Styles.tableColumn, (k_i === key_value.length - 1) ? {
                        borderBottom: 0, borderBottomColor: '#818B8D'
                      } : { borderBottom: 1, borderBottomColor: '#818B8D' }]}>
                        <View style={Styles.tableRow}>
                          {/* grouping category for Steam Data */}
                          <View style={[Styles.tableRCText, { width: C1Width, height: 'auto' }]}>
                            <Text style={[Styles.tableCell, { margin: 'auto 0', textAlign: 'center', }]}>{keys.key}</Text>
                          </View>
                          <View>
                            <View style={Styles.tableColumn}>
                              {keys.subKey.map((subkey, i) => {
                                // looping key value of static data
                                return (
                                  <View style={Styles.tableRow} key={i}>
                                    <View style={[
                                      Styles.tableRCText,
                                      (Main_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                                      (sub_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' },
                                      {  alignItems: 'left', width: (C2width), padding: '0  5', overflow:'hidden'}
                                    ]}>
                                      <Text style={[Styles.tableCell, {width:'100%'}]}>{subkey.key}</Text>
                                    </View>
                                    <View style={[
                                      Styles.tableRCText, {width: (C3width)},
                                      (Main_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                                      (sub_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' }
                                    ]}>
                                      {(() => {
                                        if (subkey.keyVal === 'Information') {
                                          return <Text style={Styles.tableCell}>{feed_product_waste.Units[keys.key]}</Text>;
                                        }
                                        if (subkey.key === 'TDS') {
                                          return (<Text style={Styles.tableCell}>{feed_product_waste.Units[keys.key].tds}</Text>);
                                        }
                                        return <Text style={Styles.tableCell}>{feed_product_waste.Units[keys.key][subkey.key]}</Text>;
                                      })()}
                                    </View>
                                    {values.slice(2).map((val, h_i) => {
                                      // we are looping for multiple columns of Parameter values
                                      return (
                                        <View key={h_i} style={[
                                          Styles.tableRCText, {width: C1Width},
                                          (h_i === values.slice(2).length - 1) && { borderRightWidth: 0 },
                                          (Main_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                                          (sub_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' }
                                        ]}>
                                          {(() => {
                                            // checking for Stream Info data
                                            // we do have data in stream_ouput_data for data we getting that in ppm_dict ------> kranthi
                                            // checking for Ion Concentration and data is in  ppm_dict------> kranthi
                                            // checking for Stream Property and data is in  prop_dict------> kranthi
                                            // checking for Saturation Data and data is in  sat_indices------> kranthi
                                            if (subkey.keyVal === 'Information') {
                                              return (<Text style={[Styles.tableCell, {padding: '0 60% 0 5%'}]}>{feed_product_waste[val][keys.key]}</Text>);
                                            }
                                            if (subkey.key === 'TDS') {
                                              return (<Text style={Styles.tableCell}>{appendNumberText(feed_product_waste[val][keys.key].tds)}</Text>);
                                            }
                                            if (keys.key === 'Stream Property') {
                                              return (<Text style={Styles.tableCell}>{appendNumberText(feed_product_waste[val][keys.key][subkey.key])}</Text>);
                                            }
                                            return (<Text style={Styles.tableCell}>{appendNumberText(feed_product_waste[val][keys.key][subkey.key])}</Text>);
                                          })()}
                                        </View>
                                      );
                                    })}
                                  </View>);
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
}

export default DisplayFeedProductWaste;