export class Drone {

  constructor(props) {
    this.props = props
    this.context = undefined
  }

  followToMouse() {
    window.addEventListener("mousemove", (e) => {
      this.props.x = e.screenX
      this.props.y = e.screenY
      this.draw(this.context)
    })
  }

  followKeyboard() {
    document.onkeydown = (e) => {
      const keyboardPxMove = 25
      switch (e.keyCode) {
          case 37: // left
          case 65: //a
            this.props.x = this.props.x - keyboardPxMove
            break
          case 39: // right
          case 68: //d
            this.props.x = this.props.x + keyboardPxMove
            break
          case 38:
          case 87: //w
            this.props.y = this.props.y - keyboardPxMove
            break
          case 40: // top
          case 83: //s
            this.props.y = this.props.y + keyboardPxMove
            break
        }
    }
  }

  draw(context) {
    if (context == null) return false

    this.context = context

    let img = new Image()
    img.src = "drone.png"

    if (img.complete) {
      if (this.props.invert) {
        this.context.globalCompositeOperation='difference'
      }
      this.context.drawImage(
        img,
        this.props.x,
        this.props.y,
      )
    }
  }
}
