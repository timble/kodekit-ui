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

        var $footable = $('.k-js-responsive-table');
        if ($footable.length) {
            $footable.footable({
                toggleSelector: '.footable-toggle',
                breakpoints: {
                    phone: 400,
                    tablet: 600,
                    desktop: 800
                }
            });
        }


        /**
         * Select 2
         */

        var $select2 = $('.k-js-select2');
        if ($select2.length) {
            $select2.select2({
                theme: "bootstrap"
            });
        }


        /**
         * Datepicker
         */

        var $datepicker = $('.k-js-datepicker');
        if ($datepicker.length) {
            $datepicker.kdatepicker();
        }


        /**
         * Magnific popup
         */

        var $magnificImage = $('.k-js-image-modal'),
            $magnificInline = $('.k-js-inline-modal'),
            $magnificIframe = $('.k-js-iframe-modal');

        if ($magnificImage.length || $magnificInline.length || $magnificIframe.length) {
            if ($magnificImage.length) { $magnificImage.magnificPopup({type:'image'}); }
            if ($magnificInline.length) { $magnificInline.magnificPopup({type:'inline'}); }
            if ($magnificIframe.length) { $magnificIframe.magnificPopup({type:'iframe'}); }
        }


        /**
         * Tooltip
         */

        var $tooltip = $('.k-js-tooltip');
        if ($tooltip.length) {
            $tooltip.ktooltip({
                animation: true,
                placement: 'top',
                delay: { show: 200, hide: 50 },
                container: '.k-ui-container'
            });
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

        kodekitUI.loaded = function() {

            // Select2
            if ($select2.length) {
                $('.k-js-select2').select2({
                    theme: "bootstrap"
                });
            }


            /**
             * (RE)-Load kodekitUI functions
             */

            kodekitUI.tabsScroller();
            kodekitUI.sidebarToggle();
            kodekitUI.scopebarToggles();
            kodekitUI.subcontentToggle();
            kodekitUI.gallery();
            kodekitUI.dragger();

        };

    });

})(kQuery);
