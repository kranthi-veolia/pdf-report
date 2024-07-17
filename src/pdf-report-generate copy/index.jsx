/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { Page, Document, StyleSheet, View, Text } from '@react-pdf/renderer';
import DisplayEDITables from './EDI_unitop';
import HeaderSection from './pdf-header-footer/header-section';
import FooterSection from './pdf-header-footer/footer-section';
import DisplayPump from './pumps';
import DisplayCF from './cartige_filter';
import DisplayERD from './ERD';
import DisplayChemicalDosage from './chem_dose';
import DisplayReports from './reports';
import DisplaySteamData from './steam_data';
import DisplayFeedProductWaste from './feed_product_waste';
import ProjectInfo from './project-info/project-info';
import FlowsheetDesign from './flowsheet_summary/flowsheet-design/flowsheet_design';
import { RationValWidth } from './fonts/font';
import DisplayROTables from './ro-unit';
import MixerSplitter from './mixer-splitter/mixer-splitter';
import DisplayStripper from './stripper/stripper';
import RoElement from './ro_element/ro-element';
import ROStageLevelSummary from './ro-unit/ro-stage-level-summary';
import CLROStageLevelSummary from './ro-unit/clro-stage-level-summary';

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
const Invoice = (props) => {
  let serialNum = 1;
  let subSerialNum = 1;
  const { report_invoice, flowSheetImage, pdfoption } = props;
  const invoiceData = report_invoice.report_dict;
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
      {(invoiceData && invoiceData.coverpage_dict && invoiceData.coverpage_dict.project_info) && (
        <Page size='A4' object-fit='fill' style={styles.page} bookmark='Preface'>
          <View style={styles.body}>
            <ProjectInfo
              pageWidth={1140}
              info={invoiceData.coverpage_dict}
              project_details={invoiceData.project_details}
            />
          </View>
        </Page>
      )}
      {/* Flowsheet Design Summary */}
      {invoiceData && invoiceData.flowsheet_config_dict && Object.keys(invoiceData.flowsheet_config_dict).length > 0 && filterOptions('Flowsheet Design Summary') && (
        <Page size='A4' object-fit='fill' style={styles.page} bookmark={`${serialNum}. Flowsheet Design Summary`} >
          <HeaderSection version={invoiceData.project_details} fixed />
          <View style={styles.body}>
            <FlowsheetDesign
              pageWidth={1140}
              tableWidth={1140}
              flowsheet_config={invoiceData.flowsheet_config_dict}
              flowSheetImage={flowSheetImage}
              invoiceData={invoiceData}
              serialNum={serialNum++}
              subSerialNum={subSerialNum}
            />
          </View>
          <FooterSection version={invoiceData.project_details} fixed />
        </Page>
      )}
      {/* Feed-Product-Waste Summary */}
      {invoiceData && invoiceData.feed_product_waste_summary && Object.keys(invoiceData.feed_product_waste_summary).length > 0 && filterOptions('Feed-Product-Waste Summary') && (
        <Page size='A4' object-fit="fill" style={styles.page} bookmark={`${serialNum}. Feed-Product-Waste Summary`}>
          <HeaderSection version={invoiceData.project_details} />
          <View style={styles.body}>
            <DisplayFeedProductWaste
              feed_product_waste={invoiceData.feed_product_waste_summary}
              unit_set_dict={invoiceData.system_units}
              serialNum={serialNum++}
              subSerialNum={subSerialNum}
            />
          </View>
          <FooterSection version={invoiceData.project_details} />
        </Page>
      )}
      {/* RO Unitop System-Level Summary */}
      {invoiceData && invoiceData.ro_hp && invoiceData.ro_summary && Object.keys(invoiceData.ro_hp).length > 1 && Object.keys(invoiceData.ro_summary).length > 0 && filterOptions('RO Unitop System-Level Summary') && (
        <Page size='A4' object-fit='fill' style={styles.page} bookmark={`${serialNum}. RO Unitop System-Level Summary`}>
          <HeaderSection version={invoiceData.project_details} />
          <View style={styles.body} wrap>
            <DisplayROTables
              invoice={invoiceData}
              pageWidth={1140}
              tableWidth={1140}
              serialNum={serialNum++}
              subSerialNum={subSerialNum}
            />
          </View>
          <FooterSection version={invoiceData.project_details} />
        </Page>
      )}
      {/* RO Unitop State-Level Summary */}
      {(invoiceData && invoiceData.ro_summary && invoiceData.ro_summary.ro_stage_dict) && filterOptions('RO Unitop Stage-Level Summary') && (
        <Page size='A4' object-fit='fill' style={styles.page} bookmark={`${serialNum}. RO Unitop Stage-Level Summary`}>
          <HeaderSection version={invoiceData.project_details} />
          <View style={styles.body} wrap>
            <ROStageLevelSummary
              rodata={invoiceData.ro_hp.ro_dict}
              system_units={invoiceData.system_units}
              ro_summary={invoiceData.ro_summary}
              pageWidth={1140}
              tableWidth={1140}
              serialNum={serialNum++}
              subSerialNum={subSerialNum}
            />
          </View>
          <FooterSection version={invoiceData.project_details} />
        </Page>
      )}
      {/* CLRO section summary */}
      {(invoiceData && invoiceData.clro_elem_summary && invoiceData.clro_elem_summary.clro_nos) && filterOptions('CLRO Section Summary') && (
        <Page size='A4' object-fit='fill' style={styles.page} bookmark={`${serialNum}. CLRO Section Summary`}>
          <HeaderSection version={invoiceData.project_details} />
          <View style={styles.body} wrap>
            <CLROStageLevelSummary
              system_units={invoiceData.system_units}
              clro_elem_summary={invoiceData.clro_elem_summary}
              clroOverView={invoiceData.clro_overview}
              pageWidth={1140}
              tableWidth={1140}
              serialNum={serialNum++}
              subSerialNum={subSerialNum}
            />
          </View>
          <FooterSection version={invoiceData.project_details} />
        </Page>
      )}
      {/* EDI Unitop System Level Summary */}
      {invoiceData && invoiceData.edi_summary && Object.keys(invoiceData.edi_summary).length > 0 && filterOptions('EDI Unitop System-Level Summary') && (
        <Page size='A4' object-fit='fill' style={styles.page} bookmark={`${serialNum}. EDI Unitop System-Level Summary`}>
          <HeaderSection version={invoiceData.project_details} />
          <View style={styles.body}>
            <DisplayEDITables
              invoice={invoiceData}
              serialNum={serialNum++}
              subSerialNum={subSerialNum}
            />
          </View>
          <FooterSection version={invoiceData.project_details} />
        </Page>
      )}
      {/* CHEM_DOSE Unitop Summary */}
      {invoiceData && invoiceData.chem_dose_summary && Object.keys(invoiceData.chem_dose_summary).length > 0 && filterOptions('Chemical Dosing Unitop Summary') && (
        <Page size='A4' style={styles.page} bookmark={`${serialNum}. Chemical Dosing Unitop Summary`}>
          <HeaderSection version={invoiceData.project_details} />
          <View style={styles.body}>
            <DisplayChemicalDosage
              invoice={invoiceData}
              serialNum={serialNum++}
              subSerialNum={subSerialNum}
            />
          </View>
          <FooterSection version={invoiceData.project_details} />
        </Page>
      )}
      {/* CF Unitop Summary */}
      {/* Pumps Unitop Summary */}
      {/* ERD Unitop Summary (WIP) */}
      {/* Stripper Unitop Summary */}
      {/* Mixer-Splitter Unitop Summary */}
      {invoiceData && ((Object.keys(invoiceData.cf_summary).length && filterOptions('CF Unitop Summary')) || (invoiceData.pump_summary && Object.keys(invoiceData.pump_summary).length > 0 && filterOptions('Pump Unitop Summary')) || (invoiceData.erd_summary && Object.keys(invoiceData.erd_summary).length > 0 && filterOptions('ERD Unitop Summary (WIP)')) || (invoiceData.stripper_summary && Object.keys(invoiceData.stripper_summary).length > 0 && filterOptions('Stripper Unitop Summary')) || (invoiceData.mixer_summary && Object.keys(invoiceData.mixer_summary).length > 0 && filterOptions('Mixer-Splitter Unitop Summary'))) && (
        <Page size='A4' style={styles.page} >
          <HeaderSection version={invoiceData.project_details} />
          {(Object.keys(invoiceData.cf_summary).length && filterOptions('CF Unitop Summary')) && (
            <View style={[styles.body, { marginBottom: RationValWidth(56) }]} bookmark={`${serialNum}. CF Unitop Summary`}>
              <DisplayCF
                cf_summary={invoiceData.cf_summary}
                serialNum={serialNum++}
                subSerialNum={subSerialNum}
              />
            </View>
          )}
          {invoiceData.pump_summary && Object.keys(invoiceData.pump_summary).length > 0 && filterOptions('Pump Unitop Summary') && (
            <View style={[styles.body, { marginBottom: RationValWidth(56) }]} bookmark={`${serialNum}. Pump Unitop Summary`}>
              <DisplayPump
                pumps={invoiceData.pump_summary}
                serialNum={serialNum++}
                subSerialNum={subSerialNum}
              />
            </View>
          )}
          {invoiceData && invoiceData.erd_summary && Object.keys(invoiceData.erd_summary).length > 0 && filterOptions('ERD Unitop Summary (WIP)') && (
            <View style={[styles.body, { marginBottom: RationValWidth(56) }]} break={(filterOptions('Pump Unitop Summary') && filterOptions('CF Unitop Summary'))} bookmark={`${serialNum}. ERD Unitop Summary (WIP)`}>
              <DisplayERD
                erd_summary={invoiceData.erd_summary}
                serialNum={serialNum++}
                subSerialNum={subSerialNum}
              />
            </View>
          )}
          {invoiceData.stripper_summary && Object.keys(invoiceData.stripper_summary).length > 0 && filterOptions('Stripper Unitop Summary') && (
            <View style={[styles.body, { marginBottom: RationValWidth(56) }]} bookmark={`${serialNum}. Stripper Unitop Summary`}
              break={checkConditions(filterOptions('Pump Unitop Summary'), filterOptions('CF Unitop Summary'), filterOptions('ERD Unitop Summary (WIP)'))}>
              <DisplayStripper
                stripper={invoiceData.stripper_summary}
                serialNum={serialNum++}
                subSerialNum={subSerialNum}
              />
            </View>
          )}
          {invoiceData.mixer_summary && Object.keys(invoiceData.mixer_summary).length > 0 && filterOptions('Mixer-Splitter Unitop Summary') && (
            <View style={[styles.body]} bookmark={`${serialNum}. Mixer-Splitter Unitop Summary`}
              break={checkConditions(filterOptions('Pump Unitop Summary'), filterOptions('CF Unitop Summary'), filterOptions('ERD Unitop Summary (WIP)'), filterOptions('Stripper Unitop Summary'))}>
              <MixerSplitter
                mixer_splitter={invoiceData.mixer_summary}
                pageWidth={1140}
                tableWidth={900}
                serialNum={serialNum++}
                subSerialNum={subSerialNum}
              />
            </View>
          )}
          <FooterSection version={invoiceData.project_details} />
        </Page>
      )}
      {/* Top-Level Section: Detailed RO Element-Level Data */}
      {(invoiceData && invoiceData.ro_elem_summary && Object.keys(invoiceData.ro_elem_summary).length > 0) && filterOptions('Detailed RO Element-Level Data') && (
        <Page size='A4' object-fit='fill' style={styles.page} bookmark={`${serialNum}. Detailed RO Element-Level Data`}>
          <HeaderSection version={invoiceData.project_details} />
          <View style={styles.body}>
            <RoElement
              ro_elem_summary={invoiceData.ro_elem_summary}
              pageWidth={1140}
              tableWidth={1140}
              serialNum={serialNum++}
              subSerialNum={subSerialNum}
            />
          </View>
          <FooterSection version={invoiceData.project_details} />
        </Page>
      )}
      {/* Steam Data Summary */}
      {invoiceData && invoiceData.stream_output && Object.keys(invoiceData.stream_output).length > 0 && filterOptions('Detailed Stream Data') && (
        <Page size='A4' object-fit='fill' style={styles.page} bookmark={`${serialNum}. Detailed Stream Data`}>
          <HeaderSection version={invoiceData.project_details} />
          <View style={styles.body}>
            <DisplaySteamData
              stream_ouput_data={invoiceData.stream_output}
              stream_input_dict={invoiceData.stream_input_dict}
              unit_set_dict={invoiceData.system_units}
              ediOutputData={invoiceData.ediOutputData}
              serialNum={serialNum++}
              subSerialNum={subSerialNum}
            />
          </View>
          <FooterSection version={invoiceData.project_details} />
        </Page>
      )}
      {/* Errors & Warnings Unitop Summary */}
      {invoiceData && invoiceData.errors && invoiceData.errors.length >= 0 && filterOptions('Errors & Warnings') && (
        <Page size='A4' object-fit='fill' style={styles.page} bookmark={`${serialNum}. Errors & Warnings`}>
          <HeaderSection version={invoiceData.project_details} />
          <View style={styles.body}>
            <DisplayReports
              errors={invoiceData.errors}
              serialNum={serialNum++}
              subSerialNum={subSerialNum}
            />
          </View>
          <FooterSection version={invoiceData.project_details} />
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
export default Invoice;