(function($) {
    $('.commit__submit').on('click', function (event) {
        event.preventDefault();
        var $this = $(this);
        if ( ! $this.hasClass('button--loading') &&  ! $this.hasClass('button--success') ) {
            $this.addClass('button--loading');
            setTimeout(function () {
                $this.removeClass('button--loading').addClass('button--success');
                $('.alert').fadeIn(200);
            }, 3000);
            setTimeout(function () {
                $this.removeClass('button--success');
            }, 4500);
        }
    });
})(jQuery);
