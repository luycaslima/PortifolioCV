// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var goUpButton = document.getElementById("go-up-button");

	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		goUpButton.style.display = "flex";
	} else {
		goUpButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function GoToTop() {
	window.scrollTo({top: 0, behavior: 'smooth'});
  	//document.body.scrollTop = 0;
  	//document.documentElement.scrollTop = 0;
}