$("document").ready(function(){
    // Obtener el contexto del canvas
    var ctx = $("#confetti-canvas").getContext("2d");

    // Crear un objeto de imagen y cargar la imagen SVG
    var img = new Image();
    $(img).on("load", function(){ctx.drawImage(img, 0, 0)});
    img.src = "../assets/Juan_Logo.svg";
});