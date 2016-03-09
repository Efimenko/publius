// закрытие меню при клике вне его области
$(document).click(function(event) {
	if ($(window).width() <= 750) {
		if ($(event.target).closest(".header, .filter").length) return;
		$('.burger').removeClass('burger_active');
		if (!$('.burger').hasClass('burger_active') || !$('.filter').hasClass('filter_open')) {
			$('body').removeClass('pattern');
		};
		$('#main-nav').fadeOut();

		var nTop = $(window).height() - 57;
		$('.filter').removeClass('filter_open').animate({'top': nTop});

		event.stopPropagation();
	};
});

// удаление патерна при ресайзе
function bodyOverflow(){
	if ($(window).width() > 750) {
		$('body').removeClass('pattern');
	}else{
		if ($('.burger').hasClass('burger_active')) {
			$('body').addClass('pattern');
		};
	}
}
bodyOverflow();