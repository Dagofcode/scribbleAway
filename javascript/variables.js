const canvas = document.querySelector(".game-canvas");
ctx = canvas.getContext("2d");

//button variables
let startButton = document.querySelector(".start");
let instructions = document.querySelector(".instructions");

// variables
let x = 20;
let y = 0;
let platforms = [];
let frames = 1;
let interval;
let colors = ["black", "red", "yellow", "blue"];
let animateHelper = 0;
let door = new Image();
let yellowImg = new Image();
let inkBottle = new Image();
let images = {
  door: "images/door.svg",
  inkBottle: "images/inkBottle.png"
};
let inkCounter = 1;

door.src = images.door;
inkBottle.src = images.inkBottle;
let reset = false;

//objects
let pen = new Pen("black");
let blackPen = new Pen("black");
let background = new Board();
let player = new Player(10, canvas.height - 200);
platforms.push(new Platform(0, 500, 50, 300));

//for testing purposes
player.level = 1;
