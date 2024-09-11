/* eslint-disable no-console */
import React from 'react';
import { Text, View, StyleSheet} from '@react-pdf/renderer';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid, Legend
} from 'recharts';

const Style = StyleSheet.create({
  page: {
    lineHeight: 1.5,
  },
  body: {
    fontSize:8
    // paddingTop: RationValWidth(24),
  }
});
const CustomizedLabel = (props) => {
  const { x, y, stroke, value } = props;

  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="#666"
        transform="rotate(-90)"
        style={Style.body}
        // fontSize={0.001}
        // style={{'fontSize':8}}
      >
        {payload.value}
      </text>
    </g>
  );
};

const CustomBarChart = ({saturation}) => {
  console.log(saturation);
  const keys = Object.keys(saturation['No Inhibitor']).filter(key => key !== 'LowCCPP');
  const result =  keys.map(compound => ({
    name: compound,
    uv: saturation['No Inhibitor'][compound],
    pv: saturation['With Hypersperse MDC700'][compound],
  }));
  console.log(result);
  return (
    // <View>
    <BarChart width={550} height={150} data={result} margin={{ top: 15, right: 30, left: 0, bottom: 15 }}>
      {/* <CartesianGrid strokeDasharray="3 3" /><CartesianGrid stroke="#ccc" /> */}
      <CartesianGrid stroke="#ccc"/>
      <XAxis dataKey="name" type='category' tickMargin={10} tickCount={55}/>
      <YAxis />
      {/* <Legend /> */}
      <Bar isAnimationActive={false} dataKey="pv" fill="#8884d8" />
      <Bar isAnimationActive={false} dataKey="uv" fill="#82ca9d" />
    </BarChart>
    // </View>
  );
};

export default CustomBarChart;
