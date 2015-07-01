$(function(){

    
    
    $(".fukidashi").click(function(){
        var fuNUM = $(this).attr("fu");
        var fuID = ".me" + fuNUM;
        
        $(".member").hide();
        $(fuID).fadeIn(400);
    });

        
});