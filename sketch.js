var snake;
var apple=createSprite(random(width), random(height));


function setup() {
  createCanvas(400, 400);
  snake = new Snake();
  frameRate(10);
}

function draw() {
  background("blue");
  snake.show();
  snake.update();
}

function keyPressed(){
 if (keyCode === UP_ARROW) {
  snake.direction(0,-1);
 }
  else if(keyCode === DOWN_ARROW){
   snake.direction(0,1); 
  }
  else if(keyCode === RIGHT_ARROW){
   snake.direction(1,0); 
  }
  else if(keyCode === LEFT_ARROW){
   snake.direction(-1,0); 
  }
}

