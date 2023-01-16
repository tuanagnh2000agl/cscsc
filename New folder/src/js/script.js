jQuery(function($) {
//
// 変数を定義  
//------------------------------------
	var $body = $('body'),
		$header = $('l-header'),
		$menuButton = $('.l-menu__button'),
		$headerNav = $('.l-header__navSp');
		function headerHeight() {
			$headerHeight = $header.outerHeight();   
		}       

// header-menu 
//------------------------------------
	//ハンバーガーボタンクリック   
	$menuButton.click(function() {
		if ( $(this).hasClass('is-open') ) {
			$(this).removeClass('is-open');
			$('.l-header__item.is-hover').removeClass('is-open');
			$('body').removeClass('is-hidden')
			$headerNav.fadeOut(300); 
		} else {
			$(this).addClass('is-open');  
			$('body').addClass('is-hidden')
			$headerNav.fadeIn(300); 
		}
	});
// pagetop 
//------------------------------------	
	var $pagetop = $('.js-pagetop');
	$pagetop.click(function() {
		$('body,html').stop().animate({scrollTop: 0}, 2000);
		return false;  
	});
	
	window.addEventListener('scroll', reveal);
	function reveal(){
		var reveals = document.querySelectorAll('.is-scroll-top');
		for(var i = 0; i< reveals.length; i++){
			var windowheight = window.innerHeight;
			var revealtop = reveals[i].getBoundingClientRect().top;
			var revealpoint = 150;
			if(revealtop < (windowheight - revealpoint)){
				reveals[i].classList.add('active');
			}
			else{
				reveals[i].classList.remove('active');
			}
		}
	}
	$(document).ready(function(){
		// scroll 100vh dispaly scroll
		$(".js-pagetop").hide()
		$(window).scroll(function(){
			if($(this).scrollTop() > 200 ){
			$('#is-backtop').fadeIn("linear");
			$('#is-tabbar').css("display", "flex");
			}else{
				$('#is-backtop').fadeOut();
				$('#is-tabbar').fadeOut();
			}
			var scroll = $(this).scrollTop();
			var wH = window.innerHeight; 
			var footerPos =  $('#is-footer').offset().top;
			if(scroll+wH >= (footerPos-100)) {
			  	var pos = (scroll+wH) - footerPos-100
			  	$('#is-backtop').css('bottom',pos);
			}
			else{
				$('#is-backtop').css('bottom','90px');
			}

			// sticky
			if($(this).scrollTop() > 100){
				$('.is-header').addClass('sticky')
			} else{
				$('.is-header').removeClass('sticky');
			}
			// marker
			$(".js-markerScrollAnimation").each(function(){
				var position = $(this).offset().top; 
				var scroll = $(window).scrollTop(); 
				var windowHeight = $(window).height(); 
				if (scroll > position - windowHeight){ 
					$(this).addClass('is-active'); 
				}
			});
		})
		
		// footer
		$('.l-footer__menu__link').click(function(){
			$(this).parent().toggleClass('is-active');
			$(this).parent().children('.l-footer__submenu__list').slideToggle();
		})
		$('.l-footer__menu__icon img').click(function(){
			$(this).parent().parent().toggleClass('is-active');
			$(this).parent().parent().children('.l-footer__submenu__list').slideToggle();
		})
		// header
		$('.l-header__menusp__link').click(function(){
			$(this).parent().toggleClass('is-active');
			$(this).parent().children('.l-header__submenusp__list').slideToggle();
		})
		$('.l-header__menusp__icon img').click(function(){
			$(this).parent().parent().toggleClass('is-active');
			$(this).parent().parent().children('.l-header__submenusp__list').slideToggle();
		})
		 // call when on sp screen -- footer
		 $(window).on('resize', function() {
			if($(this).width() > 740) {
				$('.l-footer__submenu__list').css('display','block');
			}else{
				$('.l-footer__submenu__list').css('display','none');
			}
		});

		$(".scrolldown1").click(function() {
			$("html, body").animate({ scrollTop: $('#js-articles').offset().top }, "slow");
			return false;
		})

		//Tabs - Tabs Content ===============
		//add id to each c-new__list to switch tabs
		$('.c-btn.--category').click(function(){
			var item = $(this);
			var showId = item.data('id');
			item.addClass('--active');
			$(".c-btn.--category").not(item).removeClass("--active");
			$('#'+showId).fadeIn();
			$('.c-news__list').not('#'+showId).hide();
		});
		//アコーディオン 
		$('c-accordion__item.is-active .c-accordion__content').slideDown();
		$('.c-accordion__title').click(function(){
			$(this).parent().toggleClass('is-active');
			$(this).parent().children('.c-accordion__content').slideToggle();
		})
	})
});


