$(document).ready(function() {
    $(".nav-toggler").click(function() {
        $(".full-nav").addClass("open");
    });
    $(".nav-close").click(function() {
        $(".full-nav").removeClass("open");
    });
    $(window).scroll(function(){
        var sc = $(window).scrollTop();
        if(sc > 100) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });

    //click to scroll top
    $('.move-up span').click(function(){
        $("html,body").animate({
            scrollTop:0
        }, 1000);
    });

    //AOS Instance
    AOS.init();
});