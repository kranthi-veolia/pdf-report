import React from 'react';
import { Text, View, } from '@react-pdf/renderer';
import { ArialRegural, ArialB600, ArialB700, RationValWidth} from '../fonts/font';

import DisplayWaterQuality from './waterQualityReport';
import DisplayCalculatedResults from './calculationResultsReport';
import DisplaySaturationConc from './saturationConReport';
import DisplayArgoChart from './DisplayArgoChart';
import { ChartSvg } from './Chart';
import CustomBarChart from './charts/BarChart';
import CustomLineChart from './charts/LineChart';
import { Styles } from '../tableStyles';

function DisplayArgoTables(props) {
  const {waterData, resultsData, product, saturation} = props;
  return (
    <>
      {/* <View style={{ marginLeft: RationValWidth(2), paddingRight: '10px', paddingBottom:'10px', flexDirection: 'row'}}>
        <View style={{width: RationValWidth(520)}}>
          <DisplayWaterQuality waterData={waterData} />
        </View>
        <View style={{width: RationValWidth(620)}}>
          <DisplayCalculatedResults resultsData={resultsData} product={product} />
        </View>
      </View>
      <View style={[Styles.subHeader, { marginTop: 15 }]} >
        <Text style={{ paddingLeft: 5 }}>Degrees of Saturation in Concentrate as %</Text>
      </View>
      <View style={{width: RationValWidth(1140)}}>
        <DisplaySaturationConc saturation={saturation} />
      </View> */}
      {/* <View style={{width: RationValWidth(1140)}}> */}
      <View style={{width: RationValWidth(1240)}}>
        <ChartSvg>
          <CustomBarChart saturation={saturation}/>
        </ChartSvg>
      </View>
      <View style={{width: RationValWidth(1240)}}>
        <ChartSvg>
          <CustomLineChart saturation={saturation}/>
        </ChartSvg>
      </View>
      {/* </View> */}
    </>

  );
}

export default DisplayArgoTables;