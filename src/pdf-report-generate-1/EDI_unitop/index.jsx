/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { View } from '@react-pdf/renderer';
import Table1 from './table1';
import Table2 from './table2';
import Table3 from './table3';
import EDIFlowschematics from './EDI_Flow_schematics';

//  Displaying all EDI tables in single page
function DisplayEDITables(props) {
  const { invoice, serialNum } = props;
  let { subSerialNum } = props;
  return (
    <View>
      {/* EDI First table */}
      {(invoice.edi_summary.system_summary) && (
        <View bookmark={{ title: `${serialNum}.${subSerialNum}  Docked Summary` }}>
          <Table1
            system_summary={invoice.edi_summary.system_summary}
            serialNum={serialNum}
            subSerialNum={subSerialNum++}
          />
        </View>
      )}
      {/* EDI SEcound Table */}
      {(invoice.edi_summary.ventil_summary && invoice.edi_summary.system_summary) && (
        <View style={{ marginTop: 0 }} bookmark={{ title: `${serialNum}.${subSerialNum}  Ventilation Sizing` }}>
          <Table2
            system_summary={invoice.edi_summary.system_summary}
            ventil_summary={invoice.edi_summary.ventil_summary}
            serialNum={serialNum}
            subSerialNum={subSerialNum++}
          />
        </View>
      )}
      {/* {(invoice.edi_summary.ventil_summary && invoice.edi_summary.system_summary) && (
        <View style={{ marginTop: 10 }}>
          <EDITabel2 system_summary={invoice.edi_summary.system_summary} ventil_summary={invoice.edi_summary.ventil_summary} />
        </View>
      )} */}
      {/* EDI Third Table */}
      {(invoice.edi_summary.design_summary && invoice.edi_summary.system_summary) && (
        <View bookmark={{ title: `${serialNum}.${subSerialNum}  EDI Design Parameters` }}>
          <Table3
            system_summary={invoice.edi_summary.system_summary}
            design_summary={invoice.edi_summary.design_summary}
            serialNum={serialNum}
            subSerialNum={subSerialNum++}
          />
        </View>
      )}
      {/* EDI Schematics */}
      {(invoice.edi_output_dict && invoice.edi_summary.system_summary) && (
        <View bookmark={{ title: `${serialNum}.${subSerialNum} EDI Schematic` }}>
          <EDIFlowschematics
            EDIoutput={invoice.edi_output_dict}
            system_summary={invoice.edi_summary.system_summary}
            serialNum={serialNum}
            subSerialNum={subSerialNum++}
          />
        </View>
      )}
    </View>
  );
};

export default DisplayEDITables;