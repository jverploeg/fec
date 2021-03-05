// import relevant files and dependencies
// dependencies
import React from 'react';
import { shallow, mount, render } from 'enzyme';

// SHALLOW allows shallow rendering. Useful for testing a component as a unit and ensure tests dont
// indirectly assert on behavior of child components

// MOUNT allows full rendering.  Ideal for components interacting with dom API or testing components
// wrapped in higher order components

// RENDER is for generating HTML from react tree and analyzing the HTML structure

// files
import ProductOverview from 'components/overview/productOverview';
import Details from 'components/overview/details';
import Image from 'components/overview/image';
import Description from 'components/overview/description';

// component
describe('ProductOverview', () => {
  const comp = shallow(<ProductOverview />);

  it('should render correctly', () => {
    shallow(<ProductOverview />);
  });

  xit('should render initial layout', () => {
    expect(comp.getElements()).toMatchSnapshot();
  });
  // check subcomponents (they are in tiles with is-parent attribute)
  it('should render 3 subcomponents', () => {
    expect(comp.find('div.is-parent')).toHaveLength(3);
  });
});

// sub-component
describe('Image', () => {
  // const comp = shallow(<Image />);

  it('should render correctly', () => {
    shallow(<Image />);
  });
});

// sub-component
describe('Details', () => {
  // const comp = shallow(<Details />);

  it('should render correctly', () => {
    shallow(<Details />);
  });
});

// sub-component
describe('Description', () => {
  // const comp = shallow(<Description />);

  it('should render correctly', () => {
    shallow(<Description />);
  });
});