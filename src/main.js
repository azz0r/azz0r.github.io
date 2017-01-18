import Drone from "./drone"
import Rectangle from "./rectangle"

class Container {

  constructor(size = { width: 1024, height: 800 }, options = { zIndex: 1 }) {
    this.objects = []

    this.tickInterval = undefined
    this.width = size.width
    this.height = size.height

    let canvas = document.createElement("canvas")
    canvas.width = size.width
    canvas.height = size.height
    canvas.style.position = "absolute"
    canvas.style.backgroundColor = "LightSkyBlue"
    canvas.style.zIndex = options.zIndex
    document.body.appendChild(canvas)
    this.context = canvas.getContext("2d")
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

let drone = new Drone({
  x: 100,
  y: 100,
})

let secondaryDrone = new Drone({
  x: 350,
  y: 200,
  followToMouse: false,
})

let floor = new Rectangle({
  x: 0,
  y: 500,
  fillStyle: "#B3E061",
  width: 1024,
  height: 300,
})

let appInstance = new Container()
appInstance.addObject(floor)
appInstance.addObject(drone)
appInstance.addObject(secondaryDrone)
appInstance.render()
drone.followToMouse()

animateScenes(appInstance)

function animateScenes() {
  appInstance.render()
  window.requestAnimationFrame(
    animateScenes.bind(
      this,
      appInstance,
    )
  )
}
