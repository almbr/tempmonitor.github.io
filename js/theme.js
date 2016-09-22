var userFeed = new Instafeed({
        get: 'user',
        userId: '3735492482',
        accessToken: '3735492482.1677ed0.f038348d73e64d66bee9ccd0d266c555',
        limit: 6,
        target: 'instagram',
        resolution : 'standard_resolution'
});

$(document).ready(function(){
	
    //Scroll to top button
        //Check to see if the window is top if not then display button
        $(window).scroll(function(){
            if ($(this).scrollTop() > 10) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });
    
        //Click event to scroll to top
        $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
    
    //Show instagram content
        userFeed.run();
    
    //Scroll to main content
        $('.header-scroll').click(function() {
            $('html, body').animate({
                scrollTop: $('.main-content').offset().top
            }, 800);
        });    

    
    //Count down
    $('#clock').countdown('2017/01/01').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime(''
            + '<span>%w</span>'
            + '<span>%d</span>'
            + '<span>%H</span>'
            + '<span>%M</span>'
            + '<span>%S</span>'));
    });

    
   /* $('#clock').countdown("2020/10/10", function(event) {
      var totalHours = event.offset.totalDays * 24 + event.offset.hours;
      $(this).html(event.strftime('<span>' + totalHours + ' : %M : %S </span>'));
    });*/
    

});