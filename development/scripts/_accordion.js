(function($) {

    $('.accordion__handler').on('click', function () {
        $(this).parents('.accordion').toggleClass('accordion--expanded');
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.accordion').length) {
            $('.accordion').removeClass('accordion--expanded');
        }
    });


})(jQuery);
