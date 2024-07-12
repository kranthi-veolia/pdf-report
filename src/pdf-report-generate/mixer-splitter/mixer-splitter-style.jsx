import { StyleSheet } from '@react-pdf/renderer';
import { ArialRegural, ArialB600, RationValWidth } from '../fonts/font';

const borderColor = '#B3D3D7';
const borderW = 0.8;
export const membraneStyle = StyleSheet.create({
  mainTable: {
    overflow: 'hidden',
    border: borderW,
    margin: '0 auto',
    borderRadius: 5,
    borderColor
  },
  tableRow: {
    flexDirection: 'row',
    overflow: 'hidden',
    color: '#ffffff',
    fontFamily: ArialRegural,
    fontSize: RationValWidth(16),
  },
  tableRow1: {
    marginTop: '-1px',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  tableCol: {
    borderRight: borderW,
    borderColor,
    backgroundColor: '#0062A9',
    overflow: 'hidden',
    justifyContent:'center'
  },
  tableCell: {
    fontFamily: ArialRegural,
    fontSize: RationValWidth(16),
  },
  flexDirection: {
    flexDirection: 'row',
    fontFamily: ArialRegural,
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
  tablebodyRow1: {
    flexDirection: 'row',
    borderTop: borderW,
    borderColor,
  },
  tablebodyCol1: {
    textAlign: 'center',
    justifyContent: 'center',
    width: '50%',
    borderRight: 1,
    borderColor,
  },
  mainHeader: {
    flexDirection: 'row',
    color: '#272B30',
    fontFamily: ArialB600,
  },
});
