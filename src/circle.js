export default class Circle {

  constructor(options) {
    this.options = options
    this.context = undefined
  }

  followToMouse() {
    window.addEventListener('mousemove', (e) => {
      this.options.x = e.pageX - this.options.radius / 2
      this.options.y = e.pageY - this.options.radius / 2
      this.draw(this.context)
    })
  }

  draw(context) {
    this.context = context
    if (this.context == null) return false

    this.context.beginPath()
    this.context.arc(
      this.options.x,
      this.options.y,
      this.options.radius,
      0,
      2*Math.PI,
      false,
    )
    this.context.fill()
    this.context.stroke()
  }
}
