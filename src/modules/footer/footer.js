function adaptiveFooter(){
	if ($(window).width() <= 750) {
		$('.footer').css('margin-top', '-'+($('.footer').outerHeight())+'px');
		$('.content').css('padding-bottom', $('.footer').outerHeight());
	}else{
		$('.footer').css('margin-top', '');
		$('.content').css('padding-bottom', '');
	}
}
adaptiveFooter();