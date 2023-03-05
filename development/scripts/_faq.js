(function($) {

    $('.faq__handler').on('click', function () {
        $(this).parents('.faq__item').toggleClass('faq__item--expanded');
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.collapse').length) {
            $('.collapse').removeClass('faq__item--expanded');
        }
    });


})(jQuery);
