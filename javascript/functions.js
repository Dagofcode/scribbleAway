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
      stick.onGround = true;
    } else {
      stick.onGround = false;
    }
  }
}

function checkCollisionPen() {
  stick.checkCollisionPen(pen);
}

function addInk() {
  ctx.font = "30px Arial";
  ctx.fillText(`Your Ink: ${pen.ink}`, 10, 50);
}

function winCondition() {
  let x = canvas.width - 125;
  let y = 25;
  let w = 100;
  //   ctx.beginPath();
  //   ctx.rect(x, y, w, w);
  //   ctx.fillStyle = "#8ED6FF";
  //   ctx.fill();
  //   ctx.lineWidth = 5;
  //   ctx.strokeStyle = "black";
  //   ctx.stroke();

  if (
    stick.x > x &&
    stick.x + stick.width < x + w &&
    stick.y > y &&
    stick.y + stick.height < y + w
  ) {
    ctx.font = "60px Arial";
    ctx.fillText(`YOU WON!`, canvas.width / 2, canvas.height / 2);
    clearInterval(interval);
  }
}

//canvas.height - this.y;
