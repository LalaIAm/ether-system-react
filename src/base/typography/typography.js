// ----------------------------------------
// Typography Variables
//
// https://ether.thescenery.co/typography/
//
//

import { css } from 'styled-components';

import fonts from './fonts';
import fontSizes from './fontSizes';

const typography = {
  // Headings
  headingXXLarge: css`
    ${fonts.primaryLight};
    ${fontSizes.size6};
    line-height: 1.2;
  `,
  headingXLarge: css`
    ${fonts.primaryLight};
    ${fontSizes.size5};
    line-height: 1.2;
  `,
  headingLarge: css`
    ${fonts.primaryLight};
    ${fontSizes.size4};
    line-height: 1.3;
  `,
  headingMedium: css`
    ${fonts.primaryRegular};
    ${fontSizes.size3};
    line-height: 1.3;
  `,
  headingSmall: css`
    ${fonts.primaryBold};
    ${fontSizes.size2};
    line-height: 1.3;
  `,
  headingXSmall: css`
    ${fonts.primaryBold};
    ${fontSizes.size1};
    line-height: 1.3;
  `,
  headingXXSmall: css`
    ${fonts.primaryBold};
    ${fontSizes.size0};
    letter-spacing: 1px;
    line-height: 1.4;
    text-transform: uppercase;
  `,

  // Body
  bodyLarge: css`
    ${fonts.primaryRegular};
    ${fontSizes.size2};
    line-height: 1.5;
  `,
  body: css`
    ${fonts.primaryRegular};
    ${fontSizes.size1};
    line-height: 1.5;
  `,
  finePrint: css`
    ${fonts.primaryRegular};
    ${fontSizes.size0};
    line-height: 1.5;
  `,
};

export default typography;
