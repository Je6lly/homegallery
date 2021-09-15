$(function () {
    $('#myTab li:eq(0) a').tab('show');
});


(function ($) {
    'use strict';
    $(document).ready(function () {
        //catogry-filter

        // Params
        var sliderSelector = '.swiper-bzniss_analysis',
            options = {
                init: false,
                loop: true,
                speed: 800,
                slidesPerView: 3,
                // spaceBetween: 10,
                centeredSlides: true,
                effect: 'coverflow',
                coverflowEffect: {
                    rotate: 20,
                    stretch: 0,
                    depth: 330,
                    modifier: 1,
                    slideShadows: true,
                },
                grabCursor: true,
                parallax: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    1180: {
                        slidesPerView: 2
                    },
                    1023: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    }
                },
                // Events
                on: {
                    imagesReady: function () {
                        this.el.classList.remove('loading');
                    }
                }
            };

        var mySwiper = new Swiper(sliderSelector, options);
		try {
				// Initialize slider
        mySwiper.init();
		} catch(e) {}

        //gallery-animate-grid
		/*isotop-script*/
		$(window).on("load", function() {
			var $container = $('.gallary-thumbs');
			try {
				$container.isotope({
					filter: '*',
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				});
			} catch(e) {}
			$('.categories').on("click", 'a', function() {
				$('.categories .active').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				try {
					$container.isotope({
						filter: selector,
						animationOptions: {
							duration: 750,
							easing: 'linear',
							queue: false
						}
					});
				} catch(e) {}
				return false;
			});
		});
		/*Scroll to Top*/

        

    });
}(jQuery));

//swiper
var Fswiper = new Swiper(".fswiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
});
var Cswiper = new Swiper(".cswiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
  

});
var Aswiper = new Swiper(".aswiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
      },

});
var Oswiper = new Swiper(".oswiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
   

});



//swiper join use

var Jswiper = new Swiper(".jswiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
   

});
var Imgswiper = new Swiper(".Imgswiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
   

});