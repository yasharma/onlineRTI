var hcs = $('.happy-customer-slider');
hcs.owlCarousel({
    loop:true,
    margin:100,
    nav:true,
    items:2,
    responsive:{
        0:{
            items:1,
            margin:10
        },
        639:{
            items:2,
            margin:10
        },
        1000:{
            items:2
        }
    }
})

$('.left-arrow').click(function() {
    hcs.trigger('next.owl.carousel');
})
$('.right-arrow').click(function() {
    hcs.trigger('prev.owl.carousel');
})


var ors = $('.our-recent-slider');
ors.owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    items:3,
    responsive:{
        0:{
            items:1
        },
        639:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.left-turn').click(function() {
    ors.trigger('next.owl.carousel');
})
$('.right-turn').click(function() {
    ors.trigger('prev.owl.carousel');
})
