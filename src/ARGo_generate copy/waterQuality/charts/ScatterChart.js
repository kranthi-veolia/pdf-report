import React, { useRef, useState, useEffect } from 'react';
import { Text, View, Svg, Rect  } from '@react-pdf/renderer';
import { ScatterChart, Scatter, CartesianGrid } from 'recharts';
import HtmlSvgToPdfSvg from '../imageFromSvg';

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const CustomScatterChart = () => {
  const svgRef = useRef(null);
  const [chartReady, setChartReady] = useState(false);

  useEffect(() => {
    // You might need a more reliable way to check if the chart is ready.
    const timer = setTimeout(() => setChartReady(true), 1000); // Example delay
    return () => clearTimeout(timer);
  }, []);

  return (
    // <div className="recharts-wrapper" ref={svgRef}>
    <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <CartesianGrid />
      <Scatter isAnimationActive={false} name="A school" data={data} fill="#8884d8" />
    </ScatterChart>
  // {/* {setTimeout(()=>{
  //   return (<HtmlSvgToPdfSvg svgRef={svgRef} />);
  // }, 1000)} */}
  // {/* {chartReady && <HtmlSvgToPdfSvg svgRef={svgRef} />} */}
    // </div>
  );
};

export default CustomScatterChart;