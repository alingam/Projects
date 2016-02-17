$(function() {
    FastClick.attach(document.body);
});
var mobileWidth = 767, headerDesktopHeight = 113, headerBanner =  295;

/**
 * Deprecated
 * @param me
 */
function navScrollTop (me) {
    var scrollTop = $(me).scrollTop(),
         headerDesktopHeight = $(".navbar-fixed-top").outerHeight();
    navScroll =  (headerBanner - scrollTop);

    if(navScroll>headerDesktopHeight && $(window).width() > mobileWidth ) {

        $(".slide-menu").css({"top":navScroll+"px"});
    }
}



$(window).scroll(function() {
    //navScrollTop(this);
});

$(window).resize(function(){
    if($(".ev-modal-sidenav").length >0 )
        $(".ev-modal-sidenav").css({left : ($(".ev-modal-close").offset().left+1)+"px"});
});

$(document).ready(function(){
    $.each($('.navbar-nav li a'), function(index, value) {
        $(value).spriteOnHover({fps:30,autostart: false, loop: false, node : '.main-nav-icon'});
    });

});






