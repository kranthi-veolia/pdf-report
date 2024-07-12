/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { View } from '@react-pdf/renderer';
import ChemicalDosageTable1 from './table1';
import ChemicalDosageTable2 from './table2';

//  Displaying all EDI tables in single page
function DisplayChemicalDosage(props) {
  const { invoice, serialNum } = props;
  let { subSerialNum } = props;
  return (
    <View>
      {/* ChemicalDosage First table */}
      {(invoice.chem_dose_summary) && (
        <View bookmark={{ title: `${serialNum}.${subSerialNum}  Docked Summary` }}>
          <ChemicalDosageTable1
            chemical_dosage={invoice.chem_dose_summary}
            serialNum={serialNum}
            subSerialNum={subSerialNum++}
          />
        </View>
      )}
      {/* ChemicalDosage SEcound Table */}
      {(invoice.chem_dose_summary.agg_chem_dose_dict) && (
        <View bookmark={{ title: `${serialNum}.${subSerialNum} Aggregated by Chemical Type - Supplied Form` }}>
          <ChemicalDosageTable2
            chemical_dosage={invoice.chem_dose_summary}
            agg_chem_dose_dict={invoice.chem_dose_summary.agg_chem_dose_dict}
            serialNum={serialNum}
            subSerialNum={subSerialNum++}
          />
        </View>
      )}
    </View>
  );
};

export default DisplayChemicalDosage;