(function($) {

    var $slot = $('.single-course__sidebar');
    var $detachableArea = $('.single-course__detachable-area');

    if ($slot.length ) {

        var stickPosition = $slot.offset().top - $(window).outerHeight() + $detachableArea.outerHeight();

        function stick() {
            var scrolled = $(window).scrollTop();
            if(scrolled < stickPosition) {
                $detachableArea.addClass('single-course__detachable-area--sticked');
            } else {
                $detachableArea.removeClass('single-course__detachable-area--sticked');
            }
        }

        $(window).on('scroll', stick);
        $(document).ready(stick);

    }
})(jQuery);
