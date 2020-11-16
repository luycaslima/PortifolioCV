function openMobileMenu() {
  var menuButtons = document.getElementById("menu").style;

  if (menuButtons.display === "block" ) {
	  menuButtons.display = "none";
  } else {
	  menuButtons.display = "block";	
  }
}


//TODO Descobrir como fazer o menu aparecer dnv caso altere o tamanho devolta a desktop
//TODO Checar se esta acessando via mobile landscape para manter o menu mobile