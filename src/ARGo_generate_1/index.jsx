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

const styles = StyleSheet.create({
  page: {
    lineHeight: 1.5,
    paddingBottom: RationValWidth(124),
  },
  body: {
    marginHorizontal: RationValWidth(56),
  }
});
// in this function we are showing all unitop summary into multiple pages --> kranthi
const ArgoReport = (props) => {
  let serialNum = 1;
  let subSerialNum = 1;
  const { report_invoice, svgData } = props;
  const invoiceData = report_invoice;
  console.log(invoiceData);
  return (
    <Document>
      {/* ProjectInfo page start */}
      {(invoiceData && invoiceData['Treatment and Summary']) && (
        <Page size='A4' object-fit='fill' style={styles.page} bookmark='Preface'>
          <View style={styles.body}>
            <ProjectInfo
              plantData={invoiceData['Plant Data']}
              pageWidth={1140}
              info={invoiceData['Treatment and Summary']}
              project={invoiceData['Selected Product']}
              Dosage={invoiceData['Required Dosage']}
            />
          </View>
        </Page>
      )}
      {/* Flowsheet Design Summary */}
      {invoiceData && invoiceData['Water Quality Data'] && Object.keys(invoiceData['Water Quality Data']).length > 0 && (
        <Page size='A4' object-fit='fill' style={styles.page} bookmark={`${serialNum}. Project Data Summary`} >
          <HeaderSection version={invoiceData.project_details} fixed />
          <View style={styles.body}>
            <DisplayArgoTables
              serialNum={serialNum++}
              subSerialNum={subSerialNum}
              pageWidth={1140}
              tableWidth={1140}
              info={invoiceData['Treatment and Summary']}
              waterData={invoiceData['Water Quality Data']}
              resultsData={invoiceData['Calculation Results']}
              product={invoiceData['Selected Product']}
              saturation={invoiceData['Degrees of Saturation']}
              svgData={svgData}
            />
          </View>
          <FooterSection version={invoiceData.project_details} fixed />
        </Page>
      )}
      {!invoiceData && (
        <Page size='A4' object-fit='fill'>
          <HeaderSection version='' />
          <View style={styles.body}>
            <Text>Something Wrong...</Text>
          </View>
          <FooterSection blank='empty' version='' />
        </Page>
      )}
    </Document>
  );
};
export default ArgoReport;