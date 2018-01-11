(function($) {

    $(document).ready(function () {

        /**
         * Variables
         */

        var $footable = $('.k-js-responsive-table'),
            $sidebarToggle = $('.k-js-sidebar-toggle-item'),
            $scopebar = $('.k-js-scopebar'),
            $select2 = $('.k-js-select2'),
            $datepicker = $('.k-js-datepicker'),
            $magnificImage = $('.k-js-image-modal'),
            $magnificInline = $('.k-js-inline-modal'),
            $magnificIframe = $('.k-js-iframe-modal'),
            $tooltip = $('.k-js-tooltip'),
            $gallery = $('.k-js-gallery'),
            resizeClass = 'k-is-resizing',
            resizeTimer;


        /**
         * Footable
         */

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

        if ($select2.length) {
            $select2.select2({
                theme: "bootstrap"
            });
        }


        /**
         * Datepicker
         */

        if ($datepicker.length) {
            $datepicker.kdatepicker();
        }


        /**
         * Magnific popup
         */

        if ($magnificImage.length || $magnificInline.length || $magnificIframe.length) {
            if ($magnificImage.length) { $magnificImage.magnificPopup({type:'image'}); }
            if ($magnificInline.length) { $magnificInline.magnificPopup({type:'inline'}); }
            if ($magnificIframe.length) { $magnificIframe.magnificPopup({type:'iframe'}); }
        }


        /**
         * Tooltip
         */

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

        if ( $sidebarToggle.length ) {
            var toggle = $('<div class="k-sidebar-item__toggle"><span class="k-visually-hidden">Toggle</span></div>');
            $sidebarToggle.addClass('k-sidebar-item--toggle').find('.k-sidebar-item__header').append(toggle);
            $sidebarToggle.on('click', '.k-sidebar-item__toggle', function(event) {
                $(this).toggleClass('k-is-active').parent().next().slideToggle(180);
            });
        }


        /**
         * Filter and search toggle buttons in the scopebar
         */

        if ( $scopebar.length ) {

            $.each($scopebar, function() {

                var $this = $(this),
                    $scopebarFilters = $this.find('.k-scopebar__item--filters'),
                    $scopebarSearch = $this.find('.k-scopebar__item--search'),
                    scopebarToggleClass = '.k-scopebar__item--toggle-buttons',
                    scopebarToggleButtonContainer = '<div class="k-scopebar__item k-scopebar__item--toggle-buttons"></div>';

                if ( !$this.find(scopebarToggleClass).length ) {
                    $this.prepend(scopebarToggleButtonContainer);
                }
                var toggleButtons = $this.find(scopebarToggleClass);

                if ( $scopebarFilters.length && !$this.find('.k-toggle-scopebar-filters').length ) {
                    toggleButtons.prepend('<button type="button" class="k-scopebar__button k-toggle-scopebar-filters k-js-toggle-filters">' +
                        '<span class="k-icon-filter" aria-hidden="true">' +
                        '<span class="k-visually-hidden">Filters toggle</span>' +
                        '<div class="k-js-filter-count k-scopebar__item-label k-scopebar__item-label--numberless"></div>' +
                        '</button>');
                }

                if ( $scopebarSearch.length && !$this.find('.k-toggle-scopebar-search').length ) {

                    toggleButtons.prepend('<button type="button" class="k-scopebar__button k-toggle-scopebar-search k-js-toggle-search">' +
                        '<span class="k-icon-magnifying-glass" aria-hidden="true">' +
                        '<span class="k-visually-hidden">Search toggle</span>' +
                        '<div class="k-js-search-count k-scopebar__item-label k-scopebar__item-label--numberless" style="display: none"></div>' +
                        '</button>');

                    if (toggleButtons.siblings('.k-scopebar__item--search').find('.k-search__field').val()) {
                        $('.k-js-search-count').show();
                    }
                }
            });

            // Toggle search
            $('.k-js-toggle-filters').on('click', function() {
                $(this).parent().siblings('.k-scopebar__item--filters').slideToggle('fast');
            });

            $('.k-js-toggle-search').on('click', function() {
                $(this).parent().siblings('.k-scopebar__item--search').slideToggle('fast');
            });
        }


        /**
         * Gallery
         */

        if ( $gallery.length ) {

            // variables
            var galleryMaxWidth = 240,
                supportsGrid = CSS.supports('display', 'grid'),
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


        /**
         * Load kodekitUI functions
         */

        kodekitUI.tabsScroller();
        kodekitUI.sidebarToggle();
        kodekitUI.subcontentToggle();
        kodekitUI.dragger();
        kodekitUI.ajaxloading();


        /**
         * Konami
         */

        new Konami(function() {
            $('html, .k-ui-container').css({
                'font-family': 'Comic Sans MS'
            });
        });


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

            // Sidebar toggles
            kodekitUI.sidebarToggle();

            // Tabs
            kodekitUI.tabsScroller();

            // Sidebar toggle
            kodekitUI.sidebarToggle();

            // Dragger
            kodekitUI.dragger();

            // Subcontent
            kodekitUI.subcontentToggle();
        };

    });

})(kQuery);
