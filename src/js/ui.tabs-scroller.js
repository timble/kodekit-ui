(function($) {
    $(document).ready(function () {

        kodekitUI.tabsScroller = function() {

            // Tabs scroller
            var $tabsScroller = $('.k-js-tabs-scroller'),
                tabsOverflowClass = 'k-has-tabs-overflow',
                tabsOverflowLeftClass = 'k-has-tabs-left-overflow',
                tabsOverflowRightClass = 'k-has-tabs-right-overflow',
                tabsScrollAmount = 0.8,
                tabsAnimationSpeed = 400,
                resizeTimer;

            // Calculate wether there is a scrollable area and apply classes accordingly
            function tabsCalculateScroll($scroller, $tabs, $tabsWrapper) {

                if (!$scroller.length) return;

                // Variables
                var tabsWidth = $tabs.outerWidth(),
                    scrollerWidth = $scroller.innerWidth(),
                    scrollLeft = $scroller.scrollLeft();

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

                $.each($tabsScroller, function(key, value) {

                    var $scroller = $(value);

                    // Variables
                    var $tabs = $scroller.find('.k-js-tabs'),
                        $tabsWrapper = $scroller.parent('.k-js-tabs-wrapper'),
                        $tabsPrev = $tabsWrapper.children('.k-tabs-scroller-prev'),
                        $tabsNext = $tabsWrapper.children('.k-tabs-scroller-next');

                    // Append buttons
                    if (!$tabsPrev.length) {
                        $tabsWrapper.prepend('<button type="button" class="k-tabs-scroller-prev"><span class="k-icon-chevron-left"></span><span class="k-visually-hidden">Scroll left</span></button>');
                    }
                    if (!$tabsNext.length) {
                        $tabsWrapper.append('<button type="button" class="k-tabs-scroller-next"><span class="k-icon-chevron-right"></span><span class="k-visually-hidden">Scroll right</span></button>');
                    }

                    // Clicking left and right buttons
                    function tabsScrollButtonClick() {

                        // Buttons
                        $tabsPrev = $tabsWrapper.children('.k-tabs-scroller-prev');
                        $tabsNext = $tabsWrapper.children('.k-tabs-scroller-next');

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
                            scrollerWidth = $scroller.innerWidth(),
                            scrollLeft = $scroller.scrollLeft(),
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
                        $scroller.animate({
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
                                scrollerOffset = $scroller.scrollLeft(),
                                scrollerWidth = $scroller.innerWidth(),
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
                            $scroller.animate({
                                scrollLeft: scroll
                            }, tabsAnimationSpeed);
                        }
                    }

                    // Run 500ms after document ready
                    // 1. To make sure tabs are loaded
                    // 2. To display users that tabs are scrollable
                    setTimeout(function() {
                        tabsCalculateScroll($scroller, $tabs, $tabsWrapper);
                        tabsScrollButtonClick();

                        // Scroll to active tab after buttons have loaded
                        setTimeout(function() {
                            scrollToTab($scroller.find('.k-is-active a'));
                        }, tabsAnimationSpeed);
                    }, 500);

                    // When clicking tabs
                    $tabs.on('click', 'li a', function() {
                        scrollToTab($(this));
                    });

                    // Run on scrolling the tab container
                    $scroller.on('scroll', function() {
                        // Throttle
                        clearTimeout(resizeTimer);
                        resizeTimer = setTimeout(function() {
                            tabsCalculateScroll($scroller, $tabs, $tabsWrapper);
                        }, 200);
                    });
                });

            }
        };

    });

})(kQuery);
