// первый слайдер
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    watchSlidesProgress: true,
    allowTouchMove: false,
    breakpoints: {
        1280: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        601: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        493: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});

const swiper3 = new Swiper('.image', {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: swiper,
    },
});
// второй слайдер
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

// const active_slide = document.getElementsByClassName("swiper-slide-active");
// const div_image = document.getElementsByClassName("image");
// function change_cont(){
//     div_image.innerHTML = active_slide;
//     // active_slide.innerHTML = '';
//     console.log(active_slide);
// }