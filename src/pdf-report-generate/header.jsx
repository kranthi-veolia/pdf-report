/* eslint-disable no-console */
/* eslint-disable max-len */
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import RationValWidth, { ArialRegural, ArialB600 } from './fonts/font';

const borderColor = '#B3D3D7';
let tablewidth = 1140;
let headercount = 1;
let rowWidthInc = 3;
const borderW = 0.8;
const roelementstyle = StyleSheet.create({
  tableCell: {
    fontFamily: ArialRegural,
    fontSize: RationValWidth(16),
  },
  restChild: {
    textAlign: 'center',
    width: '100%',
  },
  tableRow: {
    flexDirection: 'row',
    overflow: 'hidden',
    color: '#ffffff',
    fontFamily: ArialRegural,
    fontSize: RationValWidth(16),
  },
  tableCol: {
    borderRight: borderW,
    borderColor,
    backgroundColor: '#002D62',
    overflow: 'hidden',
    justifyContent: 'center'
  },
  flexDirection: {
    flexDirection: 'row',
    fontFamily: ArialRegural,
  },
});

const TableHeader = (props) => {
  const { tableWidth, headerval } = props;
  tablewidth = tableWidth || tablewidth;
  headercount = headerval.length;
  const getSingleRowWidth = (count) => {
    if (count) {
      return RationValWidth((tablewidth / headercount) * rowWidthInc / count - 1);
    }
    return RationValWidth(tablewidth / headercount) * rowWidthInc;
  };
  const splitHeaderData = (ele, data) => {
    const count = Object.keys(data).length + 1;
    return Object.prototype.toString.call(ele) === '[object Array]' ? (
      ele.map((dta, ind) => (
        <View key={ind}
          style={[
            { width: getSingleRowWidth(ele.length), borderTop: 1, borderLeft: 1, borderColor, height: `${RationValWidth(100 / count)}px`, justifyContent: 'center' },
            ind === 0 && { borderLeft: 0 },
          ]}
        >
          <Text
            style={[
              roelementstyle.tableCell, roelementstyle.restChild, { fontFamily: ArialB600 }
            ]}
          >
            {dta}
          </Text>
        </View>
      ))
    ) : (
      <View style={{ height: `${RationValWidth(100 / count)}px`, width: '100%', justifyContent: 'center' }}>
        <Text
          style={[roelementstyle.tableCell, roelementstyle.restChild, { fontFamily: ArialB600 }]}
        >
          {ele}
        </Text>
      </View>
    );
  };
  const getColumnCount = (ele) => {
    let count = 1;
    if (Object.prototype.toString.call(ele) === '[object Object]') {
      Object.keys(ele).map((data) => {
        if (Object.prototype.toString.call(ele[data]) === '[object Array]') {
          if (count < ele[data].length) {
            count = ele[data].length;
          }
        }
        return count;
      });
    }
    return count;
  };
  const createHeader = (item) => {
    return (
      <View style={[roelementstyle.tableRow]}>
        {item.map((ele, ind) => {
          rowWidthInc = getColumnCount(ele);
          return (
            <View key={ind}
              style={[
                roelementstyle.tableCol,
                ind === item.length - 1 && { borderRight: 0 },
                { width: RationValWidth((tablewidth / headercount)) },
                Object.prototype.toString.call(ele) === '[object Object]' && Object.keys(ele).length > 1 &&
                { width: getSingleRowWidth() }
              ]}
            >
              {Object.prototype.toString.call(ele) === '[object Object]' ? (
                Object.keys(ele).map((data, keyInd) => (
                  <View key={keyInd} style={[roelementstyle.flexDirection]} >
                    {splitHeaderData(ele[data], ele)}
                  </View>
                ))
              ) : (
                <View >
                  <Text style={[roelementstyle.tableCell, roelementstyle.restChild, { fontFamily: ArialB600 }]}>
                    {ele}
                  </Text>
                </View>
              )}
            </View>
          );
        })
        }
      </View >
    );
  };
  return (
    <View>
      {createHeader(headerval)}
    </View>
  );
};
export default TableHeader;