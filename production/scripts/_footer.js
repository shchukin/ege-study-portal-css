(function($) {

    $('.footer__handler').on('click', function () {
        $(this).parents('.footer__column').toggleClass('footer__column--expanded');
    });

})(jQuery);
