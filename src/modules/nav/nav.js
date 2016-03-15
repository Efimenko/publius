// установка высоты навигаци в зависимости от меню пользователя
function headerNavHeight(){
	if ($(window).width() <= 767) {
		if ($('.header__user').length) {
			$('.search-wrapper__btn').width($('.header__nav').width() - $('.header__user').outerWidth() + 15);
		}else{
			$('.search-wrapper__btn').width($('.header__nav').width()-15);
		}
		if ($('.header .nav-list').height() > ($(window).height() - 250)) {
			$('.header .nav').height($(window).height()-51)
		}else{
			if ($('.header__user').length) {
				$('.header .nav').outerHeight($('.header__user').outerHeight() + $('.header .search').height());
			}else{
				$('.header .nav').outerHeight($('.header .nav-list').outerHeight() + $('.header .search').height());
			}
		}
	}else{
		$('.header .nav').height('');
		$('.search-wrapper__btn').width('')
	}
}


// закрытие меню при свайпе вверх
$('body').on('swipeup', function(e) { 
	if ($('.header__burger').hasClass('burger_active')) {
	    $('.burger').removeClass('burger_active');
		$('body').removeClass('pattern');
		$('#main-nav').fadeOut();
	};
});
