$(document).ready(function () {
    
//  function showSlides(){
//         let slideIndex = 0;
//         let i;
//         const slides = $(".slides")
//         for (i=0; i < slides.length; i++){
//             slides[i].style.display = "none";
//         }
//         slideIndex++;
//         if (slideIndex > slides.length){
//             slideIndex = 1
//         }
//             slides[slideIndex-1].style.display = "grid";
//             setTimeout(showSlides, 3000);
//         }

//         showSlides()

    $(".prjBox").on("click", function(){
        $(this).children(".wkTtl").toggleClass("hide");
        $(this).children(".prjInfo").toggleClass("hide");
    })

    $("#rightBtn").on("click", function(){
        let rightID = $(".imageShow")
        let slideId = rightID.data("slide")
        console.log(slideId)
        console.log(slideId+1)
        let nextId = slideId+1
        if (slideId === 5) {
            $("#slide5").toggleClass("imageShow");
            $("#slide5").toggleClass("imageHide");
            $("#slide1").toggleClass("imageHide");
            $("#slide1").toggleClass("imageShow")
        }else{
            $("#slide"+ slideId).removeClass("imageShow");
            $("#slide"+ slideId).addClass("imageHide");
            $("#slide"+ nextId).removeClass("imageHide");
            $("#slide"+ nextId).addClass("imageShow");
        }
    })

    $("#leftBtn").on("click", function(){
        let leftID = $(".imageShow")
        let slideId = leftID.data("slide")
        console.log(slideId)
        console.log(slideId-1)
        let nextId = slideId-1
        if (slideId === 1) {
            $("#slide1").toggleClass("imageShow");
            $("#slide1").toggleClass("imageHide");
            $("#slide5").toggleClass("imageHide");
            $("#slide5").toggleClass("imageShow")
        }else{
            $("#slide"+ slideId).removeClass("imageShow");
            $("#slide"+ slideId).addClass("imageHide");
            $("#slide"+ nextId).removeClass("imageHide");
            $("#slide"+ nextId).addClass("imageShow");
        }
        })
    


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


    // $("#project").click(function(){
    //     $("#section-container").toggleClass("hide");
    //     $("footer").toggleClass("hide");
    // })

    // $(window).on("scroll touchmove", function(){
    //     $("#navbar").toggleClass("tiny", "h-screen", $(document).scrollTop() > 0)
    // })

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
