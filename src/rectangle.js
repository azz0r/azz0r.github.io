export class Rectangle {

  constructor(props) {
    this.props = props
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
    if (context == null) return false
    this.context = context

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
