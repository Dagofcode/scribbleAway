//check for button isntances

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
  let w = 100;
  let h = 100;
  ctx.drawImage(door, x, y, w, h);

  if (
    player.x > x &&
    player.x + player.width < x + w &&
    player.y > y &&
    player.y + player.height < y + h
  ) {
    setTimeout(function() {
      console.log("read timeout");
      ctx.font = "60px Arial";
      ctx.fillText(
        `LEVEL ${player.level} COMPLETE!`,
        canvas.width / 2,
        canvas.height / 2
      );
    }, 10000);
    player.points = pen.ink + 100;
    reset = true;
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
    player.xv = 0.5;
    pen.ink = 2000;
    player.level += 1;
    if (player.level > 4) {
      gameOver();
    }

    reset = false;
  }
}
function createInkBottles(x, y) {
  if (inkCounter <= 0) return;
  ctx.drawImage(inkBottle, x, y, 100, 100);

  if (
    player.x < x + 100 &&
    player.y < y + 100 &&
    (player.x + player.width > x && player.y < y + 100)
  ) {
    pen.ink += 500;
    inkCounter -= 1;
  }
}
function changePlayerColor() {
  let rnd = Math.floor(Math.random() * player.level);
  if (frames % 500 === 0) {
    player.color = colors[rnd];
    player.changeImg();
  }
}
function loadIntro() {
  document.querySelector(".game").style.visivility = "hidden";
}
function gameOver() {}
