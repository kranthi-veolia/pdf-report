/* eslint-disable no-console */
import React, { useEffect, useRef } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChartComponent = ({ report_invoice, onSvgReady, isShowCLRO }) => {
  const chartRef = useRef(null);

  // Function to transform the incoming data into a format suitable for the chart
  function transformData(data) {
    const result = [];
    let keys = [];

    if (data && data['No Inhibitor']) {
      // Exclude 'LowCCPP' from keys if present
      keys = Object.keys(data['No Inhibitor']).filter(key => key !== 'LowCCPP');

      Object.entries(data).forEach(([scenario, values]) => {
        if (values) {
          const dataSeries = {
            name: scenario,
            data: keys.map(key => values[key] || null) // Default to 0 if key is not found
          };
          result.push(dataSeries);
        }
      });
    }
    return { result, keys };
  }

  // Extract and transform data from props
  const data = report_invoice?.['Degrees of Saturation'] || {};
  const { result, keys } = transformData(data);
  const series = result;
  console.log(result);
  // Helper function to determine color based on value and category
  function determineColor(value, category, isShowCLRO) {
    if (isShowCLRO) {
      if (category === 'CaCO3' || category === 'SiO2') {
        if (value > 140) return '#f34428';
        if (value > 115) return '#FFBF00';
        return '#8bc63e';
      }
      if (value > 120) return '#f34428';
      if (value > 100) return '#FFBF00';
      return '#8bc63e';
    }
    if (value > 100) return '#f34428';
    if (value >= 80) return '#FFBF00';
    // if (value === 0) return '#fff';
    return '#8bc63e';
  }
  // Chart configuration options
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      animations: { enabled: false },
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: '95%',
        horizontal: false,
        hideZeroBarsWhenGrouped: true,
        dataLabels: { position: 'top' }
      },
    },
    noData: {
      text: 'No Data',
      align: 'center',
      verticalAlign: 'middle',
      style: { fontSize: '12px' }
    },
    legend: { show: false },
    dataLabels: {
      enabled: true,
      style: { fontSize: '12px', colors: ['#333'] },
      formatter: val => val === 0 ? '' : Number(val).toFixed(1),
      offsetY: -20
    },
    grid: {
      row: { colors: ['#fff', '#f2f2f2'] }
    },
    stroke: {
      show: true,
      width: 2,
      colors: [({ value, dataPointIndex, w }) => {
        // Color logic based on value and category
        const category = w.globals.labels[dataPointIndex];
        return determineColor(value, category, isShowCLRO);
      }],
    },
    xaxis: { categories: keys },
    yaxis: {
      title: { text: '% Saturation' },
      min: 0,
      max: isShowCLRO ? 180 : 140,
      tickAmount: 7,
      labels: {
        formatter: val => val === 0 ? '' : Number(val).toFixed(1)
      }
    },
    fill: {
      type: series.map(s => s.name === 'No Inhibitor' ? 'pattern' : 'gradient'),
      colors: [({ value, dataPointIndex, w }) => {
        // Color logic based on value and category
        const category = w.globals.labels[dataPointIndex];
        return determineColor(value, category, isShowCLRO);
      }],
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.15,
        opacityFrom: 0.76,
        opacityTo: 0.85,
        stops: [0, 50, 100]
      },
      pattern: {
        style: 'slantedLines',
        width: 10,
        height: 10,
        strokeWidth: 1
      }
    }
  };

  // Effect to handle SVG generation
  useEffect(() => {
    if (chartRef.current) {
      setTimeout(() => {
        const svgData = chartRef.current.chart.paper().svg();
        onSvgReady(svgData);
      }, 100);
    }
  }, [onSvgReady]);

  return (
    <div style={{ display: 'block' }}>
      <div id="chart" style={{ visibility: 'show', height: 0 }}>
        <ReactApexChart options={options} series={series} type="bar" height={220} width={800} ref={chartRef} />
      </div>
      <div id="html-dist" />
    </div>
  );
};

export default ApexChartComponent;