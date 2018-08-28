import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

import { Spacer } from './Spacer';
import spacerSizes from '../../../base/spacing';

it('should match the snapshot', () => {
  const subject = shallow(<Spacer />);
  expect(subject).toMatchSnapshot();
});

it('should render inline-block if set to horizontal', () => {
  const subject = renderer.create(<Spacer horizontal />).toJSON();
  expect(subject).toMatchSnapshot();
  expect(subject).toHaveStyleRule('display', 'inline-block');
});

it('should receive correct padding based on size selection', () => {
  const subject = renderer.create(<Spacer size="large" />).toJSON();
  const mediumSpacerSize = spacerSizes.large;
  expect(subject).toMatchSnapshot();
  expect(subject).toHaveStyleRule('padding-bottom', mediumSpacerSize);
});
