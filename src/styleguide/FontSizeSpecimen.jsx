import React, { Fragment } from 'react';

import { Spacer } from '../components/layout/Spacer';
import { StyledSpecimen, StyledSpecimenContainer, StyledSpecimenCSS } from './StyleguideStyles';

import fontSizes from '../base/typography/fontSizes';

export const FontSizeSpecimen = () => {
  const renderSizeSpecimens = Object.keys(fontSizes).map(fontSize => (
    <Fragment key={fontSize}>
      <StyledSpecimenContainer>
        <StyledSpecimen fontStyle="primaryRegular" fontSize={fontSize}>{fontSize}</StyledSpecimen>
        <Spacer size="small" />
        <StyledSpecimenCSS>{fontSizes[fontSize]}</StyledSpecimenCSS>
      </StyledSpecimenContainer>
      <Spacer />
    </Fragment>
  ));

  return (
    <Fragment>
      {renderSizeSpecimens}
    </Fragment>
  );
};
