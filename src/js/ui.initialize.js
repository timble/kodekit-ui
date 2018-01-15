// Middlepane code
var kodekitUI = {};

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

    // Add js-enabled class to html element
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
