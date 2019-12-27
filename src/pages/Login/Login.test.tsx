/**
 *
 * Tests for Login
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';


import Login from "./Login";

describe('Login', () => {
  it('Renders Login', () => {
    const shallowComponent = shallow(<Login />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
