function slide11(){
    $('#main_bookbox_slidebox').stop().animate({marginLeft:-1000}, function(){
       $('.main_bookbox_slidebox1 li:first').appendTo('#main_bookbox_slidebox');
       $('#main_bookbox_slidebox').css({marginLeft:0});
    });
   }

   setInterval(slide11,5000);