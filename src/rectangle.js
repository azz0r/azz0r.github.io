const defaults = {
  name: "Circle",
}

export default class Rectangle {

  constructor(props) {
    this.props = Object.assign(defaults, props)
    this.context = undefined
  }

  followToMouse() {
    window.addEventListener('mousemove', (e) => {
      this.props.x = e.pageX - this.props.radius / 2
      this.props.y = e.pageY - this.props.radius / 2
      this.draw(this.context)
    })
  }

  draw(context) {
    this.context = context
    if (this.context == null) return false

    this.context.beginPath()
    this.context.fillRect(
      this.props.x,
      this.props.y,
      this.props.width,
      this.props.height,
    )

    this.context.fillStyle = this.props.fillStyle
    this.context.fill()
    this.context.stroke()
  }
}
