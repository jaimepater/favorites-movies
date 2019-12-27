/**
 *
 * Tests for CardMovie
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import CardMovie from './CardMovie';

describe('CardMovie', () => {
  it('Renders CardMovie', () => {
    const shallowComponent = shallow(<CardMovie />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
