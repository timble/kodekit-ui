(function($) {

    $(document).ready(function () {

        // Variables
        var $wrapper = $('.k-wrapper'),
            $titlebar = $('.k-title-bar'),
            $toolbar = $('.k-toolbar'),
            $content = $('.k-content'),
            $fixedtable = $('.k-js-fixed-table-header'),
            $searchtoggle = $('.k-js-toggle-search'),
            $filtertoggle = $('.k-js-toggle-filters'),
            $footable = $('.k-js-responsive-table'),
            $overflow = $('.k-sidebar-item--overflow'),
            resizeClass = 'k-is-resizing',
            $sidebarToggle = $('.k-sidebar-item--toggle');

        // Sidebar
        if ( ($toolbar.length || $titlebar.length ) && $wrapper.length && $content.length)
        {
            var toggle_button = '<div class="k-off-canvas-menu-toggle-holder"><button class="k-off-canvas-menu-toggle" type="button">' +
                '<span class="bar1"></span>' +
                '<span class="bar2"></span>' +
                '<span class="bar3"></span>' +
                '</button></div>',
                sidebar_left  = $('.k-js-sidebar-left'),
                sidebar_right = $('.k-js-sidebar-right');

            function addOffCanvasButton(element, position) {
                // Variables
                var kContainer = '.koowa-container',
                    titlebar = element.closest(kContainer).find('.k-title-bar')[0],
                    toolbar = element.closest(kContainer).find('.k-toolbar')[0],
                    wrapper = element.closest(kContainer).find('.k-wrapper')[0],
                    content = element.closest(kContainer).find('.k-content')[0],
                    toggle = element.closest(kContainer).find('.k-off-canvas-menu-toggle-holder--' + position),
                    $toggle = $(toggle_button),
                    transitionElements = $(content);

                // Add proper class to toggle buttons
                $toggle.addClass('k-off-canvas-menu-toggle-holder--' + position);

                // Add toggle buttons
                if ( toggle[0] == undefined ) {
                    if ( titlebar != undefined ) {
                        if ( position == 'left' ) {
                            $(titlebar).prepend($toggle);
                        } else if ( position == 'right') {
                            $(titlebar).append($toggle);
                        }
                        transitionElements = [$(content), $(titlebar)]
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

        // Toggle search
        $searchtoggle.click(function() {
            $('.k-scopebar__item--search').slideToggle('fast');
        });

        // Filter search
        $filtertoggle.click(function() {
            $('.k-scopebar__filters').toggle('fast');
        });

        // Select2
        var $select2 = $('.k-js-select2');
        $select2.select2({
            theme: "bootstrap"
        });

        // jqTree
        var jqTree = $('#k-jqtree');
        if ( jqTree.length ) {

            var jqTreeData = [
                {
                    name: 'node1',
                    children: [
                        { name: 'child1' },
                        { name: 'child2' }
                    ]
                },
                {
                    name: 'node2',
                    children: [
                        { name: 'child3' }
                    ]
                }
            ];

            jqTree.tree({
                data: jqTreeData
            })
        }


        // Datepicker
        var datepicker = $('.k-js-datepicker');
        if ( datepicker.length ) {
            datepicker.koowaDatepicker();
        }

        // Magnific
        var magnific = $('.k-js-modal');
        if ( magnific.length ) {
            magnific.magnificPopup({type: 'image'});
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
            $sidebarToggle.find('.k-sidebar-item__header').append('<div class="k-sidebar-item__toggle"><span class="visually-hidden">Toggle</span></div>');
            var $sidebarToggleHandler = $('.k-sidebar-item__toggle');
            $sidebarToggle.on('click', '.k-sidebar-item__toggle', function() {
                $sidebarToggleHandler.toggleClass('is-active').parent().next().slideToggle(180);
            });
        }

    });

})(kQuery);

