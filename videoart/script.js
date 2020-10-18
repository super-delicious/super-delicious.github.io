

  
/*----------------------------------------
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
----------------------------------------*/

$(document).ready(function() {
  $("#navbar_icon").click(function() {
    if($(".navbar").css("left") < "0px") {
      $(".navbar").animate({left: "0px"}, 300);
      $(this).animate({left: "0px"}, 200);
      $('.content').css("margin-left", "200px");
      $("body").css("overflow-x","hidden");
            $(".navbar").css("overflow-y","hidden");
    } else {
      $(".navbar").animate({left: "-145px"}, 300);
      $(this).animate({left: "75px"}, 100);
      $('.content').css("margin-left", "50px");
      $("body").css("overflow-x","hidden");
    }
  });
})
