$('.filter__item_withdropdown>.checkbox').change(function(){
	if ($(window).width() > 750) {
		var par =  $(this).parents('.filter__item');
		if($(this).is(":checked")) {
			par.addClass('filter__item_active').find('.filter__dropdown').slideDown();
		}else{
			par.removeClass('filter__item_active').find('.filter__dropdown').slideUp().find('.checkbox').prop('checked',false);
		}
	};
});

$('.filter__item_disabled').click(function(){
	return false;
});

$('.filter__reset').click(function(){
	var filter = $(this).parents('.filter');
	filter.find('.filter__item').removeClass('filter__item_active').find('.filter__dropdown').slideUp();
	filter.find('.checkbox, .radio').prop('checked',false);
	filter.find('.filter__block .section-title').next('.filter__item').find('.radio').prop('checked',true);
});

$('.filter__btn').click(function(){
	var fil = $(this).parents('.filter');
	if (!fil.hasClass('filter_open')) {
		fil.addClass('filter_open').animate({'top':'100px'});

	}else{
		var nTop = $(window).height() - 57;
		fil.removeClass('filter_open').animate({'top': nTop});
	}
});

$('.filter__block-btn').click(function(){
	$('.filter__block-btn').not($(this)).removeClass('filter__block-btn_active');
	$(this).toggleClass('filter__block-btn_active');
	$('.filter__block').not($(this).next()).slideUp();
	$(this).next().slideToggle();
});

function fixFilter(){
	if ($(window).width() <= 750) {
		var nHeight = $(window).height() - 100;
		var nTop = $(window).height() - 57;
		$('.filter').css('top', nTop).height(nHeight);
	}else{
		$('.filter').css('top', '').height('');
	}
}
fixFilter();