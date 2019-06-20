addEventListener("mousedown", () => pen.startPosition());
addEventListener("mouseup", () => pen.finishedPosition());
addEventListener("mousemove", () => {
  let rect = canvas.getBoundingClientRect();

  pen.x = event.clientX - rect.left;
  pen.y = event.clientY - rect.top;
});
addEventListener("keydown", e => {
  if (e.keyCode === 37) {
    //player.moveLeft();
  } else if (e.keyCode === 32) {
    // player.jump();
  } else if (e.keyCode === 39) {
    // player.moveRight();
  } else if (e.keyCode === 65) {
    pen.color = "red";
  } else if (e.keyCode === 87) {
    pen.color = "blue";
  } else if (e.keyCode === 68) {
    pen.color = "yellow";
  } else if (e.keyCode === 13) {
    if (reset) reset = false;
    else if (!reset) reset = true;
  }
});

//starting my game
startButton.addEventListener("click", function() {
  startGame();
});

instructions.addEventListener("click", function() {
  document.querySelector(".instructions_img").style.visibility = "visible";
});
