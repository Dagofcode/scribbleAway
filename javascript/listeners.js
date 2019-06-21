addEventListener("mousedown", () => pen.startPosition());
addEventListener("mouseup", () => pen.finishedPosition());
addEventListener("mousemove", () => {
  var rect = canvas.getBoundingClientRect(), // abs. size of element
    scaleX = canvas.width / rect.width, // relationship bitmap vs. element for X
    scaleY = canvas.height / rect.height; // relationship bitmap vs. element for Y

  pen.x = (event.clientX - rect.left) * scaleX;
  pen.y = (event.clientY - rect.top) * scaleY;
});
addEventListener("keydown", e => {
  if (e.keyCode === 37) {
    //player.moveLeft();
  } else if (e.keyCode === 32) {
    // player.jump();
    clearInterval(interval);
  } else if (e.keyCode === 39) {
    // player.moveRight();
    interval = 0;
  } else if (e.keyCode === 65) {
    pen.color = "red";
  } else if (e.keyCode === 87) {
    pen.color = "blue";
  } else if (e.keyCode === 68) {
    pen.color = "yellow";
  } else if (e.keyCode === 13) {
    clearScreen();
    //reset = true;
  }
});

//starting my game
startButton.addEventListener("click", function() {
  startGame();
});

instructions.addEventListener("click", function() {
  document.querySelector(".instructions_img").style.visibility = "visible";
});

function clearScreen() {
  document.querySelector(".intro").style.opacity = "0";

  document.querySelector(".intro").style.display = "none";
  document.querySelector(".middle").style.display = "flex";
}
