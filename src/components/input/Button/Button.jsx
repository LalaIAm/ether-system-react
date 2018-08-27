import PropTypes from 'prop-types';
import React from 'react';

import { StyledButton } from './Styles';

export const Button = ({ children, mode, onClick }) => (
  <StyledButton onClick={onClick} mode={mode}>{children}</StyledButton>
);

export const ButtonModes = ['primary', 'secondary', 'warning', 'success', 'info'];

Button.propTypes = {
  /** Content to be rendered inside a Button */
  children: PropTypes.node,
  /** Mode of the button */
  mode: PropTypes.oneOf(ButtonModes),
  /** Function to run on click */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
  mode: 'primary',
};
