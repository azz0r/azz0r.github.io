import "jsdom-global/register"
import React from "react"
import chai from "chai"
import sinon from "sinon"
import { shallow, mount, render } from "enzyme"
import chaiEnzyme from "chai-enzyme"

const {
  assert,
  expect,
} = chai
chai.should()
chai.expect()
chai.use(
  chaiEnzyme()
)

export {
  React,
  assert,
  expect,
  sinon,
  shallow,
  mount,
  render
}
