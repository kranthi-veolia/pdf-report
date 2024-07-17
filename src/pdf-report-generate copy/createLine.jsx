import { Canvas } from '@react-pdf/renderer';

const SubLine = ({ lineWidth, lineHeight, color = '#0062A9', width = 1, style }) => (
  <Canvas
    style={{ width: lineWidth, height: lineHeight, ...style }}
    paint={(painter, maxWidth, height) => {
      const centerY = height / 2;
      painter
        .moveTo(0, centerY)
        .lineTo(maxWidth, centerY)
        .lineWidth(width)
        .strokeColor(color)
        .stroke();
    }}
  />
);
export default SubLine;