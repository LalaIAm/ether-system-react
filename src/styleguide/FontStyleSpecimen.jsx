import React, { Fragment } from 'react';

import { StyledSpecimen, StyledSpecimenContainer, StyledSpecimenCSS } from './StyleguideStyles';
import { Spacer } from '../components/layout/Spacer';

import fonts from '../base/typography/fonts';

export const FontStyleSpecimen = () => {
  const renderFontSpecimens = Object.keys(fonts).map(fontStyle => (
    <Fragment key={fontStyle}>
      <StyledSpecimenContainer>
        <StyledSpecimen
          contentEditable
          fontStyle={fontStyle}
          fontSize="size2"
        >
          The quick brown fox jumped over the lazy dog.
        </StyledSpecimen>
        <Spacer size="small" />
        <StyledSpecimenCSS>{fonts[fontStyle]}</StyledSpecimenCSS>
      </StyledSpecimenContainer>
      <Spacer />
    </Fragment>
  ));


  return (
    <Fragment>
      {renderFontSpecimens}
    </Fragment>
  );
};
