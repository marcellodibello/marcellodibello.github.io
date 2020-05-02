//Automatically show/hide sections based on date 

var today = new Date();
var part1End = new Date(2014,0,24);
var part2start = new Date(2014,0,31);
var part2End = new Date(2014,1,21);

function compareDates () {
	if (today < part1End) {
		//toggle active class to part1 range
		$("#part1Button").toggleClass("active");
		$("#part1").toggleClass("hidden");
	}
	else if (today >= part1End && today <= part2End) {
		//toggle active class to part3 range
		$("#part2Button").toggleClass("active");
		$("#part1Button").removeClass("active");
		$("#part3Button").removeClass("active");
		$("#part2").toggleClass("hidden");
	}
	else {
		//toggle active class to part3 range
		$("#part3Button").toggleClass("active");
		$("#part1Button").removeClass("active");
		$("#part2Button").removeClass("active");
		$("#part3").toggleClass("hidden");
	}
	return false;
};

compareDates();

//Click to hide and show resources

$("#part1Button").click(function(){
	$("#part1").toggleClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part1Button").toggleClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").removeClass("active");
	return false;
});

$("#part2Button").click(function(){
	$("#part1").addClass("hidden");
	$("#part2").toggleClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part1Button").removeClass("active");
	$("#part2Button").toggleClass("active");	
	$("#part3Button").removeClass("active");
	return false;

});

$("#part3Button").click(function(){
	$("#part1").addClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").toggleClass("hidden");	
	$("#part3Button").toggleClass("active");
	$("#part1Button").removeClass("active");
	$("#part2Button").removeClass("active");
	return false;
});
