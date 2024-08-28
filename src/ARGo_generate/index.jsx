/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { Page, Document, StyleSheet, View, Text } from '@react-pdf/renderer';
// import DisplayEDITables from './EDI_unitop';
import HeaderSection from './pdf-header-footer/header-section';
import FooterSection from './pdf-header-footer/footer-section';
// import DisplayPump from './pumps';
// import DisplayCF from './cartige_filter';
// import DisplayERD from './ERD';
// import DisplayChemicalDosage from './chem_dose';
// import DisplayReports from './reports';
// import DisplaySteamData from './steam_data';
// import DisplayFeedProductWaste from './feed_product_waste';
import ProjectInfo from './project-info/project-info';
// import ProgramDetails from './project-info/program_details';
// import FlowsheetDesign from './flowsheet_summary/flowsheet-design/flowsheet_design';
import { RationValWidth } from './fonts/font';
import DisplayArgoTables from './waterQuality';
// import MixerSplitter from './mixer-splitter/mixer-splitter';
// import DisplayStripper from './stripper/stripper';
// import RoElement from './ro_element/ro-element';
// import ROStageLevelSummary from './ro-unit/ro-stage-level-summary';
// import CLROStageLevelSummary from './ro-unit/clro-stage-level-summary';
// import AntiscalantDosing from './antiscalant_dosing';

const styles = StyleSheet.create({
  page: {
    lineHeight: 1.5,
    paddingBottom: RationValWidth(124),
  },
  body: {
    marginHorizontal: RationValWidth(56),
    // paddingTop: RationValWidth(24),
  }
});
// in this function we are showing all unitop summary into multiple pages --> kranthi
const ArgoReport = (props) => {
  let serialNum = 1;
  let subSerialNum = 1;
  const { report_invoice, flowSheetImage, pdfoption } = props;
  const invoiceData = report_invoice;
  console.log(invoiceData);
  // kranthi changes
  // This function checks if the number of true conditions is either 2 or 3.
  function checkConditions(...conditions) {
    // The filter(Boolean) will return an array of conditions that are true.
    const trueConditions = conditions.filter(Boolean);
    // If the number of true conditions is exactly 3, the function returns false.
    if (trueConditions.length === 3) {
      return false;
    }
    // If the number of true conditions is 2 or more (but not 3), the function returns true.
    return trueConditions.length >= 2;
  }
  // we are filtering the section from the option selected in menu --> kranthi
  // this function gives output of to show or not show section in pdf report --> kranthi
  const filterOptions = (SectionName) => {
    const filterValues = pdfoption.filter((val) => val.label === SectionName);
    if (filterValues[0].disabled === false || filterValues[0].checked === false) { return false; }
    return true;
  };
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
        <Page size='A4' object-fit='fill' style={styles.page} bookmark={`${serialNum}. Flowsheet Design Summary`} >
          <HeaderSection version={invoiceData.project_details} fixed />
          <View style={styles.body}>
            <DisplayArgoTables
              serialNum={serialNum++}
              subSerialNum={subSerialNum}
              pageWidth={1140}
              tableWidth={1140}
              waterData={invoiceData['Water Quality Data']}
              resultsData={invoiceData['Calculation Results']}
              product={invoiceData['Selected Product']}
              saturation={invoiceData['Degrees of Saturation']}
            />
          </View>
          <FooterSection version={invoiceData.project_details} fixed />
        </Page>
      )}
      {/* {invoiceData && invoiceData['Water Quality Data'] && Object.keys(invoiceData['Water Quality Data']).length > 0 && (
        <Page size='A4' object-fit='fill' style={styles.page} bookmark={`${serialNum}. Flowsheet Design Summary`} >
          <HeaderSection version={invoiceData.project_details} fixed />
          <View style={styles.body}>
            <DisplayArgoTables
              serialNum={serialNum++}
              subSerialNum={subSerialNum}
              pageWidth={1140}
              tableWidth={1140}
              waterData={invoiceData['Water Quality Data']}
              resultsData={invoiceData['Calculation Results']}
              product={invoiceData['Selected Product']}
              saturation={invoiceData['Degrees of Saturation']}
            />
          </View>
          <FooterSection version={invoiceData.project_details} fixed />
        </Page>
      )} */}
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