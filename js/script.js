$ (document).ready(function(){

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 10) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    $('#s1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        mouseDrag:false,
        dots:false,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    });

    var owl = $('#s1');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function(event){
        new WOW().init();
    })

    wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    })
    wow.init();

    $('#s2').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        items:3,
    })

    $('#s3').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        items:3,
    })

    $('#s4').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        items:3,
        autoplay:true,
        autoplayTimeout:3000,
    })

    setTimeout (function(){
        $('.preloader').fadeOut();
    },2000)

})