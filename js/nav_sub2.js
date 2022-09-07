$(function(){

    $('.nav_menu > li').mouseover(function(){

     $(this).children('#sub_box2').stop().fadeIn("fast");

    }).mouseout(function(){

     $('#sub_box2').stop().fadeOut("fast");

    });

 });