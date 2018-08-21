import PropTypes from 'prop-types';
import React from 'react';

export const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

export const ButtonSizes = ['small', 'medium', 'large'];

Button.propTypes = {
  /** Content to be rendered inside a Button */
  children: PropTypes.node,
  /** Function to run on click */
  onClick: PropTypes.func,
  /** Size of the Button */
  size: PropTypes.oneOf(ButtonSizes),
};

Button.defaultProps = {
  onClick: () => {},
  size: 'medium',
}
