var naruto;
var sasuke;
var kakashi;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function preload(){
  naruto.loadImage();
  sasuke.loadImage();
  kakashi.loadImage();  
}