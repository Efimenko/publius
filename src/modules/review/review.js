$('.review').click(function(e){
	e.preventDefault();
	if (e.target.tagName == "A") {
		document.location.href = $(this).find('a').attr('href');
	}else{
		document.location.href = $(this).attr('data-href');
	}
});