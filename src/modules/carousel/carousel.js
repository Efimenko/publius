$('#carousel').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: true,
	adaptiveHeight: true,
	autoplay: true,
	autoplaySpeed: 5000
});

$('.carousel-wrapper').css('background-image', 'url('+$('#carousel .slick-current .preview img').attr('src')+')');

$('#carousel').on('afterChange', function(){
	$('.carousel-wrapper').css('background-image', 'url('+$('#carousel .slick-current .preview img').attr('src')+')');
});

// выравнивание дотсов
function dotsLeft(){
	if ($(window).width() > 767) {
		$('#carousel .slick-dots').css('left', $('#carousel .book__preview-wrapper').outerWidth()+100);
	}else{
		$('#carousel .slick-dots').css('left', '');
	}
}

setTimeout(dotsLeft,100)
