import "jsdom-global/register"
import { shallow, mount, render } from "enzyme"
import chai from "chai"
import chaiEnzyme from "chai-enzyme"
import React from "react"
import sinon from "sinon"

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
