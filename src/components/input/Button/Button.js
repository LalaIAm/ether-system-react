import PropTypes from 'prop-types';
import React from 'react';

export const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
