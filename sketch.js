var sea,seaImg;
var ship,shipImg1;


function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadImage("ship-1.png");

}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200);
  sea.addImage(seaImg);
sea.scale  = 0.3;
sea.velocityX = 2;

ship = createSprite(200,250);
ship.addImage(shipImg1);
ship.scale = 0.1;
}

function draw() {
  background("blue");

  if(sea.x<0){
    sea.x = sea.width/2;
  }

    drawSprites();

 
}
