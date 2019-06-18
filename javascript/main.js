//function that updates everything in the game
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //background.draw();

  pen.draw();
  pen.drawInk();
  winCondition();

  stick.update();
  drawPlatforms();
  checkCollisionPlatform();
  checkCollisionPen();
  frames++;
}
//this function will get called once the user presses the button
function startGame() {
  interval = setInterval(update, 1000 / 60);
}

startGame();
