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
    if (player.checkCollisionPlatform(platforms[i])) {
      player.onGround = true;
    } else {
      player.onGround = false;
    }
  }
}

function checkCollisionPen() {
  player.checkCollisionPen(pen);
}

function winCondition() {
  let x = canvas.width - 125;
  let y = 25;
  let w = 100;
  ctx.drawImage(door, x, y, w, 100);

  if (
    player.x > x &&
    player.x + player.width < x + w &&
    player.y > y &&
    player.y + player.height < y + w
  ) {
    ctx.font = "60px Arial";
    ctx.fillText(`YOU WON!`, canvas.width / 2, canvas.height / 2);
    clearInterval(interval);
  } else if (player.y > canvas.height || pen.ink < 0) {
    ctx.fillText(`YOU LOST!`, canvas.width / 2, canvas.height / 2);
    clearInterval(interval);
  }
}
function resetGame() {
  pen = undefined;
  pen = new Pen("blue");
}
function changePlayerColor() {
  let rnd = Math.floor(Math.random() * 2);
  if (frames % 300 === 0) {
    player.color = colors[rnd];
  }
}
