document.addEventListener('DOMContentLoaded', () => {


    /* Слайдер "Feedback" */

    new Swiper('.swiper--feedback', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--container-padding')),
        autoHeight: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            prevEl: '#feedback-prev',
            nextEl: '#feedback-next',
        },

        breakpoints: {
            740: {
                slidesPerView: "auto",
                spaceBetween: 20,
                slidesPerGroup: 3,
                autoHeight: false
            }
        }
    });




    /* Слайдер "Results" */

    new Swiper('.swiper--results', {

        spaceBetween: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--container-padding')),

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            740: {
                loop: true,
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 20,
                pagination: false
            }
        }
    });




    /* Слайдер "Blog" */

    new Swiper('.swiper--blog', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--container-padding')),

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },

        breakpoints: {
            740: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20
            }
        }
    });



    /* Слайдер "info" */

    new Swiper('.swiper--info', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        autoHeight: true,
        spaceBetween: 0,
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 1000,
        },
        navigation: {
            prevEl: '.swiper-control--prev',
            nextEl: '.swiper-control--next',
        },
    });



});
