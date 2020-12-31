var wall,car;
var speed,weight;



function setup() {
  createCanvas(1500,400);
  speed=random(55,90);
  weight=random(400,1500);
  car =createSprite(50, 100, 25, 25);
  car.shapeColor=(255);
  wall =createSprite(1200,100,30,80)
  wall.shapeColour=(80,80,80);
  car.velocityX=speed;
}

function draw() {
  background(0);  
  drawSprites();
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 *speed * weight * speed;
    if(deformation>180){

      car.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>100){

      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){

      car.shapeColor=color(0,255,0);
    }
  }
}