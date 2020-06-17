$(document).ready(function () {

  $("#project").click(function () {
    $("#buttonSeq").toggleClass("preNavHeader");
    $("#buttonSeq").toggleClass("navHeader");
    $("#section-container").toggleClass("hide");
    $("footer").toggleClass("hide");
    $("#overlay").toggleClass("active");
  });
  
  $(".closeBtn").click(function(e){
    event.stopPropagation()
    let weekID = $("#"+$(this).data("week")) 
    weekID.children(".closeBtn").toggleClass("hide")
    weekID.children(".wkTtl").toggleClass("hide")
    weekID.children(".prjInfo").toggleClass("hide")
  })

  $("#about").click(function () {
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
    } else {
      $("#slide" + slideId).removeClass("imageShow");
      $("#slide" + slideId).addClass("imageHide");
      $("#slide" + nextId).removeClass("imageHide");
      $("#slide" + nextId).addClass("imageShow");
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
    } else {
      $("#slide" + slideId).removeClass("imageShow");
      $("#slide" + slideId).addClass("imageHide");
      $("#slide" + nextId).removeClass("imageHide");
      $("#slide" + nextId).addClass("imageShow");
    }
  });

  $(".contactBtn").on("click", function(){
    window.location.replace("/contact");
  })

  
});


