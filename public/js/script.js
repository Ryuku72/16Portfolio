$(document).ready(function(){
var scrollTop = 0;

$(window).scroll(function(){
  scrollTop=$(window).scrollTop()
  $('.counter').html(scrollTop);

  if (scrollTop >= 100){
    $("#navbar").addClass('scrollNav')
    $(this).clearQuene().stop() // stops animation from restarting
  }else if (scrollTop < 100){
    $(this).stop().clearQueue();
    $("#navbar").removeClass('scrollNav')
  }
})

$("#project").click(function(){
  $("#section").removeClass("hide");
  $('html,body').animate({
    scrollTop: $("#week1").offset().top},
    'slow');
})

$("#about").click(function(){
  $("#prjSection").addClass("hide");
})

$("#contact").click(function(){
  $(".popContainer").addClass("active");
  $("#overlay").addClass("active");
})
$("#popupClose").click(function(){
  $(".popContainer").removeClass("active");
  $("#overlay").removeClass("active");
})

$(".submitButton").click(function(){
  if ($(".popInput").val() == "") {
    alert ("Please fill in all the boxes.\nTo exit click the 'X' button")
  } else {
  $(".popContainer").removeClass("active");
  $("#overlay").removeClass("active");
  }
})


});
