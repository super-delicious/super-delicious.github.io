//var ballx = 300;
//var bally = 300;
//var ballSize = 40;
 var imgX = 300;
 var imgY = 300;
 var imgSize = 30;
var score =0;
var gameState ="L1";

 function preload() {
  // img = loadImage('mole.png'); 
  //imgbg = loadImage('gameover.png'); 
 img = loadImage('https://super-delicious.github.io/images/mole.png');
 imgbg =loadImage('https://super-delicious.github.io/images/gameover.png');
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
  var distToImg= dist(imgX, imgY, mouseX, mouseY);
  if (distToImg <imgSize/2){
    imgX = random(width);
    imgY= random(height);
    score= score +1;
  }
  if(score>= 5){
    gameState ="L2";
  }
    
 line(imgX, imgY, mouseX, mouseY);
  img(img, imgX, imgY, imgSize, imgSize);
 // ellipse(ballx, bally, ballSize, ballSize);
} // end level one ============================================


function levelTwo(){
   background(251,221,225);
  text("Level 2", width/2, height-20);
  var distToImg= dist(imgX, imgY, mouseX, mouseY);
  if (distToImg <imgSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +2;
  }
  if(score>= 15){
     gameState ="L3";
  }
    
  
  img(img, imgX, imgY, imgSize, imgSize);
} // end level two =============================================

function levelThree(){
  background(248,177,185);
  text("Level 3", width/2, height-20);
 var distToImg= dist(imgX, imgY, mouseX, mouseY);
  if (distToImg <imgSize/2){
    imgX = random(width);
    imgY= random(height);
    score= score +3;
  }
  if(score>= 30){
    gameState ="L4";
   
  }
 
  img(img, imgX, imgY, imgSize, imgSize);
} // end level Three =============================================

function levelFour(){
  background(234,116,130);
   text("Level 4", width/2, height-20);
  var distToImg= dist(imgX, imgY, mouseX, mouseY);
  if (distToImg <imgSize/2){
    imgX = random(width);
    imgY= random(height);
   score= score +4;
    imgSize = imgSize - 4;
  }
  if(score>= 50){
    gameState ="L5";
   
  }
    
     img(img, imgX, imgY, imgSize, imgSize);
} // end level Four =============================================


function levelFive(){
  background(226,58,77);
  text("Level 5", width/2, height-20);
  var distToImg= dist(imgX, imgY, mouseX, mouseY);
  if (distToImg <imgSize/2){
    imgX = random(width);
    imgY= random(height);
    score= score +5;
    ballSize = ballSize + 1;
  }
  if(score>= 75){
    gameState ="L6";
   
  }
    
    img(img, imgX, imgY, imgSize, imgSize);
} // end level Five =============================================

function levelSix(){
  background(189,9,29);
  text("Level 6", width/2, height-20);
  var distToImg= dist(imgX, imgY, mouseX, mouseY);
  if (distToImg <imgSize/2){
    imgX = random(width);
    imgY= random(height);
    score= score +6;
    ballSize = ballSize - 5;
  }
  if(score>= 105){
    gameState ="Le";
   
  }
    
   img(img, imgX, imgY, imgSize, imgSize);
    
} // end level Six =============================================

function levelEnd(){
  background(0,0,0);
  text("Game Over", width/2, height-20);
  var distToImg= dist(imgX, imgY, mouseX, mouseY);
  if (distToImg <imgSize/2){
    imgX = random(width);
    imgY= random(height);
    score= score +6;
    imgSize = imgSize - 5;
  }
  if(score= 105){
    
   // gameState ="L";
   
  }
    
   //ellipse(ballx, bally, ballSize, ballSize);
    
   image(imgbg, imgX, imgY, 100, 100);
} // end level Six =============================================
