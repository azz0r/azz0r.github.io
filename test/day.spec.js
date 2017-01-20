import {
  React,
  expect,
  mount,
} from "./helper"
import { Day } from "../src/components/day/day"
import defaultProps from "./day.json"
const currentDate = new Date()

describe("Day Component", () => {
  const props = defaultProps
  const wrapper = mount(<Day {...props} />)
  it('contains an <Day /> component', () => {
    expect(wrapper.find(Day)).to.have.length(1)
  })
  it('sets today as active', () => {
    wrapper.setProps({ date: currentDate })
    expect(
      wrapper.find('.day__title').text()
    ).to.equal(currentDate.toLocaleDateString())
  })
  it('time settings change the output', () => {
    expect(wrapper.find('.sub-title').text()).to.equal(props.subTitle)
  })
  it('Day title is correct', () => {
    wrapper.setProps({ title: 'foo' })
    expect(wrapper.props().title).to.equal('foo')
  })
})
