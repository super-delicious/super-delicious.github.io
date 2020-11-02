var imgX = 300;
var imgY = 300;
var imgSize = 80;
var score =0;
var gameState ="L1";

 function preload() {
  // img = loadImage('mole.png');
  //imgbg = loadImage('gameover.png');
   //imgmouse = loadImage('whack.png');
 img = loadImage('https://super-delicious.github.io/images/mole.png');
 imgbg =loadImage('https://super-delicious.github.io/images/gameover.png');
 img3 =loadImage('https://super-delicious.github.io/images/whack.png');
            }

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  } // end setup



function draw() {
  background(220);
  if(gameState =="L1"){
  levelOne();
  }
  if(gameState =="L2"){
  levelTwo();
  }
  if(gameState =="L3"){
  levelThree();
  }
  if(gameState =="L4"){
  levelFour();
  }
  if(gameState =="L5"){
  levelFive();
  }
  if(gameState =="L6"){
  levelSix();
  }
  if(gameState =="Le"){
  levelEnd();
  }


  text(("Score: " + score), width/2, 40);


} // end draw


function levelOne(){
   background(238,231,234);
  text("Level 1", width/2, height-20);
  sight();
  var distToImg= dist(imgX, imgY, mouseX, mouseY);
  if (distToImg <imgSize/2){
    imgX = random(width);
    imgY= random(height);
    score= score +1;
  }
  if(score>= 5){
    gameState ="L2";
  }

  image(img,imgX,imgY,imgSize,imgSize);

} // end level one ============================================


function levelTwo(){
   background(251,221,225);
  text("Level 2", width/2, height-20);
  sight();
  var distToImg= dist(imgX, imgY, mouseX, mouseY);
  if (distToImg <imgSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +2;
  }
  if(score>= 20){
     gameState ="L3";
  }


  image(img, imgX, imgY, imgSize, imgSize);
} // end level two =============================================

function levelThree(){
  background(248,177,185);
  text("Level 3", width/2, height-20);
  sight();
 var distToImg= dist(imgX, imgY, mouseX, mouseY);
  if (distToImg <imgSize/2){
    imgX = random(width);
    imgY= random(height);
    score= score +3;
    imgSize = imgSize - 2;
  }
  if(score>= 45){
    gameState ="L4";

  }

  image(img, imgX, imgY, imgSize, imgSize);
} // end level Three =============================================

function levelFour(){
  background(234,116,130);
   text("Level 4", width/2, height-20);
   sight();
  var distToImg= dist(imgX, imgY, mouseX, mouseY);
  if (distToImg <imgSize/2){
    imgX = random(width);
    imgY= random(height);
   score= score +4;
    imgSize = imgSize - 5;
  }
  if(score>= 70){
    gameState ="L5";

  }

     image(img, imgX, imgY, imgSize, imgSize);
} // end level Four =============================================


function levelFive(){
  background(226,58,77);
  text("Level 5", width/2, height-20);
  sight();
  var distToImg= dist(imgX, imgY, mouseX, mouseY);
  if (distToImg <imgSize/2){
    imgX = random(width);
    imgY= random(height);
    score= score +5;
    imgSize = imgSize + 1;
  }
  if(score>= 95){
    gameState ="L6";

  }

    image(img, imgX, imgY, imgSize, imgSize);
} // end level Five =============================================

function levelSix(){
  background(189,9,29);
  text("Level 6", width/2, height-20);
  sight();
  var distToImg= dist(imgX, imgY, mouseX, mouseY);
  if (distToImg <imgSize/2){
    imgX = random(width);
    imgY= random(height);
    score= score +6;
    imgSize = imgSize - 6;
  }
  if(score>= 130){
    gameState ="Le";

  }

   image(img, imgX, imgY, imgSize, imgSize);

} // end level Six =============================================

function levelEnd(){
  background(0,0,0);

  var distToImg= dist(imgX, imgY, mouseX, mouseY);
  if (distToImg <imgSize/2){
    imgX = random(width);
    imgY= random(height);
    score= score +6;
    imgSize = imgSize - 5;
  }
  if(score>= 130){

   // gameState ="Le";

  }

    image(imgbg, 0, 0, 600, 600 );
} // end level End =============================================


function sight(){
 image(img3, mouseX-10, mouseY-10);
}
