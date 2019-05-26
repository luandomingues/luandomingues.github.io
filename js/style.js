(function(){

	let height = window.innerHeight;
	let body = document.getElementById("body");

	if (height > 460) {
		body.style.gridTemplateRows = height + "px "+ "auto";	
	}

	window.addEventListener("orientationchange", function() {
		var afterOrientationChange = function(){
			let heightAfter = window.innerHeight;

			if (heightAfter < 460) {
				body.style.gridTemplateRows =  "";
			}
			else if(heightAfter > 460) {
				body.style.gridTemplateRows = heightAfter + "px "+ "auto";
			}
			window.removeEventListener("resize", afterOrientationChange);
			console.log(heightAfter);
		};

		window.addEventListener("resize", afterOrientationChange);

	});

	document.getElementById("style").href='./CSS/style.css';
})();