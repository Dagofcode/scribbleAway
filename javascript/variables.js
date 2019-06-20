const canvas = document.querySelector(".game-canvas");
ctx = canvas.getContext("2d");

let x = 20;
let y = 0;
let platforms = [];
let frames = 0;
let interval;
let colors = ["red", "black", "blue"];
let animateHelper = 0;
let door = new Image();
let images = {
  door: "images/door.png"
};

door.src = images.door;
let reset = false;

//objects
let pen = new Pen("red");
let blackPen = new Pen("black");

let background = new Board();
let player = new Player(10, 0);
platforms.push(new Platform(0, 500, 50));
