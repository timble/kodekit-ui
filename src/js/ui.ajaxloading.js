/**
 * Sidebar off-canvas toggles
 */

(function($) {

    $(document).ready(function () {

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

                    var getActiveElement = function(element) {
                        for ( ; element && element !== document; element = element.parentNode ) {
                            if ( $(element).parent().find('.'+activeClass).length ) return element;
                        }
                        return null;
                    };

                    var $activeElement = getActiveElement($target);

                    $($activeElement).parent().children('.'+activeClass).removeClass(activeClass);
                    $($activeElement).addClass(activeClass);

                    // Load
                    // <script> will get stripped from content
                    setTimeout(function() {
                        $('#'+ajaxTarget).load(href + ' #'+ajaxTarget+' > :first-child', function(responseTxt, statusTxt, xhr) {
                            if(statusTxt == "success") {

                                // Trigger close sidebar click when changing menu items
                                if ( $('.k-js-wrapper').hasClass('k-show-left-menu') ) {
                                    $('.k-off-canvas-toggle--left').trigger('click');
                                }

                                // Flat text page value
                                var pageHead = responseTxt.split('<head>')[1].split('</head>')[0],
                                    pageTitle = pageHead.split('<title>')[1].split('</title>')[0];

                                // Trigger loaded code
                                kodekitUI.loaded(responseTxt, statusTxt, xhr, pageHead, pageTitle);

                            }
                            if(statusTxt == "error") {
                                console.error("Error: " + xhr.status + ": " + xhr.statusText);
                            }
                        });
                    }, 200);

                });

            }

        };

    });

})(kQuery);
