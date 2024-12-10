"#use strict";
$(function(){
    $(window).scroll(function(){
        var gotop = $(window).scrollTop();
        if(gotop >= 1100){
            $("#goup").show(500);
        }else{
            $("#goup").hide(500);
        }
    });
});
