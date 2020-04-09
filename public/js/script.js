// Menu weergeven/verbergen wanneer men op het hamburgertje klikt
let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector("nav");
function toonMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "flex";
	}
}
menuKnop.addEventListener("click",toonMenu);

// Pinkify functionaliteit in de voetbalk
let schakelaar = document.querySelector(".schakelaar");
let logo = document.querySelector(".logo img");
let hamburger = document.querySelector(".menu img");
schakelaar.addEventListener("click",function(e) {
  schakelaar.classList.toggle('aan');
  document.body.classList.toggle('pinkified');
  if(document.body.classList.contains("pinkified")) {
    logo.setAttribute("src","/img/logo-white.svg");
    hamburger.setAttribute("src","/img/hamburger-white.svg");
  } else {
		logo.setAttribute("src","/img/logo.svg");
		hamburger.setAttribute("src","/img/hamburger.svg");
  }
});

// Initiële filtering op basis van het actieve element
let actiefTabblad = document.querySelector(".tabbladen li a.actief");
if(actiefTabblad) {
	let actieveCategorie = actiefTabblad.getAttribute("data-toon");
	toon(actieveCategorie);
}

// De functie die de elementen toont/verbergt op basis van de actieve categorie
function toon(categorie) {
	let alles = document.querySelectorAll(".kolomweergave a");
	let i = 0;
	while(i < alles.length) {
		alles[i].classList.add("verborgen");
		if(alles[i].classList.contains(categorie)) {
			alles[i].classList.remove("verborgen");
		}
		i++;
	}
}

// Formulier functionaliteit
let verzendknop = document.querySelector(".verzendknop");
let intro = document.querySelector(".intro");
let introZin = document.querySelector(".intro p");

if(verzendknop) {
	let formulier = document.querySelector("form");
	verzendknop.addEventListener("click", function(e) {
		e.preventDefault();
		formulier.classList.add("verborgen");
		introZin.classList.add("verborgen");

		let paragraaf = document.createElement("p");
		paragraaf.classList.add("resultaat");
		intro.appendChild(paragraaf);

		let voornaam = document.querySelector(".voornaam");
		let achternaam = document.querySelector(".achternaam");


		paragraaf.innerHTML = "Hello " + voornaam.value + ", <br /><br />Thanks for your message! We'll be in touch shortly.";

	});
}
