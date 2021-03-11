import React from 'react';
import {shallow, mount, render} from 'enzyme';
// import app
import App from 'components/app';


describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('App', () => {
  it('should render correctly', () => {
    shallow(<App />);
  });
  // check subcomponents
  // it('should render 3 subcomponents', () => {
  //   const wrapper = shallow(<ProductOverview />);
  //   expect(wrapper.children()).toHavelength(3);
  // });
})