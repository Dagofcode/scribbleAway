const canvas = document.querySelector("canvas");
ctx = canvas.getContext("2d");

let painting = false;
let x = 20;
let y = 0;
let platforms = [];
let frames = 0;
let interval;
let door = new Image();
let images = {
  door: "images/door.png"
};
door.src = images.door;

//objects
let pen = new Pen();
let background = new Board();

let stick = new Player(10, 0);
platforms.push(new Platform(0, 500, 50));
