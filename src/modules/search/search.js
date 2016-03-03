// увеличении/уменьшение поля поиска в хедере
function serachField(){
	var inputSearchWidth = $('.search__field').parents('.search').outerWidth();

	if ($(window).width() > 750) {
		$('.search__field').focus(function(){
			$(this).parents('.search').siblings('.btn').hide();
			$(this).parents('.search').stop().animate({'width': '100%'},400)
		});

		$('.search__field').blur(function(){
			if (!$(this).parents('.search').siblings('.btn:visible').length) {
				$(this).parents('.search').stop()
				.animate(
					{'width': inputSearchWidth},
					400, 
					function(){
						$(this).addClass('search_mini').siblings('.btn').fadeIn();
					})
			};
		});
	};
}

serachField();

// смена текста кнопки в хедере
function searchBtnText(){
	if ($(window).width() < 750) {
		if ($('.search-wrapper__btn').html() != 'загрузить<br>книгу') {
			$('.search-wrapper__btn').html('загрузить<br>книгу');
		};
	}else{
		if ($('.search-wrapper__btn').html() != 'загрузить<br>произведение') {
			$('.search-wrapper__btn').html('загрузить<br>произведение');
		};
	}
}

searchBtnText();