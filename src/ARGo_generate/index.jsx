/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { Page, Document, StyleSheet, View, Text } from '@react-pdf/renderer';
import HeaderSection from './pdf-header-footer/header-section';
import FooterSection from './pdf-header-footer/footer-section';
import ProjectInfo from './project-info/project-info';
import { RationValWidth } from './fonts/font';
import DisplayArgoTables from './waterQuality';

// Styles for the PDF document
const styles = StyleSheet.create({
  page: {
    lineHeight: 1.5,
    paddingBottom: RationValWidth(124),
  },
  body: {
    marginHorizontal: RationValWidth(56),
  }
});

// Main component to generate a PDF report
const ArgoReport = ({ report_invoice, svgData, project_details }) => {
  let serialNum = 1;
  let subSerialNum = 1;
  const invoiceData = report_invoice;

  // Check if the main data object is present
  if (!invoiceData) {
    return (
      <Document>
        <Page size='A4' object-fit='fill'>
          <HeaderSection version='' />
          <View style={styles.body}>
            <Text>No data available to display the report.</Text>
          </View>
          <FooterSection blank='empty' version='' />
        </Page>
      </Document>
    );
  }

  return (
    <Document>
      {/* Render ProjectInfo page if 'Treatment and Summary' and other necessary data are available */}
      {
        // Check if 'Treatment and Summary' is available and provide fallbacks for optional data
        // invoiceData['Treatment and Summary'] && (
        <Page size='A4' object-fit='fill' style={styles.page} bookmark='Preface'>
          <View style={styles.body}>
            <ProjectInfo
              plantData={invoiceData['Plant Data'] || {}}  // Provide an empty object as fallback
              pageWidth={1140}
              info={invoiceData['Treatment and Summary'] || {}}
              project={invoiceData['Selected Product'] || 'N/A'}  // Provide 'N/A' as fallback
              Dosage={invoiceData['Required Dosage'] || 'N/A'}  // Provide 'N/A' as fallback
            />
          </View>
        </Page>
        // )
      }
      {/* Render Water Quality Data page with fallbacks for optional data */}
      {invoiceData['Water Quality Data'] && Object.keys(invoiceData['Water Quality Data']).length > 0 && (
        <Page size='A4' object-fit='fill' style={styles.page} bookmark={`${serialNum}. Project Data Summary`} >
          <HeaderSection version={project_details} fixed />
          <View style={styles.body}>
            <DisplayArgoTables
              serialNum={serialNum++}
              subSerialNum={subSerialNum}
              pageWidth={1140}
              tableWidth={1140}
              info={invoiceData['Treatment and Summary'] || {}}
              waterData={invoiceData['Water Quality Data']}
              resultsData={invoiceData['Calculation Results'] || {}}
              product={invoiceData['Selected Product'] || 'N/A'}
              saturation={invoiceData['Degrees of Saturation'] || {}}
              svgData={svgData || ''}
            />
          </View>
          <FooterSection version={project_details} fixed />
        </Page>
      )}
    </Document>
  );
};

export default ArgoReport;