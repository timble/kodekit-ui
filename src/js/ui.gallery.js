/**
 * Gallery
 */

(function($) {

    $(document).ready(function () {

        kodekitUI.gallery = function() {

            var $gallery = $('.k-gallery');
            if ( $gallery.length ) {

                // variables
                var galleryItems = $gallery[0].querySelector('.k-gallery__items'),
                    galleryMaxWidth = parseInt(((window.getComputedStyle(galleryItems, null).getPropertyValue('content')).split('"')[1]), 10),
                    galleryEventTimeout;

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
                    $gallery.attr('data-gallery-items', items - 1);
                };

                // Only run when CSS grid is not supported
                if ($gallery.length !== 0) {

                    // Run on default
                    setWidth();

                    // Run on window resize
                    window.addEventListener( 'resize', resizeThrottler );
                }
            }

        };

    });

})(kQuery);
