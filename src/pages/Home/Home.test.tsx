/**
 *
 * Tests for Home
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';

describe('Home', () => {
  it('Renders Home', () => {
    const shallowComponent = shallow(<Home />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
