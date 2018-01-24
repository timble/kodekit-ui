/**
 * Gallery
 */

(function($) {

    $(document).ready(function () {

        kodekitUI.gallery = function() {

            var $gallery = $('.k-js-gallery');
            if ( $gallery.length ) {

                // variables
                var galleryMaxWidth = $gallery.attr('data-maxwidth') || 240,
                    supportsGrid = CSS.supports('display', 'grid'),
                    galleryEventTimeout;

                // Set width for gallery items
                $gallery.find('.k-gallery__items').each(function() {
                    kodekitUI.createCookie("kodekitUI.gallerywidth", galleryMaxWidth);
                    kodekitUI.setCSS(
                        '.k-ui-namespace .k-gallery__items {' +
                            'grid-template-columns: repeat(auto-fill, minmax('+galleryMaxWidth+'px, 1fr))' +
                        '}'
                    );
                });

                // Throttle window resize function for better performance
                var resizeThrottler = function() {
                    if (!galleryEventTimeout) {
                        galleryEventTimeout = setTimeout(function() {
                            galleryEventTimeout = null; // Reset timeout
                            // Walk through all galleries
                            setWidth();
                        }, 200);
                    }
                };

                // Set Width
                var setWidth = function() {
                    var galleryWidth = parseFloat($gallery.width()),
                        items = Math.ceil(galleryWidth / galleryMaxWidth);
                    $gallery.attr('data-gallery-items', items);
                };

                // Only run when CSS grid is not supported
                if (supportsGrid !== true && $gallery.length !== 0) {

                    // Run on default
                    setWidth();

                    // Run on window resize
                    window.addEventListener( 'resize', resizeThrottler );
                }
            }

        };

    });

})(kQuery);
