$(function () {

    const sliderThumbs = new Swiper('.slider__thumbs', { 
        // задаем параметры
        direction: 'vertical',
        slidesPerView: 4, 
        spaceBetween: 4, 
        navigation: { 
            nextEl: '.slider__next', 
            prevEl: '.slider__prev' 
        },
        freeMode: true, 
        mousewheel: true,
        breakpoints: { 
            0: { 
                direction: 'horizontal',
            },
            768: { 
                direction: 'vertical', 
            }
        }
    });
    // Инициализация слайдера изображений
    const sliderImages = new Swiper('.slider__images', { 
        // задаем параметры
        direction: 'vertical', 
        slidesPerView: 1, 
        spaceBetween: 32, 
        mousewheel: true,
        grabCursor: true, 
        thumbs: { 
            swiper: sliderThumbs 
        },
        breakpoints: { 
            0: { 
                direction: 'horizontal', 
            },
            768: { 
                direction: 'vertical', 
            }
        }
    });
})