import styled, { css } from 'styled-components';

import colorVariables from '../../../base/color/colorVariables';
import fontSizes from '../../../base/typography/fontSizes';

export const buttonModes = {
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
  danger: css`
    background-color: ${colorVariables.buttonDangerBackground};
    border: 1px solid ${colorVariables.buttonDangerBorder};
    color: ${colorVariables.buttonDangerText};

    &:hover {
      background-color: ${colorVariables.buttonDangerBackgroundHover};
    }
  `,
  success: css`
    background-color: ${colorVariables.buttonSuccessBackground};
    border: 1px solid ${colorVariables.buttonSuccessBorder};
    color: ${colorVariables.buttonSuccessText};

    &:hover {
      background-color: ${colorVariables.buttonSuccessBackgroundHover};
    }
  `,
};

export const buttonSizes = {
  small: css`
    ${fontSizes.size0};
    padding: 8px 11px;
  `,
  medium: css`
    ${fontSizes.size1};
    padding: 10px 12px;
  `,
  large: css`
    ${fontSizes.size2};
    padding: 12px 15px;
  `,
};

export const StyledButton = styled.button`
  ${p => buttonModes[p.mode]};
  ${p => buttonSizes[p.size]};
  border-radius: 3px;
  cursor: pointer;
`;
