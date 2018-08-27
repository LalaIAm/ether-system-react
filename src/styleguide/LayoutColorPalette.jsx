import React from 'react';
import styled from 'styled-components';

import colors from '../base/color/colors';
import { ColorSwatch } from './components/ColorSwatch';

const SwatchContainer = styled.div`
  align-content: stretch;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

export const LayoutColorPalette = () => {
  const renderColorSwatches = Object.entries(colors).map((color) => {
    const [name, value] = color;

    return (
      <ColorSwatch name={name} value={value} />
    );
  });

  return (
    <SwatchContainer>
      {renderColorSwatches}
    </SwatchContainer>
  );
};
