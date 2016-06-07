(function($) {
    // Overflowing checker
    $.overflowing = function (element, options) {

        var defaults = {
                wrapInner: true,
                offset: 10
            },
            plugin = this;

        plugin.settings = {};

        var $element = $(element);

        plugin.init = function () {

            plugin.settings = $.extend({}, defaults, options);

            // Wrap content in a div
            if (!$element.find('.overflowing').length) {
                $element.wrap('<div class="overflowing">');
                if ($element.css('flex')) {
                    $('.overflowing').addClass('overflowing--flex');
                }
            }

            // Add overflowing shadow divs
            $element.after('<div class="overflowing--top js-is-hidden">');
            $element.after('<div class="overflowing--right js-is-hidden">');
            $element.after('<div class="overflowing--bottom js-is-hidden">');
            $element.after('<div class="overflowing--left js-is-hidden">');

            // Overflowing?
            function overflowing() {

                if (element.clientWidth != element.scrollWidth || element.clientHeight != element.scrollHeight) {

                    // Show top overflowing div
                    if (element.scrollTop >= plugin.settings.offset && element.scrollTop >= plugin.settings.offset) {
                        $('.overflowing--top').removeClass('js-is-hidden');
                    } else {
                        $('.overflowing--top').addClass('js-is-hidden');
                    }

                    // Show right overflowing div
                    if (element.scrollLeft <= (element.scrollWidth - element.clientWidth) - plugin.settings.offset) {
                        $('.overflowing--right').removeClass('js-is-hidden');
                    } else {
                        $('.overflowing--right').addClass('js-is-hidden');
                    }

                    // Show bottom overflowing div
                    if (element.scrollTop < ((element.scrollHeight - element.clientHeight) - plugin.settings.offset)) {
                        $('.overflowing--bottom').removeClass('js-is-hidden');
                    } else {
                        $('.overflowing--bottom').addClass('js-is-hidden');
                    }

                    // Show left overflowing div
                    if (element.scrollLeft >= plugin.settings.offset) {
                        $('.overflowing--left').removeClass('js-is-hidden');
                    } else {
                        $('.overflowing--left').addClass('js-is-hidden');
                    }
                }

                if (element.clientWidth == element.scrollWidth) {
                    $('.overflowing--left').addClass('js-is-hidden');
                    $('.overflowing--right').addClass('js-is-hidden');
                }

                if (element.clientHeight == element.scrollHeight) {
                    $('.overflowing--top').addClass('js-is-hidden');
                    $('.overflowing--bottom').addClass('js-is-hidden');
                }
            }

            $(window).on('load resize', overflowing);

            // Detect on scrolling
            $element.scroll(function () {
                overflowing();
            });

        };

        plugin.init();
    };

    // add the plugin to the jQuery.fn object
    $.fn.overflowing = function (options) {
        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function () {
            // if plugin has not already been attached to the element
            if (undefined == $(this).data('responsiveMenu')) {
                // create a new instance of the plugin
                var plugin = new $.overflowing(this, options);
                // in the jQuery version of the element
                // store a reference to the plugin object
                $(this).data('overflowing', plugin);
            }
        });
    };
})(kQuery);