(function($) {

    $('[data-dropdown]').on('click', function () {
        if ( ! $(this).hasClass('header__handler--expanded') ) {

            /* Закрываем все остальные */
            $('.header__handler--expanded').removeClass('header__handler--expanded');
            $($('.header__dropdown')).hide();

            /* Открываем нужный */
            $('#' + $(this).data('dropdown')).show();
            $(this).addClass('header__handler--expanded');

        } else {
            $($('.header__dropdown')).hide();
            $('.header__handler--expanded').removeClass('header__handler--expanded');
        }
    });

    /* закрываем по клику на Esc */
    $(document).on('keyup', function (event) {
        if (event.keyCode === 27) {
            $($('.header__dropdown')).hide();
            $('.header__handler--expanded').removeClass('header__handler--expanded');
        }
    });

    /* закрываем по клику вне дропдауна */
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.header__dropdown, [data-dropdown]').length) {
            $($('.header__dropdown')).hide();
            $('.header__handler--expanded').removeClass('header__handler--expanded');
        }
    });

})(jQuery);
