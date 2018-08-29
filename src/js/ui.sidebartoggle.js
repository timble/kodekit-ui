/**
 * Sidebar off-canvas toggles
 */

(function($) {

    kodekitUI.sidebarToggle = function() {

        if ($('.k-js-title-bar, .k-js-toolbar').length && $('.k-js-wrapper').length && $('.k-js-content').length) {

            // Vars
            var sidebar_left  = $('.k-js-sidebar-left'),
                sidebar_right = $('.k-js-sidebar-right');

            function addOffCanvasButton(element, position) {

                var toggle_button_content = element.attr('data-toggle-button-content') || '<span class="k-toggle-button-bar1"></span><span class="k-toggle-button-bar2"></span><span class="k-toggle-button-bar3"></span>';
                var toggle_button = '<div class="k-off-canvas-toggle-holder">' +
                    '<button class="k-off-canvas-toggle" type="button">' +
                    toggle_button_content +
                    '</button>' +
                    '</div>';

                // Variables
                var kContainer = '.k-ui-container',
                    container = element.closest(kContainer),
                    titlebar = container.find('.k-js-title-bar'),
                    toolbar = container.find('.k-js-toolbar'),
                    wrapper = container.find('.k-js-wrapper'),
                    content = container.find('.k-js-content'),
                    contentArea = container.find('.k-js-content-area'),
                    page = container.find('.k-js-page'),
                    component = container.find('.k-js-component'),
                    toggle = container.find('.k-off-canvas-toggle--' + position),
                    $toggle = $(toggle_button),
                    $toggleButton = null,
                    transitionElements;

                // Add proper class to toggle buttons
                $toggle.addClass('k-off-canvas-toggle-holder--' + position).children('button').addClass('k-off-canvas-toggle--' + position);

                var offcanvascontainer = content;
                transitionElements = content;
                if ( contentArea.length ) {
                    offcanvascontainer = contentArea;
                    transitionElements = contentArea;
                }

                // Add toggle buttons
                if (toggle.length === 0) {
                    if ( position == 'left' ) {
                        if ( titlebar.length) {
                            titlebar.prepend($toggle);
                        } else if (toolbar.length) {
                            toolbar.prepend($toggle);
                        }
                    } else if ( position == 'right') {
                        if ( toolbar.length) {
                            toolbar.append($toggle);
                        } else if (titlebar.length) {
                            titlebar.append($toggle);
                        }
                        transitionElements = component;
                    }

                    $toggleButton = $('.k-off-canvas-toggle--' + position);

                    // Initialize the offcanvas plugin
                    element.offCanvasMenu({
                        menuToggle: $toggleButton,
                        openedClass: 'k-is-opened-' + position,
                        wrapper: wrapper,
                        container: offcanvascontainer,
                        position: position,
                        offCanvasOverlay: 'k-off-canvas-overlay-' + position,
                        transitionElements: transitionElements,
                        onBeforeToggleOpen: function() {
                            if ( $('.k-show-subcontent-area').length ) {
                                $('.k-js-subcontent-toggle').trigger('click');
                            }
                        }
                    });
                }
            }

            if (sidebar_left.length) {
                // Add button for left sidebar
                $.each(sidebar_left, function() {
                    addOffCanvasButton($(this), 'left');
                });

                var sidebarLeftTree = $('.k-tree'),
                    sidebarLeftList = $('.k-list');

                if ( ( sidebarLeftTree.length || sidebarLeftList.length ) ) {
                    sidebarLeftTree.on('click', '.jqtree-title', function() {
                        if ( $('.k-js-wrapper').hasClass('k-is-opened-left') ) {
                            $('.k-off-canvas-toggle--left').trigger('click');
                        }
                    });
                    sidebarLeftList.on('click', 'a', function() {
                        if ( $('.k-js-wrapper').hasClass('k-is-opened-left') ) {
                            $('.k-off-canvas-toggle--left').trigger('click');
                        }
                    });
                }


            }

            if (sidebar_right.length) {

                // Add button for right sidebar
                $.each(sidebar_right, function() {
                    addOffCanvasButton($(this), 'right');
                });

                // Open right sidebar on selecting items in table
                // Only for tables with .k-js-with-sidebar class
                // Only apply to actual `<a>` elements
                $('.k-table-container table.k-js-with-sidebar').off().on('click', 'a', function(event) {

                    // stopPropagation for all links except for those with `.navigate` class
                    if ( !$(this).hasClass('navigate') ) {
                        event.stopPropagation();
                    }

                    // Return if subcontent is present
                    if ($(this).closest('.k-content').siblings('.k-subcontent').length) return;

                    // Only apply if parent is a `<td>` (so not a `<th>`)
                    if ($(this).parents('td').length > 0) {
                        $('.k-off-canvas-toggle--right').trigger('click');
                    }

                });

                // Open subcontent on clicking TD
                $('.k-table-container table.k-js-with-sidebar tbody').off().on('click', 'tr', function(event) {
                    // Return if click to select class is added to table
                    if ( $(this).closest('table').hasClass('k-js-click-to-select')) return;

                    // Return if subcontent is present
                    if ($(this).closest('.k-content').siblings('.k-subcontent').length) return;

                    // Return if target is anchor
                    if ( event.target.nodeName === 'A') return;
                    if ( event.target.nodeName === 'INPUT') return;

                    // Stop row select action
                    event.stopPropagation();

                    // Trigger click anchor
                    $(this).find('a').trigger('click');

                });
            }
        }
    };

})(kQuery);
