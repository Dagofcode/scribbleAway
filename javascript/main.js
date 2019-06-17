const canvas = document.querySelector("canvas");
ctx = canvas.getContext("2d");

let painting = false;
let x = 20;
let y = 0;

class Pen {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 10;
    this.type = "round";
    this.painting = false;
    this.previous = [];
  }

  draw() {
    ctx.stroke();
    if (!this.painting) return;
    ctx.lineWidth = this.width;
    ctx.lineCap = this.type;
    this.previous.push(this.y);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
  }
  updatePen(e) {
    this.x = e.clientX;
    this.y = e.clientY;
  }
  startPosition() {
    ctx.beginPath();
    console.log("is this being called");
    this.painting = true;
  }
  finishedPosition() {
    this.painting = false;
    //ctx.closePath();
    //ctx.beginPath();
  }
}
let pen = new Pen();
addEventListener("mousedown", () => pen.startPosition());
addEventListener("mouseup", () => pen.finishedPosition());
addEventListener("mousemove", () => {
  pen.x = event.clientX;
  pen.y = event.clientY;
});

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillRect(x, y, 100, 100);
  checkCollision();
  pen.draw();
}
function checkCollision() {
  if (y + 100 > canvas.height) return;
  let keepGoing = true;
  pen.previous.map(previous => {
    if (y + 100 === previous) keepGoing = false;
  });
  console.log(keepGoing);
  if (!keepGoing) return;
  y++;
}

function startGame() {
  setInterval(update, 1000 / 60);
}

startGame();
