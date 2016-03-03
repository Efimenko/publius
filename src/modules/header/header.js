// закрытие меню при клике вне его области
$(document).click(function(event) {
	if ($(window).width() <= 750) {
		if ($(event.target).closest(".header").length) return;
		$('.burger').removeClass('burger_active');
		$('body').removeClass('pattern');
		$('#main-nav').fadeOut();
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