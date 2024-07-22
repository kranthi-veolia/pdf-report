/* eslint-disable max-len */
import { Defs, G, Path, Rect, Svg, Text, View } from '@react-pdf/renderer';
import { RationValWidth, ArialRegural, ArialB600} from '../fonts/font';
import { Styles } from '../tableStyles';

const borderColor = '#B3D3D7';
const HeaderSection = (props) => {
  const { version } = props;
  return (
    <View
      style={{
        height: RationValWidth(124),
        borderBottom: 1,
        borderColor,
        borderBottomStyle: 'dashed',
        width: '100%',
        fontFamily: ArialRegural,
        padding: `0px ${RationValWidth(56)}`,
        marginBottom: RationValWidth(24)
      }}
      fixed
    >
      {/* winflow logo Start */}
      <View
        style={{ width: RationValWidth(272), height: RationValWidth(33), left: RationValWidth(7), top: '40%' }}
      >
        {/* veolia logo Start */}
        <View
          style={{ left: -RationValWidth(80), position: 'absolute', height: '100%' }}
        >
          <Svg
            xmlns='http://www.w3.org/2000/svg'
            width='134'
            height='33'
            viewBox='0 0 134 33'
          >
            <Path
              d='M83.464 26.1192C81.1074 26.1192 78.5544 25.5301 77.1797 24.3518C75.4122 22.9771 74.2339 20.6204 74.2339 17.4783C74.2339 11.5867 77.1797 8.64093 83.2676 8.64093C89.3556 8.64093 92.3014 11.5867 92.3014 17.6747C92.105 23.1735 89.1592 26.1192 83.464 26.1192ZM83.2676 11.5867C79.9291 11.5867 78.5544 13.3542 78.5544 17.4783C78.5544 21.406 80.1255 23.3698 83.2676 23.3698C86.4098 23.3698 87.9809 21.6024 87.9809 17.4783C87.7845 13.3542 86.4098 11.5867 83.2676 11.5867Z'
              fill='#FF0000'
            />
            <Path
              d='M103.495 22.7808C101.139 22.7808 100.353 22.5844 99.7639 21.9952C99.1748 21.4061 98.9784 21.0133 98.9784 19.4422V10.8012C98.9784 10.0157 98.1929 9.23016 97.4073 9.23016H95.2471V18.4603C95.2471 21.4061 95.4435 22.5844 96.4254 23.7627C97.6037 25.1374 99.1748 25.7266 101.728 25.7266H106.834V22.7808H103.495Z'
              fill='#FF0000'
            />
            <Path
              d='M126.472 9.23016H123.919C122.937 9.23016 122.152 9.81932 121.759 10.6049L115.082 25.7266H117.635C118.617 25.7266 119.599 25.1374 119.992 24.3519L120.973 21.9952H127.454L128.436 24.3519C128.829 25.1374 129.614 25.7266 130.793 25.7266H133.542L126.472 9.23016ZM121.759 19.0494L124.116 13.3543L126.472 19.0494H121.759Z'
              fill='#FF0000'
            />
            <Path
              d='M110.958 9.23016C109.976 9.23016 109.387 10.0157 109.387 10.8012V25.5302H111.547C112.529 25.5302 113.118 24.7446 113.118 23.9591V9.23016H110.958Z'
              fill='#FF0000'
            />
            <Path
              d='M16.3 0C7.26626 0 0 7.26626 0 16.3C0 25.3337 7.26626 32.6 16.3 32.6C25.3337 32.6 32.6 25.3337 32.6 16.3C32.7964 7.26626 25.3337 0 16.3 0ZM16.4964 25.7265C18.4602 23.5663 20.4241 20.4241 20.0313 17.8711C19.6385 15.3181 17.6747 14.5325 16.4964 14.5325C15.3181 14.5325 13.3542 15.3181 12.9614 17.8711C12.3723 20.4241 14.3361 23.3699 16.4964 25.7265C10.0157 25.7265 4.71325 20.4241 4.71325 14.1398C4.71325 7.65903 10.0157 2.55301 16.3 2.55301C22.7807 2.55301 27.8867 7.65903 27.8867 14.1398C28.0831 20.4241 22.7807 25.7265 16.4964 25.7265Z'
              fill='#FF0000'
            />
            <Path
              d='M53.4168 9.23013C52.4349 9.23013 51.453 9.81929 51.2566 10.6048L47.3289 20.6205L43.0084 10.6048C42.6156 9.81929 41.8301 9.23014 40.6518 9.03375H38.0988L45.365 25.3337H47.5253C48.5072 25.3337 49.2927 24.7446 49.6855 23.959L56.3626 9.03375H53.4168'
              fill='#FF0000'
            />
            <Path
              d='M62.0577 13.9434C62.6469 12.5687 64.0216 12.1759 66.3782 12.1759H71.4842V9.23016H65.0035C64.0216 9.23016 63.236 9.23016 62.4505 9.42655C62.0577 9.42655 61.4686 9.62294 61.0758 9.81932C60.0939 10.2121 59.5047 10.8013 59.5047 10.8013C58.9155 11.3904 58.3264 12.1759 57.9336 12.9615C57.3445 14.1398 57.1481 15.5145 57.1481 17.0856V17.282C57.1481 18.8531 57.3445 20.2278 57.9336 21.4061C58.3264 22.388 58.9155 23.1735 59.5047 23.5663C59.5047 23.5663 59.8975 23.9591 60.0939 23.9591C60.4866 24.3519 61.0758 24.5482 61.4685 24.7446C61.6649 24.7446 61.8613 24.941 62.0577 24.941C62.2541 24.941 62.2541 24.941 62.2541 24.941C62.8432 25.1374 63.8252 25.1374 64.8071 25.1374H71.2878V22.1916H66.1818C63.8252 22.1916 62.4505 21.6025 61.8613 20.4241C61.6649 19.835 61.4685 19.2458 61.4685 18.4603V18.2639H70.8951V15.5145H61.4685V15.3181C61.6649 15.1217 61.8613 14.5326 62.0577 13.9434Z'
              fill='#FF0000'
            />
          </Svg>
        </View>
        {/* veolia logo End */}
        {/* winflow logo Start */}
        <View
          style={{ left: '28%', top: '20%', height: RationValWidth(28) }}
        >
          <Svg
            width='122'
            height='28'
            viewBox='0 0 122 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <Path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M22.04 4.00349H20.6033C19.9253 4.00349 19.7315 4.29407 19.7315 5.08508C19.7315 5.60166 19.8445 5.81152 20.2804 5.81152H20.5871C20.797 5.81152 20.8939 5.85995 20.8939 6.11824V10.1056H20.2643C19.8284 10.1056 19.7315 10.2832 19.7315 11.0096C19.7315 11.736 19.8284 11.9136 20.2643 11.9136H23.9288C24.3646 11.9136 24.4615 11.736 24.4615 11.0096C24.4615 10.2832 24.3646 10.1056 23.9288 10.1056H23.2023V4.95594C23.2023 4.2295 22.9602 4.00349 22.04 4.00349ZM22.04 0H21.7171C20.9907 0 20.4903 0.274433 20.4903 1.32374C20.4903 2.35689 20.7163 2.64747 21.4589 2.64747H22.3144C23.0409 2.64747 23.2669 2.35689 23.2669 1.32374C23.2669 0.258289 22.7665 0 22.04 0ZM4.63307 0.290576H0.532723C0.113002 0.290576 0 0.452007 0 1.19459C0 1.93717 0.113002 2.0986 0.532723 2.0986H1.19459L3.56763 11.1387C3.76134 11.849 4.10035 12.0105 4.89136 12.0105H6.52182C7.31283 12.0105 7.68412 11.8329 7.84555 11.1226L9.08857 5.47251C9.26614 4.6815 9.37915 3.87435 9.47601 3.06719H9.78272C9.87018 3.79598 9.99712 4.49844 10.1279 5.22211L10.1702 5.45637L11.3163 11.1387C11.4616 11.849 11.849 12.0105 12.6401 12.0105H14.1575C14.9485 12.0105 15.3198 11.8329 15.4974 11.1226L17.8059 2.0986H18.5161C18.9359 2.0986 19.0489 1.93717 19.0489 1.19459C19.0489 0.452007 18.9359 0.290576 18.5161 0.290576H14.4804C14.0284 0.290576 13.9476 0.452007 13.9476 1.19459C13.9476 1.93717 14.0284 2.0986 14.4804 2.0986H15.6265L14.1575 7.74869C13.9315 8.62042 13.7862 9.45986 13.6732 10.3477H13.3665C13.2535 9.45986 13.1082 8.62042 12.9145 7.74869L11.6876 2.26004C11.5262 1.5336 11.171 1.37216 10.3316 1.37216H8.95943C8.11999 1.37216 7.78098 1.5336 7.63569 2.26004L6.36039 7.74869C6.16667 8.62042 6.02138 9.45986 5.92452 10.3477H5.6178C5.48866 9.44372 5.32723 8.60428 5.08508 7.74869L3.59991 2.0986H4.63307C5.08508 2.0986 5.1658 1.93717 5.1658 1.19459C5.1658 0.452007 5.08508 0.290576 4.63307 0.290576ZM26.4235 4.00349H27.5051C28.1831 4.00349 28.4252 4.19721 28.5221 4.77836L28.5705 5.13351H28.845C29.3293 4.16492 30.1041 3.80977 31.4279 3.80977C33.8009 3.80977 34.8502 5.18194 34.8502 7.78098V10.1056H35.5766C36.0125 10.1056 36.1094 10.2832 36.1094 11.0096C36.1094 11.736 36.0125 11.9136 35.5766 11.9136H31.9122C31.4763 11.9136 31.3794 11.736 31.3794 11.0096C31.3794 10.2832 31.4763 10.1056 31.9122 10.1056H32.5417V8.00698C32.5417 6.23124 32.1382 5.6178 30.9113 5.6178C29.6683 5.6178 29.0225 6.2151 29.0225 7.4904V10.1056H29.6521C30.088 10.1056 30.1848 10.2832 30.1848 11.0096C30.1848 11.736 30.088 11.9136 29.6521 11.9136H26.0845C25.6486 11.9136 25.5518 11.736 25.5518 11.0096C25.5518 10.2832 25.6486 10.1056 26.0845 10.1056H26.7141V6.11824C26.7141 5.85995 26.6172 5.81152 26.4074 5.81152H26.1006C25.6648 5.81152 25.5518 5.60166 25.5518 5.08508C25.5518 4.29407 25.7455 4.00349 26.4235 4.00349ZM38.0486 4.00349H37.08C36.5957 4.00349 36.515 4.16492 36.515 4.89136C36.515 5.65009 36.5957 5.77923 37.08 5.77923H38.0486V10.1056H37.2575C36.8217 10.1056 36.7248 10.2832 36.7248 11.0096C36.7248 11.736 36.8217 11.9136 37.2575 11.9136H41.487C41.9229 11.9136 42.0198 11.736 42.0198 11.0096C42.0198 10.2832 41.9229 10.1056 41.487 10.1056H40.357V5.77923H42.2458C42.7301 5.77923 42.8108 5.65009 42.8108 4.89136C42.8108 4.16492 42.7301 4.00349 42.2458 4.00349H40.357V3.32548C40.357 2.27618 40.7606 1.93717 41.6323 1.93717C42.0359 1.93717 42.6493 2.03403 43.0852 2.17932C43.6018 2.34075 43.6986 2.16318 43.9246 1.45288C44.1184 0.855584 44.0376 0.661868 43.7148 0.500437C43.0691 0.193718 42.3265 0.0968584 41.6 0.0968584C39.0333 0.0968584 38.0486 1.19459 38.0486 3.48691V4.00349ZM45.6062 0.290576H47.0429C47.9631 0.290576 48.2052 0.51658 48.2052 1.24302V10.1056H48.9317C49.3675 10.1056 49.4644 10.2832 49.4644 11.0096C49.4644 11.736 49.3675 11.9136 48.9317 11.9136H45.2672C44.8313 11.9136 44.7345 11.736 44.7345 11.0096C44.7345 10.2832 44.8313 10.1056 45.2672 10.1056H45.8968V2.40532C45.8968 2.14703 45.7999 2.0986 45.59 2.0986H45.2833C44.8475 2.0986 44.7345 1.88874 44.7345 1.37216C44.7345 0.581152 44.9282 0.290576 45.6062 0.290576ZM52.8793 8.05541V7.87784C52.8793 6.40881 53.4443 5.56937 54.8487 5.56937C56.2532 5.56937 56.8182 6.40881 56.8182 7.87784V8.05541C56.8182 9.52444 56.2532 10.3477 54.8487 10.3477C53.4443 10.3477 52.8793 9.52444 52.8793 8.05541ZM50.5224 7.78098V8.16841C50.5224 10.7836 52.1044 12.1073 54.8487 12.1073C57.5931 12.1073 59.1751 10.7836 59.1751 8.16841V7.78098C59.1751 5.1658 57.5931 3.80977 54.8487 3.80977C52.1044 3.80977 50.5224 5.1658 50.5224 7.78098ZM60.3923 4.00349H63.7177C64.1536 4.00349 64.2505 4.18107 64.2505 4.90751C64.2505 5.63395 64.1536 5.81152 63.7177 5.81152H63.0882L64.0083 9.10471C64.1213 9.50829 64.1859 9.91187 64.2505 10.3316H64.5249C64.5733 9.89573 64.6379 9.50829 64.7348 9.08857L65.4935 5.76309C65.6226 5.10122 65.9616 4.93979 66.7849 4.93979H67.8827C68.706 4.93979 69.0288 5.10122 69.1741 5.76309L69.9813 9.12086C70.0781 9.52444 70.1427 9.91187 70.1911 10.3316H70.4656C70.514 9.91187 70.5786 9.52444 70.6916 9.12086L71.6279 5.81152H70.8207C70.3848 5.81152 70.288 5.63395 70.288 4.90751C70.288 4.18107 70.3848 4.00349 70.8207 4.00349H74.1623C74.5982 4.00349 74.6951 4.18107 74.6951 4.90751C74.6951 5.63395 74.5982 5.81152 74.1623 5.81152H73.6619L72.1444 11.2033C71.9669 11.8329 71.644 12.0105 70.853 12.0105H69.61C68.819 12.0105 68.4477 11.8652 68.3185 11.2033L67.5921 7.78098C67.5114 7.39354 67.4468 7.02225 67.4145 6.61868H67.1401C67.1239 7.02225 67.0594 7.39354 66.9786 7.78098L66.2522 11.1872C66.1069 11.849 65.7356 12.0105 64.9446 12.0105H63.6532C62.8783 12.0105 62.5554 11.849 62.3617 11.2033L60.812 5.81152H60.3923C59.9564 5.81152 59.8595 5.63395 59.8595 4.90751C59.8595 4.18107 59.9564 4.00349 60.3923 4.00349ZM75.6094 6.26353V6.3281C75.6094 7.76484 76.4004 8.4267 78.6443 8.74957L79.0963 8.81414C80.7914 9.05629 81.0335 9.29843 81.0335 9.78273C81.0335 10.267 80.7106 10.5415 79.4676 10.5415C78.7735 10.5415 78.1277 10.4607 77.5466 10.3316V9.87958C77.5466 9.54058 77.3852 9.37915 76.4811 9.37915C75.5771 9.37915 75.4157 9.54058 75.4157 10.0733V10.7352C75.4157 11.3647 75.7224 11.6553 76.3036 11.8006C77.03 11.9943 78.0632 12.1073 79.1125 12.1073C82.1797 12.1073 83.3097 11.171 83.3097 9.63744V9.54058C83.3097 7.70026 82.1635 7.23211 80.0972 6.95768L79.7421 6.90925C78.2085 6.69939 77.934 6.52182 77.934 6.08595C77.934 5.58552 78.2892 5.34337 79.3708 5.34337C79.9035 5.34337 80.3071 5.3918 80.8398 5.5048V5.84381C80.8398 6.18281 81.0012 6.34424 81.9052 6.34424C82.8092 6.34424 82.9707 6.18281 82.9707 5.65009V5.23037C82.9707 4.69765 82.7285 4.3425 82.0989 4.16492C81.3079 3.92278 80.4039 3.80977 79.4676 3.80977C77.1914 3.80977 75.6094 4.40707 75.6094 6.26353ZM102.588 19.5062L102.532 20.0147C102.33 19.9502 102.112 19.926 101.902 19.926C101.289 19.926 101.014 20.2811 101.014 21.056V21.3546H102.145H102.201H103.017V20.0228L103.622 19.8533V21.3546H104.801V21.8308H103.622V23.994C103.622 24.7124 103.751 24.898 104.228 24.898C104.429 24.898 104.615 24.8738 104.768 24.8335L104.841 25.342C104.615 25.3904 104.308 25.4308 104.058 25.4308C103.251 25.4308 103.017 25.0756 103.017 24.2442V21.8308H102.201H102.145H101.014V25.3662H100.409V21.8308H99.537V21.3546H100.409V21.0721C100.409 19.9502 100.966 19.4336 101.926 19.4336C102.152 19.4336 102.37 19.4578 102.588 19.5062ZM20.3426 25.4146C21.6018 25.4146 22.4089 24.6075 22.4089 23.1788C22.4089 21.9358 21.8762 21.282 20.9318 21.282C20.3022 21.282 19.7857 21.6452 19.5597 22.2506L19.5435 22.2425C19.5919 22.0407 19.6162 21.734 19.6162 21.508V19.474H19.0108V25.2613C19.4224 25.3743 19.8018 25.4146 20.3426 25.4146ZM20.8108 21.7824C21.4726 21.7824 21.7713 22.3232 21.7713 23.2272C21.7713 24.438 21.2305 24.9384 20.3991 24.9384C20.0924 24.9384 19.8502 24.9061 19.6162 24.8335V23.429C19.6162 22.7187 20.0036 21.7824 20.8108 21.7824ZM5.9811 25.3662H6.62683L5.81967 19.9179H5.01252L3.73721 23.6631C3.63228 23.986 3.54349 24.2927 3.43856 24.664H3.43049C3.3417 24.2927 3.21256 23.873 3.12377 23.6066L1.87268 19.9179H1.08974L0.31487 25.3662H0.952523L1.34803 22.0569C1.4126 21.508 1.46103 21.0479 1.49332 20.6201H1.50139C1.59018 20.9672 1.70318 21.3627 1.84847 21.7905L3.06727 25.3662H3.75335L5.03673 21.5483C5.16587 21.169 5.25466 20.8461 5.30309 20.6201H5.31923C5.35152 20.9188 5.40802 21.3788 5.49681 22.0004L5.9811 25.3662ZM10.732 23.2676C10.7482 23.1223 10.7482 22.9851 10.7482 22.9044C10.7482 22.0326 10.2962 21.282 9.19036 21.282C8.07649 21.282 7.42269 22.186 7.42269 23.3806C7.42269 24.785 8.06842 25.4388 9.26301 25.4388C9.76344 25.4388 10.2316 25.342 10.6271 25.1886L10.5222 24.6963C10.1751 24.8496 9.77152 24.9303 9.38408 24.9303C8.48007 24.9303 8.01192 24.446 8.05227 23.2676H10.732ZM9.15001 21.7501C9.76344 21.7501 10.1347 22.1779 10.1186 22.8236H8.08456C8.18142 22.1699 8.585 21.7501 9.15001 21.7501ZM17.5435 25.3662H16.9381V22.7833C16.9381 22.1779 16.7928 21.7824 16.2117 21.7824C15.5982 21.7824 15.009 22.4201 15.009 23.4613V25.3662H14.4117V22.7752C14.4117 22.2264 14.2987 21.7824 13.6853 21.7824C13.0234 21.7824 12.4826 22.4766 12.4826 23.4613V25.3662H11.8772V21.3546H12.4745C12.4745 21.621 12.4584 22.0004 12.41 22.2506L12.4261 22.2586C12.6521 21.6694 13.1768 21.282 13.8386 21.282C14.7507 21.282 14.9444 21.9358 14.9606 22.2425C15.1059 21.8631 15.5417 21.282 16.357 21.282C17.1076 21.282 17.5435 21.6856 17.5435 22.5896V25.3662ZM25.4488 21.2901L25.4246 21.8873C24.5367 21.734 24.117 22.412 24.117 23.7599V25.3662H23.5116V21.3546H24.1089C24.1089 21.621 24.0766 22.0165 24.0121 22.3636L24.0282 22.3716C24.1896 21.7824 24.6094 21.1932 25.4488 21.2901ZM28.3464 25.3662H28.9437C28.9275 25.011 28.9275 24.559 28.9275 24.1635V22.6864C28.9275 21.8308 28.5804 21.282 27.5069 21.282C26.9823 21.282 26.4738 21.4111 26.0863 21.5726L26.2155 22.0649C26.5545 21.8954 27.0388 21.7663 27.4181 21.7663C28.0962 21.7663 28.3222 22.1053 28.3222 22.8075V23.0093C26.7401 23.0093 25.8765 23.5501 25.8765 24.3734C25.8765 25.0272 26.3366 25.4388 26.9742 25.4388C27.6603 25.4388 28.1769 25.0272 28.3706 24.5187H28.3867C28.3464 24.7528 28.3464 25.0595 28.3464 25.3662ZM28.3222 23.4532V23.5501C28.3222 24.2442 27.8459 24.9465 27.1437 24.9465C26.7401 24.9465 26.4818 24.664 26.4818 24.2846C26.4818 23.8487 26.8935 23.4532 28.3222 23.4532ZM33.5891 25.3662H32.9837V22.7752C32.9837 22.1456 32.8142 21.7824 32.2331 21.7824C31.5147 21.7824 31.0062 22.4927 31.0062 23.4452V25.3662H30.4008V21.3546H30.9981C30.9981 21.621 30.9739 22.0084 30.9336 22.2506L30.9497 22.2586C31.1757 21.6694 31.6842 21.282 32.3864 21.282C33.3066 21.282 33.5891 21.8551 33.5891 22.5734V25.3662ZM37.9893 23.2676C38.0054 23.1223 38.0054 22.9851 38.0054 22.9044C38.0054 22.0326 37.5534 21.282 36.4476 21.282C35.3337 21.282 34.68 22.186 34.68 23.3806C34.68 24.785 35.3257 25.4388 36.5203 25.4388C37.0207 25.4388 37.4889 25.342 37.8844 25.1886L37.7794 24.6963C37.4324 24.8496 37.0288 24.9303 36.6413 24.9303C35.7373 24.9303 35.2692 24.446 35.3095 23.2676H37.9893ZM36.4073 21.7501C37.0207 21.7501 37.392 22.1779 37.3759 22.8236H35.3418C35.4387 22.1699 35.8423 21.7501 36.4073 21.7501ZM43.1765 24.1716C43.1765 24.8819 42.555 25.4388 41.5138 25.4388C41.2071 25.4388 40.8681 25.4065 40.6178 25.3339L40.6905 24.777C40.9488 24.8738 41.2878 24.9303 41.5945 24.9303C42.1514 24.9303 42.555 24.672 42.555 24.2523C42.555 23.8056 42.1514 23.6894 41.7104 23.5625C41.1792 23.4096 40.5936 23.241 40.5936 22.4604C40.5936 21.7905 41.1183 21.282 42.1434 21.282C42.3936 21.282 42.7003 21.3223 42.9344 21.3708L42.8779 21.8793C42.6357 21.8066 42.3532 21.7582 42.0788 21.7582C41.4976 21.7582 41.2151 22.0004 41.2151 22.3959C41.2151 22.8374 41.6227 22.9586 42.0663 23.0904C42.5957 23.2479 43.1765 23.4205 43.1765 24.1716ZM43.8043 27.4406C44.7003 27.4406 45.1846 27.0047 45.6527 25.7456L47.3155 21.3546H46.6536L45.9352 23.3887C45.7738 23.8487 45.6043 24.3492 45.5317 24.6075H45.5236C45.4348 24.3088 45.346 24.0263 45.2169 23.655L44.3774 21.3546H43.6833L45.2169 25.3662L45.0393 25.8343C44.7084 26.6899 44.3694 26.9079 43.9173 26.9079C43.764 26.9079 43.5703 26.8836 43.4411 26.8514L43.3765 27.3922C43.4976 27.4164 43.6752 27.4406 43.8043 27.4406ZM50.3968 24.1716C50.3968 24.8819 49.7753 25.4388 48.734 25.4388C48.4273 25.4388 48.0883 25.4065 47.8381 25.3339L47.9107 24.777C48.169 24.8738 48.508 24.9303 48.8148 24.9303C49.3717 24.9303 49.7753 24.672 49.7753 24.2523C49.7753 23.8056 49.3717 23.6894 48.9306 23.5625C48.3994 23.4096 47.8139 23.241 47.8139 22.4604C47.8139 21.7905 48.3385 21.282 49.3636 21.282C49.6138 21.282 49.9206 21.3223 50.1546 21.3708L50.0981 21.8793C49.856 21.8066 49.5735 21.7582 49.2991 21.7582C48.7179 21.7582 48.4354 22.0004 48.4354 22.3959C48.4354 22.8374 48.843 22.9586 49.2865 23.0904C49.816 23.2479 50.3968 23.4205 50.3968 24.1716ZM52.7596 25.4308C53.0098 25.4308 53.3165 25.3904 53.5425 25.342L53.4699 24.8335C53.3165 24.8738 53.1309 24.898 52.9291 24.898C52.4529 24.898 52.3237 24.7124 52.3237 23.994V21.8308H53.5022V21.3546H52.3237V19.8533L51.7184 20.0228V21.3546H50.8466V21.8308H51.7184V24.2442C51.7184 25.0756 51.9524 25.4308 52.7596 25.4308ZM57.4986 22.9044C57.4986 22.9851 57.4986 23.1223 57.4824 23.2676H54.8027C54.7623 24.446 55.2304 24.9303 56.1345 24.9303C56.5219 24.9303 56.9255 24.8496 57.2725 24.6963L57.3775 25.1886C56.982 25.342 56.5138 25.4388 56.0134 25.4388C54.8188 25.4388 54.1731 24.785 54.1731 23.3806C54.1731 22.186 54.8269 21.282 55.9407 21.282C57.0465 21.282 57.4986 22.0326 57.4986 22.9044ZM56.869 22.8236C56.8851 22.1779 56.5138 21.7501 55.9004 21.7501C55.3354 21.7501 54.9318 22.1699 54.8349 22.8236H56.869ZM63.6885 25.3662H64.2939V22.5896C64.2939 21.6856 63.858 21.282 63.1073 21.282C62.2921 21.282 61.8562 21.8631 61.711 22.2425C61.6948 21.9358 61.5011 21.282 60.589 21.282C59.9271 21.282 59.4025 21.6694 59.1765 22.2586L59.1603 22.2506C59.2088 22.0004 59.2249 21.621 59.2249 21.3546H58.6276V25.3662H59.233V23.4613C59.233 22.4766 59.7738 21.7824 60.4356 21.7824C61.0491 21.7824 61.1621 22.2264 61.1621 22.7752V25.3662H61.7594V23.4613C61.7594 22.4201 62.3486 21.7824 62.9621 21.7824C63.5432 21.7824 63.6885 22.1779 63.6885 22.7833V25.3662ZM70.5377 25.3662H69.9404C69.9404 25.124 69.9646 24.7366 70.0131 24.4945L69.9969 24.4864C69.7709 25.0595 69.2624 25.4388 68.6167 25.4388C67.6239 25.4388 67.1396 24.7124 67.1396 23.542C67.1396 22.1134 67.9467 21.3062 69.1978 21.3062C69.4319 21.3062 69.666 21.3223 69.9404 21.3466V19.474H70.5377V25.3662ZM69.9404 23.2918V21.8793C69.666 21.8147 69.4077 21.7824 69.1494 21.7824C68.3261 21.7824 67.7772 22.2829 67.7772 23.4936C67.7772 24.3976 68.084 24.9384 68.7458 24.9384C69.5449 24.9384 69.9404 24.0021 69.9404 23.2918ZM74.9419 23.2676C74.958 23.1223 74.958 22.9851 74.958 22.9044C74.958 22.0326 74.506 21.282 73.4002 21.282C72.2863 21.282 71.6325 22.186 71.6325 23.3806C71.6325 24.785 72.2783 25.4388 73.4729 25.4388C73.9733 25.4388 74.4414 25.342 74.8369 25.1886L74.732 24.6963C74.3849 24.8496 73.9814 24.9303 73.5939 24.9303C72.6899 24.9303 72.2218 24.446 72.2621 23.2676H74.9419ZM73.3598 21.7501C73.9733 21.7501 74.3446 22.1779 74.3284 22.8236H72.2944C72.3913 22.1699 72.7948 21.7501 73.3598 21.7501ZM78.3713 24.1716C78.3713 24.8819 77.7498 25.4388 76.7086 25.4388C76.4019 25.4388 76.0629 25.4065 75.8127 25.3339L75.8853 24.777C76.1436 24.8738 76.4826 24.9303 76.7893 24.9303C77.3463 24.9303 77.7498 24.672 77.7498 24.2523C77.7498 23.8056 77.3462 23.6894 76.9052 23.5625C76.374 23.4096 75.7884 23.241 75.7884 22.4604C75.7884 21.7905 76.3131 21.282 77.3382 21.282C77.5884 21.282 77.8951 21.3223 78.1292 21.3708L78.0727 21.8793C77.8305 21.8066 77.548 21.7582 77.2736 21.7582C76.6925 21.7582 76.41 22.0004 76.41 22.3959C76.41 22.8374 76.8175 22.9586 77.2611 23.0904C77.7906 23.2479 78.3713 23.4205 78.3713 24.1716ZM79.8463 20.4748C80.0723 20.4748 80.266 20.2892 80.266 20.0632C80.266 19.8291 80.0723 19.6515 79.8463 19.6515C79.6122 19.6515 79.4266 19.8372 79.4266 20.0632C79.4266 20.2973 79.6122 20.4748 79.8463 20.4748ZM79.5396 25.3662H80.1449V21.3546H79.5396V25.3662ZM84.9865 25.9473C84.9865 26.7949 84.1229 27.4406 82.896 27.4406C81.879 27.4406 81.2171 27.0128 81.2171 26.246C81.2171 25.7536 81.54 25.3581 81.9193 25.1402C81.6691 25.0433 81.5158 24.8173 81.5158 24.551C81.5158 24.2765 81.6853 24.0263 81.9516 23.8891C81.5804 23.6712 81.3624 23.3079 81.3624 22.7752C81.3624 21.9842 81.9597 21.282 83.0332 21.282C83.2431 21.282 83.3722 21.3062 83.574 21.3546H84.9381V21.8308H84.2197C84.4538 22.0165 84.591 22.3151 84.591 22.6622C84.591 23.4774 84.0422 24.1232 82.9122 24.1232C82.7346 24.1232 82.5893 24.107 82.4359 24.0586C82.2503 24.1474 82.1454 24.2927 82.1454 24.4299C82.1454 24.672 82.3714 24.7528 82.8637 24.7689L83.6386 24.8012C84.5103 24.8335 84.9865 25.2451 84.9865 25.9473ZM83.9857 22.7187C83.9857 22.1214 83.6305 21.7501 83.0009 21.7501C82.3471 21.7501 81.9678 22.1699 81.9678 22.7268C81.9678 23.3322 82.331 23.6712 82.9767 23.6712C83.5982 23.6712 83.9857 23.3241 83.9857 22.7187ZM84.365 26.0281C84.365 25.6003 84.0825 25.342 83.4691 25.3178L82.6619 25.2855H82.4036C82.0566 25.5115 81.8306 25.8021 81.8306 26.1411C81.8306 26.6576 82.331 26.9563 83.0009 26.9563C83.8807 26.9563 84.365 26.5608 84.365 26.0281ZM88.5466 25.3662H89.152V22.5734C89.152 21.8551 88.8695 21.282 87.9493 21.282C87.2471 21.282 86.7386 21.6694 86.5126 22.2586L86.4964 22.2506C86.5368 22.0084 86.561 21.621 86.561 21.3546H85.9637V25.3662H86.5691V23.4452C86.5691 22.4927 87.0776 21.7824 87.7959 21.7824C88.3771 21.7824 88.5466 22.1456 88.5466 22.7752V25.3662ZM94.6642 24.1716C94.6642 24.8819 94.0427 25.4388 93.0015 25.4388C92.6948 25.4388 92.3558 25.4065 92.1055 25.3339L92.1782 24.777C92.4365 24.8738 92.7755 24.9303 93.0822 24.9303C93.6391 24.9303 94.0427 24.672 94.0427 24.2523C94.0427 23.8056 93.6391 23.6894 93.1981 23.5625C92.6669 23.4096 92.0813 23.241 92.0813 22.4604C92.0813 21.7905 92.606 21.282 93.6311 21.282C93.8813 21.282 94.188 21.3223 94.4221 21.3708L94.3656 21.8793C94.1234 21.8066 93.8409 21.7582 93.5665 21.7582C92.9853 21.7582 92.7028 22.0004 92.7028 22.3959C92.7028 22.8374 93.1104 22.9586 93.5539 23.0904C94.0834 23.2479 94.6642 23.4205 94.6642 24.1716ZM97.2046 25.4388C98.3911 25.4388 99.1256 24.4864 99.1256 23.2918C99.1256 21.8228 98.3266 21.282 97.3499 21.282C96.1472 21.282 95.4369 22.2344 95.4369 23.3806C95.4369 24.785 96.1311 25.4388 97.2046 25.4388ZM97.2934 21.7824C98.0925 21.7824 98.4961 22.3636 98.4961 23.3322C98.4961 24.438 97.923 24.9223 97.2934 24.9223C96.5024 24.9223 96.0665 24.3572 96.0665 23.3322C96.0665 22.2586 96.6638 21.7824 97.2934 21.7824ZM111.356 21.3546L110.048 25.3662H109.346L108.466 22.7752C108.385 22.525 108.313 22.2748 108.24 22.0084H108.232C108.162 22.3081 108.075 22.5896 107.984 22.8791L107.941 23.0174L107.207 25.3662H106.505L105.262 21.3546H105.94L106.626 23.7438C106.664 23.8832 106.704 24.0226 106.743 24.1571L106.743 24.1573C106.804 24.3654 106.861 24.5619 106.9 24.7285H106.908C106.989 24.4057 107.086 24.0667 107.183 23.7438L107.95 21.3546H108.636L109.411 23.7357C109.572 24.2442 109.636 24.4702 109.701 24.7366H109.717C109.778 24.4753 109.843 24.2529 109.933 23.9493L109.992 23.7519L110.71 21.3546H111.356ZM114.264 25.3662H114.862C114.845 25.011 114.845 24.559 114.845 24.1635V22.6864C114.845 21.8308 114.498 21.282 113.425 21.282C112.9 21.282 112.392 21.4111 112.004 21.5726L112.133 22.0649C112.472 21.8954 112.957 21.7663 113.336 21.7663C114.014 21.7663 114.24 22.1053 114.24 22.8075V23.0093C112.658 23.0093 111.794 23.5501 111.794 24.3734C111.794 25.0272 112.254 25.4388 112.892 25.4388C113.578 25.4388 114.095 25.0272 114.288 24.5187H114.305C114.264 24.7528 114.264 25.0595 114.264 25.3662ZM114.24 23.4532V23.5501C114.24 24.2442 113.764 24.9465 113.062 24.9465C112.658 24.9465 112.4 24.664 112.4 24.2846C112.4 23.8487 112.811 23.4532 114.24 23.4532ZM118.256 21.2901L118.232 21.8873C117.344 21.734 116.924 22.412 116.924 23.7599V25.3662H116.319V21.3546H116.916C116.916 21.621 116.884 22.0165 116.819 22.3636L116.835 22.3716C116.997 21.7824 117.416 21.1932 118.256 21.2901ZM121.984 23.2676C122 23.1223 122 22.9851 122 22.9044C122 22.0326 121.548 21.282 120.442 21.282C119.328 21.282 118.675 22.186 118.675 23.3806C118.675 24.785 119.32 25.4388 120.515 25.4388C121.015 25.4388 121.483 25.342 121.879 25.1886L121.774 24.6963C121.427 24.8496 121.023 24.9303 120.636 24.9303C119.732 24.9303 119.264 24.446 119.304 23.2676H121.984ZM120.402 21.7501C121.015 21.7501 121.387 22.1779 121.37 22.8236H119.336C119.433 22.1699 119.837 21.7501 120.402 21.7501Z'
              fill='#002D62'
            />
          </Svg>
        </View>
        {/* winflow logo End */}
      </View>
      {/* veolia logo End */}
      {/* Database version and cloud version Start */}
      <View
        style={{
          color: '#272B30',
          fontFamily: ArialB600,
          position: 'absolute',
          left: '48%',
          top: RationValWidth(40),
          fontSize: RationValWidth(16),
          width: RationValWidth(168),
          height: RationValWidth(45),
          alignItems: 'center',
        }}
      >
        <Text
          style={{ color: '#002D62', fontSize: RationValWidth(20) }}
        >
          Winflows {(version && version.cloud_version) || '5.0'}
        </Text>
        <Text
          style={{ color: '#272B30', fontSize: RationValWidth(16), fontFamily: ArialRegural }}
        >
          Database {(version && version.db_version) || '4.08'}
        </Text>
      </View>
      <View style={Styles.watermark} wrap>
        <Text style={Styles.watermarkText}>Not for official use</Text>
      </View>
      {/* Database version and cloud version End */}
    </View>
  );
};
export default HeaderSection;
