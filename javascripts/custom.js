$(document).ready(function () {


    // let ratingValue = 4;
    // let ratingDiv = '#ratings';

    // for (let i = 0; i < ratingValue; i++) {
    //     let ratings = '<i class="fa fa-star fa-orange" aria-hidden="true"></i>';
    //     $(ratingDiv).append(ratings);
    // }

    // if (ratingValue < 5) {

    //     let notstar = (5 - ratingValue);
    //     for (let i = 0; i < notstar; i++) {
    //         let blankStart = '<i class="fa fa-star-o fa-orange" aria-hidden="true"></i>';
    //         $(ratingDiv).append(blankStart);
    //     }

    // }



    $('.carousel').carousel({
        interval: 2000
    });

    var two = $("#two");
    two.owlCarousel({
        autoplay: true,
        loop: true,
        dot: true,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });


    


});
