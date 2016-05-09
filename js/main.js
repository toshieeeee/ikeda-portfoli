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

//カラーボックス（プラグイン）

$(function() {
    $('.lightbox').colorbox({

    	width: 900,
    	//onComplete: true,
    	transition: 'fade',
    	next: 'next'


    })
    $('.lightbox2').colorbox({
        inline: true
    });
    $('.lightbox3').colorbox();
});

/*各セクションの背景の表示速度調整*/

var aboutHeight = $('.section-about-wrap').offset().top - 150; 
var portfolioHeight = $('.portfolio-bottom-bg').offset().top - 750;
var newHeight = $('.news-bottom-bg').offset().top - 750;


//スクロールイベント


$(window).scroll(function(){
	var scrollVal = $(window).scrollTop();

	var aboutHeight = $('.section-about-wrap').offset().top;
	
	if(scrollVal > aboutHeight){
		$('.h-top-nav-wrap').addClass('nav-fixed');


	}else{
		$('.h-top-nav-wrap').addClass('nav-init');
		$('.h-top-nav-wrap').removeClass('nav-fixed');
	}

	if(scrollVal > aboutHeight + 500){
		$('.about-prof-bottom-bg').addClass('show-each-section');
	}

	if(scrollVal > portfolioHeight){
		$('.portfolio-bottom-bg').addClass('show-each-section');
	}

	if(scrollVal > newHeight){
		$('.news-bottom-bg').addClass('show-each-section');
	}

})

/*
$(window).load(function () {

	var topHeight = $(window).height();
	$('.header').css('height' , topHeight + 'px');

});

*/
// リサイズイベント

$(window).resize(function() {

	var topHeight = $(window).height();
	$('.header').css('height' , topHeight + 'px');
     
});

// 実行タイミング -  調査

document.addEventListener( 'DOMContentLoaded', function(){

	var topHeight = $(window).height();
	$('.header').css('height' , topHeight + 'px');

}, false );








