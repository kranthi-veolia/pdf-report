import { StyleSheet } from '@react-pdf/renderer';
import { RationValWidth, ArialB600, RationValHeight } from '../fonts/font';

export const project_info = StyleSheet.create({
  membrane_system: {
    left: RationValWidth(56),
    top: RationValHeight(78),
    width: RationValWidth(794),
    position: 'absolute',
    color: '#ffffff'
  },
  infoTableHeader: {
    padding: RationValWidth(32),
    border: 1,
    borderColor: '#002D62',
    borderRadius: RationValWidth(5),
    width: RationValWidth(1140),
    height: RationValHeight(1100)
  },
  textHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: RationValWidth(32),
    color: '#002D62',
    fontFamily: ArialB600,
  },
  textContent: {
    color: '#000000',
    fontSize: RationValWidth(18),
    marginBottom: RationValHeight(8),
  },
  textHeaderContent: {
    fontSize: RationValWidth(20),
    color: '#000000',
    fontFamily: ArialB600,
    marginBottom: RationValHeight(16)
  },
  mainHeader: {
    marginBottom: RationValHeight(30),
    top: RationValHeight(32),
    flexDirection: 'row',
    color: '#000000',
    fontFamily: ArialB600,
  },
  mainHeaderText: {
    fontSize: RationValWidth(32),
    color: '#000000',
    fontFamily: ArialB600,
  },
});