$(function () {

    // icon next버튼 슬라이드          
    $(".next000").click(function () {
        $("#main_icon1").stop().animate({
            marginBottom: -110
        }, 800, function () {
            $("#main_icon2:first").appendTo("#main_icon1");
            $("#main_icon1").css({
                marginBottom: 0
            });
        });
    });    

});