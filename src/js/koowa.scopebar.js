;(function(window, document, $) {

    $.widget("koowa.scopebar", {

        widgetEventPrefix: 'scopebar:',

        options: {
            template: function() {

            }
        },

        _create: function() {
            var prototype = $('.k-js-filter-prototype');

            this.template = prototype.clone();
            this.template.removeClass('.k-js-filter-prototype');

            prototype.remove();

            this._addEvents();

            var container = $('.k-js-filter-container');

            $('.k-js-filters div[data-filter]').each(function(i, item) {
                var template = prototype.clone();

                item = $(this);

                item.addClass('k-js-dropdown-content k-scopebar-dropdown__body__content');

                template.find('.k-js-dropdown-body').prepend(item);
                template.find('.k-js-dropdown-title').html(item.data('title'));

                var dropdown_button = template.find('.k-js-dropdown-button'),
                    tooltip = dropdown_button.data('tooltip-title');

                if (tooltip) {
                    tooltip = tooltip.replace('%s', item.data('title'));

                    dropdown_button.ktooltip({
                        "container":".koowa-container",
                        "delay":{"show":500,"hide":50},
                        'title': tooltip
                    });
                }


                var label_el = template.find('.k-js-dropdown-label'),
                    label = item.data('label'),
                    count = item.data('count');

                if (count && count > 0) {
                    label = count;
                }

                if (label) {
                    label_el.html(label);
                } else {
                    label_el.hide();
                }

                item.show();
                template.show();

                container.append(template);

                $('.k-js-filter-count').text(container.find('.k-js-dropdown-label:visible').length);
            });
        },

        _addEvents: function() {
            // Dropdown menu
            var self = this,
                hasActive = function() {
                    return $('.k-js-dropdown').hasClass('k-is-active');
                };

            // Keyboard navigation
            $(document).keyup(function (e) {
                // Go to next dropdown with right arrow
                if (e.keyCode == 39 && hasActive()) {
                    var nextItem = $('.k-js-dropdown.k-is-active').next().find($('.k-js-dropdown-button'));

                    if ( nextItem.hasClass('k-js-dropdown-button') ) {
                        // Close active item
                        self.closeDropdown();

                        // Open hovered item
                        self.openDropdown(nextItem);
                    }

                }

                // Go to previous dropdown with left arrow
                if (e.keyCode == 37 && hasActive()) {
                    var prevItem = $('.k-js-dropdown.k-is-active').prev().find($('.k-js-dropdown-button'));

                    if ( prevItem.hasClass('k-js-dropdown-button') ) {
                        // Close active item
                        self.closeDropdown();

                        // Open hovered item
                        self.openDropdown(prevItem);
                    }

                }

                // Close dropdown on esc key
                if (e.keyCode == 27 && hasActive()) {
                    self.closeDropdown();
                }
            });

            // Close dropdown on clicking outside
            // Do not close item on clicking the dropdown body
            $('html').click(function (event) {
                var target = $(event.target),
                    isSelect2 = event.target.className.search('select2-') !== -1,
                    isDatepicker = (target.parents('.datepicker-dropdown').length > 0 || (target.is('td') && target.hasClass('day')));

                if (!isSelect2 && !isDatepicker && target.parents('.k-js-filter-container').length === 0) {
                    self.closeDropdown();
                }
            });

            this.element.on('click', '*', function(event) {
                var button = $(event.target);

                if (!button.hasClass('k-js-dropdown-button')) {
                    button = button.parents('.k-js-dropdown-button');
                }

                if (button.length === 0) {
                    return;
                }

                if (button.parent().hasClass('k-is-active')) {
                    self.closeDropdown();
                } else {
                    self.openDropdown(button);
                }

                event.stopPropagation();
            });

            this.element.on('mouseenter mouseleave', '*', function(event) {
                var button = $(event.target);

                if (!button.hasClass('k-js-dropdown-button')) {
                    button = button.parents('.k-js-dropdown-button');
                }

                if (button.length === 0) {
                    return;
                }

                // Check if any dropdown is active
                // Check if the hovered item isn't the active item
                if (hasActive() && (!button.parent().hasClass('k-is-active')) ) {
                    // Close active item
                    self.closeDropdown();

                    // Open hovered item
                    self.openDropdown(button);

                    // Set focus to hovered item
                    button.focus();
                }
            });

            submitForm = function(form, box) {
                box.find('select').each(function(i, select) {
                    var value = $(select).val();

                    if (!value || value === '' || (typeof value === 'object' && value.length === 1 && value[0] === '')) {
                        var name = $(select).attr('name');
                        name = name.replace('[]', '');
                        $(select).removeAttr('name');
                        $(form).append('<input type="hidden" name="'+name+'" value="" />');
                    }
                });

                form.submit();
            };

            this.element.on('click', '.k-js-clear-filter', function(event) {
                event.preventDefault();

                var box = $(event.target).parents('.k-js-dropdown');

                box.find(':input')
                    .not(':button, :submit, :reset, :hidden')
                    .removeAttr('checked')
                    .removeAttr('selected')
                    .not(':checkbox, :radio')
                    .val('')
                    .filter('select').trigger('change'); // For select2

                var form = event.target.form;

                if (form) {
                    submitForm(form, box);
                }

            }).on('click', '.k-js-apply-filter', function(event) {
                event.preventDefault();

                var form = event.target.form,
                    box = $(event.target).parents('.k-js-dropdown');

                if (form) {
                    submitForm(form, box);
                }
            });
        },

        openDropdown: function(element) {
            var parent = element.parent();

            this.closeDropdown();

            // Set active class to parent
            parent.addClass('k-is-active');

            // Find select elements in dropdown
            var select = parent.find('select');

            // Also open select2 when opening dropdown
            if (select.length === 1 && select.data('select2')) {
                //select.select2('open');
            }

            element.focus();
        },

        closeDropdown: function() {
            // Find active dropdown
            var activeItem = $('.k-js-dropdown.k-is-active');

            // Find select elements in active dropdown
            var select = activeItem.find('select');

            // Remove active class from active item
            activeItem.removeClass('k-is-active');

            // Close select2 when closing dropdown
            if (select.data('select2')) {
                select.select2('close');
            }
        }

    });

} (window, document, kQuery));