(function(){

	let height = document.documentElement.clientHeight;
	let body = document.getElementById('body');

	if(height > 460){

		body.style.gridTemplateRows = height + "px "+ "auto";
		
	}
	
})();