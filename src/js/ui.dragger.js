/**
 * Sidebar off-canvas toggles
 */

(function($) {

    var styleElement;

    function setCSS(css) {
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.type = 'text/css';
            styleElement.setAttribute('data-type', 'kodekitStyles');
            (document.head || document.getElementsByTagName('head')[0]).appendChild(styleElement);
        }

        // Add CSS to style element
        if (styleElement.styleSheet){
            styleElement.styleSheet.cssText += css;
        } else {
            styleElement.innerHTML += css;
        }
    }

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

    kodekitUI.dragger = function() {

        var middlepane = document.querySelector(".k-js-middlepane");
        if (middlepane !== null && document.querySelector('.k-pane-resizer') == undefined) {

            // If a cookie is set for middlepane
            var middlepaneWidthCookieValue = readCookie("kodekitUI.middlepanewidth");

            if (middlepaneWidthCookieValue !== null) {
                setCSS(
                    '@media screen and (min-width: 1024px) {' +
                    '.k-ui-container .k-content-area .k-content:not(:last-child) {' +
                    'min-width:'+middlepaneWidthCookieValue+'px;' +
                    'width:'+middlepaneWidthCookieValue+'px;' +
                    'max-width:'+middlepaneWidthCookieValue+'px;' +
                    '}' +
                    '}'
                );
            }

            var middlepaneResizer = document.createElement("div");
            middlepaneResizer.className = "k-pane-resizer";
            middlepane.appendChild(middlepaneResizer);
            middlepaneResizer.addEventListener("mousedown", initDrag, false);
            var startW, startWidth, newWidth, direction;
        }

        function initDrag(e) {
            startW = e.clientX;
            startWidth = parseInt(document.defaultView.getComputedStyle(middlepane).width, 10);
            direction = document.documentElement.getAttribute('dir') || 'ltr';
            document.documentElement.addEventListener("mousemove", doDrag, false);
            document.documentElement.addEventListener("mouseup", stopDrag, false);
        }

        function doDrag(e) {
            document.getElementsByClassName('k-ui-container')[0].classList.add("k-is-unresponsive");
            if ( direction == 'ltr' ) {
                newWidth = (startWidth + e.clientX - startW);
            } else {
                newWidth = (startWidth - (e.clientX - startW));
            }
            if (newWidth <= 221) {
                newWidth = 221;
            }
            middlepane.style.width = newWidth + "px";
            middlepane.style.minWidth = newWidth + "px";
            middlepane.style.maxWidth = newWidth + "px";
        }

        function stopDrag(e) {
            document.documentElement.removeEventListener("mousemove", doDrag, false);
            document.documentElement.removeEventListener("mouseup", stopDrag, false);
            document.getElementsByClassName('k-ui-container')[0].classList.remove("k-is-unresponsive");
            middlepane.removeAttribute('style');

            var width;

            if ( direction == 'ltr' ) {
                width = startWidth + e.clientX - startW;
            } else {
                width = (startWidth - (e.clientX - startW));
            }
            if (width <= 221) {
                width = 221;
            }

            createCookie("kodekitUI.middlepanewidth", width);
            setCSS(
                '@media screen and (min-width: 1024px) {' +
                '.k-ui-container .k-content-area .k-content:not(:last-child) {' +
                'min-width:'+width+'px;' +
                'width:'+width+'px;' +
                'max-width:'+width+'px;' +
                '}' +
                '}'
            );
            window.dispatchEvent(new Event('resize'));
        }
    };

})(kQuery);
