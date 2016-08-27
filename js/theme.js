var userFeed = new Instafeed({
        get: 'tag',
        tagName: 'mountains',
        accessToken: '9f126fc85a6b4578a80c6724983aed5a',
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

    <script type="text/javascript" src="instafeed.min.js"></script>
    
    $('#constructionModal').modal('show');
    
});