
$(document).ready(function(){  

	$('.teaching-btn-intro').click(function () {
		$('#landing').show(0).delay(250).hide(0);
		$('#landing').addClass('animated fadeOut quarter-second');
		$('.teaching-btn-top').toggleClass('clicked');
		$('.top-nav').hide(0).delay(250).show(0);
		$('#teaching').hide(0).delay(250).show(0);
		$('#content').hide(0).delay(250).show(0);	
		return false;
	});

	$('.research-btn-intro').click(function () {
		$('#landing').show(0).delay(250).hide(0);
		$('#landing').addClass('animated fadeOut quarter-second');
		$('.research-btn-top').toggleClass('clicked');
		$('.top-nav').hide(0).delay(250).show(0);
		$('#research').hide(0).delay(250).show(0);
		$('#content').hide(0).delay(250).show(0);
		return false;
	});

	$('.teaching-btn-top').click(function () {
		if ( $('#research').is(':visible') ) {
			$('#research').hide();
			$('#teaching').show();
			$('.teaching-btn-top').toggleClass('clicked');
			$('.research-btn-top').toggleClass('clicked');
		}
		return false;
	});

	$('.research-btn-top').click(function () {
		if ( $('#teaching').is(':visible') ) {
			$('#teaching').hide();
			$('#research').show();
			$('.teaching-btn-top').toggleClass('clicked');
			$('.research-btn-top').toggleClass('clicked');
		}
		return false;
	});

	$('a.show-content').click(function () {
		$(this).toggleClass('clicked');
		$(this).find('.open').toggleClass('close');
		$(this).next('.content-panel').toggle();
		if ( $(this).hasClass('clicked') ) { 
			$('body').animate({scrollTop: $(this).offset().top -100 }, 2000);
		}
		return false;
	});	     
});
