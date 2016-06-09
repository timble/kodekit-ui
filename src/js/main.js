(function($) {

    $(document).ready(function () {

        // Variables
        var $wrapper = $('.k-wrapper'),
            $titlebar = $('.k-titlebar'),
            $toolbar = $('.k-toolbar'),
            $content = $('.k-content'),
            $fixedtable = $('.table--fixed'),
            $clickable = $('a, button'),
            $searchtoggle = $('.js-toggle-search'),
            $filtertoggle = $('.js-toggle-filters'),
            $footable = $('.footable'),
            $overflow = $('.k-sidebar__item--overflow'),
            resizeClass = 'k-is-resizing';

        // Sidebar
        if ( ($toolbar.length || $titlebar.length) && $wrapper.length && $content.length)
        {
            var toggle_button = '<div class="off-canvas-menu-toggle-holder"><button class="off-canvas-menu-toggle" type="button">' +
                '<span class="bar1"></span>' +
                '<span class="bar2"></span>' +
                '<span class="bar3"></span>' +
                '</button></div>',
                sidebar_left  = $('.js-sidebar-left'),
                sidebar_right = $('.js-sidebar-right');

            function addOffCanvasButton(element, position) {
                // Variables
                var kContainer = '.koowa-container',
                    titlebar = element.closest(kContainer).find('.k-titlebar')[0],
                    toolbar = element.closest(kContainer).find('.k-toolbar')[0],
                    wrapper = element.closest(kContainer).find('.k-wrapper')[0],
                    content = element.closest(kContainer).find('.k-content')[0],
                    toggle = element.closest(kContainer).find('.off-canvas-menu-toggle-holder--' + position),
                    $toggle = $(toggle_button);

                // Add proper class to toggle buttons
                $toggle.addClass('off-canvas-menu-toggle-holder--' + position);

                // Add toggle buttons
                if ( toggle[0] == undefined ) {
                    if ( titlebar != undefined ) {
                        if ( position == 'left' ) {
                            $(titlebar).prepend($toggle);
                        } else if ( position == 'right') {
                            $(titlebar).append($toggle);
                        }
                    } else if ( toolbar != undefined ) {
                        if ( position == 'left' ) {
                            $(toolbar).prepend($toggle);
                        } else if ( position == 'right') {
                            $(toolbar).append($toggle);
                        }
                    }

                    // Initialize the offcanvas plugin
                    element.offCanvasMenu({
                        menuToggle: $toggle,
                        wrapper: $(wrapper),
                        container: $(content),
                        position: position
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
            $overflow.overflowing();
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

        // Clickable items
        if ( $clickable.length ) {
            $clickable.click(function() {
                $(this).toggleClass('k-opened');
            });
        }

        // Toggle search
        $searchtoggle.click(function() {
            $('.k-scopebar__item--search').slideToggle('fast');
        });

        // Filter search
        $filtertoggle.click(function() {
            $('.k-scopebar__filters').toggle('fast');
        });

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

    });

})(kQuery);

