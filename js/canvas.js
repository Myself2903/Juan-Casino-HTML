
$("document").ready(function(){
    var ctx = $("#confetti-canvas")[0].getContext('2d'); //get canvas context

    var img = new Image();    // create image
    $(img).on("load", function(){
        ctx.drawImage(img, 0, 0)
        console.log("this charged");
    }); //charge image
    img.src = "./assets/Juan_Logo.svg";
});

// document.addEventListener("DOMContentLoaded", function(){
//     canvas = document.getElementById("confetti-canvas");
//     ctx = canvas.getContext("2d");

//     var img = new Image();
//     img.onload = function(){
//         ctx.drawImage(img, 0,0);
//     }
//     img.src = "./assets/Juan_Logo.svg";
// })
