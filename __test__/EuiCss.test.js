import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-14';
import EuiCss from '../src/';

Enzyme.configure({ adapter: new Adapter() });

test('EuiCss should render correctly', () => {
  mount(<EuiCss />);
});

test('EuiCss props', () => {
  // Render a checkbox with label in the document
  const EuiCss = shallow(<EuiCss className="test" />);
  expect(EuiCss.find('.eui-empty-data-content')).toBeTruthy();
});

