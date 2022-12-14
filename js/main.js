(function($){

	jQuery(document).ready(function(){

		/*** Sticky header */
		$(window).scroll(function(){
			if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
				$(".header").addClass("stop");
			} else {
				$(".header").removeClass("stop");
			}
		});

		/*** Sticky header */
		const body = document.body;
		const scrollUp = "scroll-up";
		const scrollDown = "scroll-down";
		let lastScroll = 100;

		window.addEventListener("scroll", () => {
			const currentScroll = window.pageYOffset;
			if (currentScroll <= 0) 
			{
				body.classList.remove(scrollUp);
				return;
			}

			if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) 
			{
				// down
				body.classList.remove(scrollUp);
				body.classList.add(scrollDown);
			} 
			else if ( currentScroll < lastScroll && body.classList.contains(scrollDown) ) 
			{
				// up
				body.classList.remove(scrollDown);
				body.classList.add(scrollUp);
			}

			lastScroll = currentScroll;
		});

		/*** Scroll Nav */
		var link = $('.main-menu ul li a');
 
		link.on('click', function(e) {
			var target = $($(this).attr('href'));
			$('html, body').animate({
			scrollTop: target.offset().top - 76
			}, 600); 
			$(this).parent().addClass('active');
			e.preventDefault();
		});
 
		$(window).on('scroll', function(){
			scrNav();
		});

		function scrNav() {
			var sTop = $(window).scrollTop();
			$('section').each(function() {
				var id = $(this).attr('id'),
					offset = $(this).offset().top-1,
					height = $(this).height();
				if(sTop >= offset && sTop < offset + height) {
					link.parent().removeClass('active');
					$('.main-menu').find('[href="#' + id + '"]').parent().addClass('active');
				}
			});
		}
		scrNav();

		/*** mobile menu  */
		$(".hamburger-menu").on("click", function () {
			$(".side-info").toggleClass("info-open");
			$(".offcanvas-overlay").toggleClass("overlay-open");
		});

		/*** ScrollDown */
        $('.scrollDown').click(function() {
            var target = $($(this).data('target'));
            var space = $(this).data('space');

            if (target.length) {
                $('html,body').animate({
                scrollTop: target.offset().top - space
                }, 500);
            }
        });
    	 

		$(window).scroll(function(){
			if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
				$(".side-info").removeClass("info-open");
				$(".offcanvas-overlay").removeClass("overlay-open");
			}
		});  

		/*** AOS */
		AOS.init({
			once: true,
			offset: -300,
			duration: 900,
		});

		/*** Search bar */
        $('.header-search').on('click', '.search-toggle', function(e) {
            e.preventDefault();
            var selector = $(this).data('selector');
            $(selector).toggleClass('show').find('.search-input').focus();
        });

		/*** enable lightbox */
		$('.zoom-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,
				titleSrc: function(item) {
					return item.el.attr('title') + ' &middot; <a class="our-categories__item" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
				}
			},
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300, // don't foget to change the duration also in CSS
				opener: function(element) {
					return element.find('img');
				}
			}
			
		});

		/*** categories-slider Slider */
    	var $categories_slider;
		$categories_slider = $('.categories-slider');
		$categories_slider.slick({
			autoplay: true,
			speed: 300, 
			dots: false,
			arrows: false,
			infinite: true,
			slidesToShow: 2,
			initialSlide: 1, 
			slidesToScroll: 1,
			centerMode: true,
  			centerPadding: '300px 0 0',
			  responsive: [
				{
					breakpoint: 992,
					  	settings: {
						centerPadding: '220px 0 0',
					}
				},
				{
					breakpoint: 801,
					  	settings: {
							slidesToShow: 1
						}
					},
					{
						breakpoint: 768,
						settings: {
							centerPadding: '180px 0 0',
							slidesToShow: 1
					}
				},
				{
					breakpoint: 576,
					  	settings: {
						centerPadding: '180px 0 0',
						slidesToShow: 1
					}
				},
				{
					breakpoint: 481,
					  	settings: {
						centerPadding: '100px 0 0',
						slidesToShow: 1
					}
				},
				{
					breakpoint: 381,
					  	settings: {
						centerPadding: '60px 0 0',
						slidesToShow: 1
					}
				},
				{
					breakpoint: 351,
					  	settings: {
						centerPadding: '40px 0 0',
						slidesToShow: 1
					}
				}
			]
		})

		/*** lastNobullet */
		function lastNobullet() {
			var lastElement = false;
			$(".social-profile ul li").each(function() {
				if (lastElement && lastElement.offset().top != $(this).offset().top) {
					$(lastElement).addClass("no_bullet");
				} else {
					$(lastElement).removeClass("no_bullet");
				}
				lastElement = $(this);
			}).last().addClass("no_bullet");
		};
		lastNobullet();

		$(window).resize(function(){
			lastNobullet();
		});

		/*** gsap */

		/*** banner-area__gsap */
		gsap.timeline({
            scrollTrigger: {
                trigger: ".banner-area__gsap",
                start: "center center",
                end: "bottom top",
                // markers: true,
                scrub: true,
                pin: true
            }
        })
		.from(".banner-area__gsap .banner-area__content .title ", { x : innerWidth * -1 } )
		.from(".banner-area__gsap .banner-area-reward", { x : innerWidth * 1 } )
		.from(".banner-area__gsap .banner-area__bottom .title ", {  y : innerWidth * 1 } )
		.from(".banner-area__gsap .banner-area__bottom .scrollDown-wrapper", {  scale: 0 } )
		
		/*** product-area__gsap */
		gsap.timeline({
            scrollTrigger: {
                trigger: ".product-area__gsap",
                start: "center center",
                end: "bottom top",
                // markers: true,
                scrub: true,
                pin: true
            }
        })
        .from(".product-area__gsap .title", { x : innerWidth * 1 } )
        .from(".product-area__gsap .description", { x : innerWidth * 1 } )
        .from(".product-area__gsap .btn-wrapper", { x : innerWidth * 1 } )
        .from(".product-area__gsap .product-area__media", { x : innerWidth * -1 } );

		/*** product-area__gsap1 */
		gsap.timeline({
            scrollTrigger: {
                trigger: ".product-area__gsap1",
                start: "center center",
                end: "bottom top",
                // markers: true,
                scrub: true,
                pin: true
            }
        })
        .from(".product-area__gsap1 .title", { x : innerWidth * -1 } )
        .from(".product-area__gsap1 .description", { x : innerWidth * -1 } )
        .from(".product-area__gsap1 .btn-wrapper", { x : innerWidth * -1 } )
        .from(".product-area__gsap1 .product-area__media", { x : innerWidth * 1 } )

		/*** popular-product__gsap */
		gsap.timeline({
            scrollTrigger: {
                trigger: ".popular-product__gsap",
                start: "center center",
                end: "bottom top",
                // markers: true,
                scrub: true,
                pin: true
            }
        })
		.from(".popular-product__gsap .col-lg-4.col-sm-6:nth-child(1)", { x : innerWidth * -1 } )
		.from(".popular-product__gsap .col-lg-4.col-sm-6:nth-child(2)", { y : innerWidth * 1 } )
		.from(".popular-product__gsap .col-lg-4.col-sm-6:nth-child(3)", { x : innerWidth * 1 } )
		.from(".popular-product__gsap .col-lg-4.col-sm-6:nth-child(4)", { x : innerWidth * -1 } )
		.from(".popular-product__gsap .col-lg-4.col-sm-6:nth-child(5)", { y : innerWidth * 1 } )
		.from(".popular-product__gsap .col-lg-4.col-sm-6:nth-child(6)", { x : innerWidth * 1 } )
		.from(".popular-product__gsap .col-lg-4.col-sm-6:nth-child(7)", { x : innerWidth * -1 } )
		.from(".popular-product__gsap .col-lg-4.col-sm-6:nth-child(8)", { y : innerWidth * 1 } )
		.from(".popular-product__gsap .col-lg-4.col-sm-6:nth-child(9)", { x : innerWidth * 1 } )
		.from(".popular-product__gsap .col-lg-4.col-sm-6:nth-child(10)", { x : innerWidth * -1 } )
		.from(".popular-product__gsap .col-lg-4.col-sm-6:nth-child(11)", { y : innerWidth * 1 } )
		.from(".popular-product__gsap .col-lg-4.col-sm-6:nth-child(12)", { x : innerWidth * 1 } )
		.from(".popular-product__gsap .col-lg-4.col-sm-6:nth-child(13)", { x : innerWidth * -1 } )
		.from(".popular-product__gsap .col-lg-4.col-sm-6:nth-child(14)", { y : innerWidth * 1 } )
		.from(".popular-product__gsap .col-lg-4.col-sm-6:nth-child(15)", { x : innerWidth * 1 } )

		/*** cta__gsap */
		gsap.timeline({
            scrollTrigger: {
                trigger: ".cta__gsap",
                start: "center center",
                end: "bottom top",
                // markers: true,
                scrub: true,
                pin: true
            }
        })
        .from(".cta__gsap .cta__wrapper", {  opacity: 0 } ) 
		.from(".cta__gsap .title", { y : innerWidth * 1 } )
        .from(".cta__gsap .description", { x : innerWidth * -1 } )
        .from(".cta__gsap .form ", { x : innerWidth * 1 } )
		 
		// /*** our-categories__gsap */
		// gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".our-categories__gsap",
        //         start: "center center",
        //         end: "bottom top",
        //         // markers: true,
        //         scrub: true,
        //         pin: true
        //     }
        // })
        // .from(".our-categories__gsap .title", { x : innerWidth * -1 } )
        // .from(".our-categories__gsap .description", { x : innerWidth * -1 } )
        // .from(".our-categories__gsap .btn-wrapper", { x : innerWidth * 1 } )
        // .from(".our-categories__gsap .categories-slider", { y : innerWidth * 1 } )
		
	});

}(jQuery));