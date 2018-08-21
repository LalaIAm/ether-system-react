import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: salmon;
  border: 1px solid indianred;
  border-radius: 3px;
  color: snow;
  padding: 9px 12px;
`;

export const Button = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export const ButtonSizes = ['small', 'medium', 'large'];
export const ButtonModes = ['primary', 'secondary', 'warning', 'success', 'info'];

Button.propTypes = {
  /** Content to be rendered inside a Button */
  children: PropTypes.node,
  /** Mode of the button */
  mode: PropTypes.oneOf(ButtonModes),
  /** Function to run on click */
  onClick: PropTypes.func,
  /** Size of the Button */
  size: PropTypes.oneOf(ButtonSizes),
};

Button.defaultProps = {
  onClick: () => {},
  size: 'medium',
}
