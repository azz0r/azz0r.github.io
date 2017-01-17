class Scene {
  constructor(size = {width: 500, height: 300}, options = {zIndex: 1}) {
    this.objects = []

    this.tickInterval = undefined
    this.width = size.width
    this.height = size.height

    let canvas = document.createElement('canvas')
    canvas.width = size.width
    canvas.height = size.height
    canvas.style.position = 'absolute'
    canvas.style.backgroundColor = 'white'
    canvas.style.zIndex = options.zIndex
    document.body.appendChild(canvas)
    this.context = canvas.getContext('2d')
  }

  addObject(object) {
    this.objects.push(object)
  }

  render() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
    this.objects.forEach(o => {
      o.draw(this.context)
    })
  }
}

class Drone {

  constructor(options) {
    this.options = options
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
    let img = new Image()
    img.src = "drone.png"

    img.addEventListener("load", function() {
      context.drawImage(img, 0, 0)
    })
  }
}

class Circle {

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

let circle = new Circle({
  x: 100,
  y: 100,
  radius: 50,
  lineWidth: 1,
  strokeStyle: '#FF4136',
})

let drone = new Drone({})

let scene = new Scene()
scene.addObject(circle)
scene.addObject(drone)
scene.render()
// circle.followToMouse()
drone.followToMouse()

animateScenes(scene)

function animateScenes() {
  scene.render()
  window.requestAnimationFrame(animateScenes.bind(this, scene))
}
