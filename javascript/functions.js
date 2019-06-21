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
    ctx.font = "60px Arial";
    ctx.fillText(`LEVEL ${player.level} COMPLETE!`, 100, canvas.height / 2);
    player.points = pen.ink + 100;
    reset = true;
    clearInterval(interval);
    ctx.font = "40px Arial";
    ctx.fillStyle = colors[player.level];

    ctx.fillText(
      `Next Level we're adding color ${colors[player.level]}!`,
      80,
      canvas.height / 2 + 50
    );
    ctx.fillStyle = "green";

    ctx.fillText(`Press start to continue!`, 80, canvas.height / 2 + 100);
    player.level += 1;

    interval = false;
  } else if (player.y > canvas.height || pen.ink < 0) {
    ctx.fillText(`YOU LOST!`, canvas.width / 2, canvas.height / 2);
    clearInterval(interval);
    interval = false;
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
