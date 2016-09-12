(function($) {

    $(document).ready(function () {

        // Variables
        var $fixedtable = $('.k-js-fixed-table-header'),
            $footable = $('.k-js-responsive-table'),
            $overflow = $('.k-js-sidebar-overflow-item'),
            $sidebarToggle = $('.k-js-sidebar-toggle-item'),
            $scopebar = $('.k-js-scopebar');

        // Sidebar
        if ($('.k-js-title-bar, .k-js-toolbar').length && $('.k-js-wrapper').length && $('.k-js-content').length)
        {
            var toggle_button = '<div class="k-off-canvas-menu-toggle-holder"><button class="k-off-canvas-menu-toggle" type="button">' +
                    '<span class="k-toggle-button-bar1"></span>' +
                    '<span class="k-toggle-button-bar2"></span>' +
                    '<span class="k-toggle-button-bar3"></span>' +
                    '</button></div>',
                sidebar_left  = $('.k-js-sidebar-left'),
                sidebar_right = $('.k-js-sidebar-right');

            function addOffCanvasButton(element, position) {
                // Variables
                var kContainer = '.koowa-container',
                    container = element.closest(kContainer),
                    titlebar = container.find('.k-js-title-bar'),
                    toolbar = container.find('.k-js-toolbar'),
                    wrapper = container.find('.k-js-wrapper'),
                    content = container.find('.k-js-content'),
                    toggle = container.find('.k-off-canvas-menu-toggle--' + position),
                    $toggle = $(toggle_button),
                    $toggleButton = null,
                    transitionElements = content;

                // Add proper class to toggle buttons
                $toggle.children('button').addClass('k-off-canvas-menu-toggle--' + position);

                // Add toggle buttons
                if (toggle.length === 0) {
                    if ( titlebar.length) {
                        if ( position == 'left' ) {
                            titlebar.prepend($toggle);
                        } else if ( position == 'right') {
                            titlebar.append($toggle);
                        }

                        $toggleButton = $('.k-off-canvas-menu-toggle--' + position);
                        transitionElements = [content, titlebar];

                    } else if (toolbar.length) {
                        if ( position == 'left' ) {
                            toolbar.prepend($toggle);
                        } else if ( position == 'right') {
                            toolbar.append($toggle);
                        }

                        $toggleButton = $('.k-off-canvas-menu-toggle--' + position);
                    }

                    // Initialize the offcanvas plugin
                    element.offCanvasMenu({
                        menuToggle: $toggleButton,
                        wrapper: wrapper,
                        container: content,
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
                $.each(sidebar_right, function() {
                    addOffCanvasButton($(this), 'right');
                });
            }
        }

        // Overflowing items
        $overflow.addClass('k-sidebar-item--overflow').overflowing();

        // Footable
        $footable.footable({
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

        //fixedTable();

        // Filter and search toggle buttons in the scopebar
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
                        // @TODO: Ercan: START This should only be visible when there's an active filter
                        '<div class="js-filter-count k-scopebar__item-label"></div>' +
                        // @TODO: Ercan: END
                        '</button>');
                }

                if ( $scopebarSearch.length && !$this.find('.k-toggle-scopebar-search').length ) {
                    toggleButtons.prepend('<button type="button" class="k-scopebar__button k-toggle-scopebar-search k-js-toggle-search">' +
                        '<span class="k-icon-magnifying-glass" aria-hidden="true">' +
                        '<span class="k-visually-hidden">Search toggle</span>' +
                        // @TODO: Ercan: START This should only be visible when search is being used by the user
                        '<div class="js-search-count k-scopebar__item-label"></div>' +
                        // @TODO: Ercan: END
                        '</button>');
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

        // Select2
        $('.k-js-select2').select2({
            theme: "bootstrap"
        });

        // Datepicker
        $('.k-js-datepicker').datepicker();

        // Magnific
        $('.k-js-image-modal').magnificPopup({type:'image'});
        $('.k-js-inline-modal').magnificPopup({type:'inline'});
        $('.k-js-iframe-modal').magnificPopup({type:'iframe'});

        // Tooltips
        $('.k-js-tooltip').ktooltip({
            animation: true,
            placement: 'top',
            delay: { show: 200, hide: 50 },
            container: '.koowa-container'
        });

        // Add a class during resizing event so we can hide overflowing stuff
        var resizeTimer,
            resizeClass = 'k-is-resizing';

        $(window).on('resize', function() {
            $('body').addClass(resizeClass);

            // Remove the class when resize is done
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                $('body').removeClass(resizeClass);
                $fixedtable.floatThead('reflow');
            }, 250);
        });

        // Sidebar block toggle (e.g. quick filters)
        if ( $sidebarToggle.length ) {
            var toggle = $('<div class="k-sidebar-item__toggle"><span class="k-visually-hidden">Toggle</span></div>');

            $sidebarToggle.addClass('k-sidebar-item--toggle')
                .find('.k-sidebar-item__header').append(toggle);

            $sidebarToggle.on('click', '.k-sidebar-item__toggle', function(event) {
                toggle.toggleClass('k-is-active').parent().next().slideToggle(180);
            });
        }

        // Konami
        new Konami(function() {
            $('html, .koowa-container').css({
                'font-family': 'Comic Sans MS',
                'font-size': '20px',
                'line-height': '30px'
            }).addClass('konami');
        });

        // Styleguide tree
        new Koowa.Tree('#k-jqtree', {
            "data": [
                {"label":"Main category","id":4},
                {"label":"Sub category 1","id":5,"parent":4},
                {"label":"Sub category 2","id":6,"parent":4},
                {"label":"Deeper category","id":7,"parent":6},
                {"label":"Sub category 3","id":8,"parent":4}
            ]
        });
    });

})(kQuery);
