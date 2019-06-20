const canvas = document.querySelector(".game-canvas");
ctx = canvas.getContext("2d");

//button variables
let startButton = document.querySelector(".start");

// variables
let x = 20;
let y = 0;
let platforms = [];
let frames = 1;
let interval;
let colors = ["red", "yellow", "blue"];
let animateHelper = 0;
let door = new Image();
let yellowImg = new Image();
let images = {
  door: "images/door.svg",
  yellow: "images/stickYellow.png"
};

door.src = images.door;
yellowImg.src = images.yellow;
let reset = false;

//objects
let pen = new Pen("black");
let blackPen = new Pen("black");
let background = new Board();
let player = new Player(10, canvas.height - 200);
platforms.push(new Platform(0, 500, 50));
