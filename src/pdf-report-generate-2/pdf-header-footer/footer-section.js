/* eslint-disable max-len */
// 595 × 842 A4 size

import { Text, View } from '@react-pdf/renderer';
import moment from 'moment';
import { RationValWidth, ArialRegural, ArialB600 } from '../fonts/font';

const borderColor = '#B3D3D7';

const FooterSection = (props) => {
  const { version } = props;
  // projectName={invoiceData.project_details.project_name} fileName={invoiceData.project_details.file_name}
  return (
    <View
      style={{
        height: RationValWidth(124),
        borderTop: 1,
        borderColor,
        borderTopStyle: 'dashed',
        position: 'absolute',
        bottom: '0%',
        width: '100%',
        fontFamily: ArialRegural,
        padding: `0px ${RationValWidth(56)}`,
        marginTop: RationValWidth(56)
      }}
      fixed
    >
      <View
        style={{
          top: RationValWidth(30),
          fontSize: RationValWidth(16),
          color: '#272B30',
          height: RationValWidth(50),
          width: '40%',
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              fontFamily: ArialB600,
              width: RationValWidth(100),
            }}
          >
            Project Name
          </Text>
          <Text>{(version && version.project_name) || 'Project Name'}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ width: RationValWidth(100) }}>File Name</Text>
          <Text>{(version && version.file_name) || 'File Name'}</Text>
        </View>
      </View>
      {/* Footer Center section Start */}
      <View
        style={{
          color: '#272B30',
          fontFamily: ArialB600,
          position: 'absolute',
          left: '50%',
          top: RationValWidth(40),
          fontSize: RationValWidth(16),
          width: RationValWidth(140),
          height: RationValWidth(47),
          alignItems: 'center',
        }}
      >
        <Text>{moment().format('DD MMMM YYYY')}</Text>
        <Text>{moment().format('hh:mm A')}</Text>
      </View>
      {/* Footer Center section End */}
      {/* Footer Right section Start */}
      <View
        style={{
          position: 'absolute',
          right: RationValWidth(56),
          top: RationValWidth(44),
          width: RationValWidth(110),
          height: RationValWidth(36),
        }}
      >
        <Text
          style={{
            top: RationValWidth(8),
            color: '#383F40',
            fontSize: RationValWidth(16),
            fontFamily: ArialB600,
          }}
        >
          Page
        </Text>
        <View
          style={{ left: RationValWidth(38), width: RationValWidth(32), height: RationValWidth(32), backgroundColor: '#0062A9', borderRadius: '50%', position: 'absolute' }}
        >
          <Text
            style={{ color: 'white', fontFamily: ArialB600, fontSize: '8px', top: '1px', margin: 'auto' }}
            render={({ pageNumber }) => (
              `${pageNumber-1}`
            )}
            fixed
          />
        </View>
        <View
          style={{ position: 'absolute', right: 0, top: RationValWidth(8), fontSize: RationValWidth(16) }}
        >
          <Text render={({ totalPages }) => (
            `of  ${totalPages-1}`
          )} fixed />
        </View>
      </View>
      {/* Footer Right section End */}
    </View>
  );
};
export default FooterSection;
