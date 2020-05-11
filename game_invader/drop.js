
function Drop(x,y) {
   this.x = x;
   this.y = y;
   this.r = 8;
   
   this. show = function (){
     noStroke();
     fill(25,0,200);
     ellipse(this.x, this.y, 16, 16);
   }

   this.evaporate = function() {
       
   }

   this.hits = function(flower) {
       var d = dist(this.x, this.y, flower.x, flower.y);
       if (d < this.r * flower.r) {
          return true; 
       } else {
           return false;
       }
   }
   this.move = function() {
     this.y = this.y -5;
   }
 }