import styled, { css } from 'styled-components';

import colorVariables from '../../../base/color/colorVariables';

export const buttonModeStyles = {
  primary: css`
    background-color: ${colorVariables.buttonPrimaryBackground};
    border: 1px solid ${colorVariables.buttonPrimaryBorder};
    color: ${colorVariables.buttonPrimaryText};

    &:hover {
      background-color: ${colorVariables.buttonPrimaryBackgroundHover};
    }
  `,
  secondary: css`
    background-color: ${colorVariables.buttonSecondaryBackground};
    border: 1px solid ${colorVariables.buttonSecondaryBorder};
    color: ${colorVariables.buttonSecondaryText};

    &:hover {
      background-color: ${colorVariables.buttonSecondaryBackgroundHover};
    }
  `,
};

export const StyledButton = styled.button`
  ${p => buttonModeStyles[p.mode]};
  border-radius: 3px;
  cursor: pointer;
  padding: 9px 12px;
`;
