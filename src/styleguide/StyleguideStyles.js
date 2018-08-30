import styled from 'styled-components';

import fonts from '../base/typography/fonts';
import fontSizes from '../base/typography/fontSizes';
import colors from '../base/color/colors';

export const StyledSpecimenContainer = styled.div`
  border: 1px solid ${colors.light};
  padding: 25px;
`;

export const StyledSpecimen = styled.p`
  color: ${colors.dark};
  ${p => fonts[p.fontStyle]};
  ${p => fontSizes[p.fontSize]};
  margin: 0;
`;

export const StyledSpecimenTitle = styled.p`
  color: ${colors.dark85};
  font-size: 1.2rem;
`;

export const StyledSpecimenCSS = styled.pre`
  border-top: 1px solid ${colors.light};
  color: ${colors.dark75};
  font-size: 1.2rem;
  margin: 0;
  padding-top: 15px;
  white-space: nowrap;
`;
