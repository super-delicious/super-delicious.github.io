var ship;

function setup() {
  createCanvas(600,600);
  ship = new Ship();
  
}
 
function draw() {
  background(51);
  ship.show();
  
  if(gameState =="L1"){
  levelOne();
  }
   if(gameState =="L2"){
  levelTwo();
  }
  if(gameState =="L3"){
  levelThree();
  }
  
}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.left(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.right(-1);
  }
  
}