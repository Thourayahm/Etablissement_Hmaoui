$(document).ready(function(){
    $(".li a").on({mouseenter: function(){
        $(this).css("background-color", "silver");
      }, 
      mouseleave: function(){
        $(this).css("background-color", "white");
      }, 
      click: function(){
        $(this).css("background-color", "rgb(75,145,15)");
      } 
    });
    $("#img1").hover(function(){
        $("#img1").fadeOut("slow");
        $("#img2").fadeIn();

    });
    $('.car').fadeIn('slow');
    $('.car').animate({width:'800px'},2000);
    $('.car').animate({top:'10px'},4000);

    
});