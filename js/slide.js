$(function () {

    // slider 배경색 및 이미지 변경
    var slider_bgc = ["#e4f1d3", "rgb(238, 206, 247)", "rgb(248, 244, 216)", "#daecf0", "rgb(168, 218, 255)", "#fbeaf0", "rgb(195, 197, 247)"]
    var slider_main_box = $("#slide_imgbox > div");

    $("#slide_subbox > ul > li").mouseover(function () {
        $("#slider").css("background-color", slider_bgc[$(this).index()]);
        slider_main_box.stop().hide();
        slider_main_box.eq($(this).index()).stop().show();

        $("#slide_subbox > ul > li").removeClass(".slide_tag > li");
        $(this).addClass(".slide_tag > li");
    }).mouseleave(function () {
        $("#slide_subbox > ul > li").removeClass(".slide_tag > li");
        $(this).addClass(".slide_tag > li");
    });



    // slider 루프
    var i = 0

    function slider_loop() {
        i++;

        if (i > $("#slide_imgbox > div:last").index()) {
            i = 0;
        };

        $("#slider").css("background-color", slider_bgc[i]);
        slider_main_box.stop().hide();
        slider_main_box.eq(i).stop().show();
        $("#slide_subbox > ul > li").removeClass(".slide_tag > li");
        $("#slide_subbox > ul > li").eq(i).addClass(".slide_tag > li");
    }

    setInterval(slider_loop, 3000)    
});