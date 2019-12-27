/**
 *
 * Tests for DetailTable
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import DetailTable from './DetailTable';

describe('DetailTable', () => {
  it('Renders DetailTable', () => {
    const shallowComponent = shallow(<DetailTable />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
