//function that updates everything in the game

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.draw();

  if (player.level === 1) {
    level1();
  } else if (player.level === 2) {
    level2();
  }

  frames++;
}
//this function will get called once the user presses the button
function startGame() {
  if (interval) return;
  interval = setInterval(update, 1000 / 60);
}
