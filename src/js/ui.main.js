(function($) {

    $(document).ready(function () {

        /**
         * Variables
         */

        var resizeClass = 'k-is-resizing',
            resizeTimer;


        /**
         * Footable
         */

        function footable() {
            var $footable = $('.k-js-responsive-table');
            if ($footable.length) {
                $footable.removeClass('footable footable-loaded').footable({
                    toggleSelector: '.footable-toggle',
                    breakpoints: {
                        phone: 400,
                        tablet: 600,
                        desktop: 800
                    }
                });
            }
        }


        /**
         * Select 2
         */

        function select2() {
            var $select2 = $('.k-js-select2');
            if ($select2.length) {
                $select2.select2({
                    theme: "bootstrap"
                });
            }
        }


        /**
         * Datepicker
         */

        function datepicker() {
            var $datepicker = $('.k-js-datepicker');
            if ($datepicker.length) {
                $datepicker.kdatepicker();
            }
        }


        /**
         * Magnific popup
         */

        function modal() {
            var $magnificImage = $('.k-js-image-modal'),
                $magnificInline = $('.k-js-inline-modal'),
                $magnificIframe = $('.k-js-iframe-modal');

            if ($magnificImage.length || $magnificInline.length || $magnificIframe.length) {
                if ($magnificImage.length) {
                    $magnificImage.magnificPopup({type: 'image'});
                }
                if ($magnificInline.length) {
                    $magnificInline.magnificPopup({type: 'inline'});
                }
                if ($magnificIframe.length) {
                    $magnificIframe.magnificPopup({type: 'iframe'});
                }
            }
        }


        /**
         * Tooltip
         */

        function tooltip() {
            var $tooltip = $('.k-js-tooltip');
            if ($tooltip.length) {
                $tooltip.ktooltip({
                    animation: true,
                    placement: 'top',
                    delay: {show: 200, hide: 50},
                    container: '.k-ui-container'
                });
            }
        }


        /**
         * Sidebar toggle
         *
         * Toggleable sidebar item
         * Not needed to reload since sidebar will stay
         */

        var $sidebarToggle = $('.k-js-sidebar-toggle-item');
        if ( $sidebarToggle.length ) {
            var toggle = $('<div class="k-sidebar-item__toggle"><span class="k-visually-hidden">Toggle</span></div>');
            $sidebarToggle.addClass('k-sidebar-item--toggle').find('.k-sidebar-item__header').append(toggle);
            $sidebarToggle.on('click', '.k-sidebar-item__toggle', function(event) {
                $(this).toggleClass('k-is-active').parent().next().slideToggle(180);
            });
        }


        /**
         * Konami
         * Not needed to reload since we're targeting html element which won't change
         */

        new Konami(function() {
            $('html, .k-ui-container').css({
                'font-family': 'Comic Sans MS'
            });
        });


        /**
         * Load functions
         *
         * Quick function to run all functions
         * Use on:
         * - Page load
         * - AJAX change
         * - On other DOM changes when needed
         */

        kodekitUI.loadFunctions = function() {

            /**
             * Local functions
             */

            footable();
            select2();
            datepicker();
            modal();
            tooltip();

            /**
             * Global kodekitUI functions
             */

            kodekitUI.tabsScroller();
            kodekitUI.sidebarToggle();
            kodekitUI.scopebarToggles();
            kodekitUI.subcontentToggle();
            kodekitUI.gallery();
            kodekitUI.dragger();
        };


        /**
         * Run functions DOM loaded
         * Load "ajaxloading" only once to make sure events are not fire multiple times
         */

        kodekitUI.loadFunctions();
        kodekitUI.ajaxloading();


        /**
         * Window resize
         */

        $(window).on('resize', function() {

            // Add class to body when resizing so we can add styling to the page
            $('body').addClass(resizeClass);

            // Throttle
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {

                // Remove the class when resize is done
                $('body').removeClass(resizeClass);

            }, 200);
        });


        /**
         * Tab change
         * Run code on tab change
         */

        $('a[data-k-toggle="tab"]').on('shown', function (e) {
            footable();
        });


        /**
         * AJAX loaded
         */

        kodekitUI.loaded = function(responseTxt, statusTxt, xhr, pageHead, pageTitle) {

            /**
             * Run functions
             */

            kodekitUI.loadFunctions();


            /**
             * Run onload event if it's defined
             */

            if ( kodekitUI.onAjaxLoad !== undefined ) {
                kodekitUI.onAjaxLoad(responseTxt, statusTxt, xhr, pageHead, pageTitle);
            }

        };

    });

})(kQuery);
