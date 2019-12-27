/**
 *
 * Tests for Movies
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import Movies from './Movies';

describe('Movies', () => {
  it('Renders Movies', () => {
    const shallowComponent = shallow(<Movies />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
