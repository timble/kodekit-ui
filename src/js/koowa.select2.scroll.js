(function($) {
    $.fn.select2.amd.require(["select2/dropdown/attachBody", "select2/utils"], (AttachBody, Utils) =>
    {
      AttachBody.prototype._attachPositioningHandler = function (decorated, container)
      {
        var self = this;
        
        var scrollEvent = 'scroll.select2.' + container.id;
        var resizeEvent = 'resize.select2.' + container.id;
        var orientationEvent = 'orientationchange.select2.' + container.id;
        
        var $watchers = this.$container.parents().filter(Utils.hasScroll);
          $watchers.each(function () {
          Utils.StoreData(this, 'select2-scroll-position', {
            x: $(this).scrollLeft(),
            y: $(this).scrollTop()
          });
        });
        
        $watchers.on(scrollEvent, function (ev)
        {
          var position = Utils.GetData(this, 'select2-scroll-position');
    
          if($(this).find('.select2-container--open').length) {
            $(this).scrollTop(position.y);
          }
        });
        
        $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent, function (e)
        {
          self._positionDropdown();
          self._resizeDropdown();
        });
      };
    });
})(kQuery);