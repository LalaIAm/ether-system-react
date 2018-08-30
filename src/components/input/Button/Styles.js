import styled, { css } from 'styled-components';

import colorVariables from '../../../base/color/colorVariables';
import fontSizes from '../../../base/typography/fontSizes';

export const buttonModeStyles = {
  primary: css`
    background-color: ${colorVariables.buttonPrimaryBackground};
    border: 1px solid ${colorVariables.buttonPrimaryBorder};
    color: ${colorVariables.buttonPrimaryText};
    ${fontSizes.size1}

    &:hover {
      background-color: ${colorVariables.buttonPrimaryBackgroundHover};
    }
  `,
  secondary: css`
    background-color: ${colorVariables.buttonSecondaryBackground};
    border: 1px solid ${colorVariables.buttonSecondaryBorder};
    color: ${colorVariables.buttonSecondaryText};
    ${fontSizes.size1}

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
