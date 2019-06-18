//function that updates everything in the game
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  pen.draw();
  //pen2.draw();
  winCondition();

  stick.update();
  drawPlatforms();
  checkCollisionPlatform();
  checkCollisionPen();
  addInk();
  frames++;
}
//this function will get called once the user presses the button
function startGame() {
  interval = setInterval(update, 1000 / 60);
}

startGame();

// ctx.beginPath();
// ctx.lineWidth = 10;
// ctx.moveTo(0, 0);
// ctx.lineTo(100, 100);
// ctx.stroke();

// ctx.beginPath();
// ctx.lineWidth = 10;
// ctx.moveTo(200, 200);
// ctx.lineTo(300, 300);
// ctx.stroke();
