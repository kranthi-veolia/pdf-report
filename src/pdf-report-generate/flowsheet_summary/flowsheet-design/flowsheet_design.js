/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';

import { Text, View, Image } from '@react-pdf/renderer';
import SubLine from '../../createLine';
import { RationValWidth, ArialB600 } from '../../fonts/font';
import { styleflowsheet } from './flowsheet_design_style';
import DisplayTable from '../../displayTable';

const FlowsheetDesign = (props) => {
  const borderColor = '#002D62';
  const { pageWidth, tableWidth, flowsheet_config, flowSheetImage, invoiceData } = props;
  let { serialNum, subSerialNum } = props;
  const header = {
    'source': 'Source',
    'unit_op': 'Unitop',
    'pump': 'Pump',
    'sink': 'Sink',
    'mixer_splitter': 'Mixer-Splitter'
  };

  return (
    <View style={{ width: RationValWidth(pageWidth) }}>
      <View style={[styleflowsheet.mainHeader, { width: RationValWidth(pageWidth) }]}>
        <Text>{serialNum}. Flowsheet Design Summary</Text>
        {/* I reduced the line width to accommodate the text and added a margin left. --->kranthi */}
        <SubLine lineWidth='57%' lineHeight='24'  style={{marginLeft: 5}}/>
      </View>
      {flowSheetImage && (
        <View style={{ marginTop: 15 }}>
          <View style={styleflowsheet.textHeader} bookmark={{ title: `${serialNum}.${subSerialNum} Flowsheet Design` }}>
            <Text style={{ paddingLeft: 0 }}>{serialNum}.{subSerialNum++}</Text>
            <Text style={{ paddingLeft: 5 }}>Flowsheet Design</Text>
          </View>
          <View style={{ width: RationValWidth(tableWidth), margin: '0 auto', border: 1, borderRadius: 5, borderColor: '#002D62' }}>
            <Image src={flowSheetImage} alt="" />
          </View>
        </View>
      )}
      {invoiceData.coverpage_dict && Object.keys(invoiceData.coverpage_dict).length > 0 && (
        <View>
          <DisplayTable
            serialNum={serialNum}
            subSerialNum={subSerialNum}
            invoice={invoiceData}
          />
        </View>
      )}
    </View>
  );
};
export default FlowsheetDesign;