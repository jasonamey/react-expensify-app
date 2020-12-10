// import React from 'react';
// import { shallow } from 'enzyme';
// import Header from '../../components/Header';


// const setup = (props={}) => {
//   const setupProps = {...props };
//   return shallow(<Header {...props } />)
// };


// test('', () => {})

import React from 'react';
import Header from '../../components/Header';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter : new Adapter()})

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
