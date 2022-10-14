(function($) {

    /* Ошибки */

    $('.input--error .input__widget').on('focus', function () {
        $(this).parents('.input').removeClass('input--error');
        $(this).parents('.input').find('.input__output').slideUp(200);
    });


    /* Выбор значения в селекте .input--select (происходит автоматически, но надо красить плейсхолдер) */

    $('.input--select .input__widget').on('change', function () {
        if ($(this).val() === 'placeholder') {
            $(this).parent('.input').addClass('input--placeholder-is-chosen');
        } else {
            $(this).parent('.input').removeClass('input--placeholder-is-chosen');
        }
    });


})(jQuery);
