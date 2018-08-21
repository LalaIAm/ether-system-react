import PropTypes from 'prop-types';
import React from 'react';

export const ColorSwatch = ({ height, name, value, width }) => {
  const swatchStyles = {
    backgroundColor: 'green',
    height: `${height}px`,
    width: `${width}px`,
  };

  return (
    <div style={swatchStyles}>
      <p>{name}</p>
      <p>{value}</p>
    </div>
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
