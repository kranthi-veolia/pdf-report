import { StyleSheet } from '@react-pdf/renderer';
import { RationValWidth, ArialB600, RationValHeight } from '../fonts/font';

export const project_info = StyleSheet.create({
  infoTableHeader: {
    padding: RationValWidth(32),
    border: 1,
    borderColor: '#B3D3D7',
    borderRadius: RationValWidth(5),
    width: RationValWidth(1140),
    height: RationValHeight(1240)
  },
  textHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: RationValWidth(32),
    color: '#0062A9',
    fontFamily: ArialB600,
  },
  textContent: {
    color: '#383F40',
    fontSize: RationValWidth(18),
    marginBottom: RationValHeight(8),
  },
  textHeaderContent: {
    fontSize: RationValWidth(20),
    color: '#272B30',
    fontFamily: ArialB600,
    marginBottom: RationValHeight(16)
  },
  mainHeader: {
    marginBottom: RationValHeight(30),
    top: RationValHeight(32),
    flexDirection: 'row',
    color: '#272B30',
    fontFamily: ArialB600,
  },
  mainHeaderText: {
    fontSize: RationValWidth(32),
    color: '#272B30',
    fontFamily: ArialB600,
  },
});