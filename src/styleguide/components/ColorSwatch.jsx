import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledSwatch = styled.div`
  padding: 10px;
`;

export const ColorSwatch = ({ height, name, value, width }) => {
  const swatchStyles = {
    backgroundColor: value,
    height: `${height}px`,
    width: `${width}px`,
  };

  return (
    <StyledSwatch style={swatchStyles}>
      <p>{name}</p>
      <p>{value}</p>
    </StyledSwatch>
  );
};

ColorSwatch.propTypes = {
  height: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.number,
};

ColorSwatch.defaultProps = {
  height: 180,
  width: 320,
};
