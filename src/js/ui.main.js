(function($) {


    /**
     * Footable
     */
    kodekitUI.initializeFootable = function() {
        $('.k-js-responsive-table').removeClass('footable footable-loaded').footable({
            toggleSelector: '.footable-toggle',
            breakpoints: {
                phone: 400,
                tablet: 600,
                desktop: 800
            }
        });
    };


    /**
     * Select 2
     */
    kodekitUI.initializeSelect2 = function() {
        $('.k-js-select2').select2({
            theme: "bootstrap"
        });
    };


    /**
     * Datepicker
     */
    kodekitUI.initializeDatepicker = function datepicker() {
        $('.k-js-datepicker').kdatepicker();
    };


    /**
     * Magnific popup
     */
    kodekitUI.initializeModal = function() {
        $('.k-js-image-modal').magnificPopup({type: 'image'});
        $('.k-js-inline-modal').magnificPopup({type: 'inline'});
        $('.k-js-iframe-modal').magnificPopup({type: 'iframe'});
    };


    /**
     * Tooltip
     */

    kodekitUI.initializeTooltip = function() {
        $('.k-js-tooltip').ktooltip({
            animation: true,
            placement: 'top',
            delay: {show: 200, hide: 50},
            container: '.k-ui-container'
        });
    };

    kodekitUI.initializeNavigation = function() {
        $('.k-js-top-navigation').ktopnavigation();
    };

    kodekitUI.initializeFileinput = function() {
        $('.k-js-file-input').kfileinput();
    };

    kodekitUI.initializeTabscroller = function() {
        $('.k-js-tabs-scroller').ktabscroller();
    };

    /**
     * Load functions
     *
     * Quick function to run all functions
     * Use on:
     * - Page load
     * - AJAX change
     * - On other DOM changes when needed
     */
    if (typeof kodekitUI.loadFunctions === 'undefined') {
        kodekitUI.loadFunctions = function() {

            /**
             * Local functions
             */
            kodekitUI.initializeFootable();
            kodekitUI.initializeSelect2();
            kodekitUI.initializeDatepicker();
            kodekitUI.initializeModal();
            kodekitUI.initializeTooltip();
            kodekitUI.initializeNavigation();
            kodekitUI.initializeFileinput();
            kodekitUI.initializeTabscroller();

            /**
             * Global kodekitUI functions
             */
            kodekitUI.sidebarToggle();
            kodekitUI.scopebarToggles();
            kodekitUI.subcontentToggle();
            kodekitUI.gallery();
            kodekitUI.dragger();
        };
    }


    $(document).ready(function () {

        /**
         * Konami
         * Not needed to reload since we're targeting html element which won't change
         */
        new Konami(function() {
            $('html, .k-ui-container').css({
                'font-family': 'Comic Sans MS'
            });
        });


        /**
         * Window resize
         */
        var resizeTimer,
            resizeClass = 'k-is-resizing';

        $(window).on('resize', function() {

            // Add class to body when resizing so we can add styling to the page
            $('body').addClass(resizeClass);

            // Throttle
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {

                // Remove the class when resize is done
                $('body').removeClass(resizeClass);

            }, 200);
        });


        /**
         * Tab change
         * Run code on tab change
         */
        $('a[data-k-toggle="tab"]').on('shown', function (e) {
            kodekitUI.initializeFootable();
        });


        /**
         * Run functions DOM loaded
         */
        kodekitUI.loadFunctions();

        /**
         * Load "ajaxloading" only once to make sure events are not fire multiple times
         */
        kodekitUI.ajaxloading();
        kodekitUI.loaded = function(responseTxt, statusTxt, xhr, pageHead, pageTitle) {
            kodekitUI.loadFunctions();

        };


    });

})(kQuery);
