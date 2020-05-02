//Automatically show/hide sections based on date 

var today = new Date();
var part1End = new Date(2046,1,1);
var part2start = new Date(2046,3,25);
var part2End = new Date(2046,4,25);
var part3start = new Date(2046,5,25);
var part3End = new Date(2046,6,25);
var part4start = new Date(2046,7,25);
var part4End = new Date(2046,4,30);
/*var part5start = new Date(2050,10,15);
var part5End = new Date(2050,10,29);
var part6start = new Date(2050,10,30);
var part6End = new Date(2050,11,13);*/


function compareDates () {
	if (today < part1End) {
		//toggle active class to part1 range
		$("#part1Button").toggleClass("active");
		$("#part1").toggleClass("hidden");
	}
	else if (today >= part1End && today <= part2End) {
		//toggle active class to part2 range
		$("#part2Button").toggleClass("active");
		$("#part1Button").removeClass("active");
		$("#part3Button").removeClass("active");
		$("#part4Button").removeClass("active");
		$("#part5Button").removeClass("active");
		$("#part6Button").removeClass("active");
		/*$("#part7Button").removeClass("active");*/
		$("#part2").toggleClass("hidden");
	}
	
	else if (today >= part2End && today <= part3End) {
		//toggle active class to part3 range
		$("#part3Button").toggleClass("active");
		$("#part1Button").removeClass("active");
		$("#part2Button").removeClass("active");
		$("#part4Button").removeClass("active");
		$("#part5Button").removeClass("active");
		$("#part6Button").removeClass("active");
		$("#part7Button").removeClass("active");
		$("#part3").toggleClass("hidden");
	}
/*	
	else if (today >= part3End && today <= part4End) {
		//toggle active class to part4 range
		$("#part4Button").toggleClass("active");
		$("#part1Button").removeClass("active");
		$("#part2Button").removeClass("active");
		$("#part3Button").removeClass("active");
		$("#part5Button").removeClass("active");
		$("#part6Button").removeClass("active");
		$("#part7Button").removeClass("active");
		$("#part4").toggleClass("hidden");
	}
	
	else if (today >= part4End && today <= part5End) {
		//toggle active class to part5 range
		$("#part5Button").toggleClass("active");
		$("#part1Button").removeClass("active");
		$("#part2Button").removeClass("active");
		$("#part3Button").removeClass("active");
		$("#part4Button").removeClass("active");
		$("#part6Button").removeClass("active");
		$("#part7Button").removeClass("active");
		$("#part5").toggleClass("hidden");
	}
	
	
	else if (today >= part5End && today <= part6End) {
		//toggle active class to part6 range
		$("#part6Button").toggleClass("active");
		$("#part1Button").removeClass("active");
		$("#part2Button").removeClass("active");
		$("#part3Button").removeClass("active");
		$("#part4Button").removeClass("active");
		$("#part5Button").removeClass("active");
		$("#part7Button").removeClass("active");
		$("#part6").toggleClass("hidden");
	}
	
	else {
		//toggle active class to part6 range
		$("#part7Button").toggleClass("active");
		$("#part1Button").removeClass("active");
		$("#part2Button").removeClass("active");
		$("#part3Button").removeClass("active");
		$("#part4Button").removeClass("active");
		$("#part5Button").removeClass("active");
		$("#part6Button").removeClass("active");
		$("#part7").toggleClass("hidden");

	}
*/	
	else {
		//toggle active class to part6 range
		$("#part4Button").toggleClass("active");
		$("#part1Button").removeClass("active");
		$("#part2Button").removeClass("active");
		$("#part3Button").removeClass("active");
		$("#part4").toggleClass("hidden");

	}
	return false;
};

compareDates();

//Click to hide and show resources

$("#part1Button").click(function(){
	var activePart = jQuery("#part1").hasClass("hidden");
	if (activePart)	{
	$("#part1").toggleClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").addClass("hidden");
	$("#part1Button").toggleClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").removeClass("active");
	$("#part1ButtonMobile").toggleClass("active");
	$("#part2ButtonMobile").removeClass("active");
	$("#part3ButtonMobile").removeClass("active");
	$("#part4ButtonMobile").removeClass("active");
	$("#part5ButtonMobile").removeClass("active");
	$("#part6ButtonMobile").removeClass("active");
	$("#part7ButtonMobile").removeClass("active");
	return false;
}
});

$("#part2Button").click(function(){
	var activePart = jQuery("#part2").hasClass("hidden");
	if (activePart)	{
	$("#part1").addClass("hidden");
	$("#part2").toggleClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").addClass("hidden");
	$("#part1Button").removeClass("active");
	$("#part2Button").toggleClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").removeClass("active");
	$("#part1ButtonMobile").removeClass("active");
	$("#part2ButtonMobile").toggleClass("active");
	$("#part3ButtonMobile").removeClass("active");
	$("#part4ButtonMobile").removeClass("active");
	$("#part5ButtonMobile").removeClass("active");
	$("#part6ButtonMobile").removeClass("active");
	$("#part7ButtonMobile").removeClass("active");
	return false;
}
});

$("#part3Button").click(function(){
	var activePart = jQuery("#part3").hasClass("hidden");
	if (activePart)	{
	$("#part1").addClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").toggleClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").addClass("hidden");
	$("#part1Button").removeClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").toggleClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").removeClass("active");
	$("#part1ButtonMobile").removeClass("active");
	$("#part2ButtonMobile").removeClass("active");
	$("#part3ButtonMobile").toggleClass("active");
	$("#part4ButtonMobile").removeClass("active");
	$("#part5ButtonMobile").removeClass("active");
	$("#part6ButtonMobile").removeClass("active");
	$("#part7ButtonMobile").removeClass("active");
	return false;
}
});

$("#part4Button").click(function(){
	var activePart = jQuery("#part4").hasClass("hidden");
	if (activePart)	{
	$("#part1").addClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").toggleClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").addClass("hidden");
	$("#part1Button").removeClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").toggleClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").removeClass("active");
	$("#part1ButtonMobile").removeClass("active");
	$("#part2ButtonMobile").removeClass("active");
	$("#part3ButtonMobile").removeClass("active");
	$("#part4ButtonMobile").toggleClass("active");
	$("#part5ButtonMobile").removeClass("active");
	$("#part6ButtonMobile").removeClass("active");
	$("#part7ButtonMobile").removeClass("active");
	return false;
}
});

$("#part5Button").click(function(){
	var activePart = jQuery("#part5").hasClass("hidden");
	if (activePart)	{
	$("#part1").addClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").toggleClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").addClass("hidden");
	$("#part1Button").removeClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").toggleClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").removeClass("active");
	$("#part1ButtonMobile").removeClass("active");
	$("#part2ButtonMobile").removeClass("active");
	$("#part3ButtonMobile").removeClass("active");
	$("#part4ButtonMobile").removeClass("active");
	$("#part5ButtonMobile").toggleClass("active");
	$("#part6ButtonMobile").removeClass("active");
	$("#part7ButtonMobile").removeClass("active");
	return false;
}
});

$("#part6Button").click(function(){
	var activePart = jQuery("#part6").hasClass("hidden");
	if (activePart)	{
	$("#part1").addClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").toggleClass("hidden");
	$("#part7").addClass("hidden");
	$("#part1Button").removeClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").toggleClass("active");
	$("#part7Button").removeClass("active");
	$("#part1ButtonMobile").removeClass("active");
	$("#part2ButtonMobile").removeClass("active");
	$("#part3ButtonMobile").removeClass("active");
	$("#part4ButtonMobile").removeClass("active");
	$("#part5ButtonMobile").removeClass("active");
	$("#part6ButtonMobile").toggleClass("active");
	$("#part7ButtonMobile").removeClass("active");
	return false;
}
});

$("#part7Button").click(function(){
	var activePart = jQuery("#part7").hasClass("hidden");
	if (activePart)	{
	$("#part1").addClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").toggleClass("hidden");
	$("#part1Button").removeClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").toggleClass("active");
	$("#part1ButtonMobile").removeClass("active");
	$("#part2ButtonMobile").removeClass("active");
	$("#part3ButtonMobile").removeClass("active");
	$("#part4ButtonMobile").removeClass("active");
	$("#part5ButtonMobile").removeClass("active");
	$("#part6ButtonMobile").removeClass("active");
	$("#part7ButtonMobile").toggleClass("active");
	return false;
}
});

//Click to hide and show resources

$("#part1ButtonMobile").click(function(){
	var activePart = jQuery("#part1").hasClass("hidden");
	if (activePart)	{
	$("#part1").toggleClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").addClass("hidden");
	$("#part1ButtonMobile").toggleClass("active");
	$("#part2ButtonMobile").removeClass("active");
	$("#part3ButtonMobile").removeClass("active");
	$("#part4ButtonMobile").removeClass("active");
	$("#part5ButtonMobile").removeClass("active");
	$("#part6ButtonMobile").removeClass("active");
	$("#part7ButtonMobile").removeClass("active");
	$("#part1Button").toggleClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").removeClass("active");
	return false;
	}
});

$("#part2ButtonMobile").click(function(){
	var activePart = jQuery("#part2").hasClass("hidden");
	if (activePart)	{
	$("#part1").addClass("hidden");
	$("#part2").toggleClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").addClass("hidden");
	$("#part1ButtonMobile").removeClass("active");
	$("#part2ButtonMobile").toggleClass("active");
	$("#part3ButtonMobile").removeClass("active");
	$("#part4ButtonMobile").removeClass("active");
	$("#part5ButtonMobile").removeClass("active");
	$("#part6ButtonMobile").removeClass("active");
	$("#part7ButtonMobile").removeClass("active");
	$("#part1Button").removeClass("active");
	$("#part2Button").toggleClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").removeClass("active");
	return false;
	}
});

$("#part3ButtonMobile").click(function(){
	var activePart = jQuery("#part3").hasClass("hidden");
	if (activePart)	{
	$("#part1").addClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").toggleClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").addClass("hidden");
	$("#part1ButtonMobile").removeClass("active");
	$("#part2ButtonMobile").removeClass("active");
	$("#part3ButtonMobile").toggleClass("active");
	$("#part4ButtonMobile").removeClass("active");
	$("#part5ButtonMobile").removeClass("active");
	$("#part6ButtonMobile").removeClass("active");
	$("#part7ButtonMobile").removeClass("active");
	$("#part1Button").removeClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").toggleClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").removeClass("active");
	return false;
	}
});

$("#part4ButtonMobile").click(function(){
	var activePart = jQuery("#part4").hasClass("hidden");
	if (activePart)	{
	$("#part1").addClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").toggleClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").addClass("hidden");
	$("#part1Button").removeClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").toggleClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").removeClass("active");
	$("#part1ButtonMobile").removeClass("active");
	$("#part2ButtonMobile").removeClass("active");
	$("#part3ButtonMobile").removeClass("active");
	$("#part4ButtonMobile").toggleClass("active");
	$("#part5ButtonMobile").removeClass("active");
	$("#part6ButtonMobile").removeClass("active");
	$("#part7ButtonMobile").removeClass("active");
	return false;
	}
});

$("#part5ButtonMobile").click(function(){
	var activePart = jQuery("#part5").hasClass("hidden");
	if (activePart)	{
	$("#part1").addClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").toggleClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").addClass("hidden");
	$("#part1ButtonMobile").removeClass("active");
	$("#part2ButtonMobile").removeClass("active");
	$("#part3ButtonMobile").removeClass("active");
	$("#part4ButtonMobile").removeClass("active");
	$("#part5ButtonMobile").toggleClass("active");
	$("#part6ButtonMobile").removeClass("active");
	$("#part7ButtonMobile").removeClass("active");
	$("#part1Button").removeClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").toggleClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").removeClass("active");
	return false;
	}
});

$("#part6ButtonMobile").click(function(){
	var activePart = jQuery("#part6").hasClass("hidden");
	if (activePart)	{
	$("#part1").addClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").toggleClass("hidden");
	$("#part7").addClass("hidden");
	$("#part1ButtonMobile").removeClass("active");
	$("#part2ButtonMobile").removeClass("active");
	$("#part3ButtonMobile").removeClass("active");
	$("#part4ButtonMobile").removeClass("active");
	$("#part5ButtonMobile").removeClass("active");
	$("#part6ButtonMobile").toggleClass("active");
	$("#part7ButtonMobile").removeClass("active");
	$("#part1Button").removeClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").toggleClass("active");
	$("#part7Button").removeClass("active");
	return false;
	}
});

$("#part7ButtonMobile").click(function(){
	var activePart = jQuery("#part7").hasClass("hidden");
	if (activePart)	{
	$("#part1").addClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").toggleClass("hidden");
	$("#part1ButtonMobile").removeClass("active");
	$("#part2ButtonMobile").removeClass("active");
	$("#part3ButtonMobile").removeClass("active");
	$("#part4ButtonMobile").removeClass("active");
	$("#part5ButtonMobile").removeClass("active");
	$("#part6ButtonMobile").removeClass("active");
	$("#part7ButtonMobile").toggleClass("active");
	$("#part1Button").removeClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").toggleClass("active");
	return false;
}
});

/* FUNCTION FOR MOBILE MENU */
jQuery(document).ready(function(){ 
jQuery('a#part1ButtonMobile').click(function(){
    var div_has_class = jQuery("div.stnv").hasClass("sticky");
    if (div_has_class) {
        jQuery('html, body').animate({
            scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top - 46
        }, 500);
    }else{
        jQuery('html, body').animate({
            scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top - 376
        }, 500);
    }
    return false;
});
jQuery('a#part2ButtonMobile').click(function(){
    var div_has_class = jQuery("div.stnv").hasClass("sticky");
    if (div_has_class) {
        jQuery('html, body').animate({
            scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top - 46
        }, 500);
    }else{
        jQuery('html, body').animate({
            scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top - 376
        }, 500);
    }
    return false;
});
jQuery('a#part3ButtonMobile').click(function(){
    var div_has_class = jQuery("div.stnv").hasClass("sticky");
    if (div_has_class) {
        jQuery('html, body').animate({
            scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top - 46
        }, 500);
    }else{
        jQuery('html, body').animate({
            scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top - 376
        }, 500);
    }
    return false;
});
jQuery('a#part4ButtonMobile').click(function(){
    var div_has_class = jQuery("div.stnv").hasClass("sticky");
    if (div_has_class) {
        jQuery('html, body').animate({
            scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top - 46
        }, 500);
    }else{
        jQuery('html, body').animate({
            scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top - 376
        }, 500);
    }
    return false;
});
jQuery('a#part5ButtonMobile').click(function(){
    var div_has_class = jQuery("div.stnv").hasClass("sticky");
    if (div_has_class) {
        jQuery('html, body').animate({
            scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top - 46
        }, 500);
    }else{
        jQuery('html, body').animate({
            scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top - 376
        }, 500);
    }
    return false;
});
jQuery('a#part6ButtonMobile').click(function(){
    var div_has_class = jQuery("div.stnv").hasClass("sticky");
    if (div_has_class) {
        jQuery('html, body').animate({
            scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top - 46
        }, 500);
    }else{
        jQuery('html, body').animate({
            scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top - 376
        }, 500);
    }
    return false;
});

// grab the initial top offset of the navigation 
var stickyNavTop = jQuery('.stnv').offset().top - 80;

// our function that decides weather the navigation bar should have "fixed" css position or not.
var stickyNav = function(){
    var scrollTop = jQuery(window).scrollTop(); // our current vertical position from the top
         
    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative
    if (scrollTop > stickyNavTop) {
        //jQuery('.stnv').removeClass('nonsticky');  
        jQuery('.stnv').addClass('sticky');  
        jQuery('.mchange').addClass('msticky');
    } else {
        jQuery('.stnv').removeClass('sticky'); 
        //jQuery('.stnv').addClass('nonsticky');
        jQuery('.mchange').removeClass('msticky'); 
    }
};

//stickyNav();
// and run it again every time you scroll
jQuery(window).scroll(function() {
 //   stickyNav();
});

jQuery(".navclick").click(function(){
    jQuery(".stnv .list-group").slideToggle();
});


});

function jqUpdateSize(){
  var winwidth = jQuery(window).width();
  //var boxwidth = jQuery('.winwidth').width(); 
    //if (winwidth <= 767) {
    jQuery(".stnv .list-group li a").click(function(){
        jQuery(".stnv.sticky .list-group").slideUp('slow');
        
    });
    //} 
    //if (winwidth > 767) { 
    //jQuery('.stnv').css('width', (boxwidth -2)); 
    //jQuery(".stnv .list-group").css('display', 'block'); 
//} else {
    jQuery('.stnv').css('width', 'auto');
    jQuery(".stnv.sticky .list-group").css('display', 'none');
//};
}

jQuery(document).ready(jqUpdateSize);    // When the page first loads
jQuery(window).resize(jqUpdateSize);     // When the browser changes size



/* scroll desktop */
$("a#part1Button").click(function() {
    $('html, body').animate({
        scrollTop: $("#part1").offset().top - 60
    }, 1000);
});
$("a#part2Button").click(function() {
    $('html, body').animate({
        scrollTop: $("#part2").offset().top - 60
    }, 1000);
});
$("a#part3Button").click(function() {
    $('html, body').animate({
        scrollTop: $("#part3").offset().top - 60
    }, 1000);
});
$("a#part4Button").click(function() {
    $('html, body').animate({
        scrollTop: $("#part4").offset().top - 60
    }, 1000);
});
$("a#part5Button").click(function() {
    $('html, body').animate({
        scrollTop: $("#part5").offset().top - 60	
    }, 1000);
});
$("a#part6Button").click(function() {
    $('html, body').animate({
        scrollTop: $("#part6").offset().top - 60	
    }, 1000);
});

/* HIDE MENU */

var hideMenu = function(){
	
	var	scrollLevel = $(window).scrollTop();
	var pageLevel = $(".navActivation").offset().top -300;
    if (scrollLevel >= pageLevel) {
    	$(".stnv").show();
	    } else {
        $(".stnv").hide();
    }
};


var hideMenuOnScroll = function() {
		jQuery(".stnv.sticky .list-group").slideUp('fast');
};


jQuery(window).scroll(function() {
    hideMenu();
    hideMenuOnScroll();
});
