//Automatically show/hide sections based on date 

/*
var today = new Date();
var part1End = new Date(2014,9,29);
var part2start = new Date(2014,9,30);
var part2End = new Date(2014,10,20);
var part3start = new Date(2014,10,21);
var part3End = new Date(2214,10,24);
var part4start = new Date(2214,10,25);
var part4End = new Date(2214,11,8);
var part5start = new Date(2214,11,9);
var part5End = new Date(2214,11,22);


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
		$("#part3").toggleClass("hidden");
	}
	
	else if (today >= part3End && today <= part4End) {
		//toggle active class to part4 range
		$("#part4Button").toggleClass("active");
		$("#part1Button").removeClass("active");
		$("#part2Button").removeClass("active");
		$("#part3Button").removeClass("active");
		$("#part5Button").removeClass("active");
		$("#part6Button").removeClass("active");
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
		$("#part5").toggleClass("hidden");
	}
	
	else {
		//toggle active class to part6 range
		$("#part6Button").toggleClass("active");
		$("#part1Button").removeClass("active");
		$("#part2Button").removeClass("active");
		$("#part3Button").removeClass("active");
		$("#part4Button").removeClass("active");
		$("#part5Button").removeClass("active");
		$("#part6").toggleClass("hidden");
	}
	return false;
};


compareDates();

*/

//Click to hide and show resources

$("#part1Button").click(function(){
	$("#part1").toggleClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").addClass("hidden");
	$("#part8").addClass("hidden");
	$("#part9").addClass("hidden");
	$("#part1Button").toggleClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").removeClass("active");
	return false;
});

$("#part2Button").click(function(){
	$("#part1").addClass("hidden");
	$("#part2").toggleClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").addClass("hidden");
	$("#part8").addClass("hidden");
	$("#part9").addClass("hidden");
	$("#part1Button").removeClass("active");
	$("#part2Button").toggleClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").removeClass("active");
	$("#part8Button").removeClass("active");
	$("#part9Button").removeClass("active");
	return false;

});

$("#part3Button").click(function(){
	$("#part1").addClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").toggleClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").addClass("hidden");
	$("#part8").addClass("hidden");
	$("#part9").addClass("hidden");
	$("#part1Button").removeClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").toggleClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").removeClass("active");
	$("#part8Button").removeClass("active");
	$("#part9Button").removeClass("active");
	return false;
});

$("#part4Button").click(function(){
	$("#part1").addClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").toggleClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").addClass("hidden");
	$("#part8").addClass("hidden");
	$("#part9").addClass("hidden");
	$("#part1Button").removeClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").toggleClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").removeClass("active");
	$("#part8Button").removeClass("active");
	$("#part9Button").removeClass("active");
	return false;
});

$("#part5Button").click(function(){
	$("#part1").addClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").toggleClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").addClass("hidden");
	$("#part8").addClass("hidden");
	$("#part9").addClass("hidden");
	$("#part1Button").removeClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").toggleClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").removeClass("active");
	$("#part8Button").removeClass("active");
	$("#part9Button").removeClass("active");
	return false;
});

$("#part6Button").click(function(){
	$("#part1").addClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").toggleClass("hidden");
	$("#part7").addClass("hidden");
	$("#part8").addClass("hidden");
	$("#part9").addClass("hidden");
	$("#part1Button").removeClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").toggleClass("active");
	$("#part7Button").removeClass("active");
	$("#part8Button").removeClass("active");
	$("#part9Button").removeClass("active");
	return false;
});

$("#part7Button").click(function(){
	$("#part1").addClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").toggleClass("hidden");
	$("#part8").addClass("hidden");
	$("#part9").addClass("hidden");
	$("#part1Button").removeClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").toggleClass("active");
	$("#part8Button").removeClass("active");
	$("#part9Button").removeClass("active");
	return false;
});

$("#part8Button").click(function(){
	$("#part1").addClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").addClass("hidden");
	$("#part8").toggleClass("hidden");
	$("#part9").addClass("hidden");
	$("#part1Button").removeClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").removeClass("active");
	$("#part8Button").toggleClass("active");
	$("#part9Button").removeClass("active");
	return false;
});

$("#part9Button").click(function(){
	$("#part1").addClass("hidden");
	$("#part2").addClass("hidden");
	$("#part3").addClass("hidden");	
	$("#part4").addClass("hidden");
	$("#part5").addClass("hidden");
	$("#part6").addClass("hidden");
	$("#part7").addClass("hidden");
	$("#part8").addClass("hidden");
	$("#part9").toggleClass("hidden");
	$("#part1Button").removeClass("active");
	$("#part2Button").removeClass("active");
	$("#part3Button").removeClass("active");
	$("#part4Button").removeClass("active");
	$("#part5Button").removeClass("active");
	$("#part6Button").removeClass("active");
	$("#part7Button").removeClass("active");
	$("#part8Button").removeClass("active");
	$("#part9Button").toggleClass("active");
	return false;
});
