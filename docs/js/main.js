$(function () {
    const headerHeight = $('.header').outerHeight();

    $(window).scroll(function () {
        if ($(window).scrollTop() >= headerHeight) {
            $('.header').addClass('header__sticky')
        } else {
            $('.header').removeClass('header__sticky')
        }
    });

    $('.menu__link, .button').on('click', function (event) {
        event.preventDefault();
        let scrollAnchor = $(this).attr('href')
        let scrollPoint = $(scrollAnchor).offset().top;

        if (scrollAnchor === '#catalog') {
            scrollPoint = scrollPoint - 95;
        }

        else if (scrollAnchor === '#delivery') {
            scrollPoint = scrollPoint - 80;
        }

        else {
            scrollPoint = scrollPoint - 20;
        }

        $('body, html').animate({ scrollTop: scrollPoint }, 1000);
    });

    $('.burger').on('click', function () {
        $('.mobile-menu__wrapper').toggleClass('mobile-menu__wrapper--active');
        $('.overlay').toggleClass('overlay--active');
        $('body').toggleClass('lock');
    });

    new Swiper('.features__inner', {
        pagination: {
            el: '.features__pagination',
            clickable: true,
            bulletClass: 'features__bullet',
            bulletActiveClass: 'features__bullet--active',
        },
        autoHeight: true,
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
            1200: {
                slidesPerGroup: 4,
            },
            992: {
                slidesPerView: 4,
            },
            560: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            320: {
                slidesPerGroup: 1,
                slidesPerView: 1,
            }
        }
    });

    document.querySelectorAll(".slider").forEach((el) => {
        const thumbs = new Swiper(el.querySelector(".slider__thumbs"), {
            freeMode: true,
            slidesPerView: 4,
            navigation: {
                nextEl: ".slider__next",
                prevEl: ".slider__prev",
            },
            breakpoints: {
                0: {
                    direction: "horizontal",
                    spaceBetween: 0,
                },
                992: {
                    direction: "vertical",
                    spaceBetween: 4,
                    mousewheel: true,
                },
            },
        });

        const slider = new Swiper(el.querySelector(".slider__images"), {
            direction: "vertical",
            slidesPerView: 1,
            spaceBetween: 32,
            navigation: {
                nextEl: ".slider__img-next",
                prevEl: ".slider__img-prev",
            },
            grabCursor: true,
            thumbs: {
                swiper: thumbs,
            },
            breakpoints: {
                0: {
                    direction: "horizontal",
                    mousewheel: false,
                },
                992: {
                    direction: "vertical",
                    mousewheel: true,
                },
            },
        });
    });

    var elem = document.querySelector('.reviews__list');
    var msnry = new Masonry(elem, {
        // options
        itemSelector: '.reviews__item',
        fitWidth: true,
    });

    new Swiper('.reviews__wrapper', {
        pagination: {
            el: '.reviews__pagination',
            clickable: true,
            bulletClass: 'reviews__bullet',
            bulletActiveClass: 'reviews__bullet--active',
        },
        autoHeight: true,
        spaceBetween: 20,
        breakpoints: {
            560: {
                slidesPerView: 1.7,
                centeredSlides: true,
                centeredSlidesBounds: true,
                spaceBetween: 40,
            },
            320: {
                slidesPerGroup: 1,
                slidesPerView: 1,
                centeredSlides: true,
                centeredSlidesBounds: true
            }
        }
    });

    
});