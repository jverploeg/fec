// import relevant files and dependencies
// dependencies
import React from 'react';
import {shallow, mount, render} from 'enzyme';

// files
import ProductOverview from 'components/overview/productOverview';

// component
describe('ProductOverview', () => {
  it('should render correctly', () => {
    shallow(<ProductOverview />);
  });
  // check subcomponents
  it('should render 3 subcomponents', () => {
    const wrapper = shallow(<ProductOverview />);
    expect(wrapper.children()).toHavelength(3);
  });
})