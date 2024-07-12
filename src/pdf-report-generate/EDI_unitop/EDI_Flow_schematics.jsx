/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { Text, View, StyleSheet, Svg, Line, Path, G } from '@react-pdf/renderer';
import SubLine from '../createLine';
import { ArialB600, RationValWidth } from '../fonts/font';

const borderColor = '#B3D3D7';
const EDIFSstyles = StyleSheet.create({
  EDIFlowschematics: {
    marginTop: 12,
    width: '99%',
  },
  Box: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: '20',
    margin: '5'
  },
  subBox: {
    width: '25%',
    display: 'flex',
    alignItems: 'center',
    fontSize: RationValWidth(25),
    justifyContent: 'center',
    fontFamily: ArialB600,
    backgroundColor: '#ADEBF3',
    margin: 1
  },
  LeftArrow: {
    justifyContent: 'center',
    width: '122px',
  },
  DiluteBox: {
    flexDirection: 'row',
    margin: '0 auto',
    height: RationValWidth(115),
  },
  DetailsBox: {
    flexDirection: 'column',
    margin: '0 auto',
  },
  TextStyle: {
    fontFamily: ArialB600,
    fontSize: RationValWidth(14),
  },
  HeadTextStyle: {
    fontFamily: ArialB600,
    fontSize: RationValWidth(16),
  },
  subHeader: {
    flexDirection: 'row',
    fontSize: RationValWidth(20),
    color: '#272B30',
    fontFamily: ArialB600
  }
});
// Displaying EDI Flow SChematics diagram
const EDIFlowschematics = (props) => {
  const { EDIoutput, system_summary, serialNum } = props;
  let { subSerialNum } = props;
  // schematics data
  const EDISchematics = EDIoutput.output_user.dilution_output;
  // checking for Co- current flow
  const checkCurrentFlow = (val) => {
    if (system_summary[val]) { // checking for array in system_summary Array
      if (system_summary[val]['Co-Current Flow'] === 'Yes') {
        return true;
      }
      return false;
    }
    return false;
  };

  return (
    <>
      {system_summary['EDI Unit ID'].map((val, i) => {
        return (
          <View key={i} style={EDIFSstyles.EDIFlowschematics} break>
            <View style={[EDIFSstyles.subHeader, { marginTop: 10 }]}>
              {/* <SubLine lineWidth='10px' lineHeight='12' /> */}
              {/* <Text style={{ marginTop: -4, paddingLeft: 15, color: '#0062A9' }}>&#95;&#95;</Text> */}
              <Text style={{ paddingLeft: 0 }}>{serialNum}.{subSerialNum++}</Text>
              <Text style={{ paddingLeft: 5 }}>EDI Schematic</Text>
            </View>
            <View style={EDIFSstyles.Box}>
              <View style={EDIFSstyles.DetailsBox}>
                <View style={EDIFSstyles.LeftArrow} />
                <Text style={EDIFSstyles.HeadTextStyle}>Current/Stack = {EDISchematics.current_stack.toFixed(2)} A</Text>
                <Text style={EDIFSstyles.HeadTextStyle}>Stack Voltage = {EDISchematics.voltage.toFixed(2)} V</Text>
                <Text style={EDIFSstyles.HeadTextStyle}>Energy Consumption = {EDISchematics.energy_cons.toFixed(2)} kWh/ m3</Text>
                <Text style={EDIFSstyles.HeadTextStyle}>Maximum Recovery = {EDISchematics.max_all_recovery.toFixed(2)} %</Text>
                <View style={EDIFSstyles.LeftArrow} />
              </View>

              {/* Starts Dilute by kranthi */}
              <View style={EDIFSstyles.DiluteBox}>
                <View style={EDIFSstyles.LeftArrow}>
                  <Text style={EDIFSstyles.TextStyle}>Feed pressure = {EDISchematics.feed_pressure.toFixed(2)} {system_summary.units['Feed Pressure']}</Text>
                  <Text style={EDIFSstyles.TextStyle}>Feed Flow = {EDISchematics.feed_flow.toFixed(2)}  {system_summary.units['Feed Flow']}</Text>
                  <Svg width='122.837' height='20.559' viewBox='0 0 262.837 20.559'>
                    <G id='Group_28523' transform='translate(0)'>
                      <Line x1='0' y1='0' x2='255.615' y2='0' transform='translate(0 10.277)' fill='none' stroke='#07a1b7' strokeWidth='2' />
                      <Path id='Path_34076' d='M-15326.48,8311.508v17.863l10.281-10.279-10.281-10.279Z' transform='translate(15579.037 -8308.813)' fill='#07a1b7' />
                    </G>
                  </Svg>
                </View>
                <View style={[EDIFSstyles.subBox, { borderTopLeftRadius: 5, borderTopRightRadius: 5 }]}>
                  <Text>Dilute</Text>
                </View>
                <View style={EDIFSstyles.LeftArrow}>
                  <Text style={EDIFSstyles.TextStyle}>Product pressure = {EDISchematics.prod_pressure.toFixed(2)} {system_summary.units['Feed Pressure']}</Text>
                  <Text style={EDIFSstyles.TextStyle}>Product Flow = {EDISchematics.prod_flow.toFixed(2)}  {system_summary.units['Feed Flow']}</Text>
                  <Svg width='122.837' height='20.559' viewBox='0 0 262.837 10.559'>
                    <G id='Group_28523' transform='translate(0)'>
                      <Line x1='0' y1='0' x2='255.615' y2='0' transform='translate(0 10.277)' fill='none' stroke='#07a1b7' strokeWidth='2' />
                      <Path id='Path_34076' d='M-15326.48,8311.508v17.863l10.281-10.279-10.281-10.279Z' transform='translate(15579.037 -8308.813)' fill='#07a1b7' />
                    </G>
                  </Svg>
                </View>
              </View>
              {/* Ends Dilute by kranthi */}
              {/* Starts checking for co-current flow by kranthi */}
              {checkCurrentFlow(val) ?
                (
                  <View style={EDIFSstyles.DiluteBox}>
                    <View style={EDIFSstyles.LeftArrow}>
                      <Text style={EDIFSstyles.TextStyle}>Max. Conc. inlet pressure = {EDISchematics.max_conc_inlet_press.toFixed(2)}  {system_summary.units['Feed Pressure']}</Text>
                      <Svg width='122.837' height='20.559' viewBox='0 0 262.837 20.559'>
                        <G id='Group_28523' transform='translate(0)'>
                          <Line x1='0' y1='0' x2='255.615' y2='0' transform='translate(0 10.277)' fill='none' stroke='#07a1b7' strokeWidth='2' />
                          <Path id='Path_34076' d='M-15326.48,8311.508v17.863l10.281-10.279-10.281-10.279Z' transform='translate(15579.037 -8308.813)' fill='#07a1b7' />
                        </G>
                      </Svg>
                    </View>
                    <View style={[EDIFSstyles.subBox]}>
                      <Text>Concentrate</Text>
                    </View>
                    <View style={EDIFSstyles.LeftArrow}>
                      <Text style={EDIFSstyles.TextStyle}>Max. Conc. outlet pressure = {EDISchematics.max_conc_outlet_press.toFixed(2)}  {system_summary.units['Feed Pressure']}</Text>
                      <Text style={EDIFSstyles.TextStyle}>Conc. Bleed flow = {EDISchematics.conc_bleed_flow.toFixed(2)}  {system_summary.units['Feed Flow']}</Text>
                      <Svg width='122.837' height='20.559' viewBox='0 0 262.837 20.559'>
                        <G id='Group_28523' transform='translate(0)'>
                          <Line x1='0' y1='0' x2='255.615' y2='0' transform='translate(0 10.277)' fill='none' stroke='#07a1b7' strokeWidth='2' />
                          <Path id='Path_34076' d='M-15326.48,8311.508v17.863l10.281-10.279-10.281-10.279Z' transform='translate(15579.037 -8308.813)' fill='#07a1b7' />
                        </G>
                      </Svg>
                    </View>
                  </View>
                ) : (
                  <View style={EDIFSstyles.DiluteBox}>
                    <View style={EDIFSstyles.LeftArrow}>
                      <Text style={EDIFSstyles.TextStyle}>Max. Conc. outlet pressure = {EDISchematics.max_conc_outlet_press.toFixed(2)}  {system_summary.units['Feed Pressure']}</Text>
                      <Text style={EDIFSstyles.TextStyle}>Conc. Bleed flow = {EDISchematics.conc_bleed_flow.toFixed(2)}  {system_summary.units['Feed Flow']}</Text>
                      <Svg width='122.447' height='20.559' viewBox='0 0 262.447 20.559'>
                        <Line x2='0' y1='0' x1='255.226' y2='0' transform='translate(7.222 10.277)' fill='none' stroke='#07a1b7' strokeWidth='2' />
                        <Path d='M-15316.2,8311.508v17.863l-10.281-10.279,10.281-10.279Z' transform='translate(15326.48 -8308.813)' fill='#07a1b7' />
                      </Svg>
                    </View>
                    <View style={[EDIFSstyles.subBox]}>
                      <Text>Concentrate</Text>
                    </View>
                    <View style={EDIFSstyles.LeftArrow}>
                      <Text style={EDIFSstyles.TextStyle}>Max. Conc. inlet pressure = {EDISchematics.max_conc_inlet_press.toFixed(2)}  {system_summary.units['Feed Pressure']}</Text>
                      <Svg width='122.447' height='20.559' viewBox='0 0 262.447 20.559'>
                        <Line x2='0' y1='0' x1='255.226' y2='0' transform='translate(7.222 10.277)' fill='none' stroke='#07a1b7' strokeWidth='2' />
                        <Path d='M-15316.2,8311.508v17.863l-10.281-10.279,10.281-10.279Z' transform='translate(15326.48 -8308.813)' fill='#07a1b7' />
                      </Svg>
                    </View>
                  </View>
                )}
              {/* Ends checking for co-current flow by kranthi */}
              {/* Starts Electrode by kranthi */}
              <View style={EDIFSstyles.DiluteBox}>
                <View style={EDIFSstyles.LeftArrow} />
                <View style={[EDIFSstyles.subBox, { borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }]}>
                  <Text>Electrode</Text>
                </View>
                <View style={EDIFSstyles.LeftArrow}>
                  <Text style={EDIFSstyles.TextStyle}>Max. Electrode Bleed Pressure = {EDISchematics.max_electrode_bleed_press.toFixed(2)}  {system_summary.units['Feed Pressure']}</Text>
                  <Text style={EDIFSstyles.TextStyle}>Electrode Bleed flow = {EDISchematics.electrode_bleed_flow.toFixed(2)}  {system_summary.units['Feed Flow']}</Text>
                  <Svg width='122.837' height='20.559' viewBox='0 0 262.837 20.559'>
                    <G id='Group_28523' transform='translate(0)'>
                      <Line x1='0' y1='0' x2='255.615' y2='0' transform='translate(0 10.277)' fill='none' stroke='#07a1b7' strokeWidth='2' />
                      <Path id='Path_34076' d='M-15326.48,8311.508v17.863l10.281-10.279-10.281-10.279Z' transform='translate(15579.037 -8308.813)' fill='#07a1b7' />
                    </G>
                  </Svg>
                </View>
              </View>
              {/* Ends Electrode by kranthi */}
            </View>
          </View>
        );
      })}
    </>
  );
};

export default EDIFlowschematics;