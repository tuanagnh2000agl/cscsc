jQuery(function($) {
//
// 変数を定義  
//------------------------------------
	var $body = $('body'),
		$header = $('#header'),
		$menuButton = $('.l-menu'),
		$headerNav = $('.l-header__nav'),
		desktopMode = ($menuButton.css('display') != 'none');
		function headerHeight() {
			$headerHeight = $header.outerHeight();
		}

//
// header-menu
//------------------------------------
	//ハンバーガーボタンクリック
	$menuButton.click(function() {
		if ( $(this).hasClass('is-open') ) {
			$(this).removeClass('is-open');
			$('.l-header__nav').removeClass('is-show');
			$('body').removeClass('is-hidden')
		} else {
			$(this).addClass('is-open');
			$('.l-header__nav').addClass('is-show');
			$('body').addClass('is-hidden')
		}
	});

	// page top
	var $pagetop = $('#pagetop');
	$pagetop.find('> a').click(function() {
		$('body,html').stop().animate({scrollTop: 0}, 500);
		return false;
	});
	// scroll 100vh dispaly scroll
	$("#pagetop").hide()
	$(window).scroll(function(){
		if($(this).scrollTop() > window.innerHeight ){
		$('#pagetop').fadeIn("linear");
		}else{
			$('#pagetop').fadeOut();
		}
	})

	// model 1
	$('.is-open--modal').click(function(){
		var dataid = $(this).attr("data-id");
		$("#is-modelimg img").attr("src","../images/create/" + dataid + ".jpg")
		$('.c-model').css('display', 'flex');
		$('body').addClass('is-hidden');
	})
	$('#is-close').click(function(){
		$('.c-model').css('display', 'none');
		$('body').removeClass('is-hidden');
	})
	$('#is-all').click(function(e){
		$(this).css('display', 'none');
		$('body').removeClass('is-hidden');
	})
	$('.c-model__info').click(function(e){
		e.stopPropagation();
	})

	// pop-up
	$('.is-open--popup').click(function(){
		const dataid = $(this).attr("data-id");
		$("#is-modelimg img").attr("src","../images/kyushu/" + dataid + ".jpg");

		const dataalt = $(this).attr("data-alt");
		$("#is-modelimg img").attr("alt",dataalt);

		$('.c-popupImg').css('display', 'flex');
		$('body').addClass('is-hidden');
	})
	$('#is-closePopup').click(function(){
		$('.c-popupImg').css('display', 'none');
		$('body').removeClass('is-hidden');
	})
	$('#is-contain').click(function(e){
		$(this).css('display', 'none');
		$('body').removeClass('is-hidden');
	})
	$('.c-popupImg__contain').click(function(e){
		e.stopPropagation();
	})
});
