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
  const borderColor = '#B3D3D7';
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
      {/* <View style={styleflowsheet.mainHeaderDisplay}> */}
      <View style={[styleflowsheet.mainHeader, { width: RationValWidth(pageWidth) }]} >
        <Text>{serialNum}. Flowsheet Design Summary</Text>
        {/* I reduced the line width to accommodate the text and added a margin left. --->kranthi */}
        <SubLine lineWidth='57%' lineHeight='24'  style={{marginLeft: 5}}/>
      </View>
      {/* </View> */}

      {flowSheetImage && (
        <View style={{ marginTop: 15 }}>
          <View style={styleflowsheet.textHeader} bookmark={{ title: `${serialNum}.${subSerialNum} Flowsheet Design` }}>
            <Text style={{ paddingLeft: 0 }}>{serialNum}.{subSerialNum++}</Text>
            <Text style={{ paddingLeft: 5 }}>Flowsheet Design</Text>
          </View>
          <View style={{ width: RationValWidth(tableWidth), margin: '0 auto', border: 1, borderRadius: 5, borderColor: '#B3D3D7' }}>
            <Image src={flowSheetImage} alt="" />
          </View>
        </View>
      )}
      {/* create Flowsheet Configuration */}
      {/* <View style={[styleflowsheet.mainwrapper, {margin: '0', flexWrap: 'wrap' }]} >
        {Object.keys(flowsheet_config).map((ele, ind) => {
          if (!Object.keys(flowsheet_config[ele]).length) {
            return (<Text key={ind} />);
          }
          return (
            <View key={ind} style={{ paddingRight: 10, paddingTop: 10, width: RationValWidth(270) }}>
              <View style={[styleflowsheet.mainwrapper, { padding: 0 }]}>
                <View style={{ width: '70%' }}>
                  <View style={{ backgroundColor: '#0062A9', borderRight: 1, borderColor }}>
                    <Text style={[styleflowsheet.textprop, { fontFamily: ArialB600 }]}>{header[ele]}</Text>
                  </View>
                  {Object.keys(flowsheet_config[ele]).map((data, i) => {
                    return (
                      <View key={i} style={{ borderRight: 1, borderTop: 1, borderColor }}>
                        <Text style={[styleflowsheet.textprop, { color: '#383F40' }]}>{data}</Text>
                      </View>
                    );
                  })}
                </View>
                <View style={{ width: '30%' }}>
                  <View style={{ backgroundColor: '#0062A9' }}>
                    <Text style={[styleflowsheet.textprop, { fontFamily: ArialB600 }]}>Qty</Text>
                  </View>
                  {Object.values(flowsheet_config[ele]).map((data, i) => {
                    return (
                      <View key={i} style={{ borderTop: 1, borderColor }}>
                        <Text style={[styleflowsheet.textprop, { color: '#383F40' }]}>{data}</Text>
                      </View>
                    );
                  })}
                </View>
              </View
            </View>
          );
        })}
      </View> */}
      {/* <View style={[styleflowsheet.mainHeader, { width: '100%' }]} fixed>
        {console.log(subSerialNum)}
        <Text style={[styleflowsheet.mainHeaderText, { paddingRight: 5, }]} >{serialNum}. Flowsheet Design Summary (Continued)
        </Text>
        <SubLine lineWidth='39%' lineHeight='24'  style={{marginLeft: 5}}/>
      </View> */}
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