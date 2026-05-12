(function () {
    var text = 'I am a physicist interested in quantum magnonics';
    var el = document.getElementById('typewriter-text');
    var i = 0;
    setTimeout(function () {
        var timer = setInterval(function () {
            el.textContent += text[i];
            i++;
            if (i === text.length) clearInterval(timer);
        }, 50);
    }, 800);
}());

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
    document.getElementById(loc).scrollIntoView();
}

function SummaryShowHide(summary, pap_title) {
    var summ = document.getElementById(summary);

    if (summ.style.display == "") {
        summ.style.display = "block";
    } else {
        summ.style.display = "";
    }
}
