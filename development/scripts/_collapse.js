(function($) {

    $('.collapse__handler').on('click', function () {
        $(this).parents('.collapse').toggleClass('collapse--expanded');
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.collapse').length) {
            $('.collapse').removeClass('collapse--expanded');
        }
    });


})(jQuery);
