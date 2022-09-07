function prev1(){

   $('.sch_sub:last').prependTo('#sch_menu');

   $('#sch_menu').css('margin-top',0);   

   $('#sch_menu').stop().animate({margintop:0},800);

  }



  function next1(){

   $('#sch_menu').stop().animate({marginbottom:20}, function(){

      $('.sch_sub:first').appendTo('#sch_menu');

      $('#sch_menu').css({marginbottom:0});

   });

  }

  $('.prev1').click(function(){

    prev1("fast");

 });



 $('.next1').click(function(){

   next1("fast");

 });