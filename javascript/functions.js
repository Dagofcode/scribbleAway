//check for button isntances

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
  if (player.color === pen.color) player.checkCollisionPen(pen);
}

function winCondition() {
  let x = canvas.width - 125;
  let y = 25;
  let w = 60;
  let h = 80;
  ctx.drawImage(door, x, y, w, h);

  if (
    player.x > x &&
    player.x + player.width < x + w &&
    player.y > y &&
    player.y + player.height < y + h
  ) {
    ctx.font = "60px Arial";
    ctx.fillText(`YOU WON!`, canvas.width / 2, canvas.height / 2);
    player.points += 1;
    clearInterval(interval);
  } else if (player.y > canvas.height || pen.ink < 0) {
    ctx.fillText(`YOU LOST!`, canvas.width / 2, canvas.height / 2);
    clearInterval(interval);
  }
}
function checkIfReset() {
  if (!reset) {
    pen.draw();
    pen.drawInk();
  } else {
    ctx.beginPath();

    pen.previousX = [];
    pen.previousY = [];
    pen.x = 0;
    pen.y = 0;
    player.x = 0;
    player.y = canvas.height - 200;
  }
}
function changePlayerColor() {
  let rnd = Math.floor(Math.random() * 3);
  //   if (frames % 500 === 0) {
  //     player.color = colors[rnd];
  //     console.log(player.color);
  //     player.changeImg();
  //   }
}
