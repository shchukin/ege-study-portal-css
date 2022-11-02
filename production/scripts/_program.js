(function($) {

    $('.program__expand').on('click', function () {
        $(this).parents('.program').toggleClass('program--expanded');
    });

})(jQuery);
