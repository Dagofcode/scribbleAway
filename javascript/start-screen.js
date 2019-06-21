//I am naming my canvas variable sc to not have conflicts with my
// ctx of the other canvas.
/***********************************
 * for this specific file, i am naming things differently to not have conflict with my
 * game file. Also i am creating everything in this file such as classes
 * and functions and listeners to not mix things with other files since this is the
 * start screen
 ***********************************/

const start_canvas = document.querySelector(".start-canvas");
sc = start_canvas.getContext("2d");

class Line {
  constructor(sx, sy, yv, xv, color) {
    this.width = 2;
    this.startX = sx;
    this.startY = sy;
    this.x = sx;
    this.y = sy;
    this.xv = xv;
    this.yv = yv;
    this.color = color;
    this.stop = false;

    sc.moveTo(this.startX, this.startY);
  }

  draw() {
    this.x += this.xv;
    this.y += this.yv;

    if (this.stop) return;
    sc.beginPath();
    sc.strokeStyle = this.color;
    sc.lineWidth = this.width;
    sc.lineCap = "round";
    sc.lineTo(this.x, this.y);
    sc.stroke();
  }
  checkCollision() {
    if (this.x > start_canvas.width || this.x < 0) {
      this.xv += 1;

      this.xv = -this.xv;
    }
    if (this.y > start_canvas.height || this.y < 0) {
      this.yv = -this.yv;
    }
  }
}

let this_interval;
let scframes = 0;
let sccolors = ["#B1EB00", "#53BBF4", "#FF85CB", "#FF432E", "yellow"];
let scCounter = 0;
let lines = [];
let radius = 1;
let scimages = {
  title: "images/scribbleAway.png"
};
let startImage = new Image();
startImage.src = scimages.title;
let rx,
  ry,
  dy,
  dx = 0;
let rad = 1;
let numberOfLines = 600;

for (i = 0; i < numberOfLines; i++) {
  dy = Math.random() - 0.5;
  dx = Math.random() - 0.5;
  rx = Math.floor(Math.random() * start_canvas.width);
  ry = Math.floor(Math.random() * start_canvas.height);
  dx *= 5;
  dy *= 5;

  lines.push(
    new Line(
      rx,
      ry,
      dx,
      dy,
      sccolors[Math.floor(Math.random() * sccolors.length)]
    )
  );
}
function update() {
  drawLines();
  scframes++;

  changeColors();
  stopDrawingLines();
  drawCircle();
  drawFont();
}
function startLoop() {
  this_interval = setInterval(update, 1000 / 60);
}

function drawLines() {
  for (i = 0; i < numberOfLines; i++) {
    lines[i].draw();
    lines[i].checkCollision();
  }
}
function stopDrawingLines() {
  if (scframes % 500 === 0) {
    for (i = 0; i < numberOfLines; i++) {
      lines[i].stop = true;
    }
  }
}
function drawFont() {
  sc.font = "50px Verdana";
  // Create gradient
  let gradient = sc.createLinearGradient(0, 0, start_canvas.width, 0);
  gradient.addColorStop("0", " magenta");
  gradient.addColorStop("0.5", "blue");
  gradient.addColorStop("1.0", "red");

  // Fill with gradient
  sc.fillStyle = gradient;
  sc.fillText(
    "ScribbleAway",
    start_canvas.width / 2 - 100,
    start_canvas.height / 2 - 50,
    200
  );
  sc.fillText(
    "Enter To Start",
    start_canvas.width / 2 - 100,
    start_canvas.height / 2 + 50,
    200
  );
}
function drawCircle() {
  let scX = start_canvas.width / 2;
  let scY = start_canvas.height / 2;

  let grad = sc.createLinearGradient(0.0, 150.0, 300.0, 150.0);

  // Add colors

  grad.addColorStop(0, "#f00"); // red
  grad.addColorStop(0.5, "#00f"); // blue
  grad.addColorStop(0.9, "#ff0"); // yellow

  if (rad < 200) {
    rad++;
  }

  sc.beginPath();
  sc.fillStyle = grad;

  sc.arc(scX, scY, rad, 0, Math.PI * 2, false);

  sc.fill();
}
function changeColors() {
  if (scframes % 200 === 0) {
    scCounter++;
    if (scCounter > 5) {
      scCounter = 0;
    }
  }
}

startLoop();
