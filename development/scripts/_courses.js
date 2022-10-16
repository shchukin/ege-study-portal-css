(function($) {

    $('.courses__handler').on('click', function () {
        $('html').toggleClass('courses-expanded');
    });

    $('.courses__action--close').on('click', function () {
        $('html').removeClass('courses-expanded');
    });

    $('.courses__apply-filter').on('click', function () {
        $('html').removeClass('courses-expanded');
    });

})(jQuery);
