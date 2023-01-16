jQuery(function($) {
//
// 変数を定義  
// define a variable
//------------------------------------
	var $body = $('body'),
		$header = $('l-header'),
		$menuButton = $('.l-menu__button'),
		$headerNav = $('.l-header__nav'),
		desktopMode = ($menuButton.css('display') != 'none');
		function headerHeight() {
			$headerHeight = $header.outerHeight();
		}


// header-menu l-header__logo
//------------------------------------
	//ハンバーガーボタンクリック
	$menuButton.click(function() {
		if ( $(this).hasClass('is-open') ) {
			$(this).removeClass('is-open');
			$('body').removeClass('is-hidden');
			$('.l-header__item.--subitem').removeClass('is-open');
			$('.l-header__subitem').slideUp(500);
			$headerNav.fadeOut();
			$('.is-click1').fadeIn();
			$('.is-click2').hide();
			$('.js-mainslick').slick('refresh');
		} else {
			$(this).addClass('is-open');
			$headerNav.fadeIn();
			$('.l-header__logo').css('z-index', '1000');
			$('body').addClass('is-hidden');
			$('.is-click1').hide();
			$('.is-click2').fadeIn();
		}
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
// pagetop
//------------------------------------	
	var $pagetop = $('#is-backtop');
	$pagetop.click(function() {
		$('body,html').stop().animate({scrollTop: 0}, 500);
		return false;
	});

	// scroll 100vh dispaly scroll
	$(document).ready(function(){
		$("#is-backtop").hide()
		// var windowHeight = $(window).height();
		$(window).scroll(function(){
			// window hdeight ~ 100vh
			if($(this).scrollTop() > 200 ){
			$('#is-backtop').fadeIn("linear");
			$('#is-tabbar').css("display", "flex");
			}else{
				$('#is-backtop').fadeOut();
				$('#is-tabbar').fadeOut();
			}
			var scroll = $(this).scrollTop();
			var wH = window.innerHeight; 
			var footerPos =  $('#is-footer').offset().top;// lấy vị tri chân trang
			if(scroll+wH >= (footerPos+10)) {
			  var pos = (scroll+wH) - footerPos+10
			  $('#is-backtop').css('bottom',pos);
			}
			else{
				$('#is-backtop').css('bottom','90px');
			}
		})
	})
// スムーススクロール関係js ここから
//------------------------------------
	// ページ内リンク要
	$('a[href^="#"], area[href^="#"]').not('a[href="#"], area[href="#"]').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
			headerHeight();
			var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
			var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
			if ($target) {
				var targetOffset = $target.offset().top - $headerHeight;
				$('body,html').stop().animate({
					scrollTop: targetOffset
				}, 500);
				return false;
			}
		}
	});
	// ページ外リンクで#の位置へ飛ぶ
	window.addEventListener('load', function(){
		if (location.hash) {
			var targetOffset = $(location.hash).offset().top - $headerHeight;
			$('body,html').stop().animate({
				scrollTop: targetOffset
			}, 0);
		}
	})
// 文字数制限
//------------------------------------
	var count = 50; /*変数*/
	$('.js-textlimit').each(function() {
		var thisText = $(this).text();
		var textLength = thisText.length;
		if (textLength > count) {
			var showText = thisText.substring(0, count);
			var insertText = showText += '…';
			$(this).html(insertText);
		};
	});
// YouTube　サムネイルクリック後再生
//------------------------------------
	$('.js-youtubetrigger').click(function(){
		var idVideo = $(this).attr("data-video");
		$(this).html('<iframe src="//www.youtube.com/embed/'+idVideo+'?autoplay=1&mute=1" name="youtube embed" allow="autoplay; encrypted-media" allowfullscreen style="position: absolute;top:0;left:0;width:100%;height:100%;"></iframe>');
	});

// tab
 $('.c-tabs__nav li').click(function(e){
	var item = $(this);
	var showContent = item.data('tab');
	item.addClass('is-active');
	$(".c-tabs__nav li").not(item).removeClass("is-active");
	$('#'+showContent).fadeIn();
	$('.c-tabs__content--item').not('#'+showContent).hide();
	// refresh slick slider
	$('.js-mainslick').slick('refresh');

});
// accrodion
//------------------------------------
	$('.js-accoridion__trigger').click(function(){
		if( $(this).hasClass('is-open')) {
			$(this).next().slideUp();
			$(this).removeClass('is-open');
		} else {
			$(this).next().slideDown();
			$(this).addClass('is-open');
		}
	})
// modal
//------------------------------------
	// 同一ページに複数のモーダルがある場合はdata-modal属性をtriggerとcontainerに付与してください
	// open
	$('.js-modal__opentrigger').click(function(){
		if ($(this).data('modal')) {
			dataModal = $(this).data('modal');
			modalItem = $('.js-modal__container[data-modal="'+ dataModal +'"]')
		} else {
			modalItem = $('.js-modal__container');
		}
		modalItem.wrap('<div class="c-modal__bg js-modal__bg">');
		modalItem.fadeIn();
	})
	// close
	$('.js-modal__closetrigger').click(function(){
		var closetrigger = $(this);
		$('.js-modal__bg').fadeOut();
		closetrigger.parent().unwrap();
		$('.js-modal__container').fadeOut();
	})
// fadeアニメーション
//------------------------------------
	function fadeAnimate() {
		var scrollTop = $(this).scrollTop();
			$jstrigger = $('.js-fade__trigger');
		$jstrigger.each(function() {
			// 要素の出現位置
			if (scrollTop > $(this).offset().top - ($(window).height() * 7 / 10)) {
				$(this).addClass('js-fadein');
			}
		});
	}
	// 順番に表示させたい場合
	// 1つあたり0.4秒の遅延 2カラムの場合は0.4×2で0.8秒毎にtimeをリセット
	function fadeDelayAnimate() {
		var scrollTop = $(this).scrollTop();
			$jsdelaytrigger = $('.js-fade__delaytrigger').children();
			time = 0;
		$jsdelaytrigger.each(function() {
			if (scrollTop > $(this).offset().top - ($(window).height() * 7 / 10)) {		
				$(this).delay(time).queue(function(){
					$(this).addClass('js-fadein');
				})
				time += 400
				if (time >+ 800) {
					time = 0;
				}
				
			}
		});
	}
	// エラーが出る為slickを使用しているページのみで読み込み
	if($body.hasClass('jsparts_slider')) {
		$('.c-slider.--flow').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 0,
			speed: 10000,
			cssEase: 'linear',
			slidesToShow: 6,
			dots: false,
			arrows: false,
			pauseOnFocus: false,
			pauseOnHover: false,
			pauseOnDotsHover: false,
			slidesToScroll: 1,
			responsive:[
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 4,
						speed: 8000,
					}
				},
			]
		})
	
		$('.c-slider.--flowstop').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2000,
			speed: 3000,
			slidesToShow: 6,
			dots: false,
			arrows: false,
			pauseOnFocus: false,
			pauseOnHover: false,
			pauseOnDotsHover: false,
			slidesToScroll: 1,
			responsive:[
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 4,
					}
				},
			]
		});
	
		$('.c-slider.--rotation').slick({
			infinite: true,
			autoplay: false,
			speed: 3000,
			slidesToShow: 1,
			dots: true,
			arrows: true,
			pauseOnFocus: false,
			pauseOnHover: false,
			pauseOnDotsHover: false,
			slidesToScroll: 1,
		});
	
		$('.c-slider.--linkmain').slick({
			infinite: true,
			autoplay: false,
			speed: 1000,
			slidesToShow: 1,
			dots: false,
			arrows: true,
			pauseOnFocus: false,
			pauseOnHover: false,
			pauseOnDotsHover: false,
			slidesToScroll: 1,
			asNavFor: '.c-slider.--linkthumbnail',
		});
		
		$('.c-slider.--linkthumbnail').slick({
			infinite: true,
			autoplay: false,
			speed: 1000,
			slidesToShow: 6,
			dots: false,
			arrows: false,
			pauseOnFocus: false,
			pauseOnHover: false,
			pauseOnDotsHover: false,
			focusOnSelect: true,
			slidesToScroll: 1,
			asNavFor: '.c-slider.--linkmain',
			responsive:[
				{
					breakpoint: 999,
					settings: {
						slidesToShow: 4,
					}
				},
			]
		});
	}
});


