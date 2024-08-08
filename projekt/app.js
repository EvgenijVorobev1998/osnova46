VANTA.WAVES({ el: " #intro ", mouseControls: true, touchControls: true, gyroControls: false, minHeight: 200.00, minWidth: 200.00, scale: 1.00, scaleMobile: 1.00, color: 0x346b, shininess: 32.00, waveHeight: 10.00, waveSpeed: 0.35, zoom: 0.79 })

$('.back-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 30); // 800 - Скорость анимации
});

$(window).scroll(function () {
    let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

    if (scrolled > 450) { // Если высота прокрутки больше 350 - показываем кнопку
        $('.back-to-top').addClass('active');
    } else {
        $('.back-to-top').removeClass('active');
    }
});

$(document).ready(function () {

    $(".owl-carousel.tm").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        smartSpeed: 800,
        dotsSpeed: 1200,
        autoplay: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            660: {
                items: 2
            },
            992: {
                items: 3
            },
            1400: {
                items: 4
            }

        }
    });

    $(".owl-carousel.part").owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        dots: false,
        smartSpeed: 800,
        dotsSpeed: 1200,
       /* autoplay: 1000,*/
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            660: {
                items: 2
            },
            992: {
                items: 3
            },
            1400: {
                items: 3
            }

        }
    });

    $(".owl-carousel.ms").owlCarousel({
        loop: true,

        nav: true,
        dots: false,
        smartSpeed: 800,
        dotsSpeed: 1200,
        autoplay: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            660: {
                items: 2
            },
            992: {
                items: 3
            },
            1400: {
                items: 4
            }

        }
    });

});






document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector(".intro").classList.toggle("open")
    })
}
)

document.getElementById("menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
})

document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
})
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    event._isClickWithInMenu = true;
    document.querySelector(".intro").classList.remove("open")
})

