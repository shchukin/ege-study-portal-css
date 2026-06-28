(function ($) {

    $('.mfp-handler').magnificPopup({
        type: 'inline',
        removalDelay: 200,
        showCloseBtn: false
    });

    $(document).ready(function () {
        const $poster = $('#poster');
        if ($poster.length) {
            var id = $poster.attr('data-id');
            var delay = $poster.attr('data-delay');
            if ($poster.attr('data-appearance') == '1') {
                appearance = true;
            } else {
                appearance = false;
            }
            var nodepth = $poster.attr('data-nodepth');
            if (appearance) {
                poster_close = getCookie('poster_close_' + id)
                if (poster_close != null) {
                    return;
                }
            }
            setTimeout(function () {
                $.magnificPopup.open({
                    items: {
                        src: '#poster',
                        type: 'inline'
                    },
                    showCloseBtn: false,
                    callbacks: {
                        close: function () {
                            if (appearance) {
                                setCookie('poster_close_' + id, 1, 30);
                            }
                        },
                    }
                });
            }, delay);
        }
    });

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

})(jQuery);
