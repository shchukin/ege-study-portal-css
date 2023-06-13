(function($) {
    var $bar = $('.bar');
    var stickPosition = 200; /* Random number but same to up.js */
    var unStickPosition = 0;

    function countUnStickPosition() {
        unStickPosition = $bar.offset().top - $(window).outerHeight() + $('.bar__detachable').outerHeight();
    }

    function stickBar() {

        if ( $(window).scrollTop() < stickPosition ) {
            $bar.removeClass('bar_sticky');
            $bar.removeClass('bar_static');
        }

        if ( $(window).scrollTop() >= stickPosition && $(window).scrollTop() < unStickPosition ) {
            $bar.addClass('bar_sticky');
            $bar.removeClass('bar_static');
        }

        if ( $(window).scrollTop() >= unStickPosition ) {
            $bar.addClass('bar_static');
            $bar.removeClass('bar_sticky');
        }
    }

    function groundBar() {
        $(window).off('load', countUnStickPosition);
        $(window).off('resize', countUnStickPosition);
        $(window).off('scroll', stickBar);
        $(window).off('resize', stickBar);
        $bar.removeClass('bar_sticky');
        $bar.addClass('bar_static');
        $bar.addClass('bar_grounded');
    }

    $('.bar__close').on('click', groundBar);

    if ($bar.length) {
        $(document).ready(countUnStickPosition);
        $(window).on('load', countUnStickPosition);
        $(window).on('resize', countUnStickPosition);

        $(window).on('scroll', stickBar);
        $(window).on('resize', stickBar);
        $(document).ready(stickBar);
    }

})(jQuery);





