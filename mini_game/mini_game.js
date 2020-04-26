//var ballx = 300;
//var bally = 300;
//var ballSize = 40;
 var imgX = 300;
 var imgY = 300;
 var imgSize = 40;
var score =0;
var gameState ="L1";

 function preload() {
   img = loadImage('https://super-delicious.github.io/mole.png');
   imgbg =loadImage('https://super-delicious.github.io/gameover.png');
            }

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  
 function setCursorByPointer(pointer,cursorStyle) {
 var elem;
 if (document.getElementByPointer &&
    (elem=document.getElementByPointer(pointer)) ) {
  if (elem.style) elem.style.cursor=cursorStyle;
 }
 }
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
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>= 5){
    gameState ="L2";
  }
    
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end level one ============================================


function levelTwo(){
   background(251,221,225);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +2;
  }
  if(score>= 15){
     gameState ="L3";
  }
    
  
  ellipse(ballx, bally, ballSize, ballSize);
} // end level two =============================================

function levelThree(){
  background(248,177,185);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +3;
    
  }
  if(score>= 30){
    gameState ="L4";
   
  }
  ellipse(ballx, bally, ballSize, ballSize);
} // end level Three =============================================

function levelFour(){
  background(234,116,130);
  text("Level 4", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/3){
    ballx = random(width);
    bally= random(height);
    score= score +4;
    ballSize = ballSize - 4;
  }
  if(score>= 50){
    gameState ="L5";
   
  }
    
    ellipse(ballx, bally, ballSize, ballSize);
} // end level Four =============================================


function levelFive(){
  background(226,58,77);
  text("Level 5", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/4){
    ballx = random(width);
    bally= random(height);
    score= score +5;
    ballSize = ballSize + 1;
  }
  if(score>= 75){
    gameState ="L6";
   
  }
    
    ellipse(ballx, bally, ballSize, ballSize);
} // end level Five =============================================

function levelSix(){
  background(189,9,29);
  text("Level 6", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/5){
    ballx = random(width);
    bally= random(height);
    score= score +6;
    ballSize = ballSize - 5;
  }
  if(score>= 105){
    gameState ="Le";
   
  }
    
    ellipse(ballx, bally, ballSize, ballSize);
    
} // end level Six =============================================

function levelEnd(){
  background(0,0,0);
  text("Game Over", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/5){
    ballx = random(width);
    bally= random(height);
    score= score +6;
    ballSize = ballSize - 5;
  }
  if(score= 105){
    
   // gameState ="L";
   
  }
    
   
    
   image(imgbg, imgX, imgY, 100, 100);
} // end level Six =============================================
