$(window).on('beforeunload',function(){
	$(window).scrollTop(0);
});
	
jQuery(document).ready(function ($) {


	// FEATURE BLOCK
	$(".list-item_alt").not(":first").hide();
	$(".homa .control-item_alt").click(function () {
		$(".homa .control-item_alt").removeClass("item_active").eq($(this).index()).addClass("item_active");
		$(".list-item_alt").hide().eq($(this).index()).addClass('item_active').fadeIn(400)
	});


	// WHY BLOCK
	$('.control-item_alt_2').click(function () {
		var id = $(this).attr('data-tab'),
			content = $('.adv[data-tab="' + id + '"]');

		$('.control-item_alt_2.item_active').removeClass('item_active');
		$(this).addClass('item_active');

		$('.adv.item_active').removeClass('item_active');
		content.addClass('item_active');
	});

//	$(".oknoactive").hide();
//	$(".openokno").click(function () {
//		$(".homa .control-item_alt").removeClass("item_active").eq($(this).index()).addClass("item_active");
//		$(".list-item_alt").hide().eq($(this).index()).addClass('item_active').fadeIn(400)
//	});
//	
//	$('.openokno').click(function () {
//		$('.okno').addClass('oknoactive');
//	});
//	$('.close').click(function () {
//		$('.okno').removeClass('oknoactive');
//	});
	
	//title
	var duration = 0.8;
	var delay = 0.3;
	var revealText = document.querySelector(".reveal");
	var letters = revealText.textContent.split("");
	revealText.textContent = "";
	var middle = letters.filter(function (e) {return e !== " ";}).length / 2;
	letters.forEach(function (letter, i) {
	  var span = document.createElement("span");
	  span.textContent = letter;
	  span.style.animationDelay = delay + Math.abs(i - middle) * 0.1 + "s";
	  revealText.append(span);
	});
	

	//questions
	
	$(".open").click( function () {
  var container = $(this).parents(".topic");
  var answer = container.find(".answer");
  var trigger = container.find(".faq-t");
  
  answer.slideToggle(200);
  
  if (trigger.hasClass("faq-o")) {
    trigger.removeClass("faq-o");
  }
  else {
    trigger.addClass("faq-o");
  }
  
  if (container.hasClass("expanded")) {
    container.removeClass("expanded");
  }
  else {
    container.addClass("expanded");
  }
});
	
	//reviews
	var swiper = new Swiper('.blog-slider', {
      spaceBetween: 90,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });

	
	
	// NAV SCROLL
	$('.scroll').on('click', function (e) {
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 20
		}, 500);
		e.preventDefault();
	});

	// SCROLL TO TOP

	$(".top").on("click", function () {
		$("html,body").animate({
			scrollTop: 0
		}, 900)
	});

	// Functions
	
	// Animation 
	$('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		// $w = $('.slider .slick-slide[data-slick-index='+ nextSlide+']');
		// console.log($w);
		$current = $('.slider .slick-slide[data-slick-index=' + currentSlide + ']');
		$next = $('.slider .slick-slide[data-slick-index=' + nextSlide + ']');

		$current.find('.under-block').css('opacity', '0');
		$current.find('.up-block').css('opacity', '0');
		$current.find('.name_business').css('opacity', '0');
		$next.find('.under-block').css('opacity', '0');
		$next.find('.up-block').css('opacity', '0');
		$next.find('.name_business').css('opacity', '0');



	});

	$('.slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
		$current = $('.slider .slick-slide[data-slick-index=' + currentSlide + ']');
		$current.find('.under-block').animate({
			opacity: 1
		}, 400);
		$current.find('.up-block').animate({
			opacity: 1
		}, 400);
		$current.find('.name_business').animate({
			opacity: 1
		}, 400);
	});


	// popup





});


 
$(document).ready(function(){
	$(".nav-menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
});



//menu

function configToggleAnimation() {
	var toggle = document.querySelector('.nav-toggle'),
		nav = document.querySelector('.nav'),
		snap = Snap(document.querySelector('.nav-morph svg')),
		nav_morph = document.querySelector('.nav-morph'),
		path = snap.select('path'),
		reset = path.attr('d'),
		open = nav_morph.getAttribute('data-open'),
		close = nav_morph.getAttribute('data-close'),
		speed = 250,
		speed_back = 800,
		easing = mina.easeinout,
		easing_back = mina.elastic,
		isOpen = false;

	toggle.addEventListener('click', function () {
		// si ouvert on ferme
		if (isOpen) {
			path.stop().animate({
				'path': close
			}, speed, easing, function () {
				path.animate({
					'path': reset
				}, speed_back, easing_back);
				isOpen = false;
			});
			nav.classList.remove('nav--open');
		} else {

			path.stop().animate({
				'path': open
			}, speed, easing, function () {
				path.animate({
					'path': reset
				}, speed_back, easing_back);
				isOpen = true;
			});
			nav.classList.add('nav--open');
		}
	});

}

function initialize() {
	configToggleAnimation();
}

document.addEventListener('DOMContentLoaded', initialize);




