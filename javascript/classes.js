class Player {
  constructor(x, y) {
    this.width = 30;
    this.height = 50;
    this.x = x;
    this.y = 300;
    //this.gravity = 5;
  }
  draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.gravitySpeed += this.gravity;
    this.y += 5;
  }
  checkCollision(platform) {
    if (
      this.x < platform.x + platform.width &&
      this.x + this.width > platform.x &&
      this.y < platform.y + platform.height &&
      this.y + this.height > platform.y
    ) {
      this.y = platform.y - this.height;
    }
  }
}
class Platform {
  constructor(x, y, height) {
    this.x = x;
    this.y = y; // canvas.height / 2 + 100;
    this.width = canvas.width;
    this.height = height; //canvas.height - this.y;
    this.color = "green";
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.x -= 5;
  }
}
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
    this.painting = true;
  }
  finishedPosition() {
    this.painting = false;
    this.x = 10;
    this.y = 10;
    //ctx.closePath();
    //ctx.beginPath();
  }
}
