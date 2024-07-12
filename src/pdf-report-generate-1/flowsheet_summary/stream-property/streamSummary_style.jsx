import { StyleSheet } from '@react-pdf/renderer';
import { RationValWidth, ArialRegural, ArialB600 } from '../../fonts/font';

const borderColor = '#B3D3D7';
export const streamStyle = StyleSheet.create({
  tableRow: {
    flexDirection: 'row',
    alignItems: 'left',
    overflow: 'hidden',
    color: '#ffffff',
    fontFamily: ArialRegural,
    margin: '0 auto'
  },
  tableRow1: {
    marginTop: '-1px',
    flexDirection: 'row',
    alignItems: 'left',
    overflow: 'hidden',
    fontFamily: ArialRegural,
    margin: '0 auto'
  },
  tableCol: {
    backgroundColor: '#0062A9',
    overflow: 'hidden',
    border: 0.7,
    borderColor,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: ArialRegural
  },
  tableCol1: {
    border: 0.7,
    borderColor,
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
    color: '#272B30',
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
    color: '#272B30',
    fontFamily: ArialB600,
  },
  mainHeaderText: {
    fontSize: RationValWidth(32),
    fontWeight: 800,
    width: '105%'
  },
});