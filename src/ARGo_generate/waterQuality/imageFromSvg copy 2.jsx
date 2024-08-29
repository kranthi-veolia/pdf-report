/* eslint-disable react/no-find-dom-node */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Text, Image } from '@react-pdf/renderer';
// import ReactDOM from 'react-dom';

const HtmlSvgToPdfSvg = ({ svgRef }) => {
  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const svgElement = document.querySelector('.recharts-wrapper svg');
      console.log(svgElement);
    }
  }, []);
  useEffect(() => {
    console.log(svgRef.current);
    if (svgRef.current) {
      // const svgElement = svgRef.current.querySelector('.recharts-surface');
      const svgElement = document.querySelector('.recharts-wrapper svg');
      console.log(svgElement);
      console.log(svgElement);
      if (svgElement) {
        const serializer = new XMLSerializer();
        const svgStr = serializer.serializeToString(svgElement);

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          setImageSrc(canvas.toDataURL('image/png'));
          console.log(canvas.toDataURL('image/png'));
        };
        img.src = `data:image/svg+xml;base64,${  btoa(unescape(encodeURIComponent(svgStr)))}`;
      } else {
        console.error('SVG element not found.');
      }
    }
  }, [svgRef]);
  console.log(imageSrc);
  return imageSrc ? (
    <Image debug src={imageSrc} style={{ width: 400, height: 400 }} />
  ) : (
    <Text>Converting SVG to PDF...</Text>
  );
};

export default HtmlSvgToPdfSvg;