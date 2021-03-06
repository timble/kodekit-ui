/* @preserve
 * Off canvas menu
 * Copyright 2015 Robin Poort
 * http://www.robinpoort.com
 */

(function($) {

    $.offCanvasMenu = function(element, options) {

        var defaults = {
                menu: $(element),
                position: 'left',
                menuExpandedClass: 'k-show-left-menu',
                openedClass: 'k-is-opened',
                transitionClass: 'k-is-transitioning',
                noTransitionClass: 'k-no-transition',
                wrapper: $(element).parent(),
                container: $('.container'),
                menuToggle: [],
                expandedWidth: $(element).outerWidth(),
                offCanvasOverlay: 'k-off-canvas-overlay',
                offCanvasOverlayPosition: 'after',
                ariaControls: null,
                opacity: .75,
                onBeforeToggleOpen: function() {},
                onAfterToggleOpen: function() {},
                onBeforeToggleClose: function() {},
                onAfterToggleClose: function() {}
            },
            plugin = this;


        plugin.settings = {};

        plugin.init = function() {

            plugin.settings = $.extend({}, defaults, options);

            var menu = plugin.settings.menu,
                position = plugin.settings.position,
                menuExpandedClass = plugin.settings.menuExpandedClass,
                openedClass = plugin.settings.openedClass,
                transitionClass = plugin.settings.noTransitionClass,
                noTransitionClass = plugin.settings.noTransitionClass,
                wrapper = plugin.settings.wrapper,
                container = plugin.settings.container,
                menuToggle = plugin.settings.menuToggle,
                ariaControls = plugin.settings.ariaControls,
                expandedWidth = menu.outerWidth(),
                offCanvasOverlay = $('.' + plugin.settings.offCanvasOverlay),
                transitionDuration = Math.round(parseFloat(container.css('transition-duration')) * 1000),
                transitionElements = plugin.settings.transitionElements,
                languageDirection = $('html').attr('dir'),
                timeout;

            // Set proper menuExpandedClass if not set manually
            if ( position === 'right' && !options.menuExpandedClass ) {
                menuExpandedClass = 'k-show-right-menu';
            }

            // Set proper menuExpandedClass if not set manually
            if ( wrapper.is('body') ) {
                wrapper = $('html, body');
            }

            // Set transitionElements
            if ( plugin.settings.transitionElements == null) {
                transitionElements = container;
            }

            // Create overlay wrapper
            function addOverlay() {
                $.each(transitionElements, function() {
                    if ($(this).find('.' + plugin.settings.offCanvasOverlay)[0] == undefined) {
                        if ( plugin.settings.offCanvasOverlayPosition !== 'after' ) {
                            $(this).prepend('<div class="' + plugin.settings.offCanvasOverlay + '">');
                        } else {
                            $(this).append('<div class="' + plugin.settings.offCanvasOverlay + '">');
                        }
                        var newOverlay = $('.' + plugin.settings.offCanvasOverlay);
                        $.extend(offCanvasOverlay, newOverlay);
                    }
                });
            }

            addOverlay();

            function tabToggle(menu) {
                // When tabbing on toggle button
                menuToggle.bind('keydown', function(e) {
                    if (e.keyCode === 9 && wrapper.hasClass(menuExpandedClass) ) {
                        e.preventDefault();
                        if ( e.shiftKey ) {
                            menu.find(':tabbable').last().focus();
                        } else {
                            menu.find(':tabbable').first().focus();
                        }
                    }
                });

                // When tabbing on first tabbable menu item
                menu.find(':tabbable').first().bind('keydown', function(e) {
                    if (e.keyCode === 9 && wrapper.hasClass(menuExpandedClass) ) {
                        if ( e.shiftKey ) {
                            e.preventDefault();
                            menuToggle.focus();
                        }
                    }
                });

                // When tabbing on last tabbable menu item
                menu.find(':tabbable').last().bind('keydown', function(e) {
                    if (e.keyCode === 9 && wrapper.hasClass(menuExpandedClass) ) {
                        if ( !e.shiftKey ) {
                            e.preventDefault();
                            menuToggle.focus();
                        }
                    }
                });
            }

            function openMenu(menu) {
                // Clear the timeout when user clicks open menu
                clearTimeout(timeout);

                // Add class to body
                $('body').addClass(plugin.settings.transitionClass);

                // Function to run before toggling
                plugin.settings.onBeforeToggleOpen();

                addOverlay();

                // Set to expanded for accessibility
                menuToggle.attr({'aria-expanded': 'true'});

                // Add classes and CSS to the wrapper
                // All styling in CSS comes from this parent element
                wrapper.addClass(menuExpandedClass + ' ' + openedClass);

                // Enable tabbing within menu
                timeout = setTimeout(function() {
                    tabToggle(menu);

                    // Remove class from body
                    $('body').removeClass(plugin.settings.transitionClass);

                    // Function to run after toggling
                    plugin.settings.onAfterToggleOpen();
                }, transitionDuration);
            }

            function closeMenu() {
                // Clear the timeout when user clicks close menu
                clearTimeout(timeout);

                // Add class to body
                $('body').addClass(plugin.settings.transitionClass);

                // Function to run before toggling
                plugin.settings.onBeforeToggleOpen();

                // Set to collapsed for accessibility
                menuToggle.attr({'aria-expanded': 'false'});

                // Remove the expanded class to activate the transition
                wrapper.removeClass(menuExpandedClass);

                // Remove style and class when transition has ended, so the menu stays visible on closing
                timeout = setTimeout(function() {
                    wrapper.removeClass(openedClass);

                    // Remove class from body
                    $('body').removeClass(plugin.settings.transitionClass);

                    // Function to run after toggling
                    plugin.settings.onAfterToggleOpen();
                }, transitionDuration);
            }

            function toggleMenu(menu, event) {
                // Close other menu when opened
                if ( wrapper.is('[class*="'+openedClass+'"]') && !wrapper.is('[class*="'+openedClass+'"]') ) {
                    var brother = wrapper.find('button[class^="k-off-canvas-toggle"]').not(menuToggle);
                    brother.trigger('click');
                }
                // Decide wether to open or close the menu
                event.stopPropagation();
                var method = !wrapper.hasClass(menuExpandedClass) ? 'k-is-closed' : 'k-is-opened';
                if ( method === 'k-is-closed' ) { openMenu(menu); }
                if ( method === 'k-is-opened' ) { closeMenu(); }
            }

            // If we have a toggle button available
            if(menuToggle.length){

                // Set ARIA attributes
                menuToggle.attr({
                    'role': 'button',
                    'aria-controls': ariaControls,
                    'aria-expanded': 'false'
                });

                // Toggle button:
                menuToggle.off().click(function(event) {
                    if ( menuToggle.is(':visible') ) {
                        toggleMenu(menu, event);
                    }
                });

                // Close menu by clicking anywhere
                wrapper.click(function(event){
                    if ( wrapper.hasClass(menuExpandedClass) ) {
                        if ( event.target == $('.'+plugin.settings.offCanvasOverlay)[0] ) {
                            event.stopPropagation();
                            closeMenu();
                        }
                    }
                });

                // Close menu if esc keydown and menu is open and set focus to toggle button
                $(document).bind('keydown', function(event) {
                    if (event.keyCode === 27 && wrapper.hasClass(menuExpandedClass)) {
                        event.stopPropagation();
                        closeMenu();
                        menuToggle.focus();
                    }
                });
            }

            // Touch actions
            if ('ontouchstart' in document.documentElement) {
                wrapper.on('touchstart', onTouchStart);
                wrapper.on('touchmove', onTouchMove);
                wrapper.on('touchend', onTouchEnd);
            }

            // vars
            var started = null,
                start = {},
                deltaX,
                pageX,
                overlayOpacity,
                isScrolling = false;

            // Functions
            function currentPosition() {
                return position == 'left' ? menu.offset().left + expandedWidth
                    : menu.offset().left;
            }

            function inBounds(newPos) {
                return (position == 'left' && newPos >= -25 && newPos <= expandedWidth) ||
                    (position == 'right' && newPos >= -(expandedWidth) && newPos <= 25);
            }

            // Return if language == RTL
            if ( languageDirection != 'ltr' ) return;

            function onTouchStart(e) {

                if (!wrapper.hasClass(menuExpandedClass)) {
                    return;
                }

                // Set started to true (used by touchend)
                started = true;

                // Add class to body
                $('body').addClass(plugin.settings.transitionClass);

                // Get original starting point
                pageX = e.originalEvent.touches[0].pageX;

                // Setting the start object for 'move' and 'end'
                start = {
                    startingX: currentPosition(),
                    // get touch coordinates for delta calculations in onTouchMove
                    pageX: pageX,
                    pageY: e.originalEvent.touches[0].pageY
                };

                // reset deltaX
                deltaX = wrapper.position().left;

                // used for testing first onTouchMove event
                isScrolling = undefined;

                // Get the opacity of the overlay
                overlayOpacity = plugin.settings.opacity;

                // Add class to remove transition for 1-to-1 touch movement
                $.each(transitionElements, function () {
                    $(this).addClass(noTransitionClass);
                });
                $.each(offCanvasOverlay, function () {
                    $(this).addClass(noTransitionClass);
                });

                e.stopPropagation();

            }

            function onTouchMove(e) {

                if (!wrapper.hasClass(menuExpandedClass)) {
                    return;
                }

                deltaX = e.originalEvent.touches[0].pageX - start.pageX;

                // determine if scrolling test has run - one time test
                if (typeof isScrolling == 'undefined') {
                    isScrolling = !!(isScrolling || Math.abs(deltaX) < Math.abs(e.originalEvent.touches[0].pageY - start.pageY));
                }

                // if user is not trying to scroll vertically
                if (!isScrolling) {

                    // prevent native scrolling
                    e.preventDefault();

                    var newPos = position == 'left' ? start.startingX + deltaX
                        : deltaX - ($(window).width() - start.startingX);

                    var opacity = (overlayOpacity / expandedWidth) * Math.abs(newPos);

                    if (!inBounds(newPos))
                        return;

                    // translate immediately 1-to-1
                    $.each(transitionElements, function () {
                        if (!$(this).hasClass('k-title-bar--mobile')) {
                            $(this).css({
                                '-webkit-transform': 'translate(' + newPos + 'px, 0)',
                                '-moz-transform': 'translate(' + newPos + 'px, 0)',
                                '-ms-transform': 'translate(' + newPos + 'px, 0)',
                                '-o-transform': 'translate(' + newPos + 'px, 0)',
                                'transform': 'translate(' + newPos + 'px, 0)'
                            });
                        }
                    });
                    $.each(offCanvasOverlay, function () {
                        $(this).css('opacity', opacity);
                    });

                    e.stopPropagation();
                }
            }

            function onTouchEnd(e) {

                // Escape if invalid start:
                if (!started)
                    return;

                // Escape if Menu is closed
                if (!wrapper.hasClass(menuExpandedClass))
                    return;

                // Remove class from body
                $('body').removeClass(plugin.settings.transitionClass);

                var newPos = position == 'left' ? start.startingX + deltaX
                    : deltaX - ($(window).width() - start.startingX);

                // Converting to positive number
                var absNewPos = Math.abs(newPos);

                // if not scrolling vertically
                if (!isScrolling) {

                    $.each(transitionElements, function () {
                        container.removeAttr('style').removeClass(noTransitionClass);
                        $('.k-js-title-bar').removeAttr('style').removeClass(noTransitionClass);
                    });
                    $.each(offCanvasOverlay, function () {
                        $(this).removeAttr('style').removeClass(noTransitionClass);
                        if (plugin.settings.transitionElements !== undefined) {
                            plugin.settings.transitionElements.removeAttr('style').removeClass(noTransitionClass);
                        }
                    });

                    if (( position == 'left' && ( absNewPos <= (expandedWidth * 0.66) || newPos <= 0 ) ) ||
                        ( position == 'right' && ( absNewPos <= (expandedWidth * 0.66) || newPos >= 0 ) )) {
                        closeMenu();
                    } else {
                        openMenu(menu);
                    }
                }

                // Reset start object and starting variable:
                started = null;
                start = {};

                e.stopPropagation();
            }

        };

        plugin.init();

    };


    // add the plugin to the jQuery.fn object
    $.fn.offCanvasMenu = function(options) {
        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function() {
            // if plugin has not already been attached to the element
            if (undefined == $(this).data('offCanvasMenu')) {
                // create a new instance of the plugin
                var plugin = new $.offCanvasMenu(this, options);
                // in the jQuery version of the element
                // store a reference to the plugin object
                $(this).data('offCanvasMenu', plugin);
            }
        });
    }

})(kQuery);
