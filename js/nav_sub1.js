 $(function(){

           $('.nav_menu > li').mouseover(function(){

            $(this).children('#sub_box').stop().fadeIn("fast");

           }).mouseout(function(){

            $('#sub_box').stop().fadeOut("fast");

           });

        });