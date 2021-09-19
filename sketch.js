var bg
var snow, snowImg

function preload() {
  bg = loadImage ("snow3.jpg")
  snowImg = loadImage ("snow5.webp")
}

function setup() {
  createCanvas(1200,650);
}

function draw() {
  background(bg);
  createSnow();
  drawSprites();
}

function createSnow() {
if(frameCount%50===0){
  snow = createSprite(random(0,1600),0,50,50)
  snow.velocityY = 5 
  snow.velocityX = 5
  snow.scale = 0.5
  snow.addImage(snowImg)
}
} 