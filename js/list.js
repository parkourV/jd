$(function(){
    //轮播图banner
    var m = 0;
    function sh(){
        $('.img li').eq(m).fadeIn(500).siblings('li').hide();
        $('#slider-kk li').eq(m).addClass('slider-active').siblings('li').removeClass('slider-active');
    }
    function piao(){
        s=setInterval(function(){
            m++;
            if(m>6){
                m=0;
            }
            sh(m);
        },1000)
    }
    piao();
    $('#box2').mouseover(function(){
        clearInterval(s);
        $('.left,.right').show();
    }).mouseout(function(){
        piao();
        $('.left,.right').hide();
    })
    $('#slider-kk li').mouseover(function(){
        m=$(this).index();
        sh(m);
    })
    $('.right').click(function(){
        m++;
        if(m>6){
            m=0;
        }
        sh(m);
    })
    $('.left').click(function(){
        m--;
        if(m<0){
            m=6;
        }
        sh(m);
    });

    //内容1楼的选项卡
    $(".tab-nav .nav-item").eq(0).mouseover(function(){
        $(".tab-nav .nav-item").eq(0).addClass("nav-active").siblings("li").removeClass("nav-active");
        $(".nav-item b").eq(0).show();
        $(".nav-item b").eq(1).hide();
        $("#tab1").show();
        $("#tab2").hide();
    });
    $(".tab-nav .nav-item").eq(1).mouseover(function(){
        $(".tab-nav .nav-item").eq(1).addClass("nav-active").siblings("li").removeClass("nav-active");
        $(".nav-item b").eq(0).hide();
        $(".nav-item b").eq(1).show();
        $("#tab1").hide();
        $("#tab2").show();
    });

    //楼层
    $('ul li').click(function(){
        // 获取当前li的下标
        var index=$(this).index();
        //console.log(index);

        // 找到对应的.content0距离顶部的位置
        //console.log($('.content0').eq(index).offset());

        // 将获取的值 给滚动条 滚动到指定的 位置
        var top=$('.content0').eq(index).offset().top;
         //$('html').scrollTop(top);
        // 加动画
        $('html').animate({scrollTop:top},500);
    })

    //根据当前滚动位置 判断处于几楼

    // 把所有楼层距离顶部的位置放入数组
    var heights=[];
    // 遍历添加数组 向数组
    $('.content0').each(function () {
        heights.push($(this).offset().top)
    })
    //console.log(heights);


    // 滚动监听事件
    $(window).scroll(function () {
        // 获取当前滚动的距离
        var top=$(window).scrollTop();
        //console.log(top);


        // 遍历判断 在几楼
        for (var i = 0; i < heights.length; i++) {
            // top>=100 <720 一层
            if (top>=heights[i] && top<heights[i+1]) {
                //找到对用的楼层 需要当前下标
                var index=i;
                // 赋值给1F 背景
                $('ul li').eq(index).css("background","#e3331a").css("color","white").siblings().css("background","white").css("color","black")
            }
            //7楼没有小于8楼
            else if (top>=heights[heights.length-1]) {
                //7楼自己的下标
                index=heights.length-1;
                $('ul li').eq(index).css("background","#e3331a").css("color","white").siblings().css("background","white").css("color","black")
            }
        }
    })
})