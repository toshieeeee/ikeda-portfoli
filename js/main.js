/*
$(window).scroll(function(){
	var scrollVal = $(window).scrollTop(),
	    topText = $(".c-top__text"),
	    topImg = $(".c-top__image"),
	    topImgFront = $(".c-top__image--front"),
	    topBtn = $(".c-top__scrollBtn");

	if(!navigator.userAgent.match(/(iPhone|iPad|Android)/)){
		// $(topText).css('top',(0 -(scrollVal * 0.3)) + 'px');
		// $(topBtn).css('top',(0 -(scrollVal * 0.2)) + 'px');
		$(topImg).css('top',(0 -(scrollVal * 0.2)) + 'px');
		$(topImgFront).css('top',(0 -(scrollVal * 0.4)) + 'px');
	}
})
	*/

var aboutHeight = $('.section-about-wrap').offset().top - 150;
console.log(aboutHeight);

	
$(window).scroll(function(){
	var scrollVal = $(window).scrollTop();
	
	if(scrollVal > aboutHeight){
		$('.h-top-nav-wrap').addClass('nav-fixed');

	}else{
		$('.h-top-nav-wrap').addClass('nav-init');
		$('.h-top-nav-wrap').removeClass('nav-fixed');
	}

})