var kodekitUI = {}; // global variable

// Run initialize code
(function () {

    // Add js-enabled class to html element
    var el = document.documentElement;
    var cl = "k-js-enabled";
    if (el.classList) {
        el.classList.add(cl);
    } else {
        el.className += " " + cl;
    }

})();
