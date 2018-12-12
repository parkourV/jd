$(function () {
    setTimeout(function() {
        $(".bar").show();
        $(".bar").css({
            "width":$(document).width(),
            "height":$(document).height()
        })
        $('#show').show();
    },1000)
    // 点击close和同意并继续 隐藏
    $("#close").click(function(){
        $(".bar").fadeOut();
        $("#show").fadeOut();
    })
    $(".show-button2").click(function(){
        $(".bar").fadeOut();
        $("#show").fadeOut();
    })
    // 拖拽
    $("#show").mousedown(function(e){
        $(this).css("cursor","move")
        var offset=$(this).offset();
        var x=e.pageX-offset.left;
        var y=e.pageY-offset.top;
        $(document).mousemove(function(e){
            var ll=e.pageX-x;
            var tt=e.pageY-y;
            //console.log(ll,tt);
            //判断边界
            if(ll<=0){
                ll=0
            }else if(ll>=$(document).width()-$("#show").width()){
                ll=$(document).width()-$("#show").width()
            }
            if (tt<=0) {
                tt=0
            }else if(tt>=$(document).height()-$("#show").height()){
                tt=$(document).height()-$("#show").height()
            }
            $("#show").css({left:ll+'px',top:tt+'px'});
        })
    })
    $(document).mouseup(function(){
        $(this).off("mousemove");
        $("#show").css("cursor","")
    })

    //按钮验证
    $(".item-btn").click(function(){
        $(".item-btn img").show();
        $("#close2").show();
        });
    $("#close2").click(function(){
        //console.log(this);
        $(".item-btn .itembtn").hide();
        //$(this).hide();
    });

})