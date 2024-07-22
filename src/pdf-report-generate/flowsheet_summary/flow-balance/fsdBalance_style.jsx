import { StyleSheet } from '@react-pdf/renderer';
import { ArialRegural, RationValWidth, ArialB600 } from '../../fonts/font';

const borderColor = '#002D62';
const borderW = 0.8;
export const fsdStyle = StyleSheet.create({
  tableRow: {
    flexDirection: 'row',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    // borderTopColor: borderColor,
    border: 1,
    borderLeftColor: borderColor,
    borderTopColor: borderColor,
    borderRightColor: borderColor,
    borderBottomWidth: 0,
    // borderBottomColor: '#B3D3D7',
    alignItems: 'left',
    overflow: 'hidden',
    color: '#ffffff',
    fontFamily: ArialRegural,
    margin: '0'
  },
  contentBoreder: {
    margin: 0,
    border: 1,
    borderLeftColor: borderColor,
    borderRightColor: borderColor,
    borderBottomColor: borderColor,
    borderTopWidth: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  tableRow1: {
    marginTop: '-1px',
    flexDirection: 'row',
    alignItems: 'left',
    overflow: 'hidden',
    border: borderW,
    borderBottomWidth: 0,
    borderTopColor: '#B3D3D7',
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  tableCol: {
    backgroundColor: '#002D62',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    borderRight: 1,
    borderRightColor: '#B3D3D7',
    borderLeft: 0,
  },
  tableCol1: {
    overflow: 'hidden',
    borderRight: 1,
    borderRightColor: '#B3D3D7',
  },
  tableCell: {
    fontFamily: ArialRegural,
    fontSize: RationValWidth(16),
  },
  flexDirection: {
    flexDirection: 'row',
    fontFamily: ArialRegural,
  },
  firstChild: {
    marginLeft: RationValWidth(16),
    textAlign: 'left',
  },
  restChild: {
    textAlign: 'center',
    width: '100%',
  },
  textHeader: {
    flexDirection: 'row',
    fontSize: RationValWidth(20),
    color: '#000000',
    fontFamily: ArialB600,
    marginBottom: RationValWidth(15),
  },
  subtextHeader: {
    marginBottom: RationValWidth(24),
    marginLeft: RationValWidth(30),
    fontSize: RationValWidth(16)
  }
});
