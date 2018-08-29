/**
 * Sidebar off-canvas toggles
 */

(function($) {

    kodekitUI.ajaxloading = function() {

        var ajaxLink = $('[data-ajax-target]');
        if ( ajaxLink.length ) {

            $('.k-ui-container').on('click', ajaxLink, function(event) {

                // Variables
                var $target = event.target,
                    href = $target.href,
                    ajaxTarget = $($target).attr('data-ajax-target'),
                    activeClass = 'k-is-active';

                if ( !ajaxTarget ) return;

                event.preventDefault();
                event.stopPropagation();

                // Find the 'active' element
                var getActiveElement = function(element) {
                    for ( ; element && element !== document; element = element.parentNode ) {
                        if ( $(element).parent().find('.'+activeClass).length ) return element;
                    }
                    return null;
                };
                var $activeElement = getActiveElement($target);

                // Remove class from siblings and add class to current item
                $($activeElement).parent().children('.'+activeClass).removeClass(activeClass);
                $($activeElement).addClass(activeClass);

                // Load
                // warning: <script> will get stripped from content
                $('#'+ajaxTarget).load(href + ' #'+ajaxTarget+' > :first-child', function(responseTxt, statusTxt, xhr) {

                    // Success
                    if(statusTxt == "success") {

                        // Trigger close sidebar click when changing menu items
                        if ( $('.k-js-wrapper').hasClass('k-show-left-menu') ) {
                            $('.k-off-canvas-toggle--left').trigger('click');
                        }

                        // Flat text page values
                        var pageHead = responseTxt.split('<head>')[1].split('</head>')[0],
                            pageTitle = pageHead.split('<title>')[1].split('</title>')[0];

                        // Trigger loaded code
                        kodekitUI.loaded(responseTxt, statusTxt, xhr, pageHead, pageTitle);

                    }

                    // Error
                    if(statusTxt == "error") {
                        console.error("Error: " + xhr.status + ": " + xhr.statusText);
                    }

                });

            });

        }

    };

})(kQuery);
