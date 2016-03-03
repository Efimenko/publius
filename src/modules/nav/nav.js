// установка высоты навигаци в зависимости от меню пользователя
function headerNavHeight(){
	if ($(window).width() <= 767) {
		$('.search-wrapper__btn').width($('.header__nav').width() - $('.header__user').outerWidth() + 15);

		if ($('.header .nav-list').height() > $(window).height()) {
			$('.header .nav').height($(window).height()-51)
		}else{
			$('.header .nav').outerHeight($('.header__user').outerHeight() + $('.header .search').height());
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
