/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { invoiceData, invoiceData1 } from './pdf-report-generate/pdf-data';
import { ArgoinvoiceData } from './ARGo_generate/pdf-data';
import Invoice from './pdf-report-generate';
import ArgoReport from './ARGo_generate';
import GoogleInvoice from './google-sheets-genrator';

class App extends Component {
  render() {
    const pdfoption =  [
      { label: 'Flowsheet Design Summary', disabled: false },
      { label: 'Feed-Product-Waste Summary', disabled: false },
      { label: 'RO Unitop System-Level Summary', disabled: false },
      { label: 'RO Unitop Stage-Level Summary', disabled: false },
      { label: 'Antiscalant Dosage summary', disabled: false },
      { label: 'CLRO Section Summary', disabled: false },
      { label: 'EDI Unitop System-Level Summary', disabled: false },
      { label: 'Chemical Dosing Unitop Summary', disabled: false },
      { label: 'CF Unitop Summary', disabled: false },
      { label: 'ERD Unitop Summary (WIP)', disabled: false },
      { label: 'Pump Unitop Summary', disabled:false },
      { label: 'Stripper Unitop Summary', disabled:false },
      { label: 'Mixer-Splitter Unitop Summary', disabled:false },
      { label: 'Detailed RO Element-Level Data', disabled: false },
      { label: 'Detailed Stream Data', disabled: true },
      { label: 'Errors & Warnings', disabled: false },
    ];
    return (
      // <PDFViewer width="100%" height="2100vh" className="app" zoom='269%'>
      //   <Invoice report_invoice={invoiceData} pdfoption={pdfoption} />
      // </PDFViewer>
      <PDFViewer width="100%" height="2100vh" className="app" zoom='269%'>
        <ArgoReport report_invoice={ArgoinvoiceData} pdfoption={pdfoption} />
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
