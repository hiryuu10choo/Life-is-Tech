$(function(){
    
    //hero画像
    $(".HE1").show();
    $(".hero").click(function(){
        var heNUM = $(this).attr("he");
        var heID = ".HE" + heNUM;
        
        $(".HERO").hide();
        $(heID).fadeIn(800);
    });
    
    
    //date
    var now = new Date();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    d=23-d;
    if(m == 7){d=d+31;};//8.23まで有効
    $("span.date").replaceWith("<span class=date>"+d+"</span>")
    
    
    //メンバー紹介
    $(".me").hover(function(){
        $(".me").hide();
        $(this).show();
        $(".fu").fadeOut(400);
        $(".mozaiku").animate({opacity: 1.0}, 400, "swing");
    },function(){
        $(".fu").fadeIn(400);
        $(".mozaiku").animate({opacity: 0.0}, 400, "swing", function(){$(".me").show();});
    });
    
    $(".me").click(function(){
        var meNUM = $(this).attr("num");
        var perID = ".per" + meNUM;
        $(".per").hide();
        $(perID).fadeIn(600);
    });
    $(".per").click(function(){
        $(this).fadeOut(600);
    })
//    
//    $(".fukidashi").click(function(){
//        var fuNUM = $(this).attr("fu");
//        var fuID = ".me" + fuNUM;
//        
//        $(".member").hide();
//        $(fuID).fadeIn(400);
//    });
    
    
    //スクロール
    $("a[href^=#]").click(function(){
        var href = $(this).attr("href");
        var moveTop = $(href).offset().top;
        
        $("body,hrml").animate({scrollTop: moveTop}, 500, "swing");
        return false;
    });
        
});