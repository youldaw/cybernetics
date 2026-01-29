$(function () {

    // $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('.menu-opener').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.navbar').toggleClass('active');
    });

    var swiper1 = new Swiper(".case-slider", {
        spaceBetween: 10,
        slidesPerView: 2,
        // centeredSlides: true,
        loop: true,
        speed: 1000,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
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