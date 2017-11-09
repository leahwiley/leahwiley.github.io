$('#cmdI').on('change',function(event){
	$('#cmdO').prepend($('<li/>').addClass('list-group-item').append(eval('rngine.'+event.target.value).toString()));
});