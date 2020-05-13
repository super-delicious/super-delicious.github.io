
let img;

let theta = 0;

function setup() {
  createCanvas(1450, 1080, WEBGL);

  img = loadImage('assets/xiaozhen-12.jpg');
  img = loadImage('assets/xiaozhen-29.jpg');
  img = loadImage('assets/xiaozhen-23.jpg');
  img = loadImage('assets/xiaozhen-1.jpg');
  img = loadImage('assets/xiaozhen-27.jpg');
  img = loadImage('assets/xiaozhen-20.jpg');
  img = loadImage('assets/xiaozhen-8.jpg');
  vid = createVideo(['project1.mp4']);
  vid.elt.muted = true;
  vid.loop();
  vid.hide();
}

function draw() {
  background(0);
  translate(0, 0, 0);
  push();

  //pass image as texture
  texture(vid);
  sphere(150);
  pop();
  translate(440, 0, 0);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  texture(img);
  sphere(150);
  pop();
  theta += 0.04;
}
