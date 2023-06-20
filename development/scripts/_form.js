(function ($) {
    $('.form__submit').on('click', function (event) {
        event.preventDefault();
        var $this = $(this);
        var $form = $this.parents('.form');
        var $alert = $form.next('.inner-alert');

        if (!$this.hasClass('button--loading') && !$this.hasClass('button--success')) {
            $this.addClass('button--loading');

            if ($alert.length) {
                setTimeout(function () {
                    $form.hide();
                    $alert.show();
                }, 4500);
            } else {
                setTimeout(function () {
                    $this.removeClass('button--loading').addClass('button--success');
                    $('.alert').fadeIn(200);
                }, 3000);
                setTimeout(function () {
                    $this.removeClass('button--success');
                }, 4500);
            }
        }
    });
})(jQuery);
