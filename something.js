
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
});