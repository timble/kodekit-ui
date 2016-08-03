(function($) {

    $(document).ready(function () {

        // Variables
        var $wrapper = $('.k-js-wrapper'),
            $titlebar = $('.k-js-title-bar'),
            $toolbar = $('.k-js-toolbar'),
            $content = $('.k-js-content'),
            $fixedtable = $('.k-js-fixed-table-header'),
            $footable = $('.k-js-responsive-table'),
            $overflow = $('.k-js-sidebar-overflow-item'),
            resizeClass = 'k-is-resizing',
            $sidebarToggle = $('.k-js-sidebar-toggle-item'),
            $scopebar = $('.k-js-scopebar');

        // Sidebar
        if ( ($toolbar.length || $titlebar.length ) && $wrapper.length && $content.length)
        {
            var toggle_button = '<div class="k-off-canvas-menu-toggle-holder"><button class="k-off-canvas-menu-toggle" type="button">' +
                '<span class="k-hamburger-bar1"></span>' +
                '<span class="k-hamburger-bar2"></span>' +
                '<span class="k-hamburger-bar3"></span>' +
                '</button></div>',
                sidebar_left  = $('.k-js-sidebar-left'),
                sidebar_right = $('.k-js-sidebar-right');

            function addOffCanvasButton(element, position) {
                // Variables
                var kContainer = '.koowa-container',
                    titlebar = element.closest(kContainer).find('.k-js-title-bar')[0],
                    toolbar = element.closest(kContainer).find('.k-js-toolbar')[0],
                    wrapper = element.closest(kContainer).find('.k-js-wrapper')[0],
                    content = element.closest(kContainer).find('.k-js-content')[0],
                    toggle = element.closest(kContainer).find('.k-off-canvas-menu-toggle--' + position),
                    $toggle = $(toggle_button),
                    $toggleButton = '',
                    transitionElements = $(content);

                // Add proper class to toggle buttons
                $toggle.children('button').addClass('k-off-canvas-menu-toggle--' + position);

                // Add toggle buttons
                if ( toggle[0] == undefined ) {
                    if ( titlebar != undefined ) {
                        if ( position == 'left' ) {
                            $(titlebar).prepend($toggle);
                        } else if ( position == 'right') {
                            $(titlebar).append($toggle);
                        }
                        $toggleButton = $('.k-off-canvas-menu-toggle--' + position);
                        transitionElements = [$(content), $(titlebar)]
                    } else if ( toolbar != undefined ) {
                        if ( position == 'left' ) {
                            $(toolbar).prepend($toggle);
                        } else if ( position == 'right') {
                            $(toolbar).append($toggle);
                        }
                        $toggleButton = $('.k-off-canvas-menu-toggle--' + position);
                    }

                    // Initialize the offcanvas plugin
                    element.offCanvasMenu({
                        menuToggle: $toggleButton,
                        wrapper: $(wrapper),
                        container: $(content),
                        position: position,
                        transitionElements: transitionElements
                    });
                }
            }

            if (sidebar_left.length) {
                $.each(sidebar_left, function() {
                    addOffCanvasButton($(this), 'left');
                });
            }

            if (sidebar_right.length) {
                $.each(sidebar_right, function(i) {
                    addOffCanvasButton($(this), 'right');
                });
            }
        }

        // Overflowing items
        if ( $overflow.length ) {
            $overflow.addClass('k-sidebar-item--overflow').overflowing();
        }

        // Footable
        if ( $footable.length ) {
            $footable.on('click', '.footable-toggle', function(event){
                event.stopPropagation();
            }).footable({
                toggleSelector: '.footable-toggle',
                breakpoints: {
                    phone: 400,
                    tablet: 600,
                    desktop: 800
                }
            }).bind('footable_resizing', function() {
                $fixedtable.floatThead('destroy');
            }).bind('footable_resized', function() {
                fixedTable();
                $fixedtable.floatThead('reflow');
            });
        }

        // Sticky table header and footer
        function fixedTable() {
            if ( $fixedtable.length ) {
                $fixedtable.floatThead({
                    scrollContainer: function($table){
                        return $table.closest('.k-table');
                    },
                    enableAria: true
                });
            }
        }

        fixedTable();


        // Scopebar
        if ( $scopebar.length ) {

            $.each($scopebar, function(e) {

                var $scopebarFilters = $(this).find('.k-scopebar__item--filters'),
                    $scopebarBreadcrumbs = $(this).find('.k-scopebar__item--breadcrumbs'),
                    $scopebarSearch = $(this).find('.k-scopebar__item--search'),
                    scopebarToggleClass = '.k-scopebar__item--toggle-buttons',
                    scopebarToggleButtonContainer = '<div class="k-scopebar__item k-scopebar__item--toggle-buttons"></div>';

                if ( !$(this).find(scopebarToggleClass).length ) {
                    $(this).prepend(scopebarToggleButtonContainer);
                }
                var toggleButtons = $(this).find(scopebarToggleClass);

                if ( $scopebarFilters.length && !$(this).find('.k-toggle-scopebar-filters').length ) {
                    toggleButtons.prepend('<button type="button" class="k-scopebar__button k-toggle-scopebar-filters k-js-toggle-filters">' +
                        '<span class="k-icon-filter" aria-hidden="true">' +
                        '<span class="visually-hidden">Filters toggle</span>' +
                        '<div class="js-filter-count k-scopebar__item-label"></div>' +
                        '</button>');
                }

                if ( $scopebarBreadcrumbs.length && !$(this).find('.k-toggle-scopebar-breadcrumbs').length ) {
                    toggleButtons.prepend('<button type="button" class="k-scopebar__button k-toggle-scopebar-breadcrumbs k-js-toggle-breadcrumbs">' +
                        '<span class="k-icon-home" aria-hidden="true">' +
                        '<span class="visually-hidden">Breadcrumbs toggle</span>' +
                        '</button>');
                }

                if ( $scopebarSearch.length && !$(this).find('.k-toggle-scopebar-search').length ) {
                    toggleButtons.prepend('<button type="button" class="k-scopebar__button k-toggle-scopebar-search k-js-toggle-search">' +
                        '<span class="k-icon-magnifying-glass" aria-hidden="true">' +
                        '<span class="visually-hidden">Search toggle</span>' +
                        '</button>');
                }

            });

            var $filtertoggle = $('.k-js-toggle-filters'),
                $breadcrumbtoggle = $('.k-js-toggle-breadcrumbs'),
                $searchtoggle = $('.k-js-toggle-search');

            // Toggle search
            if ( $filtertoggle.length || $breadcrumbtoggle.length || $searchtoggle.length ) {

                $filtertoggle.on('click', function() {
                    $(this).parent().siblings('.k-scopebar__item--filters').slideToggle('fast');
                });

                $breadcrumbtoggle.on('click', function() {
                    $(this).parent().siblings('.k-scopebar__item--breadcrumbs').slideToggle('fast');
                });

                $searchtoggle.on('click', function() {
                    $(this).parent().siblings('.k-scopebar__item--search').slideToggle('fast');
                });
            }
        }


        // Tree
        new Koowa.Tree('#k-jqtree', {
            "data": [
                {"label":"Main category","id":4},
                {"label":"Sub category 1","id":5,"parent":4},
                {"label":"Sub category 2","id":6,"parent":4},
                {"label":"Deeper category","id":7,"parent":6},
                {"label":"Sub category 3","id":8,"parent":4}
            ]
        });

        // Select2
        var $select2 = $('.k-js-select2');
        $select2.select2({
            theme: "bootstrap"
        });

        // Datepicker
        var datepicker = $('.k-js-datepicker');
        if ( datepicker.length ) {
            datepicker.koowaDatepicker();
        }

        // Magnific
        var magnificImage = $('.k-js-image-modal');
        if ( magnificImage.length ) {
            magnificImage.magnificPopup({type:'image'});
        }

        var magnificInline = $('.k-js-inline-modal');
        if ( magnificInline.length ) {
            magnificInline.magnificPopup({type:'inline'});
        }

        var magnificIframe = $('.k-js-iframe-modal');
        if ( magnificIframe.length ) {
            magnificIframe.magnificPopup({type:'iframe'});
        }

        // Tooltips
        var tooltip = $('.k-js-tooltip');
        if ( tooltip.length ) {
            tooltip.tooltip({
                animation: true,
                placement: 'top',
                delay: { show: 200, hide: 50 },
                container: '.koowa-container'
            });
        }

        // Add a class during resizing event so we can hide overflowing stuff
        var resizeTimer;

        $(window).on('resize', function(e) {

            // Add the class
            $('body').addClass(resizeClass);

            // Remove the class when resize is done
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                $('body').removeClass(resizeClass);
                $fixedtable.floatThead('reflow');
            }, 250);

        });

        if ( $sidebarToggle.length )
        {
            $sidebarToggle.addClass('k-sidebar-item--toggle').find('.k-sidebar-item__header').append('<div class="k-sidebar-item__toggle"><span class="visually-hidden">Toggle</span></div>');
            var $sidebarToggleHandler = $('.k-sidebar-item__toggle');
            $sidebarToggle.on('click', '.k-sidebar-item__toggle', function() {
                $sidebarToggleHandler.toggleClass('k-is-active').parent().next().slideToggle(180);
            });
        }

        var easter_egg = new Konami(function() {
            $('html, .koowa-container').css({
                'font-family': 'Comic Sans MS',
                'font-size': '20px',
                'line-height': '30px'
            }).addClass('konami');
        });

    });

})(kQuery);

