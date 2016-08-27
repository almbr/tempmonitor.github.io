var userFeed = new Instafeed({
        get: 'tagged',
        tagName: 'mountains',
        accessToken: '3735492482.1677ed0.f038348d73e64d66bee9ccd0d266c555',
        limit: 6,
        target: 'instagram',
        resolution : 'standard_resolution'
});

$(document).ready(function(){
	
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
    
    userFeed.run();
    
    $('#constructionModal').modal('show');
    
});