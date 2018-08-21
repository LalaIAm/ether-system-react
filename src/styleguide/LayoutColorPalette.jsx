import React from 'react';

import colors from '../base/color/colors';
import { ColorSwatch } from './components/ColorSwatch';

export const LayoutColorPalette = () => {
  // console.log(colors);

  const renderColorSwatches = Object.entries(colors).map((color) => {
    console.log(color);

  });

  return (
    <ColorSwatch />
  );
};
