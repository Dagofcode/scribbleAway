const canvas = document.querySelector("canvas");
ctx = canvas.getContext("2d");

let painting = false;
let x = 20;
let y = 0;
let platforms = [];
let frames = 0;

//objects
let pen = new Pen();
//let pen2 = new Pen();

let stick = new Player(10, 0);
platforms.push(new Platform(0, 500, 50));
