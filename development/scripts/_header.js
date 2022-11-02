(function($) {

    /* Есть три вложенных уровня на которых происходит скрытие/расхлопывание.
     * Лучше в это вникать начиная с самого глубокого уровня.
     *
     * 1) Айтемы  .header__item расхлопываются классом .header__item--expanded
     * Это наши основные выпадайки. Смотрим сначала на десктопах -- там понятнее.
     * Потом на мобилках. Классы используются те же, но стили подтянутся другие.
     *
     * 2) Когда расхлопнут хотя бы один из айтемов, нужно сообщить всей менюшке
     * .header__nav что внутри происходит какой-то движ. Добавляем класс
     * .header__nav--spread и подтянутся стили скрывающие все айтемы, кроме текущего.
     * Это имеет эффект только на мобилках.
     *
     * 3) Есть глобальная схема раскрытия шапки на мобилках. Это делается классом
     * классом .header-expanded на уровне тега <html>, т.е. как бы выходит за рамки
     * компонента шапки. Так происходит потому что раскрытие шапки влияет на другие
     * элементы страницы. Это что-то вроде динамики раскрытия модальных окон.
     */

    var $html = $('html');


    /* РАСХЛОПЫВАНИЕ МЕНЮ */

    var $nav = $('.header__nav');

    /* Открываем айтем */
    $('.header__item--has-dropdown .header__link').on('click', function () {

        var $current = $(this).parents('.header__item');

        /* Если не открыт уже */
        if ( ! $current.hasClass('header__item--expanded') ) {

            /* Закрываем все остальные */
            $('.header__item--expanded').removeClass('header__item--expanded');

            /* Открываем текущий */
            $current.addClass('header__item--expanded');
            $nav.addClass('header__nav--spread');

        } else {
            $('.header__item--expanded').removeClass('header__item--expanded');
            $nav.removeClass('header__nav--spread');
        }
    });

    /* Закрываем по крестику */
    $('.header__close').on('click', function () {
        $(this).parents('.header__item').removeClass('header__item--expanded');
        $nav.removeClass('header__nav--spread');
    });

    /* закрываем по клику на Esc */
    $(document).on('keyup', function (event) {
        if (event.keyCode === 27) {
            $('.header__item--expanded').removeClass('header__item--expanded');
            $nav.removeClass('header__nav--spread');
        }
    });

    /* закрываем по клику вне дропдауна */
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.header__item--has-dropdown').length) {
            $('.header__item--expanded').removeClass('header__item--expanded');
            $nav.removeClass('header__nav--spread');
        }
    });




    /* РАСХЛОПЫВАНИЕ ШАПКИ */


    $('.header__burger').on('click', function () {
        $html.addClass('header-expanded');
    });

    $('.header__close-burger').on('click', function () {
        $html.removeClass('header-expanded');

        /* Если закрываем всю шапку, то заодно закрываем и всё что было расхлопнуто внутри,
         * чтобы при следующем открытии не было ничего расхлопнуто сразу: */
        $('.header__item--expanded').removeClass('header__item--expanded');
        $nav.removeClass('header__nav--spread');
    });

    // не забыть закрыть всё расхлопнутое внутри





    /* РАСХЛОПЫВАНИЕ ПОИСКА */

    $('.header__show-search').on('click', function () {
        if( ! $html.hasClass('search-expanded') ) {
            $html.addClass('search-expanded');
            $('.search__field').focus();
        } else {
            $html.removeClass('search-expanded');
        }
    });

    /* закрываем по клику на Esc */
    $(document).on('keyup', function (event) {
        if (event.keyCode === 27) {
            $html.removeClass('search-expanded');
        }
    });

    /* закрываем по клику вне дропдауна */
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.header__show-search, .header__search-dropdown').length) {
            $html.removeClass('search-expanded');
        }
    });

})(jQuery);
