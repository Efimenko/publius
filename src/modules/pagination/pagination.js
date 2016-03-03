// смена места пагинации на моб версии
function paginationPlace(){
	if ($(window).width() <= 767) {
		$('.pagination-wrapper .pagination').each(function(){
			$(this).parents('.container').append($(this));
		});
	}else{
		$('.pagination').each(function(){
			if ($(this).parents('.section').find('.pagination-wrapper').length) {
				$(this).parents('.section').find('.pagination-wrapper').append($(this));
			};
		});
	}
}
paginationPlace();