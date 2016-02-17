$(document).on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
      var body = $("body");
      $(window).resize();
      if(body.hasClass("menu-open")){
          body.removeClass("menu-open");
      }  else {
          body.addClass("menu-open");
      }

});

$(".navbar-nav" ).on( "click", "li", function(e) {
    //$(".navbar-nav li").removeClass("active");
    //$(e.currentTarget).addClass("active");

    /*var menu = $(e.currentTarget).attr("data-menu"),
        submenu = (menu) ? "[data-sub-menu="+menu+"]" : false ;

    if(submenu){
        $(".slide-menu .sub-nav").removeClass("active-sub");
        $(submenu).addClass("active-sub");
    }*/
});
$(".sub-nav" ).on( "click", "li", function(e) {
    $('[data-toggle=collapse]').click();
    $(".navbar-fixed-top").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function(e) {
            $(window).resize();
    });
});





$(document).on("menusubchange",function(me,obj){
    //console.log(me);
    //alert(obj)
});






