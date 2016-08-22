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
            if ($element.parent('.k-overflowing')[0] == undefined) {
                $element.wrap('<div class="k-overflowing">');
                if ($element.css('flex')) {
                    $('.k-overflowing').addClass('k-overflowing--flex');
                }

                // Add overflowing shadow divs
                $element.after('<div class="k-overflowing--top k-is-hidden">');
                $element.after('<div class="k-overflowing--right k-is-hidden">');
                $element.after('<div class="k-overflowing--bottom k-is-hidden">');
                $element.after('<div class="k-overflowing--left k-is-hidden">');
            }

            // Overflowing?
            function overflowing() {

                if (element.clientWidth != element.scrollWidth || element.clientHeight != element.scrollHeight) {

                    // Show top overflowing div
                    if (element.scrollTop >= plugin.settings.offset && element.scrollTop >= plugin.settings.offset) {
                        $('.k-overflowing--top').removeClass('k-is-hidden');
                    } else {
                        $('.k-overflowing--top').addClass('k-is-hidden');
                    }

                    // Show right overflowing div
                    if (element.scrollLeft <= (element.scrollWidth - element.clientWidth) - plugin.settings.offset) {
                        $('.k-overflowing--right').removeClass('k-is-hidden');
                    } else {
                        $('.k-overflowing--right').addClass('k-is-hidden');
                    }

                    // Show bottom overflowing div
                    if (element.scrollTop < ((element.scrollHeight - element.clientHeight) - plugin.settings.offset)) {
                        $('.k-overflowing--bottom').removeClass('k-is-hidden');
                    } else {
                        $('.k-overflowing--bottom').addClass('k-is-hidden');
                    }

                    // Show left overflowing div
                    if (element.scrollLeft >= plugin.settings.offset) {
                        $('.k-overflowing--left').removeClass('k-is-hidden');
                    } else {
                        $('.k-overflowing--left').addClass('k-is-hidden');
                    }
                }

                if (element.clientWidth == element.scrollWidth) {
                    $('.k-overflowing--left').addClass('k-is-hidden');
                    $('.k-overflowing--right').addClass('k-is-hidden');
                }

                if (element.clientHeight == element.scrollHeight) {
                    $('.k-overflowing--top').addClass('k-is-hidden');
                    $('.k-overflowing--bottom').addClass('k-is-hidden');
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
            if (undefined == $(this).data('overflowing')) {
                // create a new instance of the plugin
                var plugin = new $.overflowing(this, options);
                // in the jQuery version of the element
                // store a reference to the plugin object
                $(this).data('overflowing', plugin);
            }
        });
    };
})(kQuery);