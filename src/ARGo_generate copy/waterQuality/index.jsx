import React from 'react';
import { Svg, Text, View, Image, Rect } from '@react-pdf/renderer';
import { RationValWidth} from '../fonts/font';

import DisplayWaterQuality from './waterQualityReport';
import DisplayCalculatedResults from './calculationResultsReport';
import DisplaySaturationConc from './saturationConReport';
import { Styles } from '../tableStyles';

function DisplayArgoTables(props) {
  const {waterData, resultsData, product, saturation, svgData, info} = props;
  return (
    <>
      <View style={{ marginLeft: RationValWidth(2), paddingRight: '10px', paddingBottom:'10px', flexDirection: 'row'}}>
        <View style={{width: RationValWidth(520)}}>
          <DisplayWaterQuality waterData={waterData} />
        </View>
        <View style={{width: RationValWidth(620)}}>
          <DisplayCalculatedResults resultsData={resultsData} product={product} />
        </View>
      </View>
      <View style={[Styles.subHeader, { marginTop: 15 }]}>
        <Text style={{ paddingLeft: 5 }}>Degrees of Saturation in Concentrate as %</Text>
      </View>
      <View style={{width: RationValWidth(1140)}}>
        <DisplaySaturationConc saturation={saturation} />
      </View>
      <View style={[Styles.subHeader, { marginTop: 15 }]}>
        <Text style={{ paddingLeft: 5 }}>{`${info.Recovery} % Recovery, ${product}`}</Text>
      </View>
      <View style={[Styles.subHeader, { marginTop: 15 }]}>
        <Svg width="15" height="8" viewBox="0 0 15 10" fill="none" >
          <Rect width="20" height="12" fill="white"/>
          <Rect width="3.33333" height="2" fill="#8bc63e"/>
          <Rect x="3.33301" y="2" width="3.33333" height="2" fill="#8bc63e"/>
          <Rect x="10" width="3.33333" height="2" fill="#8bc63e"/>
          <Rect y="6" width="3.33333" height="2" fill="#8bc63e"/>
          <Rect x="6.66699" y="4" width="3.33333" height="2" fill="#8bc63e"/>
          <Rect x="13.333" y="2" width="3.33333" height="2" fill="#8bc63e"/>
          <Rect x="3.33301" y="8" width="3.33333" height="2" fill="#8bc63e"/>
          <Rect x="10" y="6" width="3.33333" height="2" fill="#8bc63e"/>
          <Rect x="16.667" y="4" width="3.33333" height="2" fill="#8bc63e"/>
          <Rect x="6.66699" y="10" width="3.33333" height="2" fill="#8bc63e"/>
          <Rect x="13.333" y="8" width="3.33333" height="2" fill="#8bc63e"/>
          <Rect x="16.667" y="10" width="3.33333" height="2" fill="#8bc63e"/>
        </Svg>
        <Text style={{ paddingLeft: 5, paddingRight:10, fontSize:8 }}>No inhabitor</Text>
        <Svg width="15" height="8" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Rect width="20" height="12" fill="#8bc63e"/>
        </Svg>
        <Text style={{ paddingLeft: 5, fontSize:8  }}>{`With ${product}`}</Text>
      </View>
      <View style={{width: RationValWidth(1140), marginTop: 0 }}>
        <Image src={svgData} style={{width:'100%'}}/>
      </View>
    </>

  );
}

export default DisplayArgoTables;