/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import React, { useEffect, createElement, useState } from 'react'; // Added useEffect import
import * as svgjs from 'svg.js';

const HtmlSvgToPdfSvg = (children) => {
// Placeholder for handleDasharray - adjust based on React-PDF's requirements
  const handleDasharray = (value) => value.split(',').map(Number);
  const [pdfSvg, setPdfSvg] = useState(null); // State for converted SVG
  // We need to use useEffect because we need to make sure
  //  that the Recharts component has finished rendering
  useEffect(() => {
    const svgElement = svgjs('.recharts-wrapper svg').node;

    if (svgElement) {
      const convertNode = (node) => {
        if (!node || !node.nodeName) {
          console.warn('Invalid node encountered:', node);
          return null;
        }

        const name = node.nodeName.toUpperCase();
        const props = {};

        for (let i = 0; i < node.attributes.length; i++) {
          const attr = node.attributes[i];
          switch (attr.name) {
          case 'strokeDasharray':
            props.strokeDashoffset = handleDasharray(attr.value);
            break;
          default:
            props[attr.name] = attr.value;
          }
        }

        const children = Array.from(node.childNodes).map(convertNode);
        return createElement(name, props, children);
      };
      const testSvgElement = {
        nodeName: 'svg',
        attributes: [{ name: 'width', value: '100' }, { name: 'height', value: '100' }],
        childNodes: [] // Add some basic shapes here
      };
      const testPdfSvg = convertNode(testSvgElement);
      console.log('Test Conversion:', testPdfSvg);

      const pdfSvg = convertNode(svgElement);
      if (pdfSvg) {
        setPdfSvg(pdfSvg);
      }
      console.log('Converted PDF SVG:', pdfSvg);
      // Now you can use 'pdfSvg' in your PDF generation library
    } else {
      console.error('Could not find SVG element. Check selector/rendering.');
    }
  }, []);
  return pdfSvg ? (
    // Assuming your PDF library takes a React element
    <p>converted</p>
  ) : (
    <p>Converting SVG to PDF...</p>
  );
};

export default HtmlSvgToPdfSvg;