/* eslint-disable no-console */
// A4 Size 595.35 x 841.995
import { Font } from '@react-pdf/renderer';
import veoliaFont from './TheSansVeolia-W4SeLig.otf';
import veoliaFont600 from './TheSansVeolia-W6SeBld.otf';
import veoliaFont700 from './TheSansVeolia-W7Bld.otf';
// importing arial fornt in application
// ArialB700Italic
import ArialBold700 from './arial/ARIALBLACKITALIC.TTF';
// ArialB600
import ArialBold600 from './arial/ArialMdm.ttf';
// ArialRegualr
// import Arial from './arial/ARIALLGT.TTF';
import Arial from './arial/ARIALLGT.TTF';

import ChineseFont from './ARIALUNI.TTF';
// import Arial from './msyh.ttf';

// only this arial font only working another fonts are not working for coping and pasting.
Font.register({
  family: 'Arial',
  format: 'ttf',
  src: Arial,
});
Font.register({
  family: 'Arial B600',
  format: 'ttf',
  src: ArialBold600,
});
Font.register({
  family: 'Arial B700',
  format: 'ttf',
  src: ArialBold700,
});
// adding chinese supported fonts in report
Font.register({
  family: 'ChineseFont',
  format: 'ttf',
  src: ChineseFont,
});

Font.register({
  family: 'TheSans Veolia',
  format: 'otf',
  src: veoliaFont,
});
Font.register({
  family: 'TheSans Veolia B600',
  format: 'otf',
  src: veoliaFont600,
});
Font.register({
  family: 'TheSans Veolia B700',
  format: 'otf',
  src: veoliaFont700,
});
// export arial font family
export const ArialRegural = 'Arial';
export const ChineseFonts = 'ChineseFont';
export const ArialB600 = 'Arial B600';
export const ArialB700 = 'Arial B700';

Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf', fontWeight: 300 },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf', fontWeight: 400 },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf', fontWeight: 500 },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 600 },
  ],
});

// export const veolia = 'TheSans Veolia';
// export const ArialB600= 'TheSans Veolia B600';
// export const ArialB600 = 'TheSans Veolia B700';
export const RationValWidth = (val) => {
  const ratio = 1240 / 595;
  return parseFloat((val / ratio), 10);
};
export const RationValHeight = (val) => {
  const ratio = 1754 / 841;
  return parseFloat((val / ratio), 10);
};
export const getFloatVal = (val, str = '') => {
  if (str) {
    const data = val.split(' ');
    if (!Number.isNaN(Number(data[0]))) {
      return `${Number(data[0]).toFixed(2)} ${data[1]}`;
    }
    return val;
  }
  if (!Number.isNaN(Number(val))) {
    return Number(val).toFixed(2);
  }
  return val;
};
// export const addSpaceinStr = (str, spa = 7) => {
//   let space = spa - 1;
//   let finalstr = '';
//   for (let i = 0; i < str.length; i += 1) {
//     finalstr += str[i];
//     if (i === space) {
//       finalstr += ' ';
//       space += spa;
//     }
//   }
//   return finalstr;
// };
export default RationValWidth;