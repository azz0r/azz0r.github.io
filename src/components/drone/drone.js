import React from "react"
import classnames from "classnames"
import "./drone.scss"

const percentToMoveEachClick = 5
function keepValueInCenturyRange(prev, diff) {
  const next = prev + diff
  return next < 1 || next > 99 ? prev : next
}
function getRandomNumber(max = 100) {
  return Math.floor(Math.random() * max) + 1
}

export default class Drone extends React.Component {

  displayName = "Drone"

  static propTypes = {
    followMouse: React.PropTypes.bool,
    invertColor: React.PropTypes.bool,
  }

  static defaultProps = {
    followMouse: true,
    invertColor: false,
  }

  state = {
    left: getRandomNumber(50),
    top: getRandomNumber(50),
    type: "%",
  }

  componentDidMount() {
    if (this.props.followMouse) {
      document.onmousemove = (e) => {
        this.move({
          left: e.screenX + 0,
          top: e.screenY + 0,
          type: "px",
        })
      }
    } else {
      document.onkeydown = (e) => {
        let newState = Object.assign({ type: "%" }, this.state)
        switch (e.keyCode) {
          case 37: // left
            newState.left = keepValueInCenturyRange(this.state.left, -percentToMoveEachClick)
            break
          case 39: // right
            newState.left = keepValueInCenturyRange(this.state.left, percentToMoveEachClick)
            break
          case 38:
            newState.top = keepValueInCenturyRange(this.state.top, -percentToMoveEachClick)
            break
          case 40: // top
            newState.top = keepValueInCenturyRange(this.state.top, percentToMoveEachClick)
            break
        }
        this.move({
          ...newState
        })
      }
    }
  }

  move = ({ left = 0, top = 0, type = "%" }) => {
    console.log(left, top, type)
    this.setState({
      left,
      top,
      type,
    })
  }

  render() {
    console.log(this.state.left, this.state.top)
    return (
      <div className={classnames("drone", { invert: this.props.invert })}
        style={{
          left: `${this.state.left}${this.state.type}`,
          top: `${this.state.top}${this.state.type}`,
        }}
        onKeyPress={this.onKey}>
        <span className="battery" />
      </div>
    )
  }
}
