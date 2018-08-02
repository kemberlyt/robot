

$(document).ready(function(){


   

    
   function changeBackgroundColor(dot){
    $("body").css("background-color",dot);
    }

    $("#pink").click(function(){
    changeBackgroundColor("pink");
    });

    function changeImage(){
    $("img").attr("src","http://moziru.com/images/robot-clipart-female-1.png");
    }

    $("#blue").click(function(){
    changeImage();
    });

    function changeFontColor(color){
    $("h1").css("color",color);
    }

    $("#red").click(function(){
    changeFontColor("aqua");
    });

    function changeText(){
    $("h1").text("Kemberly's Robot");
    }

    $("#purple").click(function(){
    changeText();
    });

    function changeFont(font){
    $("h1").css("font-family",font);
    }

    $("#white").click(function(){
    changeFont("Righteous");
    });

    function resetEverything(font,color,bgcolor){
    $("h1").css("font-family",font)
    $("h1").text("Robot")
    $("img").attr("src","http://cliparting.com/wp-content/uploads/2016/09/Robot-clipart-free-clipart-images.png")
    $("body").css("background-color",bgcolor)
    $("h1").css("color", color);
    }

    $("#reset").click(function(){
        resetEverything("Press Start 2P", "white", "black");
    });
});