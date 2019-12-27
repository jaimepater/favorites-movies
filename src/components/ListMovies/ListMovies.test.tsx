/**
 *
 * Tests for ListMovies
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import ListMovies from './ListMovies';

describe('ListMovies', () => {
  it('Renders ListMovies', () => {
    const shallowComponent = shallow(<ListMovies />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
