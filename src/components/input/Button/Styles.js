import styled from 'styled-components';

import colorVariables from '../../../base/color/colorVariables';

export const buttonModeStyles = {
  primary: {
    backgroundColor: colorVariables.buttonPrimaryBackground,
    backgroundColorHover: colorVariables.buttonPrimaryBackgroundHover,
    borderColor: colorVariables.buttonPrimaryBorder,
    color: colorVariables.buttonPrimaryText,
  },
  secondary: {
    backgroundColor: colorVariables.buttonSecondaryBackground,
    backgroundColorHover: colorVariables.buttonSecondaryBackgroundHover,
    borderColor: colorVariables.buttonSecondaryBorder,
    color: colorVariables.buttonSecondaryText,
  },
};

export const StyledButton = styled.button`
  background-color: ${p => buttonModeStyles[p.mode].backgroundColor};
  border: 1px solid ${p => buttonModeStyles[p.mode].borderColor};
  border-radius: 3px;
  color: ${p => buttonModeStyles[p.mode].color};
  cursor: pointer;
  padding: 9px 12px;

  &:hover {
    background-color: ${p => buttonModeStyles[p.mode].backgroundColorHover};
  }
`;
