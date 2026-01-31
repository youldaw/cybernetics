$(function () {

    // $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('.menu-opener').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('header .navbar-nav').toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    var swiper1 = new Swiper(".case-slider", {
        spaceBetween: 10,
        slidesPerView: 2,
        // centeredSlides: true,
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                centeredSlides: true,
            },
            640: {
                slidesPerView: 1.4,
                centeredSlides: true,
            },
            769: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
        },
    });

    var swiper2 = new Swiper(".case-slider__box", {
        spaceBetween: 40,
        slidesPerView: 1,
        loop: false,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


});

$(function () {
    ymaps.ready(function () {

        var map = new ymaps.Map('map', {
            center: [53.347996, 83.778367],
            zoom: 16,
            controls: []
        });

        var placemark = new ymaps.Placemark(
            [53.347996, 83.778367],
            {},
            {
                iconLayout: 'default#image',
                iconImageHref: 'images/map-pin.png',
                iconImageSize: [56, 56],
                iconImageOffset: [-25, -50]
            }
        );

        map.geoObjects.add(placemark);
    });
});