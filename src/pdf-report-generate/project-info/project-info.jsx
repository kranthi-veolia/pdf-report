/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
import React from 'react';
import moment from 'moment';
import { Link, Path, Svg, Text, View, Defs, Stop, LinearGradient, G, ClipPath } from '@react-pdf/renderer';
import { ArialRegural, ArialB600, ArialB700, RationValWidth, RationValHeight, getFloatVal, ChineseFonts } from '../fonts/font';
import SubLine from '../createLine';
import { project_info } from './project-info_style';
import DisplayReports from '../reports';
import ProgramDetails from './program_details';

const tableHeader = (str) => {
  return (
    <View style={project_info.textHeader}>
      <SubLine lineWidth={RationValWidth(32)} lineHeight='1' color='#002D62' />
      <Text style={{ paddingLeft: RationValWidth(10) }}>{str}</Text>
    </View>
  );
};
const ProjectInfo = (props) => {
  const { info, pageWidth, project_details, errors } = props;
  const val = [{ 'Project Name': 'project name' }, { 'Customer Name': 'customer' }, { 'Engineer': 'engineer' }, { 'Location': 'location' }, { 'Mail ID': 'mailid' }, { 'Phone No': 'phone' }];
  // const val1 = [{ 'Notes': 'notes' }, { 'Created': 'datatime created' }, { 'Last Modified': 'datatime modified' }, { 'A & B Option': 'a_b_option' }, { 'System of Units': 'system_units' }];
  const val1 = [{ 'Notes': 'notes' }];

  const printData = (data) => {
    if (Object.prototype.toString.call(data) === '[object Object]') {
      return Object.values(data).join(', ');
    }
    return data || '-';
  };
  return (
    <View style={{ fontFamily: ArialRegural }} wrap>
      {/* header part first Page Start */}
      {/* header part first Page End */}
      {/* Notes Ends */}
      {/* <View style={[project_info.mainHeader, { width: RationValWidth(pageWidth) }]}>
        <View style={{ width: '13%' }}>
          <Text>Preface</Text>
        </View> */}
      {/* I reduced the line width to accommodate the text and added a margin left. --->kranthi */}
      {/* <SubLine lineWidth='100%' lineHeight='24' />
      </View> */}
      {/* Project Info  Start */}
      <View style={{ top: RationValHeight(64), borderRadius: 5, width: RationValWidth(pageWidth), height: RationValHeight(397), border: 1, backgroundColor: '#002D62', borderColor: '#002D62' }} >
        <Svg width={RationValWidth(1128)} height={RationValHeight(397)} viewBox="0 0 1128 397">
          <Defs>
            <LinearGradient id="myLinearGradient">
              <Stop stopColor="#002D62" />
              <Stop offset="1" stopColor="#EBF4FF" />
            </LinearGradient>
          </Defs>
          <Path fillRule="evenodd" clipRule="evenodd" d="M248.091 -1032.76C647.3 -1131.06 1050.6 -887.117 1148.9 -487.908C1247.19 -88.6995 1003.25 314.605 604.042 412.899C204.833 511.192 -198.472 267.251 -296.765 -131.958C-395.058 -531.167 -151.118 -934.472 248.091 -1032.76ZM258.573 -758.547C543.348 -828.664 831.045 -654.65 901.162 -369.875C971.279 -85.1003 797.265 202.596 512.49 272.714C227.715 342.831 -59.9818 168.816 -130.099 -115.958C-200.216 -400.733 -26.2017 -688.43 258.573 -758.547Z" fill="url(#myLinearGradient)" />
        </Svg>
        <View style={[project_info.membrane_system]}>
          <View style={{ fontSize: RationValWidth(57), lineHeight: 1.2, fontFamily: ArialB600 }}>
            <Text>Winflows* Membrane System</Text>
            <Text>Design Software</Text>
          </View>
          <View style={{ fontFamily: ArialRegural }}>
            <Text>Projection Report</Text>
          </View>
          <View style={{ width: RationValWidth(250), height: RationValHeight(35), fontSize: RationValWidth(20), fontFamily: ArialB600, marginTop: 20, border: 1, borderColor: 'white', borderRadius: 50 }}>
            <Text style={{ left: 7, top: 2 }}>WATER TECHNOLOGIES</Text>
          </View>
          <View style={{ width: RationValWidth(170), height: RationValHeight(70), left: RationValWidth(750), top: -30 }}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="170" height="68" viewBox="0 0 170 68" fill="none">
              <G clip-path="url(#clip0_4068_28669)">
                <Path d="M0 34C0 15.2223 15.2223 0 34 0H136C154.778 0 170 15.2223 170 34C170 52.7777 154.778 68 136 68H34C15.2223 68 0 52.7777 0 34Z" fill="#FCFCFC" />
                <Path d="M38.7453 48.1144C37.1433 47.9494 35.4687 47.4555 33.9574 46.7021C25.4769 42.4745 23.1722 31.3 29.2565 23.9096C31.1342 21.6288 33.7682 19.9406 36.6207 19.1897C38.846 18.6039 41.3147 18.5678 43.4923 19.0892C45.0572 19.4639 46.91 20.2837 48.2264 21.1839C50.6796 22.8614 52.6587 25.4006 53.7203 28.2325C54.0133 29.0141 54.3628 30.4004 54.5097 31.3634C54.6645 32.3783 54.6655 34.485 54.5118 35.5117C54.0382 38.6731 52.7616 41.3516 50.6417 43.6316C47.5891 46.9146 43.1906 48.5721 38.7453 48.1144ZM39.9637 41.6743C39.8788 41.5667 39.6172 41.2377 39.3825 40.9433C38.0959 39.3295 37.2352 37.5849 37.0382 36.1919C36.8517 34.8726 37.3449 33.3435 38.2037 32.5783C38.3553 32.4432 38.7038 32.2217 38.9781 32.0861C39.4631 31.8463 39.498 31.8395 40.245 31.8395C41.0017 31.8395 41.0209 31.8433 41.5294 32.1004C42.5443 32.6133 43.1731 33.532 43.403 34.8378C43.5048 35.4155 43.5098 35.5864 43.4406 36.1176C43.227 37.7584 42.4156 39.2986 40.5101 41.6801L40.3465 41.8846L40.9424 41.8365C44.236 41.571 47.0942 39.8518 48.8573 37.0757C49.6069 35.8956 50.1125 34.5519 50.3568 33.091C50.5367 32.0148 50.5056 30.32 50.2868 29.2758C49.4966 25.5057 46.7144 22.434 43.126 21.3702C42.1006 21.0662 41.2717 20.9731 39.9451 21.0129C38.6692 21.0512 38.2075 21.1278 37.1161 21.482C34.5698 22.3084 32.3675 24.2533 31.1634 26.7392C30.6913 27.7138 30.4706 28.3553 30.2525 29.3869C30.0404 30.3902 30.0431 32.4149 30.2578 33.4375C30.712 35.6008 31.5788 37.2371 33.0884 38.7802C34.2525 39.9703 35.447 40.7419 36.9577 41.2796C37.8514 41.5978 39.0022 41.8254 39.8972 41.8612L40.1182 41.87L39.9637 41.6743ZM97.5304 42.1765C93.7536 41.6276 91.8819 39.9354 91.2023 36.4551C91.0553 35.7025 91.0355 33.3413 91.1696 32.5535C91.4798 30.7309 92.0402 29.5059 93.0152 28.519C94.3248 27.1936 96.2109 26.5692 98.9051 26.5692C103.606 26.5692 106.071 28.5336 106.681 32.7657C106.807 33.6409 106.788 35.7132 106.646 36.5317C106.379 38.0651 105.856 39.2066 104.988 40.1468C104.01 41.2073 102.931 41.7692 101.221 42.1096C100.434 42.2662 98.4014 42.3031 97.5304 42.1765ZM100.124 39.5231C101.611 39.2024 102.47 38.222 102.861 36.3992C102.998 35.7569 103.055 33.7732 102.957 33.0219C102.733 31.2997 102.139 30.2327 101.09 29.6692C100.482 29.3421 99.9064 29.2237 98.9269 29.2237C96.6144 29.2237 95.4724 30.1373 94.9955 32.3689C94.8515 33.0426 94.7982 34.9509 94.8998 35.7942C95.1556 37.9168 96.1087 39.1517 97.777 39.5222C98.3382 39.6468 99.5481 39.6473 100.124 39.5231ZM65.4276 41.4842C64.0249 38.2682 59.3005 27.3189 59.2752 27.2252C59.2427 27.1048 59.3034 27.1003 60.6305 27.1249C61.9858 27.15 62.03 27.1553 62.4268 27.3412C62.6505 27.446 62.958 27.6614 63.1101 27.8198C63.433 28.1563 63.4488 28.1916 65.6815 33.5556C66.557 35.6589 67.289 37.3802 67.3081 37.3808C67.3272 37.3813 68.1352 35.3456 69.1036 32.8571C70.3742 29.5919 70.9297 28.2432 71.0994 28.0118C71.3893 27.6164 71.901 27.2941 72.4023 27.1911C72.611 27.1483 73.3634 27.1132 74.0745 27.1132C75.1809 27.1132 75.3618 27.1275 75.3299 27.2126C75.3094 27.2672 73.9521 30.347 72.3137 34.0565C69.0402 41.4681 69.1467 41.2626 68.3841 41.6456C68.018 41.8294 67.9633 41.8368 66.8026 41.8582L65.6004 41.8805L65.4276 41.4842ZM81.4376 41.7924C80.6941 41.6959 80.216 41.5509 79.5757 41.2278C78.4783 40.6741 77.6695 39.8167 77.0552 38.556C76.4136 37.2392 76.218 36.2896 76.218 34.4916C76.218 32.6936 76.4136 31.744 77.0552 30.4272C77.6693 29.1669 78.5219 28.2737 79.6306 27.7292C80.7633 27.1728 81.3113 27.1145 85.4109 27.1138L88.6528 27.1132V28.433V29.7529L85.8432 29.7851C82.7009 29.8211 82.3913 29.8566 81.5576 30.2763C81.0218 30.546 80.6767 30.901 80.4347 31.4314C80.2519 31.832 80.0907 32.4642 80.0618 32.8935L80.0412 33.1995L84.1475 33.2171L88.2538 33.2346V34.4916V35.7486L84.1475 35.7661L80.0412 35.7837L80.0618 36.0897C80.1182 36.9275 80.504 37.8899 80.948 38.3001C81.0985 38.4392 81.405 38.6405 81.6289 38.7474C82.4358 39.1324 82.7077 39.1617 85.8099 39.198L88.6528 39.2312V40.5506V41.87L85.278 41.8614C83.4218 41.8567 81.6937 41.8256 81.4376 41.7924ZM113.756 41.7933C113.168 41.7182 112.219 41.4444 111.81 41.2314C110.983 40.8015 110.227 40.0119 109.873 39.2078C109.394 38.12 109.322 37.0714 109.348 31.4654L109.367 27.1472H110.531C111.595 27.1472 111.717 27.1597 111.961 27.2936C112.295 27.4775 112.487 27.6863 112.639 28.0322C112.749 28.2817 112.762 28.6693 112.795 32.8935C112.82 36.0684 112.855 37.5527 112.907 37.7072C113.102 38.2797 113.534 38.7236 114.116 38.9498C114.616 39.1443 115.624 39.2179 117.786 39.2179H119.774V40.5439V41.87L116.998 41.8614C115.471 41.8567 114.012 41.826 113.756 41.7933ZM121.836 35.083V28.296L122.004 27.9503C122.184 27.5811 122.522 27.292 122.905 27.1796C123.03 27.1431 123.603 27.1132 124.179 27.1132H125.227V33.7402C125.227 38.0956 125.203 40.4809 125.158 40.6989C125.067 41.1291 124.761 41.505 124.334 41.7081C124.024 41.856 123.912 41.8687 122.916 41.8693L121.836 41.87V35.083ZM128.081 39.1035C128.73 37.5768 130.021 34.5375 130.951 32.3495C131.881 30.1615 132.731 28.2336 132.841 28.0653C132.951 27.8969 133.186 27.6601 133.363 27.5389C133.902 27.1705 134.209 27.113 135.63 27.1146L136.898 27.1161L139.99 34.3981C141.691 38.4032 143.092 41.7254 143.105 41.7808C143.124 41.8681 142.932 41.8785 141.675 41.8581C140.242 41.8349 140.218 41.832 139.843 41.6449C139.218 41.332 138.946 40.9541 138.391 39.6269L137.906 38.4684L135.02 38.4861L132.133 38.5038L131.646 39.6451C131.067 40.9986 130.851 41.2993 130.231 41.6116L129.786 41.836L128.344 41.8577L126.902 41.8794L128.081 39.1035ZM137.131 35.7905C137.131 35.7755 136.656 34.6239 136.076 33.2312L135.022 30.6992L134.305 32.4254C133.911 33.3748 133.43 34.5265 133.237 34.9846L132.886 35.8177H135.008C136.175 35.8177 137.131 35.8054 137.131 35.7905Z" fill="#FF0000" />
              </G>
              <Defs>
                <ClipPath id="clip0_4068_28669">
                  <Path d="M0 34C0 15.2223 15.2223 0 34 0H136C154.778 0 170 15.2223 170 34C170 52.7777 154.778 68 136 68H34C15.2223 68 0 52.7777 0 34Z" fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
          </View>
        </View>
      </View>
      <View style={[project_info.infoTableHeader, { marginTop: RationValHeight(100) }]}>
        <View style={{ height: '100%' }}>
          {tableHeader('Project Info')}
          <View style={{ top: RationValHeight(8), flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ width: '100%', marginLeft: RationValWidth(32) }}>
              {val.map((ele, ind) => {
                return (
                  <View key={ind} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {
                      Object.keys(ele).map((data, i) => {
                        return (
                          <React.Fragment key={i}>
                            <Text style={[project_info.textContent, { width: '25%' }]}>•  {data}</Text>
                            <Text style={{ width: '75%', fontSize: RationValWidth(18), fontFamily: ChineseFonts }}>{info.project_info[ele[data]] || '-'}</Text>
                          </React.Fragment>
                        );
                      })
                    }
                  </View>
                );
              })}
            </View>
          </View>
          {/* Flow Rate Specification Start */}
          <View style={{ top: RationValHeight(8) }}>
            <Text style={[project_info.textHeaderContent, { marginTop: RationValHeight(18) }]}> Specify Flow Option</Text>
            <View style={{ width: '100%', marginLeft: RationValWidth(32) }}>
              {(() => {
                const infodata = info.spec_flow;
                const type = Object.prototype.toString.call(infodata.type);
                if (type === '[object String]') {
                  return (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={[project_info.textContent, { width: '25%' }]}>•  {infodata.type}</Text>
                      <Text style={{ width: '75%', fontSize: RationValWidth(18), fontFamily: ArialB600 }}>
                        {getFloatVal(infodata.flow_rate, 'split')}
                      </Text>
                    </View>
                  );
                }
                if (type === '[object Array]') {
                  return infodata.type.map((data, i) => {
                    return (
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <React.Fragment key={i}>
                          <Text style={[project_info.textContent, { width: '25%' }]}>•  {data}</Text>
                          <Text style={{ width: '75%', fontSize: RationValWidth(18), fontFamily: ArialB600 }}>
                            {getFloatVal(infodata.flow_rate[i], 'split')}
                          </Text>
                        </React.Fragment>
                      </View>
                    );
                  });
                }
              })()}
              {/* {[
                { [getFloatVal(info.spec_flow.type, 'split')]: getFloatVal(info.spec_flow.flow_rate, 'split') || '-' },
              ].map((ele, ind) => {
                return (
                  <View key={ind} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {
                      Object.keys(ele).map((data, i) => {
                        return (
                          <React.Fragment key={i}>
                            <Text style={[project_info.textContent, { width: '25%' }]}>•  {data}</Text>
                            <Text style={{ width: '75%', fontSize: RationValWidth(18), fontFamily: ArialB600}}>{ele[data]}</Text>
                          </React.Fragment>
                        );
                      })
                    }
                  </View>
                );
              })} */}
            </View>
          </View>
          {/* Flow Rate Specification Ends */}
          {/* Notes Starts */}
          <Text style={[project_info.textHeaderContent, { width: '100%', fontFamily: ArialB600, top: RationValHeight(18) }]}>•  Notes</Text>
          <View style={{ marginLeft: RationValWidth(8) }}>
            {val1.map((ele, ind) => {
              return (
                <View key={ind} style={{ flexDirection: 'row' }}>
                  {Object.keys(ele).map((data, i) => {
                    return (
                      <React.Fragment key={i}>
                        <Text style={{ width: '100%', fontSize: RationValWidth(18), fontFamily: ChineseFonts }}>{printData(info.project_info.notes)}</Text>
                      </React.Fragment>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </View>

        <View style={{ position: 'absolute', bottom:'0px', width: RationValWidth(1140) }}>
          <SubLine lineWidth='100%' lineHeight='24' color='#B3D3D7' />
          {/* Winflows 5 Program details and Report Details Start */}
          <View style={{ marginLeft: RationValWidth(32), paddingRight: '10px', paddingBottom:'10px'}}>
            {tableHeader('Notifications')}
            <DisplayReports errors={errors} />
            {/* <ProgramDetails info={info} project_info={project_info} project_details={project_details}/> */}

          </View>
        </View>

        {/* Contact for Technical Support End */}
      </View>
      {/* Project Info  End */}
    </View>
  );
};
export default ProjectInfo;