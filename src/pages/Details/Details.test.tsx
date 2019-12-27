/**
 *
 * Tests for Details
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import Details from './Details';

describe('Details', () => {
  it('Renders Details', () => {
    const shallowComponent = shallow(<Details />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
