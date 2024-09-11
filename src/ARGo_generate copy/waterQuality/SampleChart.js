import React from 'react';
import CustomBarChart from './charts/BarChart';
import CustomLineChart from './charts/LineChart';

const data = [
  {
    name: 'Page A',
    uv: 10,
    pv: 10,
    dir: 0
  },
  {
    name: 'Page B',
    uv: 70,
    pv: 70,
    dir: 20
  },
  {
    name: 'Page C',
    uv: 30,
    pv: 30,
    dir: 40
  },
  {
    name: 'Page D',
    uv: 15,
    pv: 15,
    dir: 60
  },
  {
    name: 'Page E',
    uv: 12,
    pv: 12,
    dir: 80
  },
  {
    name: 'Page F',
    uv: 34,
    pv: 34,
    dir: 100
  },
  {
    name: 'Page G',
    uv: 40,
    pv: 40,
    dir: 120
  },
];

function getSampleData() {
  return [
    { x: 100, y: 100 },
    { x: 200, y: 100 },
    { x: 200, y: 150 },
    { x: 150, y: 200 },
    { x: 125, y: 150 },
  ];
}

export function SampleLineChart() {
  return <CustomLineChart data={data} />;
}

export function SampleBarChart() {
  return <CustomBarChart data={data} />;
}