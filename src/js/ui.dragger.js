/**
 * Sidebar off-canvas toggles
 */

(function($) {

    $(document).ready(function () {

        kodekitUI.dragger = function() {
            var middlepane = document.querySelector(".k-js-middlepane");
            if (middlepane !== null) {
                var middlepaneResizer = document.createElement("div");
                middlepaneResizer.className = "k-pane-resizer";
                middlepane.appendChild(middlepaneResizer);
                middlepaneResizer.addEventListener("mousedown", initDrag, false);
                var startW, startWidth, newWidth;
            }

            function initDrag(e) {
                startW = e.clientX;
                startWidth = parseInt(document.defaultView.getComputedStyle(middlepane).width, 10);
                document.documentElement.addEventListener("mousemove", doDrag, false);
                document.documentElement.addEventListener("mouseup", stopDrag, false);
            }

            function doDrag(e) {
                document.getElementsByClassName('k-ui-container')[0].classList.add("is-unresponsive");
                newWidth = (startWidth + e.clientX - startW);
                if ((startWidth + e.clientX - startW) <= 221) {
                    newWidth = 221;
                }
                middlepane.style.width = newWidth + "px";
                middlepane.style.minWidth = newWidth + "px";
                middlepane.style.maxWidth = newWidth + "px";
            }

            function stopDrag(e) {
                document.documentElement.removeEventListener("mousemove", doDrag, false);
                document.documentElement.removeEventListener("mouseup", stopDrag, false);
                document.getElementsByClassName('k-ui-container')[0].classList.remove("is-unresponsive");
                middlepane.removeAttribute('style');

                var width = startWidth + e.clientX - startW;
                if (width <= 221) {
                    width = 221;
                }

                createCookie("middlepanewidth", width, 30);
                kodekitUI.setCSS(width);
                window.dispatchEvent(new Event('resize'));
            }
        };

    });

})(kQuery);
