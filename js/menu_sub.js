$(function(){

    $('.menu_main > li ').mouseover(function(){

     $(this).children('.menu_sub').stop().fadeIn("fast");

    }).mouseout(function(){

     $('.menu_sub').stop().fadeOut("fast");

    });

 });