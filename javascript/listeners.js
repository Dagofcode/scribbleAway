addEventListener("mousedown", () => pen.startPosition());
addEventListener("mouseup", () => pen.finishedPosition());
addEventListener("mousemove", () => {
  pen.x = event.clientX;
  pen.y = event.clientY;
});
