'use strict';

document.addEventListener("DOMContentLoaded", function() {

	//----------------------SLIDER-hero----------------------
		var mySwiper = new Swiper('.hero__slider', {
			loop: true,
			slidesPerView: 3,
      spaceBetween: 0,
			navigation: {
				nextEl: '.hero__slider_next',
				prevEl: '.hero__slider_prev',
			},
		});

	//------------------------------acardeon---------------------------
		$(".block__content").slideUp("slow");
		$(".active .block__content").slideDown("slow");

		$(".block__header").on("click", function(){
			if ($(this).parent().hasClass('active')) {
				$(this).parent().removeClass('active');
				$(".block__content").slideUp("slow");
				$(".control__acardion_item").slideUp("slow");
			}
			else {
				$(".active .block__content").slideUp("slow");
				$(".active").removeClass('active');
				$(this).parent().addClass('active');
				$(".active .block__content").slideDown("slow");
			}
		});

		$(".control__acardion_item").slideUp("slow");
		$(".control__acardion_active .control__acardion_item").slideDown("slow");

		$(".control__acardion_content").on("click", function(){
			if ($(this).parent().hasClass('control__acardion_active')) {
				$(this).parent().removeClass('control__acardion_active');
				$(".control__acardion_item").slideUp("slow");
			}
			else {
				$(".control__acardion_active .control__acardion_item").slideUp("slow");
				$(".control__acardion_active").removeClass('control__acardion_active');
				$(this).parent().addClass('control__acardion_active');
				$(".control__acardion_active .control__acardion_item").slideDown("slow");
			}
		});
	
	});
	