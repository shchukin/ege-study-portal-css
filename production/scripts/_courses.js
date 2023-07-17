(function($) {

    $('.courses__handler').on('click', function () {
        $('html').toggleClass('courses-expanded');
    });

    $('.courses__close').on('click', function () {
        $('html').removeClass('courses-expanded');
    });

    $('.courses__apply').on('click', function () {
        $('html').removeClass('courses-expanded');
    });

})(jQuery);
