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
         * Sidebar off-canvas toggles
         */

        if ($('.k-js-title-bar, .k-js-toolbar').length && $('.k-js-wrapper').length && $('.k-js-content').length)
        {
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
                    page = container.find('.k-js-page'),
                    component = container.find('.k-js-component'),
                    toggle = container.find('.k-off-canvas-toggle--' + position),
                    $toggle = $(toggle_button),
                    $toggleButton = null,
                    transitionElements = page || content;

                // Add proper class to toggle buttons
                $toggle.addClass('k-off-canvas-toggle-holder--' + position).children('button').addClass('k-off-canvas-toggle--' + position);

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
                        wrapper: wrapper,
                        container: page || content,
                        position: position,
                        offCanvasOverlay: 'k-off-canvas-overlay-' + position,
                        transitionElements: transitionElements
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
                // Only apply to actual `<a>` elements
                $('.k-table-container table').on('click', 'a', function(event) {
                    // stopPropagation for all links except for those with `.navigate` class
                    if ( !$(this).hasClass('navigate') ) {
                        event.stopPropagation();
                    }
                    // Only apply if parent is a `<td>` (so not a `<th>`)
                    if ($(this).parents('td').length > 0) {
                        $('.k-off-canvas-toggle--right').trigger('click');
                    }
                });
            }
        }



        // Initiate responsive top menu

        // Menu itself
        var $menu = $('.k-js-top-navigation');

        // See if it exists
        if ($menu.length) {

            // Variables
            var $menuItem = $('.k-js-top-navigation > ul > li > a'),
                menuClass = 'has-open-menu',
                submenuClass = 'has-open-submenu',
                menuContent = $menu.attr('data-toggle-button-content') || 'Menu';

            var toggle_button = '<button type="button" id="k-js-top-navigation-toggle" class="k-top-navigation-toggle" title="Menu toggle" aria-label="Menu toggle">'+menuContent+'</button>';

            // Append toggle button and overlay
            $menu.parent().append($(toggle_button));

            // Off canvas
            $menu.offCanvasMenu({
                menuToggle: $('#k-js-top-navigation-toggle'),
                position: 'right',
                container: $('.k-wrapper'),
                expandedWidth: '276',
                offCanvasOverlay: 'k-off-canvas-overlay-top',
                wrapper: $('.k-ui-container')
            });

            // Click a menu item
            // @TODO: Only for certain classes
            function clickMenuItem($element) {
                $element.on('click', function(event) {
                    if (!$(this).next('ul').length) return;
                    event.preventDefault();
                    if ( $menu.hasClass(menuClass) && $(this).hasClass(submenuClass) ) {
                        closeMenu();
                    } else {
                        openMenuItem($(this));
                    }
                });
            }

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

            // Hover a menu item
            function hoverMenuItem() {
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
            }

            // Close all items
            function closeMenu() {
                $menu.removeClass(menuClass).find('.' + submenuClass).removeClass(submenuClass);
            }

            // Initiate
            clickMenuItem($menuItem);
            hoverMenuItem();

            // On clicking next to the menu
            $(document).mouseup(function(e) {
                var $navigationList = $('.k-js-top-navigation > ul');

                // if the target of the click isn't the container nor a descendant of the container
                if (!$navigationList.is(e.target) && $navigationList.has(e.target).length === 0)
                {
                    closeMenu();
                }
            });

            // On ESC key
            $(document).keyup(function(e) {
                if (e.keyCode === 27) {
                    closeMenu();
                }
            });
        }


        // Form itself
        var $form = $('.k-js-form');

        // See if it exists
        if ($form.length) {

            var toggle_button = '<button type="button" class="k-button k-button--default k-form-toggle k-js-form-toggle" title="Form toggle" aria-label="Form toggle"><span class="k-icon-chevron-left" aria-hidden="true"></span></button>';

            // Append toggle button and overlay
            $('.k-page .k-js-toolbar').append(kQuery(toggle_button));

            // Off canvas
            $form.offCanvasMenu({
                menuToggle: $('.k-js-form-toggle'),
                position: 'right',
                container: $('.k-page-content'),
                expandedWidth: '276',
                offCanvasOverlay: 'k-off-canvas-overlay-form',
                wrapper: $('.k-page')
            });





        }


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

        // Gallery
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


        // Middlepane


        kodekitUI.dragger = function() {
            var middlepane = document.querySelector(".k-js-middlepane");
            if (middlepane !== null) {
                var middlepaneResizer = document.createElement("div");
                middlepaneResizer.className = "k-middlepane-resizer";
                middlepane.appendChild(middlepaneResizer);
                middlepaneResizer.addEventListener("mousedown", initDrag, false);
                var startW, startWidth, newWidth;
            }

            function initDrag(e) {
                startW = e.clientX;
                startWidth = parseInt(document.defaultView.getComputedStyle(middlepane).width, 10);
                document.documentElement.addEventListener("mousemove", doDrag, false);
                document.documentElement.addEventListener("mouseup", stopDrag, false);
            }

            function doDrag(e) {
                document.body.classList.add("is-unresponsive");
                newWidth = (startWidth + e.clientX - startW);
                if ((startWidth + e.clientX - startW) <= 221) {
                    newWidth = 221;
                }
                middlepane.style.width = newWidth + "px";
                middlepane.style.minWidth = newWidth + "px";
                middlepane.style.maxWidth = newWidth + "px";
            }

            function stopDrag(e) {
                document.documentElement.removeEventListener("mousemove", doDrag, false);
                document.documentElement.removeEventListener("mouseup", stopDrag, false);
                document.body.classList.remove("is-unresponsive");
                middlepane.removeAttribute('style');

                var width = startWidth + e.clientX - startW;
                if (width <= 221) {
                    width = 221;
                }

                createCookie("middlepanewidth", width, 30);
                kodekitUI.setCSS(width);
                window.dispatchEvent(new Event('resize'));
            }
        };

        kodekitUI.dragger();



        // Tabs scroller
        var $tabsScroller = $('.k-js-tabs-scroller'),
            tabsOverflowClass = 'k-has-tabs-overflow',
            tabsOverflowLeftClass = 'k-has-tabs-left-overflow',
            tabsOverflowRightClass = 'k-has-tabs-right-overflow',
            tabsScrollAmount = 0.8,
            tabsAnimationSpeed = 400;

        // Calculate wether there is a scrollable area and apply classes accordingly
        function tabsCalculateScroll() {

            if (!$tabsScroller.length) return;

            // Variables
            var tabsWidth = $tabs.outerWidth(),
                scrollerWidth = $tabsScroller.innerWidth(),
                scrollLeft = $tabsScroller.scrollLeft();

            // Show / hide buttons
            if (tabsWidth > scrollerWidth) {
                $tabsWrapper.addClass(tabsOverflowClass);
            } else {
                $tabsWrapper.removeClass(tabsOverflowClass);
            }

            // "Activate" left button
            if ((tabsWidth > scrollerWidth) && (scrollLeft > 0)) {
                $tabsWrapper.addClass(tabsOverflowLeftClass);
            }

            // "Activate" right button
            if ((tabsWidth > scrollerWidth)) {
                $tabsWrapper.addClass(tabsOverflowRightClass);
            }

            // "Deactivate" left button
            if ((tabsWidth <= scrollerWidth) || (scrollLeft <= 0)) {
                $tabsWrapper.removeClass(tabsOverflowLeftClass);
            }

            // "Deactivate" right button
            if ((tabsWidth <= scrollerWidth) || (scrollLeft >= (tabsWidth - scrollerWidth))) {
                $tabsWrapper.removeClass(tabsOverflowRightClass);
            }
        }

        // Only run if scroller exists
        if ( $tabsScroller.length ) {

            // Variables
            var $tabs = $('.k-js-tabs'),
                $tabsWrapper = $('.k-js-tabs-wrapper');

            // Append buttons
            $tabsWrapper.prepend('<button type="button" class="k-tabs-scroller-prev"><span class="k-icon-chevron-left"></span><span class="k-visually-hidden">Scroll left</span></button>');
            $tabsWrapper.append('<button type="button" class="k-tabs-scroller-next"><span class="k-icon-chevron-right"></span><span class="k-visually-hidden">Scroll right</span></button>');

            // Clicking left and right buttons
            function tabsScrollButtonClick() {

                // Buttons
                var $tabsPrev = $('.k-tabs-scroller-prev'),
                    $tabsNext = $('.k-tabs-scroller-next');

                // Prev
                $tabsPrev.on('click', function() {
                    calculateScroll('prev');
                });

                // Next
                $tabsNext.on('click', function() {
                    calculateScroll('next');
                });
            }

            // Calculate the amount of scrolling to do
            function calculateScroll(direction) {

                // Variables
                var tabsWidth = $tabs.outerWidth(),
                    scrollerWidth = $tabsScroller.innerWidth(),
                    scrollLeft = $tabsScroller.scrollLeft(),
                    scroll;

                // Left button (scroll to right)
                if ( direction == 'prev') {
                    scroll = scrollLeft - (scrollerWidth * tabsScrollAmount);
                    if (scroll < 0 ) {
                        scroll = 0;
                    }
                }

                // Right button (scroll to left)
                if ( direction == 'next') {
                    scroll = scrollLeft + (scrollerWidth * tabsScrollAmount);
                    if (scroll > (tabsWidth - scrollerWidth) ) {
                        scroll = tabsWidth - scrollerWidth;
                    }
                }

                // Animate the scroll
                $tabsScroller.animate({
                    scrollLeft: scroll
                }, tabsAnimationSpeed);
            }

            // Scroll active tab into screen
            function scrollToTab(element) {
                if (element.parent('li').parent('ul').parent().hasClass('k-js-tabs-scroller')) {
                    var positionLeft = element.parent().position().left,
                        positionRight = positionLeft + element.parent().outerWidth(),
                        parentPaddingLeft = parseInt($tabs.css('padding-left'), 10),
                        parentPaddingRight = parseInt($tabs.css('padding-right'), 10),
                        scrollerOffset = $tabsScroller.scrollLeft(),
                        scrollerWidth = $tabsScroller.innerWidth(),
                        scroll;

                    // When item falls of on the right side
                    if ( positionRight > (scrollerOffset + scrollerWidth) ) {
                        scroll = scrollerOffset + ((positionRight - (scrollerWidth + scrollerOffset)) + (parentPaddingRight * 2));
                    }

                    // When item falls of on the left side
                    if ( positionLeft < scrollerOffset ) {
                        scroll = scrollerOffset - ((scrollerOffset - positionLeft) + (parentPaddingLeft * 2));
                    }

                    // Animate the scroll
                    $tabsScroller.animate({
                        scrollLeft: scroll
                    }, tabsAnimationSpeed);
                }
            }

            // Run 500ms after document ready
            // 1. To make sure tabs are loaded
            // 2. To display users that tabs are scrollable
            setTimeout(function() {
                tabsCalculateScroll();
                tabsScrollButtonClick();

                // Scroll to active tab after buttons have loaded
                setTimeout(function() {
                    scrollToTab($tabsScroller.find('.k-is-active a'));
                }, tabsAnimationSpeed);
            }, 500);

            // When clicking tabs
            $tabs.on('click', 'li a', function() {
                scrollToTab($(this));
            });

            // Run on scrolling the tab container
            $tabsScroller.on('scroll', function() {
                // Throttle
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function() {
                    tabsCalculateScroll();
                }, 200);
            });
        }


        // Konami
        new Konami(function() {
            $('html, .k-ui-container').css({
                'font-family': 'Comic Sans MS',
                'font-size': '20px',
                'line-height': '30px'
            }).addClass('konami');
        });


        // On window resize
        $(window).on('resize', function() {

            // Add class to body when resizing so we can add styling to the page
            $('body').addClass(resizeClass);

            // Throttle
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {

                // Remove the class when resize is done
                $('body').removeClass(resizeClass);

                // Run tabs scroll function
                tabsCalculateScroll();

            }, 200);
        });

    });

})(kQuery);
