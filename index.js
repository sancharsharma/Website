(function () {
    var text = 'Magnets do more than stick to your fridge';
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
        pubbutton.innerHTML = "Hide the publication list";
        pubbutton.classList.add("open");
    } else {
        publist.style.display = "";
        pubbutton.innerHTML = "Show relevant publications";
        pubbutton.classList.remove("open");
    }
}

function ToScroll(loc) {
    document.getElementById(loc).scrollIntoView();
}

function ProposalShowHide(files_id, button_id) {
    var files = document.getElementById(files_id);
    var button = document.getElementById(button_id);

    if (files.style.display == "") {
        files.style.display = "block";
        button.classList.add("open");
    } else {
        files.style.display = "";
        button.classList.remove("open");
    }
}

function SummaryShowHide(summary, pap_title) {
    var summ = document.getElementById(summary);

    if (summ.style.display == "") {
        summ.style.display = "block";
    } else {
        summ.style.display = "";
    }
}
