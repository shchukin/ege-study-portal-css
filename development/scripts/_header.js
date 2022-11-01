(function($) {

    $('.header__item--has-dropdown .header__link').on('click', function () {

        var $current = $(this).parents('.header__item');

        /* Если не открыт уже */
        if ( ! $current.hasClass('header__item--expanded') ) {

            /* Закрываем все остальные */
            $('.header__item--expanded').removeClass('header__item--expanded');

            /* Открываем текущий */
            $current.addClass('header__item--expanded');

        } else {
            $('.header__item--expanded').removeClass('header__item--expanded');
        }
    });

    /* закрываем по клику на Esc */
    $(document).on('keyup', function (event) {
        if (event.keyCode === 27) {
            $('.header__item--expanded').removeClass('header__item--expanded');
        }
    });

    /* закрываем по клику вне дропдауна */
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.header__item--has-dropdown').length) {
            $('.header__item--expanded').removeClass('header__item--expanded');
        }
    });

})(jQuery);
