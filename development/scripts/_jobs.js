(function($) {

    $('.jobs__handler').on('click', function () {
        $(this).parents('.jobs__item').toggleClass('jobs__item--expanded');
    });

})(jQuery);
