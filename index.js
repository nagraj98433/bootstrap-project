$(document).ready(function () {
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });



    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            // 600: {
            //     items: 3
            // },
            // 1000: {

            //     items: 5
            // }
        }
    })
    var navbar = document.getElementById('navbar');
    var offsetTop = navbar.offsetTop;
    console.log(offsetTop);
    window.addEventListener('scroll', function () {
        console.log(window.scrollY);
        if (window.scrollY > offsetTop) {
            navbar.classList.add('fixed-top');
            navbar.classList.add('fadeUp');
        } else {
            navbar.classList.contains('fixed-top') &&
                navbar.classList.remove('fixed-top')

            navbar.classList.contains('fadeUp') &&
                navbar.classList.remove('fadeUp')
        }
    })
});