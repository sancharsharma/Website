var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 25,
});

typewriter
  .pauseFor(1000)
  .typeString('I am a physicist interested in quantum') //Add your own tagline
  .pauseFor(3000)
  .start()


function PubShowHide(list_pubs, button_pubs) {
	var publist = document.getElementById(list_pubs);
	var pubbutton = document.getElementById(button_pubs);

	if (publist.style.display == "none") {
		publist.style.display = "block";
		pubbutton.innerHTML = "Click to hide the publication list";
	} else {
		publist.style.display = "none";
		pubbutton.innerHTML = "Click to show relevant publications";
	}
}
