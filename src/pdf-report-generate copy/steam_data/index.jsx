/* eslint-disable no-console */
/* eslint-disable max-len */
import React from 'react';
import { Text, View, Svg, Path } from '@react-pdf/renderer';
// import { Styles } from './steamDataStyles';
import SubLine from '../createLine';
import { Styles } from '../tableStyles';
// displaying Steam Data tabke in Report ----> Kranthi
function DisplaySteamData(props) {
  const { stream_ouput_data, stream_input_dict, unit_set_dict, serialNum, ediOutputData } = props;
  const hearder_val = ['Category', 'Parameter', 'Stream ID']; // Static Header values ----> Kranthi
  const header_val2 = [];
  const multiple_steams = [];
  // pushing all steam numbers in  empty array ----> Kranthi
  Object.keys(stream_ouput_data).forEach(element => {
    header_val2.push(element);
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
  // const C1Width = 70; // 2st Coloum Width ----> Kranthi
  // const C2Width = 105; // 2nd Coloum Width ----> Kranthi
  // const C3Width = 52; // 3rd Coloum Width ----> Kranthi
  // using this function we are handling values  ----> Kranthi
  const appendNumberText = (value, floatdecimal = 2) => {
    if (value === undefined) {
      return '-';
    }
    if (Number.isNaN(Number(value))) { // checking values is number or not ----> Kranthi
      const split_Val = value.split(' '); // spliting all the value with space ----> Kranthi
      if (split_Val.length > 1) { // checking split value have more that two vlaue  ----> Kranthi
        const num_val = Number(split_Val[0]).toFixed(floatdecimal);
        const text_val = split_Val[1];
        return `${num_val} ${text_val}`; // combing text and value ----> Kranthi
      }
      const split_perval = value.split('%'); // spliting all the value with % ----> Kranthi
      if (split_perval.length > 1) { // checking split value have more that two vlaue  ----> Kranthi
        const num_val = Number(split_perval[0]).toFixed(floatdecimal);
        return `${num_val}`; // showing text ----> Kranthi
      }
      return value;
    }
    return Number(value).toFixed(floatdecimal);
  };
  //  Static Values of category and parmeters -->Kranthi
  const key_value = [
    {
      key: 'Stream Info',
      subKey: [
        { key: 'Source Unitop', keyVal: 'source', unit: '' },
        { key: 'Destination Unitop', keyVal: 'destination', unit: '' },
      ],
    },
    {
      key: 'Ion Concentration',
      subKey: [
        { key: 'Calcium (Ca)', keyVal: 'Ca++', unit: 'mg/L' },
        { key: 'Magnesium (Mg)', keyVal: 'Mg++', unit: 'mg/L' },
        { key: 'Sodium (Na)', keyVal: 'Na+', unit: 'mg/L' },
        { key: 'Potassium (K)', keyVal: 'K+', unit: 'mg/L' },
        { key: 'Ammonia - N (NH4)', keyVal: 'NH4+', unit: 'mg/L' },
        { key: 'Barium (Ba)', keyVal: 'Ba++', unit: 'mg/L' },
        { key: 'Strontium (Sr)', keyVal: 'Sr++', unit: 'mg/L' },
        { key: 'Iron (Fe)', keyVal: 'Fe++', unit: 'mg/L' },
        { key: 'Manganese (Mn)', keyVal: 'Mn++', unit: 'mg/L' },
        { key: 'Sulfate (SO4)', keyVal: 'SO4--', unit: 'mg/L' },
        { key: 'Chloride (Cl)', keyVal: 'Cl-', unit: 'mg/L' },
        { key: 'Fluoride (F)', keyVal: 'F-', unit: 'mg/L' },
        { key: 'Nitrate (NO3)', keyVal: 'NO3-', unit: 'mg/L' },
        { key: 'Bromide (Br)', keyVal: 'Br-', unit: 'mg/L' },
        { key: 'Phosphate (PO4)', keyVal: 'PO4---', unit: 'mg/L' },
        { key: 'Boron (B)', keyVal: 'B-', unit: 'mg/L' },
        { key: 'Silica (SiO2)', keyVal: 'SiO2', unit: 'mg/L' },
        { key: 'Hydrogen Sulfide (H2S)', keyVal: 'H2S', unit: 'mg/L' },
        { key: 'Bicarbonate (HCO3)', keyVal: 'HCO3-', unit: 'mg/L' },
        { key: 'Carbon Dioxide (CO2)', keyVal: 'CO2', unit: 'mg/L' },
        { key: 'Carbonate (CO3)', keyVal: 'CO3--', unit: 'mg/L' },
        { key: 'TDS, mg/l', keyVal: 'TDS', unit: 'mg/L' },
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
        { key: 'Osm. Pressure', keyVal: 'osmotic_pressure', unit: getUnitValue('Pressure') },
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

      {
        // Multiple tables accourding to steam numbers
        multiple_steams.map((values, i) => {
          // calculating width for table column and column 1.
          // const C1Width = `${(100/(values.length))*1.5}%`;
          // const Cwidth = `${(100/(values.length))}%`;
          return (
            <>
              <View style={[Styles.mainHeader, { marginBottom: 15 }]} break={i > 0}>
                <Text style={[Styles.mainHeaderText, { paddingRight: 5 }]} >{serialNum}. Detailed Stream Data ({`${i + 1}/${multiple_steams.length}`})</Text>
                {/* I reduced the line width to accommodate the text and added a margin left. --->kranthi */}
                <SubLine lineWidth='66%' lineHeight='24' style={{ marginLeft: 5 }} />
              </View>
              <View key={i} style={[Styles.table, { margin: '0' }]}>
                <View style={Styles.tableRow}>
                  {values.map((val, i) => {
                    // header row
                    return (
                      <View key={i} style={[
                        Styles.tableHeader, { width: '100%', borderTopRightRadius: 0 },
                        i === 0 && { width: '150%', borderTopLeftRadius: 5 },
                        i === 1 && { paddingLeft: 10, alignItems: 'left', width: '150%', },
                        i === values.length - 1 && { borderTopRightRadius: 5 },
                      ]}>
                        {val === 'Stream ID' &&
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[Styles.tableCellHeader]}>{val} </Text>
                            <Svg xmlns="http://www.w3.org/2000/svg" height="10" viewBox="0 0 24 24" width="12" fill='#fff'><Path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" /></Svg>
                          </View>
                        }
                        {val !== 'Stream ID' && <Text style={[Styles.tableCellHeader]}>{val}</Text>}
                      </View>);
                  })}
                </View>
                {key_value.map((keys, k_i) => {
                  return (
                    <View style={Styles.tableRow} key={k_i}>
                      <View style={[Styles.tableColumn, (k_i === key_value.length - 1) ? {
                        borderBottom: 0, borderBottomColor: '#818B8D'
                      } : { borderBottom: 1, borderBottomColor: '#818B8D' }]}>
                        <View style={Styles.tableRow}>
                          {/* grouping category for Steam Data */}
                          <View style={[Styles.tableRCText, { width: '150%', height: 'auto' }]}>
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
                                      { paddingLeft: 10, alignItems: 'left', width: '150%', }
                                    ]}>
                                      <Text style={Styles.tableCell}>{keys.key === 'Ion Concentration' ? subkey.keyVal : subkey.key}</Text>
                                    </View>
                                    <View style={[
                                      Styles.tableRCText,
                                      (Main_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                                      (sub_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' },
                                      {}
                                    ]}>
                                      <Text style={Styles.tableCell}>{subkey.unit}</Text>
                                    </View>
                                    {values.slice(3).map((val, h_i) => {
                                      // we are looping for multiple columns of Parameter values
                                      return (
                                        <View key={h_i} style={[
                                          Styles.tableRCText,
                                          (h_i === values.slice(2).length - 1) && { borderRightWidth: 0 },
                                          (Main_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#818B8D' },
                                          (sub_heading.includes(`${k_i}-${i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' }, {}
                                        ]}>
                                          {(() => {
                                            // checking for Stream Info data
                                            // we do have data in stream_ouput_data for data we getting that in ppm_dict ------> kranthi
                                            // checking for Ion Concentration and data is in  ppm_dict------> kranthi
                                            // checking for Stream Property and data is in  prop_dict------> kranthi
                                            // checking for Saturation Data and data is in  sat_indices------> kranthi
                                            if (keys.key === 'Stream Info') {
                                              return (
                                                <Text style={Styles.tableCell}>{stream_input_dict[val][subkey.keyVal]}</Text>
                                              );
                                            }
                                            if (keys.key === 'Ion Concentration') {
                                              const flag = ediOutputData.filter((edio) => {
                                                return stream_ouput_data[val].label.toLowerCase().indexOf(edio.target) > 0;
                                              });
                                              if (subkey.keyVal === 'TDS') {
                                                if (flag.length > 0) {
                                                  return (
                                                    <Text style={Styles.tableCell}>{appendNumberText(stream_ouput_data[val].prop_dict.tds, 5)}</Text>
                                                  );
                                                }
                                                return (
                                                  <Text style={Styles.tableCell}>{appendNumberText(stream_ouput_data[val].prop_dict.tds, 3)}</Text>
                                                );
                                              }
                                              if (flag.length > 0) {
                                                return (
                                                  <Text style={Styles.tableCell}>{appendNumberText(stream_ouput_data[val].ppm_dict[subkey.keyVal], 5)}</Text>
                                                );
                                              }
                                              return (
                                                <Text style={Styles.tableCell}>{appendNumberText(stream_ouput_data[val].ppm_dict[subkey.keyVal], 3)}</Text>
                                              );
                                            }
                                            if (keys.key === 'Stream Property') {
                                              const flag = ediOutputData.filter((edio) => {
                                                return stream_ouput_data[val].label.toLowerCase().indexOf(edio.target) > 0;
                                              });
                                              if (subkey.keyVal === 'conductivity') {
                                                if (flag.length > 0) {
                                                  return (
                                                    <Text style={Styles.tableCell}>{appendNumberText(stream_ouput_data[val].sat_indices[subkey.keyVal], 4)}</Text>
                                                  );
                                                }
                                                return (
                                                  <Text style={Styles.tableCell}>{appendNumberText(stream_ouput_data[val].sat_indices[subkey.keyVal], 1)}</Text>
                                                );
                                              }
                                              if (subkey.keyVal === 'osmotic_pressure') {
                                                return (
                                                  <Text style={Styles.tableCell}>{appendNumberText(stream_ouput_data[val].sat_indices[subkey.keyVal])}</Text>
                                                );
                                              }
                                              return (
                                                <Text style={Styles.tableCell}>{appendNumberText(stream_ouput_data[val].prop_dict[subkey.keyVal])}</Text>
                                              );
                                            }
                                            return (
                                              <Text style={Styles.tableCell}>{appendNumberText(stream_ouput_data[val].sat_indices[subkey.keyVal])}</Text>
                                            );
                                          })()}
                                        </View>
                                      );
                                    })}
                                  </View>
                                );
                              })}
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </>
          );
        })}
    </View>
  );
}

export default DisplaySteamData;