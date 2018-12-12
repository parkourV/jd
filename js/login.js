//  选项卡效果
$(function() {
    $(".content-tab-l").click(function () {
        $(".login-box").hide();
        $(".login-box2").show();
        $(this).find("a").css({
            "color": "#e4393c",
            "font-weight": "700"
        });
        $(".content-tab-r a").css({
            "color": "#666",
            "font-weight": "400"
        });
    });
    $(".content-tab-r").click(function () {
        $(".login-box").show();
        $(".login-box2").hide();
        $(this).find("a").css({
            "color": "#e4393c",
            "font-weight": "700"
        });
        $(".content-tab-l a").css({
            "color": "#666",
            "font-weight": "400"
        });  //用户验证

    });
//二维码动画
    $(".erwei").mouseover(function () {
        $(".erwei").stop().animate({left: '-70px'}, 300)
        $(".phone img").stop().fadeIn(600);
    }).mouseout(function () {
        $(".erwei").stop().animate({left: '0px'}, 300)
        $(".phone img").stop().hide();
    })
})
