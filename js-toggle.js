$(window).scroll(function() {
  if ($(document).scrollTop() > 10) {
    $('.nav').addClass('affix');
    console.log("OK");
  } else {
    $('.nav').removeClass('affix');
  }
});
$('.navTrigger').click(function() {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();

});
