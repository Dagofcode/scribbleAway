const canvas = document.querySelector("canvas");
ctx = canvas.getContext("2d");

let painting = false;
let x = 20;
let y = 0;
let platforms = [];
let frames = 0;

//objects
let pen = new Pen();
let stick = new Player(50, canvas.height);
platforms.push(
  new Platform(
    0,
    canvas.height / 2 + 100,
    canvas.height - canvas.height / 2 + 100
  )
);
