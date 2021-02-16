var fixedRect, movingRect;
var Rect1,rect2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  Rect1=   createSprite(200, 400, 50, 80);
  Rect1.shapeColor = "white";
  Rect1.debug = true;
  
  Rect2=   createSprite(900, 400, 50, 80);
  Rect2.shapeColor = "white";
  Rect2.debug = true; 


}

function draw() {
  background(0,0,0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (isTouching(movingRect,Rect2)) {
    movingRect.shapeColor = "red";
  Rect2.shapeColor = "red"; 
  
  } else {
    movingRect.shapeColor = "green";
  Rect2.shapeColor = "green"; 
  }
  
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true
  
}
else {
 return false
}
}