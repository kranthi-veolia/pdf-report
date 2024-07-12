/* eslint-disable max-len */
/* eslint-disable no-console */
import { Text, View } from '@react-pdf/renderer';
import { roelementstyle } from './ro-element-style';
import RationValWidth, { getFloatVal, ArialB600 } from '../fonts/font';
import TableHeader from '../header';
import SubLine from '../createLine';

let tablewidth = 1140;
const borderColor = '#B3D3D7';
let rowCount = [];
const RoElement = (props) => {
  const { ro_elem_summary, pageWidth, tableWidth, serialNum } = props;
  tablewidth = tableWidth || tablewidth;
  let herder_val = [];
  const mainBorder = ['permeate ion concentration', 'stream property'];
  const subBorder = ['tds', 'bicarbonate (hco3)', 'sulfate (so4)', 'ionic strength'];
  const createHeaderContent = (element, stage, stageIndex) => {
    herder_val = [
      'Category',
      'Parameter',
      { 'header1': 'Stage No.', 'header2': ['Element Pos.'] },
    ];
    rowCount = [...herder_val];
    const data = ro_elem_summary[element][stage];
    const eleLen = Object.keys(data);
    const obj = {};
    const arr = [];
    obj.header1 = stageIndex + 1;
    if (eleLen.length) {
      eleLen.map((subStage, subStageInd) => {
        arr.push(subStageInd + 1);
        rowCount.push(subStage);
        return arr;
      });
      if (arr.length) {
        obj.header2 = arr;
      }
      herder_val.push(obj);
      return herder_val;
    }
    return herder_val;
  };

  const createContent = (element, headerCreate, headerCreateInd) => {
    const roUnits = ro_elem_summary.units;
    const reportContent = ro_elem_summary[element];
    return (
      <View>
        {Object.keys(roUnits).map((category, catInd) => {
          const columnwidth = RationValWidth(tablewidth / (rowCount.length - 1));
          return (
            <View key={catInd} style={[roelementstyle.tableCell, { flexDirection: 'row' }]}>
              <View style={[roelementstyle.borderTop, roelementstyle.borderRight, { width: columnwidth }]}>
                <Text style={[roelementstyle.firstEle, { margin: 'auto', padding: '0 5' }]}>{category}</Text>
              </View>
              <View style={[roelementstyle.borderTop, { flexDirection: 'column' }]}>
                {Object.keys(roUnits[category]).map((subCat, subCatInd) => {
                  const data = [headerCreate];
                  return (
                    <View key={subCatInd} style={{ flexDirection: 'row' }}>
                      <View style={[
                        roelementstyle.borderRight,
                        { width: columnwidth, overflow: 'hidden' },
                        ((mainBorder.indexOf(category.toLowerCase()) >= 0 && subBorder.indexOf(subCat.toLowerCase()) >= 0) && roelementstyle.borderTop)
                      ]}>
                        <Text style={[roelementstyle.firstEle, { margin: '0 5' }]}>{subCat}</Text>
                      </View>
                      <View style={[
                        roelementstyle.borderRight,
                        { width: columnwidth, overflow: 'hidden' },
                        ((mainBorder.indexOf(category.toLowerCase()) >= 0 && subBorder.indexOf(subCat.toLowerCase()) >= 0) && roelementstyle.borderTop)
                      ]}>
                        <Text style={[roelementstyle.restEle]}>{roUnits[category][subCat]}</Text>
                      </View>
                      {data.map((content, conInd) => {
                        const contentKey = Object.keys(reportContent[content]);
                        return (
                          <View key={conInd} style={[
                            { flexDirection: 'row' }]}>
                            {contentKey.map((key, ind) => {
                              return (
                                <View key={ind} style={[
                                  roelementstyle.borderRight,
                                  ((mainBorder.indexOf(category.toLowerCase()) >= 0 && subBorder.indexOf(subCat.toLowerCase()) >= 0) && roelementstyle.borderTop),
                                  { width: columnwidth },
                                  (data.length - 1 === conInd && contentKey.length - 1 === ind && { borderRight: 0 })
                                ]}>
                                  <Text style={[roelementstyle.restEle]}>{getFloatVal(reportContent[content][key].Category[category][subCat])}</Text>
                                </View>
                              );
                            })}
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={{ width: RationValWidth(pageWidth) }}>
      <View style={[roelementstyle.mainHeader, { width: RationValWidth(pageWidth) }]} fixed>
        <View style={{ width: '100%' }}>
          <Text>{serialNum}. Detailed RO Element-Level Data</Text>
        </View>
        <SubLine lineWidth='100%' lineHeight='24' />
      </View>
      {ro_elem_summary['RO Unit ID'].map((element, index) => {
        return (
          <View key={index} style={[
            { width: RationValWidth(tablewidth + 5) }
          ]} break={index > 0}>
            {Object.keys(ro_elem_summary[element]).map((headerCreate, headerCreateInd) => {
              const headerval = createHeaderContent(element, headerCreate, headerCreateInd);
              return (
                <View key={headerCreateInd} style={[{ border: 1, borderColor, borderRadius: 5}]} break={headerCreateInd > 0}>
                  <View id={`header-${index}`} style={[roelementstyle.tableCell, { fontFamily: ArialB600 }]}>
                    <Text style={[roelementstyle.firstEle, { padding: 5 }]}>{element}</Text>
                  </View>
                  <TableHeader tableWidth={tablewidth} headerval={headerval} />
                  {createContent(element, headerCreate, headerCreateInd)}
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};
export default RoElement;