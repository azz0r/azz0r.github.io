export default class Drone {

  constructor(options) {
    this.options = options
  }

  followToMouse() {
    window.addEventListener('mousemove', (e) => {
      this.options.x = e.screenX
      this.options.y = e.screenY
      this.draw(this.context)
    })
  }

  draw(context) {
    this.context = context
    if (this.context == null) return false
    let img = new Image()
    img.src = "drone.png"

    if (img.complete) {
      this.context.drawImage(
        img,
        this.options.x,
        this.options.y,
        img.width * this.options.scale,
        img.height * this.options.scale,
      )
    }
  }
}
