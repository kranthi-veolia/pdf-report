import { StyleSheet } from '@react-pdf/renderer';
import { RationValWidth, ArialRegural, ArialB600 } from '../../fonts/font';

const borderColor = '#002D62';
export const streamStyle = StyleSheet.create({
  tableRow: {
    flexDirection: 'row',
    alignItems: 'left',
    overflow: 'hidden',
    color: '#ffffff',
    fontFamily: ArialRegural,
    margin: '0'
  },
  tableRow1: {
    marginTop: '-1px',
    flexDirection: 'row',
    alignItems: 'left',
    overflow: 'hidden',
    fontFamily: ArialRegural,
    margin: '0',
  },
  tableCol: {
    backgroundColor: '#002D62',
    overflow: 'hidden',
    border: 0.7,
    borderRightColor: '#B3D3D7',
    borderTopColor: borderColor,
    borderBottomColor: '#B3D3D7',
    borderLeftColor: borderColor,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: ArialRegural
  },
  tableCol1: {
    border: 0.7,
    borderRightColor: '#B3D3D7',
    borderTopColor: borderColor,
    borderBottomColor: '#B3D3D7',
    borderLeftColor: borderColor,
    overflow: 'hidden',
  },
  tableCell: {
    fontFamily: ArialRegural,
    fontSize: RationValWidth(16),
    padding: '4 0'
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
  },
  subtextHeader: {
    marginTop: RationValWidth(13),
    marginBottom: RationValWidth(24),
    marginLeft: RationValWidth(30),
    fontSize: RationValWidth(16)
  },
  mainHeader: {
    flexDirection: 'row',
    color: '#000000',
    fontFamily: ArialB600,
  },
  mainHeaderText: {
    fontSize: RationValWidth(32),
    fontWeight: 800,
  },
});