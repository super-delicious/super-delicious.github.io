
let img;

let theta = 0;

function setup() {
  createCanvas(1450, 1080, WEBGL);

  img1 = loadImage('assets/xiaozhen-12.jpg');
  img2 = loadImage('assets/xiaozhen-29.jpg');
  img3 = loadImage('assets/xiaozhen-23.jpg');
  img4 = loadImage('assets/xiaozhen-1.jpg');
  img5 = loadImage('assets/xiaozhen-27.jpg');
  img6 = loadImage('assets/xiaozhen-20.jpg');
  img7 = loadImage('assets/xiaozhen-8.jpg');
  vid = createVideo(['project1.mp4']);
  vid.elt.muted = true;
  vid.loop();
  vid.hide();
}

function draw() {
  background(0);
  translate(0, 0, 0);
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);

  //pass image as texture


  

  sphere(150);
  pop();
  translate(40, 50, 0);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  texture(img2);
  sphere(150);
  pop();
  theta += 0.04;
  
  texture(vid);
  sphere(150);
  pop();
  translate(440, 0, 0);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  texture(img3);
  sphere(150);
  pop();
  theta += 0.02;
  
  texture(vid);
  sphere(150);
  pop();
  translate(440, 0, 0);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  texture(img4);
  sphere(150);
  pop();
  theta += 0.04;
  
  texture(vid);
  sphere(150);
  pop();
  translate(440, 0, 0);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  texture(img5);
  sphere(150);
  pop();
  theta += 0.03;
  
   texture(vid);
  sphere(150);
  pop();
  translate(440, 0, 0);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  texture(img6);
  sphere(150);
  pop();
  theta += 0.03;
  
   texture(vid);
  sphere(30);
  pop();
  translate(30, 0, 30,30);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  texture(img7);
  sphere(150);
  pop();
  theta += 0.03;
}
