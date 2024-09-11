/* eslint-disable no-console */
import { createElement } from 'react';
import ReactDom from 'react-dom/server';
import reactHtmlParser from 'react-html-parser';

function convertToPdfSvg(node, index) {

  if (node.type === 'text') {
    return node.data;
  }

  node.props = { key: index };

  Object.entries(node.attribs).forEach(([key, value]) => {
    const [first, ...rest] = key.split('-');

    const newKey = [first, ...rest.map(word => `${word[0].toUpperCase()}${word.slice(1)}`)].join('');
    node.props[newKey] = newKey === 'strokeDasharray' && value.indexOf('0pt') > -1 ? 0 : value;
  });

  node.name = node.name?.toUpperCase();
  if (node.name === 'CLIPPATH') node.name = 'CLIP_PATH';

  // we're removing nested <defs> because they don't work
  // if (node.name === 'DEFS' && node.parent.name !== 'SVG') return null;
  if (node.name === 'TITLE' || node.name === 'DESC') return null;

  if (node.children) node.children = node.children.map(convertToPdfSvg);
  return createElement(node.name, node.props, node.children);
}

export const htmlSvgToPdfSvg = (children) => {
  console.log(children);
  const svgString = ReactDom
    .renderToStaticMarkup(children);
    // .replaceAll('width="440" height="30"', 'width="440" height="30" font-size="8px"');
    // .replaceAll('span', 'Text')
    // .replaceAll('tText', 'tspan')
    // .replaceAll('text', 'Text');
    // .replaceAll('pt', 'px');
  console.log(svgString);

  const [component] = reactHtmlParser(svgString, { transform: convertToPdfSvg });
  console.log('children is', children.type, 'component -->', component);

  return component;
};
