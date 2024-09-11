/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import moment from 'moment';
import { Link, Path, Svg, Text, View, Defs, Stop, LinearGradient, G, ClipPath } from '@react-pdf/renderer';
import { ArialRegural, ArialB600, ArialB700, RationValWidth, RationValHeight, getFloatVal, ChineseFonts } from '../fonts/font';
import SubLine from '../createLine';
import { Styles } from '../tableStyles';
import { project_info } from './project-info_style';

function ProgramDetails(props) {
  const {info, project_details, serialNum} = props;
  return (
    <View>
      <View style={Styles.mainHeader}>
        <Text style={[Styles.mainHeaderText, { paddingRight: 5 }]}>{serialNum}. Winflows 5 Program details</Text>
        <SubLine lineWidth='65%' lineHeight='24' style={{marginLeft: 5}} />
      </View>
      <View style={{ top: RationValHeight(8), justifyContent: 'space-between', width: '100%', marginLeft: RationValWidth(32) }}>
        {[
          { 'Program Version': info.version.prog_version === 'NA' ? '5.0' : info.version.prog_version },
          { 'Program Last Update': info.version.prog_last_update === 'NA' ? project_details.last_update : info.version.prog_last_update /* '2023-10-13' */ },
          { 'Database Version': info.version.db_version === 'NA' ? project_details.db_version : info.version.db_version /* '4.08' */ },
          { 'Database Last Update': info.version.db_last_update === 'NA' ? moment(project_details.DateOfChange).format('YYYY-MM-DD') : info.version.db_last_update /* '2023-01-20' */ }
        ].map((ele, ind) => {
          return (
            <View key={ind} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              {
                Object.keys(ele).map((data, i) => {
                  return (
                    <React.Fragment key={i}>
                      <Text style={[project_info.textContent, { width: '25%' }]}>•  {data}</Text>
                      <Text style={{ width: '75%', fontSize: RationValWidth(18), fontFamily: ArialB600 }}>{ele[data]}</Text>
                    </React.Fragment>
                  );
                })
              }
            </View>
          );
        })}
      </View>
      {/* Winflows 5 Program details and Report Details Start */}
      {/* {tableHeader('Contact for Technical Support')} */}
      <Text style={[project_info.textHeaderContent, { top: RationValHeight(18) }]}>Contact for Technical Support</Text>
      <View style={{ top: RationValHeight(8), flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: RationValWidth(32), height: RationValHeight(32) }}>
          <Svg style={{ marginLeft: -10, }} xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'>
            <Path fill-rule='evenodd' clip-rule='evenodd' d='M24.2999 21.0571C24.2999 20.7 24.1749 20.3964 23.9249 20.1464L21.1392 17.3607C20.8892 17.1107 20.5856 16.9857 20.2285 16.9857C19.8535 16.9857 19.5321 17.1285 19.2642 17.4143C19.291 17.441 19.3758 17.5236 19.5187 17.662C19.6615 17.8004 19.7575 17.8964 19.8066 17.95C19.8557 18.0035 19.9227 18.0884 20.0075 18.2044C20.0923 18.3205 20.1504 18.4343 20.1816 18.546C20.2129 18.6576 20.2285 18.7803 20.2285 18.9143C20.2285 19.2714 20.1035 19.575 19.8535 19.825C19.6035 20.075 19.2999 20.2 18.9428 20.2C18.8088 20.2 18.6861 20.1843 18.5745 20.1531C18.4629 20.1218 18.349 20.0638 18.2329 19.979C18.1169 19.8942 18.0321 19.8272 17.9785 19.7781C17.9249 19.729 17.8289 19.633 17.6905 19.4902C17.5521 19.3473 17.4696 19.2625 17.4428 19.2357C17.1481 19.5125 17.0008 19.8384 17.0008 20.2134C17.0008 20.5705 17.1258 20.8741 17.3758 21.1241L20.1347 23.8964C20.3758 24.1375 20.6794 24.258 21.0454 24.258C21.4026 24.258 21.7062 24.1419 21.9562 23.9098L23.9249 21.9544C24.1749 21.7044 24.2999 21.4053 24.2999 21.0571L24.2999 21.0571ZM14.8847 11.6151C14.8847 11.258 14.7597 10.9544 14.5097 10.7044L11.7508 7.93208C11.5008 7.68208 11.1972 7.55708 10.8401 7.55708C10.4918 7.55708 10.1883 7.67762 9.92935 7.91869L7.9606 9.87405C7.7106 10.124 7.5856 10.4232 7.5856 10.7714C7.5856 11.1285 7.7106 11.4321 7.9606 11.6821L10.7463 14.4678C10.9874 14.7089 11.291 14.8294 11.657 14.8294C12.032 14.8294 12.3535 14.691 12.6213 14.4142C12.5945 14.3874 12.5097 14.3048 12.3668 14.1665C12.224 14.0281 12.128 13.9321 12.0789 13.8785C12.0298 13.8249 11.9628 13.7401 11.878 13.624C11.7932 13.508 11.7352 13.3941 11.7039 13.2825C11.6727 13.1709 11.657 13.0482 11.657 12.9142C11.657 12.5571 11.782 12.2535 12.032 12.0035C12.282 11.7535 12.5856 11.6285 12.9427 11.6285C13.0767 11.6285 13.1994 11.6441 13.311 11.6754C13.4226 11.7066 13.5365 11.7647 13.6526 11.8495C13.7686 11.9343 13.8535 12.0013 13.907 12.0504C13.9606 12.0995 14.0566 12.1955 14.195 12.3383C14.3334 12.4812 14.416 12.566 14.4427 12.5928C14.7374 12.316 14.8847 11.9901 14.8847 11.6151L14.8847 11.6151ZM25.7463 18.3249C26.4963 19.0749 26.8713 19.9857 26.8713 21.0571C26.8713 22.1285 26.4918 23.0348 25.7329 23.7758L23.7642 25.7312C23.0231 26.4723 22.1168 26.8428 21.0454 26.8428C19.9651 26.8428 19.0543 26.4633 18.3133 25.7044L15.5543 22.9321C14.8133 22.191 14.4427 21.2848 14.4427 20.2133C14.4427 19.1151 14.8356 18.1821 15.6213 17.4142L14.4427 16.2357C13.6749 17.0214 12.7463 17.4142 11.657 17.4142C10.5856 17.4142 9.67487 17.0392 8.92487 16.2892L6.13916 13.5035C5.38916 12.7535 5.01416 11.8428 5.01416 10.7714C5.01416 9.69995 5.39362 8.7937 6.15255 8.05262L8.1213 6.09726C8.86238 5.35619 9.76863 4.98566 10.8401 4.98566C11.9204 4.98566 12.8311 5.36512 13.5722 6.12405L16.3311 8.89637C17.0722 9.63744 17.4427 10.5437 17.4427 11.6151C17.4427 12.7133 17.0499 13.6464 16.2642 14.4142L17.4427 15.5928C18.2106 14.8071 19.1392 14.4142 20.2284 14.4142C21.2999 14.4142 22.2106 14.7892 22.9606 15.5392L25.7463 18.3249Z' fill='#002D62' />
          </Svg>
        </View>
        <Text style={{ left: RationValWidth(16), fontSize: RationValWidth(16) }}>
          <Link src='https://www.watertechnologies.com/' style={{ color: '#002D62' }}>
            {/* https://www.veoliawatertechnologies.com/en */}
        https://www.watertechnologies.com/
          </Link>
        </Text>
      </View>
      <View style={{ top: RationValHeight(8), flexDirection: 'row', alignItems: 'center', marginBottom: RationValHeight(32) }}>
        <View style={{ width: RationValWidth(32), height: RationValHeight(32) }}>
          <Svg style={{ marginLeft: -10, }} xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'>
            <Path fill-rule='evenodd' clip-rule='evenodd' d='M26.2857 23.1143V12.8286C26 13.1501 25.692 13.4447 25.3616 13.7126C22.9688 15.5518 21.067 17.0608 19.6563 18.2393C19.2009 18.6233 18.8304 18.9224 18.5447 19.1367C18.259 19.3509 17.8728 19.5675 17.3862 19.7862C16.8996 20.005 16.442 20.1143 16.0134 20.1143H16H15.9866C15.5581 20.1143 15.1005 20.005 14.6139 19.7862C14.1273 19.5675 13.7411 19.3509 13.4554 19.1367C13.1697 18.9224 12.7991 18.6233 12.3438 18.2393C10.9331 17.0608 9.03128 15.5518 6.63842 13.7126C6.30807 13.4447 6.00003 13.1501 5.71432 12.8286V23.1143C5.71432 23.2304 5.75673 23.3308 5.84155 23.4156C5.92637 23.5005 6.02682 23.5429 6.14289 23.5429H25.8572C25.9733 23.5429 26.0737 23.5005 26.1586 23.4156C26.2434 23.3308 26.2858 23.2304 26.2858 23.1143H26.2857ZM26.2857 9.03839C26.2857 9.02053 26.2857 8.97142 26.2857 8.89106C26.2857 8.81071 26.2857 8.75044 26.2857 8.71026C26.2857 8.67008 26.2835 8.61205 26.279 8.53615C26.2746 8.46026 26.2612 8.40446 26.2389 8.36874C26.2165 8.33303 26.192 8.29285 26.1652 8.24821C26.1384 8.20357 26.0982 8.17008 26.0447 8.14776C25.9911 8.12544 25.9286 8.11428 25.8572 8.11428H6.14285C6.02678 8.11428 5.92633 8.15669 5.84151 8.24151C5.75669 8.32633 5.71428 8.42678 5.71428 8.54285C5.71428 10.0429 6.37053 11.3107 7.68303 12.3464C9.40625 13.7036 11.1964 15.1187 13.0536 16.592C13.1071 16.6366 13.2634 16.7683 13.5223 16.987C13.7812 17.2058 13.9866 17.3732 14.1384 17.4893C14.2902 17.6053 14.4888 17.746 14.7344 17.9112C14.9799 18.0763 15.2054 18.1991 15.4107 18.2795C15.6161 18.3598 15.808 18.4 15.9866 18.4H16H16.0134C16.192 18.4 16.3839 18.3598 16.5893 18.2795C16.7946 18.1991 17.0201 18.0763 17.2656 17.9112C17.5112 17.746 17.7098 17.6053 17.8616 17.4893C18.0134 17.3732 18.2188 17.2058 18.4777 16.987C18.7366 16.7683 18.8929 16.6366 18.9464 16.592C20.8036 15.1187 22.5938 13.7036 24.317 12.3464C24.7991 11.9625 25.2478 11.4469 25.6629 10.7995C26.0781 10.1522 26.2857 9.56517 26.2857 9.03839L26.2857 9.03839ZM28 8.54285V23.1143C28 23.7036 27.7902 24.208 27.3706 24.6277C26.9509 25.0473 26.4465 25.2571 25.8572 25.2571H6.14286C5.55357 25.2571 5.04911 25.0473 4.62946 24.6277C4.20982 24.208 4 23.7036 4 23.1143V8.54285C4 7.95356 4.20982 7.4491 4.62946 7.02946C5.04911 6.60982 5.55357 6.39999 6.14286 6.39999H25.8572C26.4465 6.39999 26.9509 6.60982 27.3706 7.02946C27.7902 7.4491 28 7.95356 28 8.54285Z' fill='#002D62' />
          </Svg>
        </View>
        <Text style={{ left: RationValWidth(16), fontSize: RationValWidth(16), color: '#000000' }}>
          <Link href='mailto:kin-ho.wee@veolia.com' style={{ color: '#000000' }}>
        kin-ho.wee@veolia.com
          </Link>
        </Text>
      </View></View>
  );
}

export default ProgramDetails;