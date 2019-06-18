class Player {
  constructor(x, y) {
    this.width = 30;
    this.height = 50;
    this.x = x;
    this.y = y;
    this.onGround = false;
    this.jumping = false;
    this.yv = 0;
    this.xv = 0;
    this.friction = 0.9;
    this.gravity = 1.5;
  }
  draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    this.draw();
    console.log(this.onGround);
    if (this.onGround === false) {
      this.yv += this.gravity;
      this.yv *= this.friction;
    } else {
      this.yv = -this.yv * this.friction;
    }
    this.y += this.yv;
    this.x += this.xv;
    this.xv *= this.friction;
  }
  jump() {
    if (this.jumping === false) {
      this.yv -= 30;
      this.jumping = true;
      this.onGround = false;
    }
  }
  moveRight() {
    //if (this.xv < this.speed) {
    this.xv += 5;
  }
  moveLeft() {
    this.xv -= 5;
  }
  checkCollisionPlatform(platform) {
    if (
      this.x < platform.x + platform.width &&
      this.x + this.width > platform.x &&
      this.y + this.height > platform.y
    ) {
      this.jumping = false;
      //console.log("i am returning true;");
      return true;
    }

    return false;
  }
  checkCollisionPen(pen) {
    for (i = 0; i < pen.previousX.length; i++) {
      if (
        this.x < pen.previousX[i] + pen.width &&
        this.x + this.width > pen.previousX[i] &&
        this.y + this.height > pen.previousY[i]
      ) {
        this.jumping = false;
        return true;
      }
    }
    return false;
  }
}
class Platform {
  constructor(x, y, height) {
    this.x = x;
    this.y = y; // canvas.height / 2 + 100;
    this.width = 300;
    this.height = height; //canvas.height - this.y;
    this.color = "green";
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
class Pen {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 10;
    this.type = "round";
    this.painting = false;
    this.ink = 100;
    this.previousX = [];
    this.previousY = [];
  }

  draw() {
    ctx.stroke();
    if (!this.painting) return;
    ctx.lineWidth = this.width;
    ctx.lineCap = this.type;
    this.previousX.push(this.x);
    this.previousY.push(this.y);
    ctx.lineTo(this.x, this.y);
    //ctx.stroke();
  }
  startPosition() {
    // ctx.beginPath();
    console.log(this.x, "", this.y);
    ctx.moveTo(this.x, this.y);
    this.painting = true;
  }
  finishedPosition() {
    //ctx.beginPath();
    this.painting = false;
    //ctx.closePath();
    //ctx.beginPath();
  }
}

// ctx.beginPath();
// ctx.lineWidth = 10;
// ctx.moveTo(0, 0);
// ctx.lineTo(100, 100);
// ctx.stroke();

// ctx.beginPath();
// ctx.lineWidth = 10;
// ctx.moveTo(200, 200);
// ctx.lineTo(300, 300);
// ctx.stroke();
