'use strict';

var ContactFrontFrontend = {

    init: function () {
        this.bindEvents();
    },

    bindEvents: function () {
        let self = this;

        $('.contacts__link').on('click', function (e) {
            e.preventDefault();
            $('.contacts__link').removeClass('contacts__link--current');
            $('.contacts__tab').removeClass('contacts__tab--current');
            var id = $(e.target).attr('href');
            $(e.target).addClass('contacts__link--current');
            $(id).addClass('contacts__tab--current');
        });
    },
};

ContactFrontFrontend.init();
