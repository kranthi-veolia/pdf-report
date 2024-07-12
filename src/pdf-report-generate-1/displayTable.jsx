/* eslint-disable no-useless-escape */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import React from 'react';
import { View } from '@react-pdf/renderer';
import StreamSummary from './flowsheet_summary/stream-property/streamSummary';

const DisplayTable = (props) => {
  const { invoice, serialNum } = props;
  let { subSerialNum } = props;
  return (
    <View style={{ margin: '0 auto' }}>
      {invoice.stream_output && Object.keys(invoice.stream_output).length && (
        <View
          style={[
            { margin: '0 auto', width: '100%' },
          ]}
          wrap>
          <StreamSummary
            pageWidth={1140}
            stream_output={invoice.stream_output}
            unit_set_dict={invoice.system_units}
            tableWidth={900}
            serialNum={serialNum}
            subSerialNum={subSerialNum}
            invoice={invoice}
          />
        </View>
      )}
    </View>
  );
};
export default DisplayTable;
