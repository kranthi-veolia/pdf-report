import { StyleSheet } from '@react-pdf/renderer';
import { ArialRegural, ArialB600, ArialB700, RationValWidth } from './fonts/font';

const tabelborderColor = '#B3D3D7';
export const Styles = StyleSheet.create({
  mainHeader: {
    flexDirection: 'row',
    color: '#272B30',
    fontFamily: ArialB600,
    fontSize: RationValWidth(32),
    fontWeight: 800,
  },
  subHeader: {
    flexDirection: 'row',
    fontSize: RationValWidth(20),
    color: '#272B30',
    fontFamily: ArialB600,
  },
  table: {
    display: 'table',
    borderRadius: 6,
    borderColor: tabelborderColor,
    borderWidth: 0.5,
    margin: '5 auto'
  },
  tableRow: {
    flexDirection: 'row',
    display: 'flex',
    overflow: 'hidden',
  },
  tableColumn: {
    flexDirection: 'column',
    overflow: 'hidden',
  },
  tableHeader: {
    height: RationValWidth(40),
    borderStyle: 'thin',
    borderColor: tabelborderColor,
    borderRightWidth: 0.5,
    backgroundColor: '#0062A9',
    color: '#ffffff',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tableCellTextHeader: {
    margin: '0',
    color: '#383F40',
    height: RationValWidth(40),
    fontFamily: ArialB600,
    fontSize: RationValWidth(16),
    paddingTop: 5,
    paddingLeft: 10,
  },
  tableCellHeader: {
    fontFamily: ArialB600,
    fontSize: RationValWidth(16),
  },
  tableCell: {
    color: '#383F40',
    fontFamily: ArialRegural,
    fontSize: RationValWidth(14),
    padding: 1,
    justifyContent: 'center',
    margin: 'auto 0'
  },
  tableRCText: {
    borderStyle: 'thin',
    borderRightWidth: 1,
    borderColor: tabelborderColor,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center'
  },
  noReportssubHeader:{
    fontFamily: ArialRegural,
    fontSize: RationValWidth(16),
  },
  image: {
    width: '10px',
    height: 10,
    margin: 'auto'
  },
  textImage: {
    width: '5px',
    height: '5px',
  },
  tableCellsubHeader: {
    fontFamily: ArialB600,
    fontSize: RationValWidth(18),
  }
});