(function ($) {

    $('.mfp-handler').magnificPopup({
        type: 'inline',
        removalDelay: 200,
        showCloseBtn: false
    });

    $(document).ready(function () {
        const $poster = $('#poster');
        if ($poster.length) {
            setTimeout(function () {
                $.magnificPopup.open({
                    items: {
                        src: '#poster',
                        type: 'inline'
                    },
                    showCloseBtn: false
                });
            }, 1000);
        }


    });

})(jQuery);
