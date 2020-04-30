    function setup() {
    createCanvas(600,600);
    noStroke();
    }
    
    function draw() {
    background(245, 207, 217);
     if(mouseIsPressed) {
      console.log(mouseX,mouseY);
     }
    
    
    //hair
    fill(45,27,11);
    rect(135, 75, 330, 400, 200, 200, 20, 20);
    
    //shirt  
    fill(217,230,232);
    rect(210, 454, 180, 200);
    ellipse(207, 554, 100, 200);
    ellipse(392, 554, 100, 200); 
    fill(189,216,220);
    ellipse(213, 548, 3, 100);
    ellipse(388, 548, 3, 100);
    
    
    //neck
    fill(249,213,185);
    rect(272, 388, 59, 98, 100, 100, 50, 40);
    
    //skinshadow
    fill(233,185,156);
    ellipse(301, 390, 75, 80);
    
    //ear//
    fill(249,213,185);
    ellipse(412, 289, 55, 60);
    ellipse(188, 289, 55, 60);
    fill(246,201,166);
    ellipse(420, 289, 25, 25);
    ellipse(180, 289, 25, 25);
    
    
    //face
    fill(249,213,185);
    ellipse(300, 260, 255, 320);
    
     //eyes
    fill(246,187,166);
    ellipse(250, 278, 58, 50);
    ellipse(355, 278, 58, 50);
    //eyeliner
    fill(31,17,8);
    ellipse(250, 282, 52, 52);
    ellipse(355, 282, 52, 52);
    fill(31,17,8);
    ellipse(250, 294, 48, 50);
    ellipse(355, 294, 48, 50);
    triangle(227,273,214, 262, 231,267);
    triangle(232,262,225, 257, 236,261);
    triangle(373,266,387,261,376,272);
    triangle(368,260,375, 255, 370,261);
    
    //pupil
    fill(251,236,226);
    ellipse(250, 290, 48, 55);
    ellipse(355, 290, 48, 55);
    fill(124,63,22);
    ellipse(355, 288, 44, 52);
    ellipse(250, 288, 44, 52);
    fill(59,36,16);
    ellipse(355, 286, 35, 45);
    ellipse(250, 286, 35, 45);
    fill(255,252,255);
    //eye highlight
    circle(346, 280, 11);
    circle(241, 280, 11);
    circle(368, 288, 7);
    circle(262, 288, 7);
    circle(255, 300, 3);
    circle(361, 300, 3);
    
    
    //bang
    fill(246,201,166);
    rect(175, 104, 250, 140, 180, 180, 5, 5);
    triangle(270, 260, 290, 140,260,240);
    triangle(270, 260, 295, 150,279,240);
    triangle(290, 270, 295, 160,279,240);
    triangle(290, 275, 299, 160,289,260);
    triangle(297, 285, 300, 160,289,260);
    triangle(297, 295, 300, 165,295,290);
    triangle(297, 295, 300, 165,295,290);
    triangle(314, 310, 310, 150,325,290);
    triangle(335, 340, 312, 150,325,290);
    fill(45,27,11);
    rect(175, 100, 250, 140, 180, 180, 5, 5);
    fill(249,213,185);
    triangle(270, 260, 290, 140,260,240);
    triangle(270, 260, 295, 150,279,240);
    triangle(290, 270, 295, 160,279,240);
    triangle(290, 275, 299, 160,289,260);
    triangle(297, 285, 300, 160,289,260);
    triangle(297, 295, 300, 165,295,290);
    triangle(297, 295, 300, 165,295,290);
    triangle(314, 310, 310, 150,325,290);
    triangle(335, 340, 312, 150,325,290);
    
    //eyebrows
    fill(38,35,30);
    arc(246, 245, 65, 10, PI, TWO_PI);
    arc(355, 245, 65, 10, PI, TWO_PI);
    
    //mouth
    fill(244,79,89);
    arc(302, 362, 55, 48, 0, PI, CHORD);
    
    //noise
    fill(246,187,166);
    ellipse(300, 330, 6, 9);
    fill(129,90,56);
    ellipse(302, 330, 2, 6);
    
    //cheek
    fill(246,187,166);
    ellipse(235, 340, 32, 20);
    ellipse(370, 340, 32, 20);
    fill(255,252,255);
    circle(229, 337, 5);
    circle(363, 341, 4);
    circle(239, 341, 4);
    circle(373, 337, 5);
    
    //earring-flower
    fill(244,243,213);
    translate(428, 313);
    for (let i = 0; i < 10; i ++) {
        ellipse(0, 2, 8, 15);
        rotate(PI/5);
      }
    
    }