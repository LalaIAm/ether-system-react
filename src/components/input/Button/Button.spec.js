import React from 'react';
import 'jest-styled-components';

import { Button } from './Button';

it('should render without issue', () => {
  const subject = shallow(<Button>Hello</Button>);
  expect(subject).toMatchSnapshot();
});
