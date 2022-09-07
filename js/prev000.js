function prev000(){

    $('#main_icon2:last').prependTo('#main_icon1');
 
    $('#main_icon1').css('margin-top',0);   
 
    $('#main_icon1').stop().animate({margintop:-100},800);
 
   }
 
 
 
   function next000(){
 
    $('#main_icon1').stop().animate({marginbottom:20}, function(){
 
       $('#main_icon2:first').appendTo('#main_icon1');
 
       $('#main_icon1').css({marginbottom:103});
 
    });
 
   }
 
   $('.prev000').click(function(){
 
     prev000("fast");
 
  });
 
 
 
  $('.next000').click(function(){
 
    next000("fast");
 
  });