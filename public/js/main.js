$(document).ready(function () {

    $("#contact").click(function () {
        $("#disclaimer").toggleClass("active");
        $("#overlay").toggleClass("active");
    })

    $("#project").click(function () {
       
            $("#navbar").toggleClass("hide");
            $("#buttonSeq").toggleClass("preNavHeader");
            $("#buttonSeq").toggleClass("navHeader");
            $("#house").toggleClass("hide");
            $("#smoke").toggleClass("hide");
            $("button").children().toggleClass("hide");
            $("#section-container").toggleClass("hide");
            $("footer").toggleClass("hide");
    })

})




// $("#about").click(function(){
//   $("#prjSection").addClass("hide");
// })

// $("#contact").click(function(){
//   $(".popContainer").addClass("active");
//   $("#overlay").addClass("active");
// })
// $("#popupClose").click(function(){
//   $(".popContainer").removeClass("active");
//   $("#overlay").removeClass("active");
// })

// $(".submitButton").click(function(){
//   if ($(".popInput").val() == "") {
//     alert ("Please fill in all the boxes.\nTo exit click the 'X' button")
//   } else {
//   $(".popContainer").removeClass("active");
//   $("#overlay").removeClass("active");
//   }
// })
