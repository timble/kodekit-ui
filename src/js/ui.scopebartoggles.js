/**
 * Filter and search toggle buttons in the scopebar
 */

(function($) {

    $(document).ready(function () {

        kodekitUI.scopebarToggles = function() {

            var $scopebar = $('.k-js-scopebar');
            if ($scopebar.length) {

                $.each($scopebar, function () {

                    var $this = $(this),
                        $scopebarFilters = $this.find('.k-scopebar__item--filters'),
                        $scopebarSearch = $this.find('.k-scopebar__item--search'),
                        scopebarToggleClass = '.k-scopebar__item--toggle-buttons',
                        scopebarToggleButtonContainer = '<div class="k-scopebar__item k-scopebar__item--toggle-buttons"></div>';

                    if (!$this.find(scopebarToggleClass).length) {
                        $this.prepend(scopebarToggleButtonContainer);
                    }
                    var toggleButtons = $this.find(scopebarToggleClass);

                    if ($scopebarFilters.length && !$this.find('.k-toggle-scopebar-filters').length) {
                        toggleButtons.prepend('<button type="button" class="k-scopebar__button k-toggle-scopebar-filters k-js-toggle-filters">' +
                            '<span class="k-icon-filter" aria-hidden="true">' +
                            '<span class="k-visually-hidden">Filters toggle</span>' +
                            '<div class="k-js-filter-count k-scopebar__item-label k-scopebar__item-label--numberless"></div>' +
                            '</button>');
                    }

                    if ($scopebarSearch.length && !$this.find('.k-toggle-scopebar-search').length) {

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
                $('.k-js-toggle-filters').on('click', function () {
                    $(this).parent().siblings('.k-scopebar__item--filters').slideToggle('fast');
                });

                $('.k-js-toggle-search').on('click', function () {
                    $(this).parent().siblings('.k-scopebar__item--search').slideToggle('fast');
                });
            }

        };

    });

})(kQuery);
