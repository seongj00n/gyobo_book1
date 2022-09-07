$(function(){

    //multipage
     var i =0;
     $(".list>li").mouseenter(function(){
       i = ($(this).index())+1
       $("#main_today > article").hide()
       $("#main_today > article:nth-of-type"+"("+i+")").stop().fadeIn("fast")
     })

    });