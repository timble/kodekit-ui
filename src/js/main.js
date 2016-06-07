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
                sidebar_left  = $('#k-sidebar'),
                sidebar_right = $('#k-sidebar-right');

            if (sidebar_left.length) {
                var left_toggle = $(toggle_button);
                left_toggle.addClass('off-canvas-menu-toggle-holder--right');

                if ($titlebar.length) {
                    $titlebar.prepend(left_toggle);
                } else if ($toolbar.length) {
                    $toolbar.prepend(left_toggle);
                }

                sidebar_left.offCanvasMenu({
                    menuToggle: left_toggle,
                    wrapper: $wrapper,
                    container: $content
                });
            }

            if (sidebar_right.length) {
                var right_toggle = $(toggle_button);
                right_toggle.addClass('off-canvas-menu-toggle-holder--right');

                if ($titlebar.length) {
                    $titlebar.append(right_toggle);
                } else if ($toolbar.length) {
                    $toolbar.append(right_toggle);
                }

                sidebar_right.offCanvasMenu({
                    menuToggle: right_toggle,
                    wrapper: $wrapper,
                    container: $content,
                    position: 'right'
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
