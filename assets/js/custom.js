/*
	  ==============================================================
		   Click to Scroll Top Script
	  ==============================================================
	*/
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').css('opacity','1');
		} else {
			$('.back-to-top').css('opacity','0');
		}
	});

	//Click event to scroll to top
	$('.back-to-top a').on('click',function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
