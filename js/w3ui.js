;var w3ui = w3ui || (function(){
	document.body.addEventListener('click',function(event){
		if(event.target.classList.contains('w3ui-closer')) event.target.parentElement.style.display='none';
	});
})();