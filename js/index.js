const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: -25,
    resistance: true,
    breakpoints: {
        1280: {
            slidesPerView: 3,
            spaceBetween: -25
        },
        601: {
            slidesPerView: 2,
            spaceBetween: -25
        },
        493: {
            slidesPerView: 1,
            spaceBetween: 100
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});

const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: false,

    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        493: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        1023: {
            slidesPerView: 1,
            spaceBetween: 50
        },
        1599: {
            slidesPerView: 2,
            spaceBetween: 50
        },
        1280: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        1920: {
            slidesPerView: 2,
            spaceBetween: 200
        },
        1367: {
            slidesPerView: 2,
            spaceBetween: 0
        }
    }
});