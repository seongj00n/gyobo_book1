function prev2(){

    $('.icon_slide_img:last').prependTo('#icon_slide');
 
    $('#icon_slide').css('margin-top',0);   
 
    $('#icon_slide').stop().animate({margintop:0},1000);
 
   }
 
 
 
   function next2(){
 
    $('#icon_slide').stop().animate({marginbottom:0}, function(){
 
       $('.icon_slide_img:first').appendTo('#icon_slide');
 
       $('#icon_slide').css({marginbottom:0});
 
    });
 
   }
 
   $('.prev2').click(function(){
 
     prev2();
 
  });
 
 
 
  $('.next2').click(function(){
 
    next2("fast");
 
  });