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
  } else if (e.keyCode === 39) {
    // player.moveRight();
  } else if (e.keyCode === 49) {
    pen.color = "black";
  } else if (e.keyCode === 50) {
    pen.color = "red";
  } else if (e.keyCode === 51) {
    pen.color = "yellow";
  } else if (e.keyCode === 52) {
    pen.color = "blue";
  } else if (e.keyCode === 13) {
    clearScreen();
    //interval = false;
    //reset = true;
  } else if (e.keyCode === 80) {
    clearInterval(interval);
    interval = false;
  }
});

//starting my game
startButton.addEventListener("click", function() {
  startGame();
});
tryAgain.addEventListener("click", function() {
  reset = true;
  checkIfReset();
  startGame();
});

instructions.addEventListener("click", function() {
  document.querySelector(".instructions_img").style.visibility = "visible";
});

function clearScreen() {
  if (switchPagesCounter === 0) {
    document.querySelector(".intro").style.display = "none";
    document.querySelector(".instructions").style.display = "flex";
  } else if (switchPagesCounter === 1) {
    document.querySelector(".instructions").style.display = "none";
    document.querySelector(".middle").style.display = "flex";
  }

  switchPagesCounter++;
}
