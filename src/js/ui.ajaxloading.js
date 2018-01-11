/**
 * Sidebar off-canvas toggles
 */

(function($) {

    $(document).ready(function () {

        kodekitUI.ajaxloading = function() {

            // Variables
            var $sidebarLeftLink = $('.k-js-ajax-content');

            if ( $sidebarLeftLink.length ) {
                $sidebarLeftLink.on('click', 'a', function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    var href = $(this)[0].href;
                    var $ul = $(this).parent().parent('ul');

                    $ul.find('.k-is-active').removeClass('k-is-active');
                    $(this).parent('li').addClass('k-is-active');

                    // Load
                    $("#k-js-ajax-content").load(href + " #k-js-ajax-content-child", function(responseTxt, statusTxt, xhr){
                        if(statusTxt == "success") {
                            // Trigger close sidebar click when changing menu items
                            if ( $('.k-js-wrapper').hasClass('k-show-left-menu') ) {
                                $('.k-off-canvas-toggle--left').trigger('click');
                            }

                            // Trigger loaded code
                            kodekitUI.loaded();
                        }
                        if(statusTxt == "error") {
                            console.log('error');
                        }
                    });
                });
            }
        };

    });

})(kQuery);
