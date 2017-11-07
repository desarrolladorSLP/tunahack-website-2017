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

	//Smooth scroll menu
	$("#site-nav li a[href^='#']").on('click', function(event) {
	  var target = this.hash;

	  event.preventDefault();

	  var navOffset = $('#site-nav').height();

	  return $('html, body').animate({
	    scrollTop: $(this.hash).offset().top - navOffset
	  }, 300, function() {
	    return window.history.pushState(null, null, target);
	  });
	});
