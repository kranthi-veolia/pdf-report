/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import SubLine from '../createLine';
import { Styles } from '../tableStyles';

const borderColor = '#B3D3D7';
// Displaying Docked Summary Table
function MixerSplitter(props) {
  const { mixer_splitter, serialNum } = props;
  let { subSerialNum } = props;
  const hearder_val = ['Mixer-Splitter Unit ID']; // Static Header values ----> Kranthi
  const header_val2 = [].concat(mixer_splitter['Mixer-Splitter Unit ID']);
  const multiple_steams = [];
  // pushing all steam numbers in  empty array ----> Kranthi

  // we are spliting steam data into multiple array with consisting of 6 steam in every single array ----> Kranthi
  while (header_val2.length > 0) {
    multiple_steams.push(hearder_val.concat(header_val2.splice(0, 5)));
  }
  const addUnitsInMixerSplitter = () => {
    const obj = {};
    if (mixer_splitter.mixer_nos)
      Object.keys(mixer_splitter[mixer_splitter['Mixer-Splitter Unit ID'][0]]).map((ele) => {
        let str = '-';
        if (ele === 'Split Ratios') {
          str = '(user input)';
        } else if (ele === 'Mix Ratios') {
          str = '(calculated)';
        }
        obj[ele] = str;
        return ele;
      });
    mixer_splitter.units = obj;
  };
  if (!mixer_splitter.units)
    addUnitsInMixerSplitter();
  // const C1Width = 195; // 2st Coloum Width ----> Kranthi
  const C2Width = 70; // 2nd Coloum Width ----> Kranthi
  const C3Width = 70; // 3rd Coloum Width ----> Kranthi
  //  Static Values of category and parmeters -->Kranthi
  const key_value = [
    { key: 'Upstream unit', KeyText: 'Upstream unit' },
    { key: 'Downstream unit', KeyText: 'Downstream unit' },
    { key: 'Inlet Stream ID', KeyText: 'Inlet Stream ID' },
    { key: 'Outlet Stream ID', KeyText: 'Outlet Stream ID' },
    { key: 'Mode', KeyText: 'Mode' },
    { key: 'Mix Ratios', KeyText: 'Mix Ratios' },
    { key: 'Split Ratios', KeyText: 'Split Ratios' },
  ];
  return (
    <View>
      <View style={Styles.mainHeader}>
        <Text style={[Styles.mainHeaderText, { paddingRight: 5 }]}>{serialNum}. Mixer-Splitter Unitop Summary</Text>
        <SubLine lineWidth='59%' lineHeight='24' style={{ marginLeft: 5 }} />
      </View>
      {/* I reduced the line width to accommodate the text and added a margin left. --->kranthi */}
      <View style={[Styles.subHeader, { marginTop: 15 }]}>
        {/* <SubLine lineWidth='10px' lineHeight='12' /> */}
        {/* <Text style={{ marginTop: -4, paddingLeft: 15, color: '#0062A9' }}>&#95;&#95;</Text> */}
        <Text style={{ paddingLeft: 0 }}>{serialNum}.{subSerialNum++}</Text>
        <Text style={{ paddingLeft: 5 }}>Docked Summary</Text>
      </View>
      {/* Multiple tables accourding to steam numbers */}
      {multiple_steams.map((values, ind) => {
        return (
          // <View key={ind} break={ind > 1} style={[Styles.table, { marginTop: 10, width: (195 + ((values.length - 1) * 70)), borderWidth: 1, borderColor }]}>
          <View key={ind} break={ind > 1} style={[Styles.table, { marginTop: 10, width: '100%', borderWidth: 1, borderColor: '#002D62' }]}>
            <View style={Styles.tableRow}>
              <Text style={Styles.tableCellTextHeader} >Total Number of Mixer-Splitter = {mixer_splitter.mixer_nos}</Text>
            </View>
            <View style={Styles.tableRow}>
              {/* header row */}
              {values.map((val, i) => {
                // calculating width for table column and column 1.
                const C1Width = `${(100 / (values.length)) * 2}%`;
                const Cwidth = `${(100 / (values.length))}%`;
                return (
                  <View key={i} style={[
                    Styles.tableHeader, { width: Cwidth, borderTop: 1, borderBottom: 1, borderRight: 1, borderRightColor: borderColor, borderTopColor: borderColor, borderBottomColor: borderColor },
                    (i === 0 && { width: C1Width, paddingLeft: 10, alignItems: 'left' }),
                    i === values.length - 1 && { borderRight: 0 }
                  ]}>
                    <Text style={[Styles.tableCellHeader]}>{val}</Text>
                  </View>
                );
              })}
            </View>
            {key_value.map((keys, k_i) => {
              return (
                <View style={[Styles.tableRow]} key={k_i}>
                  <View style={[
                    Styles.tableRCText,
                    { borderBottom: 1, borderBottomColor: borderColor, paddingLeft: 10, alignItems: 'left' },
                    k_i === key_value.length - 1 && { borderBottom: 0 }
                  ]}>
                    <Text style={Styles.tableCell}>{keys.KeyText}</Text>
                  </View>
                  {/*   units of Unitop ID  */}
                  <View style={[
                    Styles.tableRCText, { borderBottom: 1, borderBottomColor: borderColor },
                    k_i === key_value.length - 1 && { borderBottom: 0 }
                  ]}>
                    <Text style={Styles.tableCell}>{mixer_splitter.units[keys.key]}</Text>
                  </View>
                  {/* we are looping for multiple columns of Parameter values */}
                  {values.slice(1).map((val, h_i) => {
                    return (
                      <View key={h_i}
                        style={[
                          Styles.tableRCText, { borderBottom: 1, borderBottomColor: borderColor },
                          k_i === key_value.length - 1 && { borderBottom: 0 },
                          h_i === values.slice(1).length - 1 && { borderRight: 0 }
                        ]}>
                        {(() => {
                          if (Object.prototype.toString.call(mixer_splitter[val][keys.key]) === '[object String]') {
                            let data = mixer_splitter[val][keys.key].trim();
                            if (data.toLowerCase() === 'na') {
                              return (<Text style={Styles.tableCell}>{data.toUpperCase()}</Text>);
                            }
                            if (data.slice(-1) === ',') {
                              data = data.slice(0, -1);
                            }
                            return (<Text style={Styles.tableCell}>{data}</Text>);
                          }
                          if (Object.prototype.toString.call(mixer_splitter[val][keys.key]) === '[object Array]') {
                            return (<Text style={Styles.tableCell}>{mixer_splitter[val][keys.key].join(', ')}</Text>);
                          }
                          return (<Text style={Styles.tableCell}>{mixer_splitter[val][keys.key]}</Text>);
                        })()}
                      </View>);
                  })}
                </View>);
            })}
          </View>
        );
      })}
      {/* <View style={{ fontFamily: ArialB600, fontSize: RationValWidth(18), backgroundColor: 'yellow', color: '#2c2c2c' }}>
        <Text>Note that the ratios are colon (:) delimited, whereas the stream IDs are comma-separated</Text>
      </View> */}
    </View>
  );
}
export default MixerSplitter;