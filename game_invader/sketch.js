var ship;

function setup() {
  createCanvas(600,600);
  ship = new Ship();
  
}
 
function draw() {
  background(55);
  ship.show();

  for (var i = 0; i < drops.length; i++){
    drop.show();
    drop.move();
     for (var j = 0; j < flowers.length; j++){
       if(drops[i].hits(flowers[j])) {
         flowers[i].grow(0);
         drops[i].evaporate();

         console.log("WATERING");
       }
   flowers[j].show();
  }
  }
  for (var i = 0; i < flowers.length; i++){
   flowers[i].show();
   flowers[i].move();
  }
  
  
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.left(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.right(-1);
  }
  
}