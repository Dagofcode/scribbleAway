addEventListener("mousedown", () => pen.startPosition());
addEventListener("mouseup", () => pen.finishedPosition());
addEventListener("mousemove", () => {
  pen.x = event.clientX;
  pen.y = event.clientY;
});
addEventListener("keydown", e => {
  if (e.keyCode === 37) {
    stick.moveLeft();
  } else if (e.keyCode === 32) {
    stick.jump();
  } else if (e.keyCode === 39) {
    stick.moveRight();
  }
});

//code that will use later
/*  clearInterval(interval)
      interval = false
      
*/
