import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Color from 'color';

import colors from '../base/color/colors';

const StyledSwatch = styled.div`
  box-sizing: border-box;
  padding: 10px;
  width: 50%;
`;

const StyledTitle = styled.span`
  background-color: ${colors.white};
  color: ${colors.dark};
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 5px;
  padding: 8px;
`;

const StyledSubtitle = styled(StyledTitle)`
  font-size: 10px;
`;

export const ColorSwatch = ({ height, name, value }) => {
  const swatchStyles = {
    backgroundColor: value,
    height,
  };

  const rgbValue = Color(value).rgb().string();

  return (
    <StyledSwatch style={swatchStyles}>
      <StyledTitle>{name}</StyledTitle>
      <br />
      <StyledSubtitle>{value}</StyledSubtitle>
      <br />
      <StyledSubtitle>{rgbValue}</StyledSubtitle>
    </StyledSwatch>
  );
};

ColorSwatch.propTypes = {
  height: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

ColorSwatch.defaultProps = {
  height: '160px',
};
