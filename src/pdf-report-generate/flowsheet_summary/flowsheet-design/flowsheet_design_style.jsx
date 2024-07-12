import { StyleSheet } from '@react-pdf/renderer';
import { RationValWidth, ArialRegural, ArialB600 } from '../../fonts/font';

const borderColor = '#B3D3D7';
const border = 1;

export const styleflowsheet = StyleSheet.create({
  mainwrapper: {
    border,
    borderColor,
    flexDirection: 'row',
    padding: 20,
    borderRadius: 5,
    overflow: 'hidden',
    fontFamily: ArialRegural,
  },
  textHeader: {
    flexDirection: 'row',
    fontSize: RationValWidth(20),
    color: '#272B30',
    fontFamily: ArialB600,
    marginBottom: RationValWidth(25),
  },
  mainHeader: {
    flexDirection: 'row',
    color: '#272B30',
    fontFamily: ArialB600,
  },
  textprop: {
    fontFamily: ArialRegural,
    fontSize: RationValWidth(20),
    padding: '0 5',
    color: '#FFF'
  },
  mainHeaderDisplay: {
    subHeaderDisplay:{
      display: 'none'
    }
  }
});