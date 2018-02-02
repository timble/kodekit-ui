// Subcontent toggle

(function($) {

    $(document).ready(function () {

        kodekitUI.subcontentToggle = function() {

            // Sub content itself
            var $subcontent = $('.k-js-subcontent');

            // See if it exists
            if ($subcontent.length) {

                var $contentChild = $('.k-content-area__child'),
                    subcontentButtonContent = $subcontent.attr('data-toggle-button-content') || '<span class="k-icon-chevron-left" aria-hidden="true"></span>',
                    toggle_button = '<button type="button" class="k-button k-button--default k-subcontent-toggle k-js-subcontent-toggle" title="Subcontent toggle" aria-label="Subcontent toggle">' + subcontentButtonContent + '</button>',
                    toggle = $contentChild.find('.k-js-subcontent-toggle'),
                    $toggle = $(toggle_button),
                    $toggleButton = null;

                // Append toggle button and overlay
                if ( toggle.length === 0 ) {
                    $contentChild.append($toggle);
                }

                $toggleButton = $('.k-js-subcontent-toggle');

                // Off canvas
                $subcontent.offCanvasMenu({
                    menuToggle: $toggleButton,
                    menuExpandedClass: 'k-show-subcontent-area',
                    openedClass: 'k-is-opened-subcontent',
                    position: 'right',
                    container: $contentChild,
                    expandedWidth: '276',
                    offCanvasOverlay: 'k-off-canvas-overlay-subcontent',
                    wrapper: $('.k-js-content-area')
                });


                // Open right sidebar on selecting items in table
                // Only apply to actual `<a>` elements
                $('.k-table-container a').off().on('click', function (event) {
                    // Only apply if parent is a `<td>` (so not a `<th>`)
                    if ($(this).parents('td').length > 0) {
                        var target = $(this)[0].closest('.k-content-area__child');
                        var targetToggle = $(target).find('.k-js-subcontent-toggle');
                        // Wait at least 2 frames to make sure actions are not attached simultaneously
                        setTimeout(function () {
                            targetToggle.trigger('click');
                        }, 32);
                    }
                });

                // Open subcontent on clicking TD
                $('.k-table-container table tbody').off().on('click', 'tr', function (event) {
                    // Return if click to select class is added to table
                    if ($(this).closest('table').hasClass('k-js-click-to-select')) return;

                    // Return if target is anchor
                    if (event.target.nodeName === 'A') return;
                    if (event.target.nodeName === 'INPUT') return;

                    // Stop row select action
                    event.preventDefault();
                    event.stopPropagation();

                    // Trigger click anchor (but wait for ajax)
                    $(this).find('a').trigger('click');
                });

            }

        };

    });

})(kQuery);
