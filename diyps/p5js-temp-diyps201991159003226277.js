var img;
var initials ='yc'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken
let angle = 0;



function preload() {
// preload() runs once, it may make you wait
//img = loadImage('smile.png');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
//img1 = loadImage('https://super-delicious.github.io/images/11.png');
img1 = loadImage('data/11.png'); 

}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool- black line
   
   
    stroke(0);
 var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(weight);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
    
  } else if (toolChoice == '2') { // second tool- shadow brush

    stroke(0,8);
   var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(weight);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '3') { // third tool- face

    stroke(0, 0);
    fill(random(250), random(230), random(210),random(255));
    ellipse(mouseX, mouseY,160,160);
    
  } else if (toolChoice == '4') { // tool- eye
    
    
    fill(random(100), random(0), random(40),random(43));
    ellipse(mouseX, mouseY, 30, 35);
   
  } else if (key == '5') { // tool- smile mouth
    
    fill(random(250), random(230), random(210),random(235));
    arc(mouseX, mouseY, 80, 80, 0, PI);
    
  } else if (toolChoice == '6') { //pupil
 
    stroke(0, 0);
    fill(177, 206, 223,random(235));
    ellipse(mouseX, mouseY,10,13);
     
    
  } else if (toolChoice == '7') { // tool - face transparency
    
    stroke(0, 0);
    fill(random(250), random(200), random(210),random(20));
    ellipse(mouseX, mouseY,160,160);

    
  } else if (toolChoice == '8') { // tool- unsmile mouth

   fill(random(250), random(230), random(210),random(235));
    arc(mouseX, mouseY, 80, 80, PI,0);

  } else if (toolChoice == '9') { // tool- flower
  
    stroke(0,0);
    angle += 10;
    let val = cos(radians(angle)) * 32.0;
    for (let a = 0; a < 360; a += 75) {
      let xoff = cos(radians(a)) * val;
      let yoff = sin(radians(a)) * val;
      fill(random(205), random(55), random(255), random(55));
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
    }
   
  }else if (toolChoice == '0') { //suqare
    
    stroke(0, 0);
    fill(random(255), random(150), random(255), random(255));
    rect(mouseX, mouseY, 20,20);

 
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img1, mouseX, mouseY);
  
} else if (toolChoice == 'e' || toolChoice == 'E') { // Erase
    stroke(0, 0);
    fill(250);
    circle(mouseX, mouseY, 35);
    
  }else if (toolChoice == 'b' || toolChoice == 'B') { // blue

  stroke(19,97,21);
  line(mouseX, mouseY, pmouseX, pmouseY);
 } 
}
 
 
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  ellipse(x, y, speed, speed);
}
  
}
