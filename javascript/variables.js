const canvas = document.querySelector(".game-canvas");
ctx = canvas.getContext("2d");

//button variables
let startButton = document.querySelector(".start");
let instructions = document.querySelector(".instructions");
let tryAgain = document.querySelector(".again");

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
let switchPagesCounter = 0;

let audio = new Audio();
audio.src = "Grasslands.mp3";

door.src = images.door;
inkBottle.src = images.inkBottle;
let reset = false;

//objects
let pen = new Pen("black");
let blackPen = new Pen("black");
let background = new Board();
let player = new Player(10, canvas.height - 200);
platforms.push(new Platform(0, 500, 50, 300));
