function generatePlatforms() {
  let x = canvas.width;
  let y = canvas.height / 2 + Math.floor(Math.random() * 100);
  let h = canvas.height - y;
  platforms.push(new Platform(x, y, h));
}

function drawPlatforms() {
  platforms.map(platform => {
    platform.draw();
  });
}

function checkCollisionPlatform() {
  for (i = 0; i < platforms.length; i++) {
    if (stick.checkCollisionPlatform(platforms[i])) {
      //console.log("touching platforms");
      stick.onGround = true;
    } else {
      stick.onGround = false;
    }
  }
}

function checkCollisionPen() {
  if (stick.checkCollisionPen(pen)) {
    stick.onGround = true;
  } else {
    stick.onGround = false;
  }
}

//canvas.height - this.y;
