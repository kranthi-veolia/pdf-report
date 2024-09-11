/* eslint-disable no-console */
import React, { useEffect, useState, useRef } from 'react';
import * as svgjs from 'svg.js';
import { ScatterChart, Scatter } from 'recharts';
import { PDFDownloadLink, Page, View, Document, Image } from '@react-pdf/renderer';

// ... your chart data (data array, handleDasharray - unchanged)

const HtmlSvgToPdfSvg = () => {
  const [pdfSvg, setPdfSvg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const chartRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (chartRef.current) {
        // Select the FIRST svg element within the container
        const svgElement = svgjs(chartRef.current).select('svg');

        // Log the selected element to check if it's correct
        console.log('svgElement:', svgElement);

        if (svgElement) {
          // Get the raw SVG string
          const svgString = svgElement.svg();

          // Create a Data URL from the SVG string
          const svgDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;

          setPdfSvg(svgDataUrl);
          setIsLoading(false);
        } else {
          console.error('SVG Element not found within the chart container!');
          setIsLoading(false);
        }
      } else {
        console.error('Chart container not found!');
        setIsLoading(false);
      }
    }, 5000); // Adjust delay if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div ref={chartRef}>
        {/* This div is now ONLY used as a reference for svgjs */}
      </div>

      {/* Conditionally render PDFDownloadLink */}
      {!isLoading && pdfSvg && (
        <PDFDownloadLink document={<MyDocument svg={pdfSvg} />} fileName="chart.pdf">
          {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      )}
    </div>
  );
};

// Example Document component for react-pdf
const MyDocument = ({ svg }) => (
  <Document>
    <Page>
      <View>
        <Image src={svg} /> {/* Render the SVG using the data URL */}
      </View>
    </Page>
  </Document>
);

const MyChartComponent = () => {
  const data = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];
  return (
    <div className="recharts-wrapper">
      {/* Make sure HtmlSvgToPdfSvg is rendered BEFORE the chart */}
      <HtmlSvgToPdfSvg />
      <div ref={HtmlSvgToPdfSvg.chartRef}>  {/* Attach the ref */}
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          {/* <CartesianGrid /> */}
          {/* <XAxis type="number" dataKey="x" name="stature" unit="cm" />
      <YAxis type="number" dataKey="y" name="weight" unit="kg" /> */}
          <Scatter isAnimationActive={false} name="A school" data={data} fill="#8884d8" />
        </ScatterChart>
      </div>
    </div>
  );
};

export default MyChartComponent;