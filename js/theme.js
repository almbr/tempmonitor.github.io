var userFeed = new Instafeed({
        get: 'user',
        userId: '3735492482',
        accessToken: '3735492482.1677ed0.b99f1c11817d471d81fa60736de89096',
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

        
   $('#clock').countdown("2017/01/11", function(event) {
       var $this = $(this).html(event.strftime('<span>%D</span><span>days</span>'));
    });
    

});