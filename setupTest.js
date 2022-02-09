import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

global.enzymeShallow = shallow;
global.enzymeRender = render;
global.enzymeMount = mount;
global.toJson = toJson;

console.error = message => {
  throw new Error(message);
};

