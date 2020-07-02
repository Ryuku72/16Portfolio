
let looper = null;
let slideIndex = 0
showSlides()

function showSlides() {
  const slides = document.getElementsByClassName("slides")
  const dots = document.getElementsByClassName("dot");

  looper = setInterval(function(){
  for (let i=0; i < slides.length; i++) {
    let frame = slides[i].id
    frameID = document.getElementById(frame)
    frameID.classList.remove("imageShow");
    frameID.classList.add("imageHide");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activate", "");
  }

  slides[slideIndex-1].classList.remove("imageHide");
  slides[slideIndex-1].classList.add("imageShow");
  dots[slideIndex-1].className += " activate";
 }, 3000)
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

$(document).ready(function (){

  $('.prjBox').hover(function(){
      window.clearInterval(looper);
  }, function(){
    showSlides()
  })

  $('#rightBtn').hover(function(){
    window.clearInterval(looper);
}, function(){
  showSlides()
})

$('#leftBtn').hover(function(){
  window.clearInterval(looper);
}, function(){
showSlides()
})

  
  $(".project").click(function () {
    $(".preNavHeader").toggleClass("hide");
    $("#section-container").toggleClass("hide");
    $("#overlay").toggleClass("active");
  });
  
  $(".closeBtn").click(function(e){
    e.stopPropagation()
    let weekID = $("#"+$(this).data("week")) 
    weekID.children(".closeBtn").toggleClass("hide")
    weekID.children(".wkTtl").toggleClass("hide")
    weekID.children(".prjInfo").toggleClass("hide")
  })

  $(".about").click(function () {
    $("#aboutPage").toggleClass("active");
    $("#overlay2").toggleClass("active");
    $("#popBtn").toggleClass("hide");
  });

  $("#popBtn").click(function () {
    $("#aboutPage").toggleClass("active");
    $("#overlay2").toggleClass("active");
    $("#popBtn").toggleClass("hide");
  });

  $(".prjBox").on("click", function () {
    $(".wkTtl").removeClass("hide");
    $(".prjInfo").addClass("hide");
    $(".closeBtn").addClass("hide");
    $(this).children(".wkTtl").toggleClass("hide");
    $(this).children(".prjInfo").toggleClass("hide");
    $(this).children(".closeBtn").removeClass("hide");
  });

  $("#rightBtn").on("click", function () {

    let rightID = $(".imageShow");
    let slideId = rightID.data("slide");
    let nextId = slideId + 1;

    if (slideId === 5) {
      $("#slide5").toggleClass("imageShow");
      $("#slide5").toggleClass("imageHide");
      $("#slide1").toggleClass("imageHide");
      $("#slide1").toggleClass("imageShow");
      $("#dot1").addClass("activate");
      $("#dot5").removeClass("activate");
    } else {
      $("#slide" + slideId).removeClass("imageShow");
      $("#slide" + slideId).addClass("imageHide");
      $("#slide" + nextId).removeClass("imageHide");
      $("#slide" + nextId).addClass("imageShow");
      $("#dot" + slideId).removeClass("activate");
      $("#dot" + nextId).addClass("activate");
    }
  });

  $("#leftBtn").on("click", function () {
    let leftID = $(".imageShow");
    let slideId = leftID.data("slide");
    let nextId = slideId - 1;
    if (slideId === 1) {
      $("#slide1").toggleClass("imageShow");
      $("#slide1").toggleClass("imageHide");
      $("#slide5").toggleClass("imageHide");
      $("#slide5").toggleClass("imageShow");
      $("#dot1").removeClass("activate");
      $("#dot5").addClass("activate");
    } else {
      $("#slide" + slideId).removeClass("imageShow");
      $("#slide" + slideId).addClass("imageHide");
      $("#slide" + nextId).removeClass("imageHide");
      $("#slide" + nextId).addClass("imageShow");
      $("#dot" + nextId).addClass("activate");
      $("#dot" + slideId).removeClass("activate");
    }
  });

});



