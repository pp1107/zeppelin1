$(document).ready(function() {


$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $('.block4').toggleClass('block4__active',
     //add 'ok' class when div position match or exceeds else remove the 'ok' class.
      scroll >= $('.block4').offset().top
    );
});
//trigger the scroll
$(window).scroll();//ensure if you're in current position when page is refreshed

    $(function() {
    //caches a jQuery object containing the header element
    var header = $("header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 90) {
            header.addClass("header__active");
        } else {
            header.removeClass("header__active");
        }
    });
  });
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',

        }
    });

    $('.loop').owlCarousel({
        center: true,
        items:4,
   smartSpeed:1000,
   lazyLoad: true,
        dots:true,
        loop:true,
        autoplay:true,
        autoHeight: true,
        autoplayTimeout:1000,
        margin:0,
        responsive:{
            1200:{
                items:4
            },
            992:{
                items:3
            },
            768:{
                items:3
            },
            480:{
                items:2
            },
            320:{
                items:1
            }
        }
    });

    $('.owl-carousel-review').owlCarousel({
        items:1,
        dots:true,
        loop:true,
        margin:0,
        lazyLoad: true
    });

    $('.block2__list').click(function(){
        $(this).find('table').toggle('slow');
        $(this).find('strong').toggleClass('active');
    });
    $('.bxslider').bxSlider({
      pagerCustom: '#bx-pager',

  });
        $('.bxslider1').bxSlider({
      pagerCustom: '#bx-pager1'
  });

    var screen = $(window);    
    if (screen.width() > 768) {



        $('.block8 .img-responsive').animated('pulse');
            $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 70)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    }

    var screen = $(window);    
    if (screen.width() < 768) {
            $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 90)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
              $('header nav .page-scroll').click(function() {
                $(this).css('color', '#fac500')
            $('.col-md-9 nav').hide();
        });
    }

$('.mobile-mnu').click(function(){
    $('header nav').toggle('slow');
});
    });

