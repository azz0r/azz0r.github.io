import {
  React,
  expect,
} from "../test"
import { Day } from "../src/components/day"
import props from "./stub"

describe("Day Component", () => {
    const wrapper = mount(<Day {...props} />);
    it('contains an <Day /> component', () => {
      expect(wrapper.find(Day)).to.have.length(1);
    });
    it('has the right title', () => {
      expect(wrapper.find('h1').text()).to.equal(props.title);
    });
    it('has the right sub title', () => {
      expect(wrapper.find('.sub-title').text()).to.equal(props.subTitle);
    });
    it('allows us to set props', () => {
      wrapper.setProps({ title: 'foo' });
      expect(wrapper.props().title).to.equal('foo');
    });
  });
})
