$(function () {

    $("#main_feel_title > ul > li").mouseenter(function () {
        $("#main_feel_box").stop().hide();
        $("#main_feel_box").eq($(this).index()).stop().show();

        $("#main_feel_title > ul > li").removeClass();
        $(this).addClass("feel_hover");
    }).mouseleave(function () {
        $("#main_feel_title > ul > li").removeClass();
        $(this).addClass("feel_hover");
    });
});