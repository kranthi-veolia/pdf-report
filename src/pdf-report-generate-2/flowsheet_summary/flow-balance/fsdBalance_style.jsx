import { StyleSheet } from '@react-pdf/renderer';
import { ArialRegural, RationValWidth, ArialB600 } from '../../fonts/font';

const borderColor = '#B3D3D7';
const borderW = 0.8;
export const fsdStyle = StyleSheet.create({
  tableRow: {
    flexDirection: 'row',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    border: 1,
    borderColor,
    alignItems: 'left',
    overflow: 'hidden',
    color: '#ffffff',
    fontFamily: ArialRegural,
    margin: '0 15'
  },
  tableRow1: {
    marginTop: '-1px',
    flexDirection: 'row',
    alignItems: 'left',
    overflow: 'hidden',
    border: borderW,
    borderColor,
    borderLeftWidth: borderW + 0.2,
    borderRightWidth: borderW + 0.2,
  },
  tableCol: {
    backgroundColor: '#0062A9',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    borderRight: 1,
    borderColor,
    borderLeft: 0,
  },
  tableCol1: {
    overflow: 'hidden',
    borderRight: 1,
    borderColor,
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
    color: '#272B30',
    fontFamily: ArialB600,
    marginBottom: RationValWidth(15),
  },
  subtextHeader: {
    marginBottom: RationValWidth(24),
    marginLeft: RationValWidth(30),
    fontSize: RationValWidth(16)
  }
});
