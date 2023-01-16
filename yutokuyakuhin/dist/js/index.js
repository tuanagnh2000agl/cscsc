jQuery(function($) {
    $('.js-mainslick').slick({
        infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		slidesToShow: 1,
		dots: true,
		arrows: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		slidesToScroll: 1,
    })
});