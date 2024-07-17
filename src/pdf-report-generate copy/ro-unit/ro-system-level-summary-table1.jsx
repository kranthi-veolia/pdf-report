/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import SubLine from '../createLine';
import { Styles } from '../tableStyles';
import { membraneStyle } from './ro-unit-style';
import RationValWidth from '../fonts/font';
import TableHeader from '../header';

// Displaying Docked Summary Table
function ROSystemLevelSummary(props) {
  const { ro_system_dict, serialNum, system_units, rodata, tableWidth, pageWidth } = props;
  let { subSerialNum } = props;
  const hearder_val = ['RO Unit ID']; // Static Header values ----> Kranthi
  const header_val2 = [];
  const multiple_steams = [];
  // pushing all steam numbers in  empty array ----> Kranthi
  ro_system_dict['RO Unit ID'].forEach(element => {
    header_val2.push(element);
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
    { key: 'Upstream unit', KeyText: 'Upstream unit' },
    { key: 'Downstream unit', KeyText: 'Downstream unit' },
    { key: 'Feed Flow', KeyText: 'Feed Flow' },
    { key: 'Product Flow', KeyText: 'Product Flow' },
    { key: 'Concentrate Flow', KeyText: 'Concentrate Flow' },
    { key: 'RO Unit Recovery', KeyText: 'RO Unit Recovery' },
    { key: 'Average Flux', KeyText: 'Average Flux' },
    { key: 'Breakdown by Stage', KeyText: 'Breakdown by Stage' },
    { key: 'Total Membrane Area', KeyText: 'Total Membrane Area ' },
    { key: 'Feed Temperature', KeyText: 'Feed Temperature' },
    { key: 'Feed Pressure', KeyText: 'Feed Pressure' },
    { key: 'Interstage Pressure', KeyText: 'Interstage Pressure' },
    { key: 'Product Pressure *', KeyText: 'Product Pressure *' },
    { key: 'Feed TDS', KeyText: 'Feed TDS' },
    { key: 'Feed pH', KeyText: 'Feed pH' },
    { key: 'Permeate TDS', KeyText: 'Permeate TDS' },
    { key: 'Permeate pH', KeyText: 'Permeate pH' },
    { key: 'Concentrate TDS', KeyText: 'Concentrate TDS' },
    { key: 'Concentrate pH', KeyText: 'Concentrate pH' },
  ];
  const sub_heading = ['0-0', '0-5', '0-14', '0-16']; // where we need sub heading boarder ---> Kranthi
  const Main_heading = ['0-1', '0-8', '0-12']; // where we need Main heading boarder ---> Kranthi

  let tablewidth = 1140;
  let headercount = 1;
  let defaultUnit = { 'Volume Flow': 'm3/hr', 'Pressure': 'bar', 'Temperature': '?C', 'Liquid Volume': 'gal', 'Flux': 'gfd', 'Power': 'kW' };
  defaultUnit = system_units || defaultUnit;
  tablewidth = tableWidth;
  const herder_val = [
    'Stage',
    'Housing',
    'Elements',
    'Element Type',
    'Element Age            (yr) ',
    { header1: `Pressure Change, ${defaultUnit.Pressure}`, header2: ['Boost', 'Loss'] },
    `Permeate P  (${defaultUnit.Pressure})`,
    rodata.abFactor === 0 ? 'A-Value ACP' : 'A-Factor',
    rodata.abFactor === 0 ? 'B-Value ACP' : 'B-Factor'
  ];
  const clroHeaderVal = [
    'Stage',
    'Housing',
    'Elements',
    'Spacers per             Vessel',
    'Element Type',
    'Element Age                   (yr)',
    `Permeate P       (${defaultUnit.Pressure})`,
    rodata.abFactor === 0 ? 'A-Value ACP' : 'A-Factor',
    rodata.abFactor === 0 ? 'B-Value ACP' : 'B-Factor'
  ];
  headercount = herder_val.length;
  const createContent = (items, unit_type) => {
    return (
      <View style={{ width: '100%' }}>
        {items.map((typeData, typeindex) => {
          if (typeData.pressureVessels === 0) {
            return <Text key={typeindex} />;
          }
          return (
            <View
              style={[
                membraneStyle.tablebodyRow1, { width: RationValWidth(tablewidth), margin: '0 auto' }
              ]}
              key={typeindex}
            >
              <View
                style={[
                  membraneStyle.flexDirection,
                  { width: RationValWidth(tablewidth) }
                ]}>
                {(() => {
                  let arrayData = ['stage', 'pressureVessels', 'elementsperVessel', 'elementModel', 'elementAge', 'interStageBoostPressure', 'interStagePressureLoss', 'permeatePressure', 'fluxAnnual', 'saltPassageAnnual'];
                  if (unit_type === 'CLRO') {
                    arrayData = ['stage', 'pressureVessels', 'elementsperVessel', 'spacersperVessel', 'elementModel', 'elementAge', 'permeatePressure', 'fluxAnnual', 'saltPassageAnnual'];
                  }
                  return arrayData.map((data, ind) => {
                    return (
                      <View key={ind} style={[membraneStyle.tablebodyCol1, ind === headercount && { borderRight: 0 }, { padding: '0 5' }]}>
                        {(() => {
                          if (data === 'fluxAnnual' || data === 'saltPassageAnnual') {
                            if (rodata.abFactor === 0) {
                              return (
                                <Text style={[membraneStyle.tableCell, { padding: '5 0' }]}>
                                  {data === 'fluxAnnual' && (Number(typeData[data]) === 1 ? '5.00' : typeData[data])}
                                  {data === 'saltPassageAnnual' && (Number(typeData[data]) === 1 ? '7.00' : typeData[data])}
                                </Text>
                              );
                            }
                            return (
                              <Text style={[membraneStyle.tableCell, { padding: '5 0' }]}>
                                {data === 'fluxAnnual' && (Number(typeData[data]) === 5 ? '1.00' : typeData[data])}
                                {data === 'saltPassageAnnual' && (Number(typeData[data]) === 7 ? '1.00' : typeData[data])}
                              </Text>
                            );
                          }
                          if (data === 'elementModel') {
                            return (
                              <Text style={[membraneStyle.tableCell, { padding: '5 0' }]}>
                                {(() => {
                                  if (typeData[data]) {
                                    return typeData[data].split('').map((text, textInd) => {
                                      return <Text key={textInd} style={{ border: 1 }}>{text}</Text>;
                                    });
                                  }
                                  return '0.00';
                                })()}
                              </Text>
                            );
                          }
                          return (<Text style={[membraneStyle.tableCell, { padding: '5 0' }]}>{typeData[data] || '0.00'}</Text>);
                        })()}
                      </View>
                    );
                  });
                })()}
              </View>
            </View>
          );
        })}
      </View >
    );
  };
  return (
    <View>
      {/* Header of Stripper Summary ---> Kranthi */}
      <View style={Styles.mainHeader}>
        <Text style={[Styles.mainHeaderText, { paddingRight: 5 }]}>{serialNum}. RO Unitop System-Level Summary</Text>
        {/* I reduced the line width to accommodate the text and added a margin left. --->kranthi */}
        <SubLine lineWidth='57%' lineHeight='24' style={{ marginLeft: 5 }} />
      </View>
      {/* sub HEading of Stripper Summary ---> Kranthi */}
      <View style={[Styles.subHeader, { marginTop: 15, marginBottom: RationValWidth(25) }]}>
        {/* <SubLine lineWidth='10px' lineHeight='12' /> */}
        {/* <Text style={{ marginTop: -4, paddingLeft: 5, color: '#0062A9' }}>&#95;&#95;</Text> */}
        <Text style={{ paddingLeft: 0 }}>{serialNum}.{subSerialNum++}</Text>
        <Text style={{ paddingLeft: 5 }}>Docked Summary</Text>
      </View>
      {/* Multiple tables accourding to steam numbers */}
      {multiple_steams.map((values, ind) => {
        return (
          <>
            <View key={ind} style={[Styles.table, { width: '100%' }]}>
              <View break>
                <View style={Styles.tableRow}>
                  <Text style={Styles.tableCellTextHeader} >Total Number of RO Unitop = {ro_system_dict['RO Unit ID'].length}</Text>
                </View>
                <View style={Styles.tableRow}>
                  {values.map((val, i) => {
                    // calculating width for table column and column 1.
                    const C1Width = `${(100 / (values.length)) * 2}%`;
                    const Cwidth = `${(100 / (values.length))}%`;
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
                        (sub_heading.includes(`0-${k_i}`)) && { borderBottom: 1, borderBottomColor: '#ACB5BE' },
                      ]}>
                        <Text style={Styles.tableCell}>{ro_system_dict.units[keys.key]}</Text>
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
                              // checking for Stream Info data
                              // we do have data in stream_ouput_data for data we getting that in ppm_dict ------> kranthi
                              // checking for Ion Concentration and data is in  ppm_dict------> kranthi
                              // checking for Stream Property and data is in  prop_dict------> kranthi
                              // checking for Saturation Data and data is in  sat_indices------> kranthi
                              if (keys.key === 'Downstream unit') {
                                return (
                                  ro_system_dict[val][keys.key].split(',').map((unitops, index) => {
                                    return (unitops !== ' ' && <Text key={index} style={Styles.tableCell}>{unitops}</Text>);
                                  })
                                );
                              }
                              if (keys.key === 'Breakdown by Stage' || keys.key === 'Interstage Pressure') {
                                let split_array = ro_system_dict[val][keys.key].split(',').map((unitops) => {
                                  if (unitops.trim()) {
                                    if (defaultUnit.Flux === 'm/s' && keys.key === 'Breakdown by Stage') {
                                      return Number(unitops).toExponential(2);
                                    }
                                    return Number(unitops).toFixed(2);
                                  }
                                  return '';
                                });
                                split_array = split_array.filter((ele) => ele);
                                return (
                                  <Text style={Styles.tableCell}>{split_array.join(', ')}</Text>
                                );
                              }
                              if (keys.key === 'Number of E-Cell EDI Stack') {
                                return (<Text style={Styles.tableCell}>{ro_system_dict[val][keys.key].toFixed(0)}</Text>);
                              } if (keys.key === 'Co-Current Flow' || keys.key === 'Upstream unit') {
                                return (<Text style={Styles.tableCell}>{ro_system_dict[val][keys.key]}</Text>);
                              }
                              if ((keys.key === 'Average Flux' || keys.key === 'Breakdown by Stage') && defaultUnit.Flux === 'm/s') {
                                return (<Text style={Styles.tableCell}>{ro_system_dict[val][keys.key].toExponential(2)}</Text>);
                              }
                              return (<Text style={Styles.tableCell}>{ro_system_dict[val][keys.key].toFixed(2)}</Text>);

                            })()}
                          </View>);
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
            {(multiple_steams.length - 1 === ind) && (
              <View id="dynamic-height" style={{ marginTop: 10 }}>
                <View style={[membraneStyle.textHeader, { width: RationValWidth(pageWidth) }]}>
                  {/* <SubLine lineWidth='10px' lineHeight='12' /> */}
                  {/* <Text style={{ marginTop: -4, paddingLeft: 5, color: '#0062A9' }}>&#95;&#95;</Text> */}
                  <Text style={{ paddingLeft: 0 }}>{serialNum}.{subSerialNum}</Text>
                  <Text style={{ paddingLeft: 5 }}> Detailed Design </Text>
                </View>
                <View>
                  {Object.keys(rodata.ro_dict).length > 0 && Object.keys(rodata.ro_dict).map((ele, ind) => {
                    return (
                      <View key={ind} style={{ width: RationValWidth(tablewidth), margin: '10 auto 0 auto' }}>
                        <View break>
                          <View style={[membraneStyle.textHeader]}>
                            {/* <Text style={{ marginTop: -4, color: '#0062A9' }}>&#95;&#95;</Text> */}
                            <Text style={{ paddingLeft: 0 }}>{serialNum}.{subSerialNum}.{++ind}</Text>
                            <Text style={{ paddingLeft: 5 }}> {ele} Array Design </Text>
                          </View>
                          <View style={[membraneStyle.mainTable, { marginTop: 10 }]}>
                            {(() => {
                              if (rodata.ro_dict[ele].unit_type === 'CLRO') {
                                headercount = clroHeaderVal.length;
                                return <TableHeader tableWidth={tablewidth} headerval={clroHeaderVal} />;
                              }
                              headercount = herder_val.length;
                              return <TableHeader tableWidth={tablewidth} headerval={herder_val} />;
                            })()}
                            {createContent(rodata.ro_dict[ele]['grid-data'], rodata.ro_dict[ele].unit_type)}
                          </View>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            )}
          </>
        );
      })}
    </View>
  );
}

export default ROSystemLevelSummary;
