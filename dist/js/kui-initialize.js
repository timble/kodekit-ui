// Create cookie
function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires="+date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
}

// Read cookie
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
}

// Erase cookie
function eraseCookie(name) {
    createCookie(name,"",-1);
}

// Middlepane code
var kodekitUI = {}; // Object for public APIs

kodekitUI.setCSS = function(width) {
    // Get style element
    var style = document.querySelector('[data-type]', 'middlepanewidth');
    var css =
        '@media screen and (min-width: 1024px) {' +
            '.k-ui-container .k-content:not(:only-child) {' +
                'min-width:'+width+'px;' +
                'width:'+width+'px;' +
                'max-width:'+width+'px;' +
            '}' +
        '}';

    // Add CSS to style element
    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.innerHTML = css;
    }
};

(function () {

    // Add class to html element
    var el = document.documentElement;
    var cl = "k-js-enabled";
    if (el.classList) {
        el.classList.add(cl);
    } else {
        el.className += " " + cl;
    }

    // Set width of list area
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    var widthCookieValue = readCookie("middlepanewidth");

    // Add style element
    style.type = 'text/css';
    style.setAttribute('data-type', 'middlepanewidth');
    head.appendChild(style);

    // If a cookie is set
    if (widthCookieValue !== null) {
        kodekitUI.setCSS(widthCookieValue);
    }

})();

