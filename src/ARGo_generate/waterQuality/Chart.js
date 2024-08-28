/* eslint-disable no-console */
import React from 'react';

import HtmlSvgToPdfSvg from './imageFromSvg';

const chartToPdfSvg = (children, width, height, debug, style) => {
  // const component = htmlSvgToPdfSvg(children);
  // const result = React.cloneElement(component, { width, height, debug, style });
  // return result;
};

export const ChartSvg = ({ debug, style, children, width, height }) => {
  return chartToPdfSvg(children, width, height, debug, style);
};
