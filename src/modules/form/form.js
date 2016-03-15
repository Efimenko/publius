$('#form-recovery').submit(function(e){
	e.preventDefault();
	var form = $(this);
	$.ajax({
		type: 'POST',
		url: 'mail.php',
		data: form.serialize(),
		success: function(){
			$('#modal-recovery').modal('show');
			form.find('input, textarea').val('');
		},
		error: function (xhr, ajaxOptions, thrownError) { 
			alert(xhr.status); 
			alert(thrownError); 
		}
	})
});