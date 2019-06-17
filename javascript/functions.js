function generatePlatforms() {
  let x = canvas.width;
  let y = canvas.height / 2 + Math.floor(Math.random() * 100);
  let h = canvas.height - y;
  platforms.push(new Platform(x, y, h));
}

function drawPlatforms() {
  if (frames % 200 === 0) {
    console.log("generating platforms");
    generatePlatforms();
  }
  platforms.map(platform => {
    platform.draw();
  });
}

function checkCollision() {
  platforms.map(platform => {
    stick.checkCollision(platform);
  });
}
//canvas.height - this.y;
