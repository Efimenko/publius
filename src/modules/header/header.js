$(window).scroll(function(){
	if ($(window).scrollLeft() > 0) {
		var ml = '-'+$(window).scrollLeft()+'px';
		$('.header').css('margin-left',ml)
	}else{
		$('.header').css('margin-left', '')
	}
});

$(document).click(function(event) {
	if ($(window).width() <= 750) {
		if ($(event.target).closest(".header").length) return;
		$('.burger').removeClass('burger_active');
		$('body').removeClass('pattern');
		$('#main-nav').fadeOut();
		event.stopPropagation();
	};
});

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