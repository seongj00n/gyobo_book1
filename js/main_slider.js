function slide11(){
    $('.main_slider_right').stop().animate({marginLeft:-800}, function(){
       $('.main_slider_right li:first').appendTo('.main_slider_right');
       $('.main_slider_right').css({marginLeft:0});
    });
   }

   setInterval(slide11,5000);