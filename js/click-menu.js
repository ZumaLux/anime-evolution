function clickMenu() {
	if (document.getElementById("nav").style.display == "none"){
		document.getElementById("nav").style.display = "block";
		document.getElementById("menu-icon").style.position = "fixed";
		document.getElementById("menu-icon").style.top = "5px";
		document.getElementById("menu-icon").style.right = "5px";
	}
	else {
		document.getElementById("nav").style.display = "none";
		document.getElementById("menu-icon").style.position = "static";
	}
			
}

function clickListMenu() {
	document.getElementById("anime-list-container").style.display = "block";
	document.getElementById("anime-content-container").style.display = "none";
	document.getElementById("anime-menu-list").style.display = "none";
}

