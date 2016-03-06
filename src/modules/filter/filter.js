$('.filter__item_withdropdown>.checkbox').change(function(){
	var par =  $(this).parents('.filter__item');
	if($(this).is(":checked")) {
		par.addClass('filter__item_active').find('.filter__dropdown').slideDown();
	}else{
		par.removeClass('filter__item_active').find('.filter__dropdown').slideUp().find('.checkbox').prop('checked',false);
	}
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