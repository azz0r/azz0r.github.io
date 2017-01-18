const defaults = {
  name: "Drone",
}

export default class Drone {

  constructor(props) {
    this.props = Object.assign(defaults, props)
  }

  followToMouse() {
    window.addEventListener('mousemove', (e) => {
      this.props.x = e.screenX
      this.props.y = e.screenY
      this.draw(this.context)
    })
  }

  draw(context) {
    this.context = context
    if (this.context == null) return false
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
