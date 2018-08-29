// Top navigation

(function($) {

    $.fn.ktopnavigation = function() {

        return this.each(function() {
            var $menu = $( this ),
                data = $menu.data('ktopnavigation');

            if (!data) {
                $menu.data('ktopnavigation', true);

                // Variables
                var $menuItem = $menu.find('> ul > li > a'),
                    menuClass = 'has-open-menu',
                    submenuClass = 'has-open-submenu',
                    menuContent = $menu.attr('data-toggle-button-content') || 'Menu';

                // Append toggle button
                if ($menu.parent().find('#k-js-top-navigation-toggle').length === 0) {
                    $menu.parent().append($('<button type="button" id="k-js-top-navigation-toggle" class="k-top-navigation-toggle" title="Menu toggle" aria-label="Menu toggle">'+menuContent+'</button>'));
                }

                // Off canvas
                $menu.offCanvasMenu({
                    menuToggle: $('#k-js-top-navigation-toggle'),
                    menuExpandedClass: 'k-show-top-menu',
                    openedClass: 'k-is-opened-top',
                    position: 'right',
                    container: $('.k-js-wrapper'),
                    expandedWidth: '276',
                    offCanvasOverlay: 'k-off-canvas-overlay-top',
                    wrapper: $('.k-ui-container')
                });

                // Open a menu item
                function openMenuItem($element) {
                    if ( $menu.hasClass(menuClass) && $(this).hasClass(submenuClass) ) {
                        closeMenu();
                    } else {
                        $('.' + submenuClass).removeClass(submenuClass);
                        $element.addClass(submenuClass);
                        $menu.addClass(menuClass);
                    }
                }

                // Close all items
                function closeMenu() {
                    $menu.removeClass(menuClass).find('.' + submenuClass).removeClass(submenuClass);
                }

                // Click a menu item
                // Parent items are not navigatable just like in any other OS
                // Add your own JS to make sure links are clickable anyway
                $menuItem.on('click', function(event) {
                    if (!$(this).next('ul').length) return;

                    event.preventDefault();
                    if ( $menu.hasClass(menuClass) && $(this).hasClass(submenuClass) ) {
                        closeMenu();
                    } else {
                        openMenuItem($(this));
                    }
                });

                // Click child item
                $menu.on('click', 'ul li ul li a', function() {
                    closeMenu();
                });

                // Hover a menu item
                $menuItem.on('mouseover', function(event) {
                    // Only on desktop
                    if ( $('.k-top-container').css('z-index') >= 11) {
                        event.preventDefault();
                        if ( $menu.hasClass(menuClass) ) {
                            $menu.find('.' + submenuClass).blur();
                            openMenuItem($(this));
                        }
                    }
                });

                // On clicking next to the menu
                $(document).mouseup(function(e) {
                    var $navigationList = $menu.children('ul');

                    // if the target of the click isn't the container nor a descendant of the container
                    if (!$navigationList.is(e.target) && $navigationList.has(e.target).length === 0)
                    {
                        if ( $menu.hasClass(menuClass) ) {
                            closeMenu();
                        }
                    }
                });

                // On ESC key
                $(document).keyup(function(e) {
                    if (e.keyCode === 27) {
                        closeMenu();
                    }
                });
            }

        });
    };

})(kQuery);
