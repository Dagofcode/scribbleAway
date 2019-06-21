//function that updates everything in the game

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.draw();
  player.update();
  drawPlatforms();
  checkCollisionPlatform();
  checkCollisionPen();
  changePlayerColor();
  createInkBottles(200, 200);
  winCondition();
  checkIfReset();

  frames++;
}
//this function will get called once the user presses the button
function startGame() {
  console.log(interval);
  if (interval) return;
  interval = setInterval(update, 1000 / 60);
}
