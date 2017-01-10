import React from "react"
import "./drone.scss"

export default class Drone extends React.Component {

  state = {
    left: 50,
    top: 50,
  }

  componentDidMount() {
    document.onkeydown = (e) => {
      switch (e.keyCode) {
        case 37: // left
          this.move("left", -3)
          break
        case 39: // right
          this.move("left", 3)
          break
        case 38: // top
          this.move("top", -3)
          break
        case 40: // top
          this.move("top", 3)
          break
      }
    }
  }

  move = (direction, amount) => {
    const verifyNewLocation = (current, addedValue) => {
      let newValue = current + addedValue
      return newValue <= 2 || newValue >= 95 ? current : newValue
    }
    let newState = Object.assign({}, this.state)

    if (direction === "left" || direction === "right") {
      newState.left = verifyNewLocation(this.state.left, amount)
    } else {
      newState.top = verifyNewLocation(this.state.top, amount)
    }

    this.setState({
      ...newState
    })
  }

  render() {
    return (
      <div
        className="drone"
        style={{
          left: this.state.left + "%",
          top: this.state.top + "%",
        }}
        onKeyPress={this.onKey}>
        <span className="battery" />
      </div>
    )
  }
}
