$.fn.inputVal = function () {
	var status = true;
    $(this).each(function(){
		if (!$(this).val()) {
			console.log('false')
			status = false;
		};
	});
	return status;
}

function inputCheck(){
	$('.required').blur(function(){
		var field = $(this),
		fieldWrapper = field.parent(),
		form = field.parents('.form'),
		formBtn = form.find('button[type=submit]');
		if (!field.val()) {
			fieldWrapper.removeClass('field-wrapper_success').addClass('field-wrapper_error')
			if(!fieldWrapper.find('.field-wrapper__icon').length){
				fieldWrapper.append('<span class="field-wrapper__icon"></span>');
			};
			if(!fieldWrapper.find('.field-wrapper__msg').length){
				var msgText;
				if (field.hasClass('field_email')) {
					msgText = 'Введите email';
				}else if(field.hasClass('field_password')){
					msgText = 'Введите пароль';
				}else if(field.hasClass('field_name')){
					msgText = 'Введите имя и фамилию';
				}
				fieldWrapper.append('<span class="field-wrapper__msg">'+msgText+'</span>');
				if ($(window).width() > 750) {
					fieldWrapper.find('.field-wrapper__msg').animate({'right':-50},100);
				}else{
					fieldWrapper.find('.field-wrapper__msg').animate({'bottom':-16},10);
				}
			}else{
				if ($(window).width() > 750) {
					fieldWrapper.find('.field-wrapper__msg').animate({'right':-50},100);
				}else{
					fieldWrapper.find('.field-wrapper__msg').animate({'bottom':-16},10);
				}
			}
		}else{
			fieldWrapper.removeClass('field-wrapper_error').addClass('field-wrapper_success');
			if(!fieldWrapper.find('.field-wrapper__icon').length){
				fieldWrapper.append('<span class="field-wrapper__icon"></span>');
			}
			if(fieldWrapper.find('.field-wrapper__msg').length){
				if ($(window).width() > 750) {
					fieldWrapper.find('.field-wrapper__msg').animate({'right':200},100);
				}else{
					fieldWrapper.find('.field-wrapper__msg').animate({'bottom':0},10);
				}
			}
		};
		if (form.find('.required').inputVal()) {
			formBtn.removeClass('btn_disabled');
		}else{
			formBtn.addClass('btn_disabled');
		}
	});
}


function initPlaceholders(){
	console.log('fucj')
	if ($(window).width() <= 750) {
		var placeholderText;
		$('.sign-in__form .field').each(function(){
			if ($(this).hasClass('field_email')) {
				placeholderText = 'Email';
			}else if($(this).hasClass('field_password')){
				placeholderText = 'Пароль';
			}else if($(this).hasClass('field_name')){
				placeholderText = 'Имя и фамилия';
			};
			$(this).attr('placeholder', placeholderText);
		});
	}else{
		$('.sign-in__form .field').each(function(){
			$(this).attr('placeholder', '');
		})
	}
}

initPlaceholders();
inputCheck();
