class Board {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img2 = new Image();
    this.img3 = new Image();
    this.img.src = "images/background.png";
    this.img2.src = "images/background.png";
    this.img3.src = "images/background.png";

    this.img.onload = () => {
      this.draw();
    };
  }
  draw() {
    if (frames % 12 === 0)
      if (animateHelper === 0) {
        this.img;
      } else if (animateHelper === 1) {
        this.img = this.img2;
      } else if (animateHelper === 2) {
        this.img = this.img3;
      }
    if (animateHelper < 4) {
      animateHelper++;
    } else {
      animateHelper = 0;
    }
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
class Player {
  constructor(x, y, img) {
    this.width = 50;
    this.height = 50;
    this.x = x;
    this.y = y;
    this.onGround = false;
    this.jumping = false;
    this.yv = 0;
    this.xv = 0.5;
    this.friction = 0.9;
    this.frictionX = 0.2;
    this.gravity = 0.3;
    this.color = "black";
    this.img = new Image();
    this.imgYellow = new Image();
    this.imgRed = new Image();
    this.imgBlue = new Image();
    this.img.src = "images/stick.png";
    this.imgYellow.src = "images/stickYellow.png";
    this.imgRed.src = "images/stickRed.png";
    this.imgBlue.src = "images/stickBlue.png";
    this.points = 0;
  }
  draw() {
    // ctx.fillStyle = "black";
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  update() {
    this.draw();
    if (this.onGround === false) {
      this.yv += this.gravity;
      this.yv *= this.friction;
    } else {
      this.yv = -this.yv * this.friction;
      this.jumping = true;
      this.onGround = true;
    }
    this.y += this.yv;
    this.x += this.xv;
  }
  changeImg() {
    if (this.color === "red") {
      this.img = this.imgRed;
    } else if (this.color === "yellow") {
      this.img = this.imgYellow;
    } else if (this.color === "blue") {
      this.img = this.imgBlue;
    } else {
      this.img = this.img;
    }
  }
  jump() {
    if (this.jumping === false) {
      this.yv -= 20;
      this.jumping = true;
      this.onGround = false;
    }
  }
  moveRight() {
    this.xv += 2;
  }
  moveLeft() {
    this.xv -= 5;
  }
  moveUp() {
    this.yv -= 5;
  }
  moveDown() {
    this.yv += 5;
  }
  checkCollisionPlatform(platform) {
    if (
      this.x < platform.x + platform.width &&
      this.x + this.width > platform.x &&
      this.y + this.height > platform.y
    ) {
      this.jumping = false;
      return true;
    }

    return false;
  }

  sqr(x) {
    return x * x;
  }
  dist2(v, w) {
    return this.sqr(v.x - w.x) + this.sqr(v.y - w.y);
  }
  distToSegmentSquared(p, v, w) {
    var l2 = this.dist2(v, w);
    if (l2 == 0) return this.dist2(p, v);
    var t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
    t = Math.max(0, Math.min(1, t));
    return this.dist2(p, {
      x: v.x + t * (w.x - v.x),
      y: v.y + t * (w.y - v.y)
    });
  }
  distToSegment(p, v, w) {
    return Math.sqrt(this.distToSegmentSquared(p, v, w));
  }
  checkCollisionPen(pen) {
    //i get all the four points of my player
    //to calculate the line distance from the points of the pen drawings
    let topLeft = {
      x: this.x,
      y: this.y
    };
    let topRight = {
      x: this.x + this.width,
      y: this.y
    };
    let botLeft = {
      x: this.x,
      y: this.y + this.height
    };
    let botRight = {
      x: this.x + this.width,
      y: this.y + this.height
    };

    let point = {};
    let top, right, bot, left;

    for (i = 0; i < pen.previousX.length; i++) {
      point.x = pen.previousX[i];
      point.y = pen.previousY[i];

      //direction of the lines
      top = this.distToSegment(point, topLeft, topRight);
      right = this.distToSegment(point, topRight, botRight);
      left = this.distToSegment(point, topLeft, botLeft);
      bot = this.distToSegment(point, botLeft, botRight);

      if (top < 10) {
        this.yv *= -1;
      }
      if (right < 5) {
        this.x -= 0.5;
        this.xv *= -1;
      }
      if (left < 5) {
        this.x += 0.5;

        this.xv *= -1;
      }
      if (bot < 5) {
        this.onGround = true;
        this.jumping = false;
        this.y -= 0.5;
      }
    }
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
//class to draw on the canvas
class Pen {
  constructor(color) {
    this.x = 0;
    this.y = 0;
    this.width = 10;
    this.type = "round";
    this.painting = false;
    this.ink = 2000;
    this.previousX = [];
    this.previousY = [];
    this.isPicked = false;
    this.color = color;
    this.clear = false;
  }

  draw() {
    if (!this.painting) return;
    ctx.strokeStyle = this.color;

    ctx.lineWidth = this.width;
    ctx.lineCap = this.type;

    this.previousX.push(this.x);
    this.previousY.push(this.y);

    ctx.lineTo(this.x, this.y);
    ctx.stroke();

    this.ink--;
  }
  drawInk() {
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;

    ctx.fillRect(20, 20, this.ink / 10, 50);
    ctx.fillStyle = "green";
    ctx.font = "30px Arial";
    ctx.fillText(`Your Ink: ${this.ink}`, 20, 50);
  }
  startPosition() {
    ctx.moveTo(this.x, this.y);

    this.previousX.push(this.x);
    this.previousY.push(this.y);
    this.painting = true;
  }
  finishedPosition() {
    this.painting = false;
  }
}
