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
    borderColor: '#002D62',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: '20',
    margin: '5'
  },
  subBox: {
    width: '35%',
    display: 'flex',
    alignItems: 'center',
    fontSize: RationValWidth(25),
    justifyContent: 'center',
    fontFamily: ArialB600,
    backgroundColor: '#FFF',
    margin: 1,
    color:'#002D62',
    border: '1px solid #002D62'
  },
  LeftArrow: {
    justifyContent: 'center',
    alignItems:'center',
    width: '135px',
  },
  LeftArrow1: {
    justifyContent: 'flex-end',
    alignItems:'flex-end',
    width: '135px',
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
  DetailsBox1: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems:'flex-end',
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
              <Text style={{ paddingLeft: 0 }}>{serialNum}.{subSerialNum++}</Text>
              <Text style={{ paddingLeft: 5 }}>EDI Schematic</Text>
            </View>
            <View style={EDIFSstyles.Box}>
              <View style={EDIFSstyles.DetailsBox1}><Text style={EDIFSstyles.TextStyle}>Flow Configuration - {EDISchematics['Flow Configuration']}</Text></View>
              <View style={EDIFSstyles.DetailsBox}>
                <Text style={EDIFSstyles.HeadTextStyle}>Current/Stack = {EDISchematics.current_stack.toFixed(2)} A</Text>
                <Text style={EDIFSstyles.HeadTextStyle}>Stack Voltage = {EDISchematics.voltage.toFixed(2)} V</Text>
                <Text style={EDIFSstyles.HeadTextStyle}>Energy Consumption = {EDISchematics.energy_cons.toFixed(2)} kWh/ m3</Text>
                <Text style={EDIFSstyles.HeadTextStyle}>Maximum Recovery = {EDISchematics.max_all_recovery.toFixed(2)} %</Text>
              </View>

              {/* Starts Dilute by kranthi */}
              <View style={EDIFSstyles.DiluteBox}>
                <View style={EDIFSstyles.LeftArrow}>
                  <Text style={EDIFSstyles.TextStyle}>Feed pressure = {EDISchematics.feed_pressure.toFixed(2)} {system_summary.units['Feed Pressure']}</Text>
                  <Text style={EDIFSstyles.TextStyle}>Feed Flow = {EDISchematics.feed_flow.toFixed(2)}  {system_summary.units['Feed Flow']}</Text>
                  <Svg width='152.837' height='10.559' viewBox='0 0 262.837 20.559'>
                    <G id='Group_28523' transform='translate(0)'>
                      <Line x1='0' y1='0' x2='255.615' y2='0' transform='translate(0 10.277)' fill='none' stroke='#002D62' strokeWidth='2' />
                      <Path id='Path_34076' d='M-15326.48,8311.508v17.863l10.281-10.279-10.281-10.279Z' transform='translate(15579.037 -8308.813)' fill='#002D62' />
                    </G>
                  </Svg>
                </View>
                <View style={[EDIFSstyles.subBox, { borderTopLeftRadius: 5, borderTopRightRadius: 5 }]}>
                  <Text>Dilute</Text>
                </View>
                <View style={EDIFSstyles.LeftArrow}>
                  <Text style={EDIFSstyles.TextStyle}>Product pressure = {EDISchematics.prod_pressure.toFixed(2)} {system_summary.units['Feed Pressure']}</Text>
                  <Text style={EDIFSstyles.TextStyle}>Product Flow = {EDISchematics.prod_flow.toFixed(2)}  {system_summary.units['Feed Flow']}</Text>
                  <Svg width='152.837' height='10.559' viewBox='0 0 262.837 20.559'>
                    <G id='Group_28523' transform='translate(0)'>
                      <Line x1='0' y1='0' x2='255.615' y2='0' transform='translate(0 10.277)' fill='none' stroke='#002D62' strokeWidth='2' />
                      <Path id='Path_34076' d='M-15326.48,8311.508v17.863l10.281-10.279-10.281-10.279Z' transform='translate(15579.037 -8308.813)' fill='#002D62' />
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
                      <Svg width='152.837' height='10.559' viewBox='0 0 262.837 20.559'>
                        <G id='Group_28523' transform='translate(0)'>
                          <Line x1='0' y1='0' x2='255.615' y2='0' transform='translate(0 10.277)' fill='none' stroke='#002D62' strokeWidth='2' />
                          <Path id='Path_34076' d='M-15326.48,8311.508v17.863l10.281-10.279-10.281-10.279Z' transform='translate(15579.037 -8308.813)' fill='#002D62' />
                        </G>
                      </Svg>
                    </View>
                    <View style={[EDIFSstyles.subBox]}>
                      <Text>Concentrate</Text>
                    </View>
                    <View style={EDIFSstyles.LeftArrow}>
                      <Text style={EDIFSstyles.TextStyle}>Max. Conc. outlet pressure = {EDISchematics.max_conc_outlet_press.toFixed(2)}  {system_summary.units['Feed Pressure']}</Text>
                      <Text style={EDIFSstyles.TextStyle}>Conc. Bleed flow = {EDISchematics.conc_bleed_flow.toFixed(2)}  {system_summary.units['Feed Flow']}</Text>
                      <Svg width='152.837' height='10.559' viewBox='0 0 262.837 20.559'>
                        <G id='Group_28523' transform='translate(0)'>
                          <Line x1='0' y1='0' x2='255.615' y2='0' transform='translate(0 10.277)' fill='none' stroke='#002D62' strokeWidth='2' />
                          <Path id='Path_34076' d='M-15326.48,8311.508v17.863l10.281-10.279-10.281-10.279Z' transform='translate(15579.037 -8308.813)' fill='#002D62' />
                        </G>
                      </Svg>
                    </View>
                  </View>
                ) : (
                  <View style={EDIFSstyles.DiluteBox}>
                    <View style={EDIFSstyles.LeftArrow}>
                      <Text style={EDIFSstyles.TextStyle}>Max. Conc. outlet pressure = {EDISchematics.max_conc_outlet_press.toFixed(2)}  {system_summary.units['Feed Pressure']}</Text>
                      <Text style={EDIFSstyles.TextStyle}>Conc. Bleed flow = {EDISchematics.conc_bleed_flow.toFixed(2)}  {system_summary.units['Feed Flow']}</Text>
                      <Svg width='152.837' height='10.559' viewBox='0 0 262.447 20.559'>
                        <Line x2='0' y1='0' x1='255.226' y2='0' transform='translate(7.222 10.277)' fill='none' stroke='#002D62' strokeWidth='2' />
                        <Path d='M-15316.2,8311.508v17.863l-10.281-10.279,10.281-10.279Z' transform='translate(15326.48 -8308.813)' fill='#002D62' />
                      </Svg>
                    </View>
                    <View style={[EDIFSstyles.subBox]}>
                      <Text>Concentrate</Text>
                    </View>
                    <View style={EDIFSstyles.LeftArrow}>
                      <Text style={EDIFSstyles.TextStyle}>Max. Conc. inlet pressure = {EDISchematics.max_conc_inlet_press.toFixed(2)}  {system_summary.units['Feed Pressure']}</Text>
                      <Svg width='152.837' height='10.559' viewBox='0 0 262.447 20.559'>
                        <Line x2='0' y1='0' x1='255.226' y2='0' transform='translate(7.222 10.277)' fill='none' stroke='#002D62' strokeWidth='2' />
                        <Path d='M-15316.2,8311.508v17.863l-10.281-10.279,10.281-10.279Z' transform='translate(15326.48 -8308.813)' fill='#002D62' />
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
                  <Svg width='152.837' height='10.559' viewBox='0 0 262.837 20.559'>
                    <G id='Group_28523' transform='translate(0)'>
                      <Line x1='0' y1='0' x2='255.615' y2='0' transform='translate(0 10.277)' fill='none' stroke='#002D62' strokeWidth='2' />
                      <Path id='Path_34076' d='M-15326.48,8311.508v17.863l10.281-10.279-10.281-10.279Z' transform='translate(15579.037 -8308.813)' fill='#002D62' />
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