/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment, useState, useRef } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import {Canvg} from 'canvg';
import { invoiceData, invoiceData1 } from './pdf-report-generate/pdf-data';
import { ArgoinvoiceData } from './ARGO_generate/pdf-data';
import Invoice from './pdf-report-generate';
import ArgoReport from './ARGO_generate';
import GoogleInvoice from './google-sheets-genrator';
import ApexChartComponent from './apexchart';

const App = () => {
  const canvasRef = useRef(null);
  const [svgData, setSvgData] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const canvasToImage = (canvasRef) => {
    return canvasRef.current.toDataURL('image/png');
  };
  const drawSVGOnCanvas = (svgData, canvasRef) => {
    const ctx = canvasRef.current.getContext('2d');
    const v = Canvg.fromString(ctx, svgData);
    v.start();
  };
  const handleSvgData = (svg) => {
    setSvgData(svg);
    // console.log('SVG Data Received:', svg);
    if (canvasRef.current) {
      drawSVGOnCanvas(svg, canvasRef);
      const imageData = canvasToImage(canvasRef);
      setImageSrc(imageData);
    }
  };
  const pdfoption =  [
    { label: 'Flowsheet Design Summary', disabled: false },
    { label: 'Feed-Product-Waste Summary', disabled: false },
    { label: 'RO Unitop System-Level Summary', disabled: false },
    { label: 'RO Unitop Stage-Level Summary', disabled: false },
    { label: 'Antiscalant Dosage summary', disabled: false },
    { label: 'CLRO Section Summary', disabled: false },
    { label: 'EDI Unitop System-Level Summary', disabled: true },
    { label: 'Chemical Dosing Unitop Summary', disabled: false },
    { label: 'CF Unitop Summary', disabled: false },
    { label: 'ERD Unitop Summary (WIP)', disabled: false },
    { label: 'Pump Unitop Summary', disabled:false },
    { label: 'Stripper Unitop Summary', disabled:false },
    { label: 'Mixer-Splitter Unitop Summary', disabled:false },
    { label: 'Detailed RO Element-Level Data', disabled: false },
    { label: 'Detailed Stream Data', disabled: false },
    { label: 'Errors & Warnings', disabled: false },
  ];
  return (
    <PDFViewer width="100%" height="2100vh" className="app" zoom='269%'>
      <Invoice report_invoice={invoiceData} pdfoption={pdfoption} />
    </PDFViewer>
    // <>
    //   <ApexChartComponent report_invoice={ArgoinvoiceData} onSvgReady={handleSvgData}/>
    //   <canvas ref={canvasRef} style={{ display: 'none' }} width="800" height="600" />
    //   <PDFViewer width="100%" height="2100vh" className="app" zoom='269%'>
    //     <ArgoReport report_invoice={ArgoinvoiceData} svgData={imageSrc}/>
    //   </PDFViewer>
    // </>
  // <MyChartComponent />
  // <GoogleInvoice report_invoice={invoiceData} pdfoption={pdfoption}/>
  //   <div>
  //   <PDFDownloadLink document={<Invoice invoice={invoiceData} />} fileName="somename.pdf">
  //     {({ blob, url, loading, error }) =>
  //       loading ? 'Loading document...' : 'Download now!'
  //     }
  //   </PDFDownloadLink>
  // </div>
  );
};

export default App;
