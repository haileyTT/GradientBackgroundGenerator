var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("button");


function setGradient(c1, c2) {

		body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

	css.textContent = body.style.background + ";";
}

function loadFunction(){
	css.textContent = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));";
}

function randomFunction(){

	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	body.style.background = 
	"linear-gradient(to right, " 
	+ randomColor1.value 
	+ ", " 
	+ randomColor2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	console.log("dslf");
}

randomBtn.addEventListener("click", randomFunction);

window.addEventListener("load", loadFunction);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

