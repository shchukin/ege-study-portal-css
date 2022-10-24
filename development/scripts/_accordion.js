(function($) {

    $('.accordion__handler').on('click', function () {
        $(this).parent('.accordion__item').toggleClass('accordion__item--expanded');
    });

})(jQuery);
