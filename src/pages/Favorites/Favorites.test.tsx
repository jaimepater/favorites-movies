/**
 *
 * Tests for Favorites
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import Favorites from './Favorites';

describe('Favorites', () => {
  it('Renders Favorites', () => {
    const shallowComponent = shallow(<Favorites />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
