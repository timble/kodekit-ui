/**
 * Nooku Framework - http://nooku.org/framework
 *
 * @copyright	Copyright (C) 2015 Johan Janssens and Timble CVBA. (http://www.timble.net)
 * @license		GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link		https://github.com/nooku/nooku-framework for the canonical source repository
 */

if (typeof Koowa === 'undefined') {
    Koowa = {};
}


(function($){
/**
 * Grid class
 */
Koowa.Grid = Koowa.Class.extend({
    initialize: function(element){
        var self = this;

        this.element    = $(element);
        this.form       = this.element.is('form') ? this.element : this.element.closest('form');
        this.toggles    = this.element.find('.-koowa-grid-checkall');
        this.checkboxes = this.element.find('.-koowa-grid-checkbox').filter(function(i, checkbox) {
            return !$(checkbox).prop('disabled');
        });

        if(!this.checkboxes.length) {
            this.toggles.prop('disabled', true);
        }

        this.toggles.on('change.koowa', function(event, ignore){
            if(!ignore) {
                self.checkAll($(this).prop('checked'));
            }
        });

        this.checkboxes.on('change.koowa', function(event, ignore){
            if(!ignore) {
                self.setCheckAll();
            }
        });

        this.setScopebar();
        this.setTableHeaders();
        this.setTableRows();
    },
    setScopebar: function() {
        $('.js-filter-container', this.form).scopebar();
    },
    setTableHeaders: function() {
        //Make the table headers "clickable" and make checkall work
        this.form.on('click.koowa', 'th', function(event) {
            var $target = $(event.target);
            var link     = $target.find('a');

            if (link.length) {
                //Run this check on click, so that progressive enhancements isn't bulldozed
                if(link.prop('href')) {
                    window.location.href = link.prop('href');
                } else {
                    link.trigger('click', event);
                }
            }
            else {
                var checkall = $target.find('.-koowa-grid-checkall');

                if (checkall.length) {
                    checkall.prop('checked', checkall.is(':checked') ? false : true).trigger('change');
                }
            }
        });
    },
    setTableRows: function() {
        // Trigger checkbox when the user clicks anywhere in the row
        this.form.on('click.koowa', 'tr', function(event) {
            var target = $(event.target);

            if(target.is('[type=radio], [type=checkbox], a[href], span.footable-toggle')) {
                return;
            }

            var tr = target.is('tr') ? target : target.parents('tr'),
                checkbox = tr.find('.-koowa-grid-checkbox');

            if(tr.data('readonly') == true || !checkbox.length) {
                return;
            }

            if (checkbox.length) {
                checkbox.prop('checked', !checkbox.prop('checked')).trigger('change');
            }
        });

        // Checkbox should add selected and selected-multiple classes to the row
        this.form.on('change.koowa', '.-koowa-grid-checkbox', function(event) {
            var selected,
                target = $(event.target),
                tr     = target.parents('tr'),
                parent = tr.parent();

            if (target.is('[type=radio]')) {
                parent.find('.selected').removeClass('selected');
            }

            $(this).prop('checked') ? tr.addClass('selected') : tr.removeClass('selected');

            selected = parent.find('.selected').length;

            if(selected > 1) {
                parent.addClass('selected-multiple').removeClass('selected-single')
            } else if (selected === 1) {
                parent.removeClass('selected-multiple').addClass('selected-single');
            } else {
                parent.removeClass('selected-multiple').removeClass('selected-single');
            }
        }).trigger('change', true);
    },
    checkAll: function(value){
        var changed = this.checkboxes.filter(function(i, checkbox){
            return $(checkbox).prop('checked') !== value;
        });

        this.checkboxes.prop('checked', value);
        changed.trigger('change', true);
    },
    uncheckAll: function() {
        this.checkAll(false);
    },
    setCheckAll: function(){
        var total = this.checkboxes.filter(function(i, checkbox){
            return $(checkbox).prop('checked') !== false;
        }).length;

        this.toggles.prop('checked', this.checkboxes.length === total);
        this.toggles.trigger('change', true);
    }
});

/**
 * Find all selected checkboxes' ids in the grid
 *
 * @param   {string|object|null} [context]   A DOM Element, Document, or jQuery to use as context
 * @return  array           The items' ids
 */
Koowa.Grid.getAllSelected = function(context) {
    return $('.-koowa-grid-checkbox:checked', context);
};

/**
 * Get a query string for selected checkboxes
 *
 * @param   {string|object|null} [context]   A DOM Element, Document, or jQuery to use as context
 * @return  array           The items' ids
 */
Koowa.Grid.getIdQuery = function(context) {
    return decodeURIComponent(this.getAllSelected(context).serialize());
};

$(function() {
    $('.k-js-grid').each(function(i, el) {
        new Koowa.Grid($(el));
    })
});


})(window.kQuery);