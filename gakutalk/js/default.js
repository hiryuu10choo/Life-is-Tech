$(function(){
    
    //hero画像
    $(".HE1").show();
    $(".hero").click(function(){
        var heNUM = $(this).attr("he");
        var heID = ".HE" + heNUM;
        
        $(".HERO").hide();
        $(heID).fadeIn(800);
    });
    
    
    //メンバー紹介
    $(".fukidashi").click(function(){
        var fuNUM = $(this).attr("fu");
        var fuID = ".me" + fuNUM;
        
        $(".member").hide();
        $(fuID).fadeIn(400);
    });
    
    
    //スクロール
    $("a[href^=#]").click(function(){
        var href = $(this).attr("href");
        var moveTop = $(href).offset().top;
        
        $("body,hrml").animate({scrollTop: moveTop}, 500, "swing");
        return false;
    });
        
});