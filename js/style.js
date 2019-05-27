// Doesn't work
(function(){

	let height = window.innerHeight;
	let body = document.getElementById("body");

	if (height > 460) {
		body.style.gridTemplateRows = height + "px "+ "auto";	
	}
	
	window.addEventListener("orientationchange", function() {
		var afterOrientationChange = function(){
			let heightAfter = window.innerHeight;

			console.log(heightAfter);

			if (heightAfter < 460) {
				body.style.gridTemplateRows =  "";
			}
			else if(heightAfter > 460) {

				body.style.gridTemplateRows = heightAfter + "px "+ "auto";

				console.log(window.getComputedStyle(body));
			}

			window.removeEventListener("resize", afterOrientationChange);
			
		};

		window.addEventListener("resize", afterOrientationChange);

	});

	document.getElementById("style").href='./CSS/style.css';
})();