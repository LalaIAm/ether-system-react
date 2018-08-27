import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledSwatch = styled.div`
  box-sizing: border-box;
  padding: 10px;
  width: 50%;
`;

const StyledSwatchTitle = styled.span`
  background-color: #FFF;
  color: #333;
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 5px;
  padding: 8px;
`;

const StyledSwatchSubtitle = styled(StyledSwatchTitle)`
  font-size: 10px;
`;

export const ColorSwatch = ({ height, name, value, width }) => {
  const swatchStyles = {
    backgroundColor: value,
    height,
    width,
  };

  return (
    <StyledSwatch style={swatchStyles}>
      <StyledSwatchTitle>{name}</StyledSwatchTitle>
      <br />
      <StyledSwatchSubtitle>{value}</StyledSwatchSubtitle>
    </StyledSwatch>
  );
};

ColorSwatch.propTypes = {
  height: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.string,
};

ColorSwatch.defaultProps = {
  height: '180px',
  width: '50%',
};
