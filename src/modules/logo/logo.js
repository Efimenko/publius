function logoMini(){
	if ($(window).width() <= 750) {
		if ($('.logo_mini').length && !$('.logo_mini img').hasClass('img_m')) {
			var s = $('.logo_mini img').attr('src'),
			re = /logo/g,
			result = s.replace(re, "logo-m");
			$('.logo_mini img').attr('src', result);
			$('.logo_mini img').addClass('img_m');
		};
	}else{
		if ($('.logo_mini').length && $('.logo_mini img').hasClass('img_m')) {
			var s = $('.logo_mini img').attr('src'),
			re = /logo-m/g,
			result = s.replace(re, "logo");
			$('.logo_mini img').attr('src', result);
			$('.logo_mini img').removeClass('img_m');
		};
	}
}

logoMini();