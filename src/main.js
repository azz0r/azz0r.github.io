const main = require('./main')
var canvas = document.getElementById("output")
var ctx = canvas.getContext("2d")
var ballRadius = 10
var x = canvas.width/2
var y = canvas.height-30
var dx = 2
var dy = -2
var droneHeight = 10
var droneWidth = 75
var droneX = (canvas.width-droneWidth)/2
var rightPressed = false
var leftPressed = false
var brickRowCount = 5
var brickColumnCount = 3
var brickWidth = 75
var brickHeight = 20
var brickPadding = 10
var brickOffsetTop = 30
var brickOffsetLeft = 30
var score = 0

document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)
document.addEventListener("mousemove", mouseMoveHandler, false)
document.addEventListener('resize', resizeCanvas, false)

function keyDownHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = true
  }
  else if(e.keyCode == 37) {
    leftPressed = true
  }
}
function keyUpHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = false
  }
  else if(e.keyCode == 37) {
    leftPressed = false
  }
}
function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft
  if(relativeX > 0 && relativeX < canvas.width) {
    droneX = relativeX - droneWidth/2
  }
}

function resizeCanvas() {
  ctx.width = window.innerWidth
  ctx.height = window.innerHeight
  draw()
}

function collisionDetection() {
}

function drawBall() {
  ctx.beginPath()
  ctx.arc(x, y, ballRadius, 0, Math.PI*2)
  ctx.fillStyle = "#0095DD"
  ctx.fill()
  ctx.closePath()
}

function drawDrone() {
  ctx.beginPath()
  ctx.rect(droneX, canvas.height-droneHeight, droneWidth, droneHeight)
  ctx.fillStyle = "#0095DD"
  ctx.fill()
  ctx.closePath()
}

function drawScore() {
  ctx.font = "16px Arial"
  ctx.fillStyle = "#0095DD"
  ctx.fillText("Score: "+score, 8, 20)
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBall()
  drawDrone()
  drawScore()
  collisionDetection()
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx
  }
  if(y + dy < ballRadius) {
    dy = -dy
  }
  else if(y + dy > canvas.height-ballRadius) {
    if(x > droneX && x < droneX + droneWidth) {
      dy = -dy
    }
    else {

        x = canvas.width/2
        y = canvas.height-30
        dx = 3
        dy = -3
        droneX = (canvas.width- droneWidth)/2
      }
  }
  if(rightPressed && droneX < canvas.width-droneWidth) {
    droneX += 7
  }
  else if(leftPressed && droneX > 0) {
    droneX -= 7
  }
  x += dx
  y += dy
  requestAnimationFrame(draw)
}
draw()
