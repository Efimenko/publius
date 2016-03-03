if ($(window).width() > 767) {
	$('.user__avatar').click(function(){
		$(this).toggleClass('user__avatar_active').siblings('.user-menu').stop().fadeToggle(300);
	});
};

$(document).click(function(event) {
	if ($(window).width() > 767 && $('.user-menu').css('opacity') == '1') {
		console.log('1')
	    if ($(event.target).closest(".user-menu").length) return;
	    $('.user-menu').fadeOut(300);
	    $('.user__avatar').removeClass('user__avatar_active');
    };
});