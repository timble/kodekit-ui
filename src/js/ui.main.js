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
         */

        new Konami(function() {
            $('html, .k-ui-container').css({
                'font-family': 'Comic Sans MS'
            });
        });


        /**
         * Load functions
         */

        footable();
        select2();
        datepicker();
        modal();
        tooltip();

        /**
         * Load kodekitUI functions
         */

        kodekitUI.tabsScroller();
        kodekitUI.sidebarToggle();
        kodekitUI.scopebarToggles();
        kodekitUI.subcontentToggle();
        kodekitUI.gallery();
        kodekitUI.dragger();
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

                // Run tabs scroll function
                // @TODO: Move to scroller script itself?
                kodekitUI.tabsScroller();

            }, 200);
        });


        /**
         * AJAX loaded
         */

        kodekitUI.loaded = function(responseTxt, statusTxt, xhr, pageHead, pageTitle) {

            footable();
            select2();
            datepicker();
            modal();
            tooltip();

            // Tabs
            $('a[data-k-toggle="tab"]').on('shown', function (e) {
                footable();
                select2();
                datepicker();
                modal();
                tooltip();
            });


            /**
             * (RE)-Load kodekitUI functions
             */

            kodekitUI.tabsScroller();
            kodekitUI.sidebarToggle();
            kodekitUI.scopebarToggles();
            kodekitUI.subcontentToggle();
            kodekitUI.gallery();
            kodekitUI.dragger();


            /**
             * Run onload event if it's defined
             */

            if ( kodekitUI.onAjaxLoad !== undefined ) {
                kodekitUI.onAjaxLoad(responseTxt, statusTxt, xhr, pageHead, pageTitle);
            }

        };

    });

})(kQuery);
