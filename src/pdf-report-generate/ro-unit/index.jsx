/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { View } from '@react-pdf/renderer';
import ROSystemLevelSummary from './ro-system-level-summary-table1';
import DetailedDesign from './ro-system-level-summary-table2';

//  Displaying all EDI tables in single page
function DisplayROTables(props) {
  const { invoice, pageWidth, tableWidth, serialNum } = props;
  let { subSerialNum } = props;
  return (
    <View>
      {/* EDI First table */}
      {(invoice.ro_summary && invoice.ro_summary.ro_system_dict) && (
        <View bookmark={{ title: `${serialNum}.${subSerialNum} Docked Summary` }}>
          <ROSystemLevelSummary
            ro_system_dict={invoice.ro_summary.ro_system_dict}
            serialNum={serialNum}
            subSerialNum={subSerialNum++}
          />
        </View>
      )}
      {(invoice.ro_hp) && (
        <View bookmark={{ title: `${serialNum}.${subSerialNum}  Detailed Design ` }}>
          <DetailedDesign
            system_units={invoice.system_units}
            rodata={invoice.ro_hp}
            pageWidth={pageWidth}
            tableWidth={tableWidth}
            serialNum={serialNum}
            subSerialNum={subSerialNum++}
          />
        </View>
      )}
    </View>
  );
};

export default DisplayROTables;