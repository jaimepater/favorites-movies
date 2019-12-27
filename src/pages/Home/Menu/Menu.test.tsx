/**
 *
 * Tests for Menu
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import Menu from './Menu';

describe('Menu', () => {
  it('Renders Menu', () => {
    const shallowComponent = shallow(<Menu />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
