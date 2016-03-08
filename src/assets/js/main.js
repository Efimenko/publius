//= ../../../bower_components/jquery/dist/jquery.min.js
//= ../../../bower_components/bootstrap/dist/js/bootstrap.min.js
//= ../../../bower_components/slick-carousel/slick/slick.min.js
//= ../../../bower_components/jquery-touch-events/src/1.0.1/jquery.mobile-events.min.js
$(function(){
	// прелоадер
	$(window).on('load', function () {
	    var $preloader = $('#preloader'),
	        $spinner   = $preloader.find('.spinner');
	    $spinner.fadeOut();
	    $preloader.delay(350).fadeOut('slow');
	});

	// смена структуры страниц
	function changePlace(){
		if ($(window).width() <= 750) {
			if (!$('.header .nav-list').next().hasClass('header__search-wrapper')) {
				$('.header .nav-list').after($('.header__search-wrapper, .header__user'));
			}

			if (!$('.header .nav-list').prev().hasClass('search')) {
				$('.header__nav').prepend($('.header .search'));
			};

			if($('.user .user__notification').length){
				$('.header__burger').after($('.user__notification'));
			}

			if (!$('.discussion .stats .discussion__date').length) {
				$('.discussion').each(function(){
					$(this).find('.stats').prepend($(this).find('.discussion__date'));
				});
			};

			if ($('.book__status').length) {
				$('.book__status').each(function(){
					if (!$(this).parents('.book__buy').length) {
						$(this).parents('.book').find('.book__buy').append($(this));
					};
				});
			};

			if ($('.book .stats').length) {
				$('.book .stats').each(function(){
					if (!$(this).parents('.book__info').length) {
						$(this).parents('.book').find('.preview__category').after($(this));
					};
				});
			};

			if (!$('.content__main .filter').length) {
				$('.content__main').append($('.filter'));
			};
		}else{
			if ($('.header .nav-list').next().hasClass('header__search-wrapper')) {
				$('.header__side_right').append($('.header__search-wrapper, .header__user'));
			};

			if ($('.header .nav-list').prev().hasClass('search')) {
				$('.header .search-wrapper').prepend($('.header .search'));
			};

			if(!$('.user .user__notification').length){
				$('.user__avatar').prepend($('.user__notification'));
			}

			if ($('.discussion .stats .discussion__date').length) {
				$('.discussion').each(function(){
					$(this).prepend($(this).find('.discussion__date'));
				});
			};

			if ($('.book__status').length) {
				$('.book__status').each(function(){
					if ($(this).parents('.book__buy').length) {
						$(this).parents('.book__info').prepend($(this));
					};
				});
			};

			if ($('.book .stats').length) {
				$('.book .stats').each(function(){
					if ($(this).parents('.book__info').length) {
						$(this).parents('.book').find('.preview-wrapper').append($(this));
					};
				});
			};

			if ($('.content__main .filter').length) {
				$('.content__side.content__side_left').append($('.filter'));
			};
		}
	}
	changePlace();

	// safari fix
	var plug = navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0;
	if (plug){
		$('.book_mini .book__info, .book__buy .btn').css('margin-left', -4);
	}
