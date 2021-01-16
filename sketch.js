var rect1,rect2;
var car,wall;

function setup() {
  createCanvas(1366,720);
  rect1 = createSprite(400, 200, 30, 50);
  rect1.shapeColor = "blue";
  rect2 = createSprite(200,150,80,50);
  rect2.shapeColor = "red";

  car = createSprite(680,400,20,40);
  car.shapeColor = "black";
  wall = createSprite(800,350,20,120)
  wall.shapeColor = "grey";
  car.velocityX=2;

}

function draw() {
  background("lightblue");  

  rect1.x = World.mouseX;
  rect1.y = World.mouseY;

  if(isTouching(rect1,rect2)){
    rect1.shapeColor="purple";
    rect2.shapeColor="purple";
  }
  else{
    rect1.shapeColor = "blue";
    rect2.shapeColor = "red";
  }

  if(isTouching(car,wall)){
    car.shapeColor="red";
    wall.shapeColor="red";
    car.velocityX=car.velocityX*(-1);
  }
  else{
    car.shapeColor = "black";
    wall.shapeColor = "grey";
  }

  drawSprites();
}
function isTouching(obj1,obj2){
  if(obj1.x - obj2.x <(obj1.width/2 + obj2.width/2)
  && obj2.x  - obj1.x <(obj1.width/2 + obj2.width/2)
  && obj1.y - obj2.y <(obj1.height/2 + obj2.height/2)
  &&obj2.y - obj1.y <(obj1.height/2 + obj2.height/2)){
    return true;
  }else{
    return false;
  }
}
