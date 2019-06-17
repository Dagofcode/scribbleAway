//function that updates everything in the game
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  pen.draw();
  stick.draw();
  checkCollision();
  drawPlatforms();
  frames++;
}
//this function will get called once the user presses the button
function startGame() {
  setInterval(update, 1000 / 60);
}

startGame();
