import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import spacerSizes from '../../../base/spacing';

export const Spacer = ({ debug, horizontal, size, ...others }) => {
  const spacerBackground = debug ? 'pink' : 'none';
  const spacerPadding = horizontal ? 'padding-right' : 'padding-bottom';
  const spacerDisplay = horizontal ? 'inline-block' : 'block';
  const spacerHeight = (horizontal && debug) ? '5px' : '0';
  const StyledSpacer = styled.div`
    background-color: ${spacerBackground};
    display: ${spacerDisplay};
    height: ${spacerHeight};
    ${spacerPadding}: ${spacerSizes[size] || '0px'}
    vertical-align: middle;
  `;

  return (
    <StyledSpacer {...others} />
  );
};

export const SpacerSizes = ['none', '2xsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', '2xlarge'];

Spacer.propTypes = {
  /** If set, adds a light background color to the spacer for debugging purposes */
  debug: PropTypes.bool,
  /** Sets to horizontal spacing mode */
  horizontal: PropTypes.bool,
  /** Size of the spacer */
  size: PropTypes.oneOf(SpacerSizes),
};

Spacer.defaultProps = {
  size: 'medium',
};
