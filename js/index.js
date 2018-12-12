//头部广告关闭
$(function(){
    $("#closehd").click(function(){
        $("header").fadeOut(500);
    })

$("#tabt1").click(function(){
    $(".cright-tabitem1").show();
    $(".cright-tabitem2").hide();
    $(".newtab-active").css("transform","translateX(0px)")
});
$("#tabt2").click(function(){
    $(".cright-tabitem1").hide();
    $(".cright-tabitem2").show();
    $(".newtab-active").css("transform","translateX(54px)")
})
//北京
    $(".speednav .city a").mouseover(function(){
        //console.log(".city a")
        $(".city2").show();
    }).mouseout(function(){
        $(".city2").hide();
    });
//我的京东
    $(".fr .myjd a").mouseover(function(){
        $(".myjd2").show();
    }).mouseout(function(){
        $(".myjd2").hide();
    });
//企业采购
    $(".fr>.caigou>a").mouseover(function(){
        $(".caigou2").show();
    }).mouseout(function(){
        $(".caigou2").hide();
    });
//客户服务
    $(".fr>.kehu>a").mouseover(function(){
        $(".kehu2").show();
    }).mouseout(function(){
        $(".kehu2").hide();
    });
//网站导航
$(".fr>.wzdaohan>a").mouseover(function(){
    $(".wzdaohan2").show();
}).mouseout(function(){
    $(".wzdaohan2").hide();
});

//服务
    $("#entry2-close").click(function(){
        $(".service-entry").slideDown();
        $(".service-entry2").hide();
    });
    $("#huafei").mouseover(function(){
        $(".service-entry").slideUp();
        $(".service-entry2").fadeIn();
    })

    $("tabuser").mouseover(function(){
        $("tabuser").animate({
            width:"100px",
            background:"c81623"
        },200)
    });


    //秒杀小切图
    $(".control-next").click(function(){
        $(".list-wrapper").animate({
            left : "0px"
        },500)
    });
    $(".control-prev").click(function(){
        $(".list-wrapper").animate({
            left : "-800px"
        },500)
    });

//排行榜

    $(".slider-yuandian i").eq(0).mouseover(function(){
        $(".tab-body").stop(0,1).animate({
            left: "0px"
    });
        $(".slider-yuandian i").eq(0).addClass("slider-active").siblings("i").removeClass("slider-active")
});
     $(".content1-left>.slider-yuandian>i").eq(1).mouseover(function(){
     $(".tab-body").stop(0,1).animate({
     left: "-380px"
     });
     $(".content1-left>.slider-yuandian>i").eq(1).addClass("slider-active").siblings("i").removeClass("slider-active");
     });

    $("#sjtx").mouseover(function(){
        $(".px-tab .tb1").show();
        $(".px-tab .tb2").hide();
        $(".tabhead-item a").eq(0).addClass("item-active").parent().next().find("a").removeClass("item-active");
    });
    $("#ylct").mouseover(function(){
        $(".px-tab .tb1").hide();
        $(".px-tab .tb2").show();
        $(".tabhead-item a").eq(1).addClass("item-active").parent().prev().find("a").removeClass("item-active");
    });

//轮播图banner
    var m = 0;
    function sh(){
        $('.img li').eq(m).fadeIn(500).siblings('li').hide();
        $('#slider-yuandian2 i').eq(m).addClass('slider-active2').siblings('i').removeClass('slider-active2');
    }
    function piao(){
        s=setInterval(function(){
            m++;
            if(m>7){
                m=0;
            }
            sh(m);
        },1000)
    }
    piao();
    $('#box').mouseover(function(){
        clearInterval(s);
        $('.left,.right').show();
    }).mouseout(function(){
        piao();
        $('.left,.right').hide();
    })
    $('#slider-yuandian2 i').mouseover(function(){
        m=$(this).index();
        sh(m);
    })
    $('.right').click(function(){
        m++;
        if(m>7){
            m=0;
        }
        sh(m);
    })
    $('.left').click(function(){
        m--;
        if(m<0){
            m=7;
        }
        sh(m);
    });
//秒杀倒计时特效
    var intApp = parseInt(28000);//倒计时总秒数
    function timeDay(intApp){
        window.setInterval(function(){
            var day=0,
                hour=0,
                minute=0,
                second=0;
            if(intApp > 0){
                day = Math.floor(intApp / (60 * 60 * 24));
                hour = Math.floor(intApp / (60 * 60)) - (day * 24);
                minute = Math.floor(intApp / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(intApp) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (hour <= 9) hour = "0" + hour;
            if (minute <= 9) minute = "0" + minute;
            if (second <= 9) second = "0" + second;
            $(".djshour .djs-txt").html('<s id="h"></s>'+hour);
            $(".djsminute .djs-txt").html("<s></s>"+minute);
            $(".djssecond .djs-txt").html("<s></s>"+second);
            intApp--;
        }, 1000);
    }
    $(function(){
        timeDay(intApp);
    });
})