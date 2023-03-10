$(function () {
    document.querySelectorAll(".slider").forEach((el) => {
        const thumbs = new Swiper(el.querySelector(".slider__thumbs"), {
            slidesPerView: 4,
            spaceBetween: 4,
            freeMode: true,
            mousewheel: true,
            breakpoints: {
                0: {
                    direction: "horizontal",
                },
                768: {
                    direction: "vertical",
                },
            },
        });

        const slider = new Swiper(el.querySelector(".slider__images"), {
            direction: "vertical",
            slidesPerView: 1,
            spaceBetween: 32,
            mousewheel: true,
            grabCursor: true,
            thumbs: {
                swiper: thumbs,
            },
            navigation: {
                nextEl: ".slider__next",
                prevEl: ".slider__prev",
            },
            breakpoints: {
                0: {
                    direction: "horizontal",
                },
                768: {
                    direction: "vertical",
                },
            },
        });
    });

    var elem = document.querySelector('.reviews__list');
    var msnry = new Masonry(elem, {
        // options
        itemSelector: '.reviews__item',
        fitWidth: true,
        columnWidth: 580,
    });
});