(function($) {

    /* Открываем айтем */
    $('.nav__link').on('click', function () {

        var $current = $(this).parents('.nav__item');

        /* Если не открыт уже */
        if ( ! $current.hasClass('nav__item--expanded') ) {

            /* Закрываем все остальные */
            $('.nav__item--expanded').removeClass('nav__item--expanded');

            /* Открываем текущий */
            $current.addClass('nav__item--expanded');

        } else {
            $('.nav__item--expanded').removeClass('nav__item--expanded');
        }
    });

    /* закрываем по клику на Esc */
    $(document).on('keyup', function (event) {
        if (event.keyCode === 27) {
            $('.nav__item--expanded').removeClass('nav__item--expanded');
        }
    });

    /* закрываем по клику вне дропдауна */
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.nav__item--has-dropdown').length) {
            $('.nav__item--expanded').removeClass('nav__item--expanded');

        }
    });


})(jQuery);
