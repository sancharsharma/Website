var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 25,
});

typewriter
  .pauseFor(1000)
  .typeString('I am a physicist interested in quantum magnonics') //Add your own tagline
  .pauseFor(3000)
  .start()


var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: 'MainImageResized.jpg', //change image for intro section if desired
        blendingMode: 'multiply',
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 8000
        }
    }
});

function PubShowHide(list_pubs, button_pubs) {
	var publist = document.getElementById(list_pubs);
	var pubbutton = document.getElementById(button_pubs);

	if (publist.style.display == "") {
		publist.style.display = "block";
		pubbutton.innerHTML = "Click to hide the publication list";
	} else {
		publist.style.display = "";
		pubbutton.innerHTML = "Click to show relevant publications";
	}
}

function ToScroll(loc) {
	var Id = document.getElementById(loc);
	Id.scrollIntoView();
}


function SummaryShowHide(summary, pap_title) {
	var summ = document.getElementById(summary);
	var title = document.getElementById(pap_title);

	if (summ.style.display == "") {
		summ.style.display = "block";
	} else {
		summ.style.display = "";
	}
}


