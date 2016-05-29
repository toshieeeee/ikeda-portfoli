//Light Box


lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});

/*各セクションの背景の表示速度調整*/

var aboutHeight = $('.section-about-wrap').offset().top - 150; 
var portfolioHeight = $('.portfolio-bottom-bg').offset().top - 750;
var newHeight = $('.news-bottom-bg').offset().top - 750;


//スクロールイベント - 各セクション


$(window).scroll(function(){

	var scrollVal = $(window).scrollTop();
	var aboutHeight = $('.section-about-wrap').offset().top;
	
	if(scrollVal > aboutHeight - 200){
		$('.h-top-nav-wrap').addClass('nav-fixed');
		$('.top-logo').addClass('pc-top-logo');
		$('.about').addClass('fix-about');
		$('.portpfolio').addClass('fix-portpfolio');
		$('.news').addClass('fix-news');
		$('.contact').addClass('fix-contact');

	}else{
		$('.h-top-nav-wrap').addClass('nav-init');
		$('.h-top-nav-wrap').removeClass('nav-fixed');
		$('.top-logo').removeClass('pc-top-logo');
		$('.about').removeClass('fix-about');
		$('.portpfolio').removeClass('fix-portpfolio');
		$('.news').removeClass('fix-news');
		$('.contact').removeClass('fix-contact');
	}

	if(scrollVal > aboutHeight + 500){
		$('.about-prof-bottom-bg').addClass('show-each-section');
	}

	if(scrollVal > portfolioHeight + 300){
		$('.portfolio-bottom-bg').addClass('show-each-section');
	}

	if(scrollVal > newHeight + 300){
		$('.news-bottom-bg').addClass('show-each-section');
	}

});

// リサイズイベント

$(window).resize(function() {

	var topHeight = $(window).height();
	$('.header').css('height' , topHeight + 'px');
	$('.top-title').css('margin-top' , topHeight / 2.8 + 'px');
	$('.top-text').css('margin-top' , topHeight / 2.2 + 'px');
     
});

// 実行タイミング -  調査

document.addEventListener( 'DOMContentLoaded', function(){

	var topHeight = $(window).height();
	$('.header').css('height' , topHeight + 'px');
	$('.top-title').css('margin-top' , topHeight / 2.8 + 'px');
	$('.top-text').css('margin-top' , topHeight / 2.2 + 'px');
	

}, false );

$('a[href^=#]').click(function() {
  var speed = 400; 
  var adjustmentPosition = 120;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - adjustmentPosition;

  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
});

/*******************************
NAV -　スクロールイベント
********************************/


var	currentNum = 0,
	speed = 1000,
 	$navLink = $('.nav-link'),
	$currentBorder = $('.is-current'); // border


//NAVオブジェクト

var navData = [{

		num : 0,
		sectionPos : 600,
		navPos : 23,

	},
	{

		num : 1,
		sectionPos : 2180,
		navPos : 124,

	},
	{

		num : 2,
		sectionPos : 3500,
		navPos : 228,

	},
	{
		num : 3,
		sectionPos : 4100,
		navPos : 317,

	}

	];

//Scroll メソッド

function scrollUpdate(num){

	currentNum = num;
	$currentBorder.css('margin-left', navData[num].navPos);
}

//イベントハンドラ

$(window).scroll(function(){

    scrollPosition = $(window).scrollTop();

    if(scrollPosition > navData[0].sectionPos){

    	$('.is-current').css('display','block');

    }else{

    	$('.is-current').css('display','none');

    }
    
    if(scrollPosition >= 0 && scrollPosition <= navData[1].sectionPos){

        scrollUpdate(0);

	}

	if(scrollPosition >= navData[1].sectionPos && scrollPosition <= navData[2].sectionPos){

	    scrollUpdate(1); 

		}

	if(scrollPosition >= navData[2].sectionPos && scrollPosition <= navData[3].sectionPos){

	    scrollUpdate(2); 

		}

 	if(scrollPosition >= navData[3].sectionPos){

 	    scrollUpdate(3); 

	}

});	

