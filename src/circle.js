const defaults = {
  name: "Circle",
}

export default class Circle {

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
    this.context.arc(
      this.props.x,
      this.props.y,
      this.props.radius,
      0,
      2*Math.PI,
      false,
    )
    this.context.fill()
    this.context.stroke()
  }
}
