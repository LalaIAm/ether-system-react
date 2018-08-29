import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Spacer } from '../components/layout/Spacer';

import fonts from '../base/typography/fonts';
import colors from '../base/color/colors';

const StyledSpecimenContainer = styled.div`
  border: 1px solid ${colors.light};
  padding: 25px;
`;

const StyledSpecimen = styled.p`
  color: ${colors.dark};
  ${p => fonts[p.fontStyles]};
  font-size: 2rem;
  margin: 0;
`;

const StyledSpecimenCSS = styled.pre`
  border-top: 1px solid ${colors.light};
  color: ${colors.dark50};
  font-size: 1.2rem;
  margin: 0;
  padding-top: 8px;
  white-space: pre-line;
`;

export const FontStyleSpecimen = () => {
  const renderFontSpecimen = Object.keys(fonts).map(fontStyle => (
    <Fragment key={fontStyle}>
      <StyledSpecimenContainer>
        <StyledSpecimen contentEditable fontStyles={fontStyle}>The quick brown fox jumped over the lazy dog.</StyledSpecimen>
        <Spacer size="small" />
        <StyledSpecimenCSS>{fonts[fontStyle]}</StyledSpecimenCSS>
      </StyledSpecimenContainer>
      <Spacer />
    </Fragment>
  ));


  return (
    <Fragment>
      {renderFontSpecimen}
    </Fragment>
  );
};
