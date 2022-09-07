$(function(){

    $('#menu_imgbox').mouseover(function(){

     $(this).children('.img_sub').stop().fadeIn("fast");

    }).mouseout(function(){

     $('.img_sub').stop().fadeOut("fast");

    });

 });