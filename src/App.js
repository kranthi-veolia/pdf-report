/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { invoiceData, invoiceData1 } from './pdf-report-generate/pdf-data';
import Invoice from './pdf-report-generate';
import GoogleInvoice from './google-sheets-genrator';

class App extends Component {
  render() {
    const pdfoption =  [
      { label: 'Flowsheet Design Summary', disabled: true },
      { label: 'Feed-Product-Waste Summary', disabled: true },
      { label: 'RO Unitop System-Level Summary', disabled: true },
      { label: 'RO Unitop Stage-Level Summary', disabled: true },
      { label: 'Antiscalant Dosage summary', disabled: true },
      { label: 'CLRO Section Summary', disabled: true },
      { label: 'EDI Unitop System-Level Summary', disabled: true },
      { label: 'Chemical Dosing Unitop Summary', disabled: true },
      { label: 'CF Unitop Summary', disabled: true },
      { label: 'ERD Unitop Summary (WIP)', disabled: true },
      { label: 'Pump Unitop Summary', disabled:true },
      { label: 'Stripper Unitop Summary', disabled:true },
      { label: 'Mixer-Splitter Unitop Summary', disabled:true },
      { label: 'Detailed RO Element-Level Data', disabled: true },
      { label: 'Detailed Stream Data', disabled: true },
      { label: 'Errors & Warnings', disabled: true },
    ];
    return (
      <PDFViewer width="100%" height="2100vh" className="app" zoom='269%'>
        <Invoice report_invoice={invoiceData} pdfoption={pdfoption} />
      </PDFViewer>
      // <GoogleInvoice report_invoice={invoiceData} pdfoption={pdfoption}/>
      //   <div>
      //   <PDFDownloadLink document={<Invoice invoice={invoiceData} />} fileName="somename.pdf">
      //     {({ blob, url, loading, error }) =>
      //       loading ? 'Loading document...' : 'Download now!'
      //     }
      //   </PDFDownloadLink>
      // </div>
    );
  }
}

export default App;
