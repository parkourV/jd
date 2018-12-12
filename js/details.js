$(function(){

    // small中移动事件
    $("#small").mousemove(function(e){
        // move big显示
        $("#move,#big").show();

        // 获取移动的值
        var x=e.pageX-$(this).offset().left-$("#move").width()/2;
        var y=e.pageY-$(this).offset().top-$("#move").height()/2;
        // 判断边距
        if(x<=0){
            x=0
        }else if(x>=$(this).width()-$("#move").width()){
            x=$(this).width()-$("#move").width()
        }

        if(y<=0){
            y=0
        }else if(y>=$(this).height()-$("#move").height()){
            y=$(this).height()-$("#move").height()
        }
        // 赋值
        $("#move").css({left:x+'px',top:y+'px'});
        // big img 移动
        //大图与小图的比例
        var scale=$("#big>img").width()/$("#small>img").width();
        //console.log(scale);

        //大图的运动距离=小图移动*scale
         $("#big>img").css({left:-x*scale+'px',top:-y*scale+'px'})

        // 大图的容器 元素的滚动
        $("#big").scrollTop(y*scale);
        $("#big").scrollLeft(x*scale);


    }).mouseout(function(){
        // move big隐藏
        $("#move,#big").hide();
    })

    // 点击更换图片
    $('#dian li img').click(function(){
        // small big src=当前
        // console.log($(this).attr("src"));
        $('#small>img,#big>img').attr("src",$(this).attr("src"));
    })
    // 原生js
    var dian=document.getElementById('dian');
    var left=document.getElementById('left');
    var right=document.getElementById('right');
    var ul=document.getElementById('ull');


    function off(aa){
        // 获取当前ul的位置 +指定的移动距离
        var l=parseInt(ul.style.left)+aa;

        //console.log(l);

        //重新赋值
        ul.style.left=l+'px';
        //判断走 到-300
        if(l==-350){
            ul.style.left='0px';
        }

        // 0 的时候 最后
        if (l>0) {
            ul.style.left='-350px';
        }

    }

    // off(-300);

    // 左边点击
    left.onclick=function(){
        off(-58);
    }
    // 右击
    right.onclick=function(){
        off(58)
    };



    //小选项卡
    $("#main1").click(function(){
        //console.log("#main1");
        $(".lg-tab .tab-con1").show();
        $(".lg-tab .tab-con2").hide();
        $("#main1").addClass("current").siblings("li").removeClass("current");
    });
    $("#main2").click(function(){
        $(".lg-tab .tab-con1").hide();
        $(".lg-tab .tab-con2").show();
        $("#main2").addClass("current").siblings("li").removeClass("current");
    })

})


