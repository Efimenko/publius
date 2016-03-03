$('.preview__title').each(function(){
	$(this).css('color', $(this).attr('data-color'));
	$(this).append('<i class="preview__dot" style="background:'+$(this).attr('data-color')+'"></i>');
});

function previewClass(){
	$('.preview_hover').each(function(){
		if ($(this).find('.preview__info').innerHeight() > 120) {
			$(this).find('.preview__more').addClass('preview__more_second')
		}else if($(this).find('.preview__info').innerHeight() > 100){
			$(this).find('.preview__more').addClass('preview__more_one')
		}
	});
}

function constructSlider(el){
	if ($(window).width() <= 767) {
		if (!$(el).hasClass('slick-slider')) {
			$(el).slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				adaptiveHeight: true,
				centerMode: true,
				centerPadding: 0
			});
		};
	}else{
		if ($(el).hasClass('slick-slider')) {
			$(el).slick('unslick');
		};
	}
	if ($(window).width() <= 767) {
		$(el).find('.slick-slide.slick-center').prev().addClass('to-left'); 
		$(el).find('.slick-slide.slick-center').prev().prev().addClass('to-left'); 
		$(el).find('.slick-slide.slick-center').next().addClass('to-right'); 
		$(el).find('.slick-slide.slick-center').next().next().addClass('to-right');

		$(el).find('.slick-arrow').on('click',function(){ 
			$(el).find('.slick-slide.slick-center').removeClass('to-left to-right'); 
			$(el).find('.slick-slide.slick-center').prev().removeClass('to-right').addClass('to-left'); 
			$(el).find('.slick-slide.slick-center').prev().prev().removeClass('to-right').addClass('to-left'); 
			$(el).find('.slick-slide.slick-center').next().removeClass('to-left').addClass('to-right'); 
			$(el).find('.slick-slide.slick-center').next().next().removeClass('to-left').addClass('to-right');
		})

		$(el).find('.slick-dots button').on('click',function(){ 
			$(el).find('.slick-slide.slick-center').removeClass('to-left to-right'); 
			$(el).find('.slick-slide.slick-center').prev().removeClass('to-right').addClass('to-left'); 
			$(el).find('.slick-slide.slick-center').prev().prev().removeClass('to-right').addClass('to-left'); 
			$(el).find('.slick-slide.slick-center').next().removeClass('to-left').addClass('to-right'); 
			$(el).find('.slick-slide.slick-center').next().next().removeClass('to-left').addClass('to-right');
		})

		$(document).keyup(function(event){ 
			if (event.keyCode == 39 || event.keyCode == 37) { 
				$(el).find('.slick-slide.slick-center').removeClass('to-left to-right'); 
				$(el).find('.slick-slide.slick-center').prev().removeClass('to-right').addClass('to-left'); 
				$(el).find('.slick-slide.slick-center').prev().prev().removeClass('to-right').addClass('to-left'); 
				$(el).find('.slick-slide.slick-center').next().removeClass('to-left').addClass('to-right'); 
				$(el).find('.slick-slide.slick-center').next().next().removeClass('to-left').addClass('to-right');
			} 
		});

		$(el).on('afterChange', function(event, slick, direction){ 
			$(el).find('.slick-slide.slick-center').removeClass('to-left to-right'); 
			$(el).find('.slick-slide.slick-center').prev().removeClass('to-right').addClass('to-left'); 
			$(el).find('.slick-slide.slick-center').prev().prev().removeClass('to-right').addClass('to-left'); 
			$(el).find('.slick-slide.slick-center').next().removeClass('to-left').addClass('to-right'); 
			$(el).find('.slick-slide.slick-center').next().next().removeClass('to-left').addClass('to-right');
		});

		$(el).on('swipe', function(event, slick, direction){ 
			$(el).find('.slick-slide.slick-center').removeClass('to-left to-right'); 
			$(el).find('.slick-slide.slick-center').prev().removeClass('to-right').addClass('to-left'); 
			$(el).find('.slick-slide.slick-center').prev().prev().removeClass('to-right').addClass('to-left'); 
			$(el).find('.slick-slide.slick-center').next().removeClass('to-left').addClass('to-right'); 
			$(el).find('.slick-slide.slick-center').next().next().removeClass('to-left').addClass('to-right');
		});
	};
}

setTimeout(previewClass,200);
constructSlider('#previews');
