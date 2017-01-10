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
    let
      left = this.state.left,
      top = this.state.top

    if (direction === "left" || direction === "right") {
      left = this.state.left + amount
    } else {
      top = this.state.top + amount
    }

    this.setState({
      left,
      top,
    })
  }

  render() {
    let style = {
      left: this.state.left + "%",
      top: this.state.top + "%",
    }
    return (
      <div
        ref="drone"
        style={style}
        onKeyPress={this.onKey}
        className="drone" />
    )
  }
}
