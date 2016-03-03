// открытие/закрытие меню
$('.burger').click(function(){
	var burger = $(this),
	nav = '#'+burger.attr('data-nav');
	
	$(nav).stop().fadeToggle();
	burger.toggleClass('burger_active');
	$('body').toggleClass('pattern');
	headerNavHeight();
});
