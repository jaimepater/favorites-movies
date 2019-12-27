/**
 *
 * Tests for SearchMovies
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import SearchMovies from './SearchMovies';

describe('SearchMovies', () => {
  it('Renders SearchMovies', () => {
    const shallowComponent = shallow(<SearchMovies />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
