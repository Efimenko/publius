
$.fn.titleHeight = function () {
    $(this).each(function(){
		if ($(this).find('.book__title').height() > 53) {
			$(this).find('.book__title').addClass('book__title_second')
		}
	});
}

$.fn.bookAbs = function () {
    $(this).each(function(){
		var pb = $(this).find('.book__abs').height()+26;
		$(this).find('.book__info').css('padding-bottom', pb);
	});
}

function bookUpdate(){
	$('.book__info').each(function(){
		console.log($(this).position().top)
		var pointerTop = $(this).position().top;
		if (plug && pointerTop == 0) {
			$(this).siblings('.book__update').css('top', 6)
		}else{
			if ($(window).width() > 767) {
				$(this).siblings('.book__update').css('top', (pointerTop - 24)+'px')
			}else{
				$(this).siblings('.book__update').css('top', (pointerTop - 16)+'px')
			}
		}
		
	});
}

function anotationHeight(){
	$('.book_mini').titleHeight();
	$('.book_mini').bookAbs();
	setTimeout(function(){
		$('.book_mini .book__info').each(function(){
			var hBookInfo = $(this).height(),
			x = $(this).find('.book__author').height(),
			y = $(this).find('.book__title').height() + parseInt($(this).find('.book__title').css('margin-top')) + parseInt($(this).find('.book__title').css('margin-bottom')) + $(this).children('.preview__category').height(),
			anotationH = hBookInfo - (x + y) - 10;

			if (!$(this).find('.book__desc-hidden').length) {
				$(this).find('.book__desc').after('<span class="book__desc-hidden">'+$(this).find('.book__desc').text()+'</span>');
			};

			if (Math.floor(anotationH/20) < 1) {
				var symbols = ($(this).find('.book__desc').width()/7.5);
			}else{
				var symbols = Math.floor(anotationH/20)*($(this).find('.book__desc').width()/5.1);
			}

			$(this).find('.book__desc').text($(this).find('.book__desc-hidden').text().slice(0,symbols)+'...');
		});
	},450);
}

setTimeout(bookUpdate,300);

anotationHeight();