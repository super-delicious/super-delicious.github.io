function setup() {
  var canvas = createCanvas(600, 600);
  canvas.parent('sketch-holder');
  noStroke();

}


function draw() {
  background(255);


  //hair
  fill(45, 27, 11);
  rect(135, 75, 330, 400, 200, 200, 20, 20);

  //shirt
  fill(217, 230, 232);
  rect(210, 454, 180, 200);
  ellipse(207, 554, 100, 200);
  ellipse(392, 554, 100, 200);
  fill(189, 216, 220);
  ellipse(213, 548, 3, 100);
  ellipse(388, 548, 3, 100);

  //neck
  fill(249, 213, 185);
  rect(272, 388, 59, 98, 100, 100, 50, 40);

  //skinshadow
  fill(233, 185, 156);
  ellipse(301, 390, 75, 80);

  //ear//
  fill(249, 213, 185);
  ellipse(412, 289, 55, 60);
  ellipse(188, 289, 55, 60);
  fill(246, 201, 166);
  ellipse(420, 289, 25, 25);
