$(document).ready(function() {
    //hamburger
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $('.header nav').slideToggle();
        $('html').toggleClass('no-scroll');
    });


	//sliders 
    $('.certificates').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        dots: true,
        prevArrow: '<button class="prev"></button>',
        nextArrow: '<button class="next"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                vertical: false
              }
            }
          ]
    });

    // color window and knob slider
    $('.window--slider, .knob--slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="prev"><img src="img/ico/arrow-left-gray.png" alt="" /></button>',
        nextArrow: '<button type="button" class="next"><img src="img/ico/arrow-right-gray.png" alt="" /></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            }
        ]
    });

    // items slider
    $('.three-items--slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        dots: false,
        arrows: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }

        ]
    });



     //inputmask
    $(".tel__mask").inputmask({
        mask: "+7 (999) 999-99-99",
        "placeholder": "_",
        showMaskOnHover: false,
        "clearIncomplete": true
    });

    
});

 function sliderWorks(element) {
    element.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
    });
}
function sliderNav(nav) {
    nav.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.our-works .example__items',
        dots: false,
        focusOnSelect: true
    });
}


$(document).ready(function() {
    if ( $(window).width() <= 991 ) {
      if ( !$(".our-works .example__items").hasClass('slick-initialized') ) {
        sliderWorks($('.our-works .example__items'));
        sliderNav($('.slider-nav'));
      }  
    } else {
      if ( $(".our-works .example__items").hasClass('slick-initialized') ) {
        $(".our-works .example__items").slick("unslick");
        $('.slider-nav').slick("unslick");
      }
    }
})


$(window).resize(function() {
    if ( $(window).width() <= 991 ) {
     
      if ( !$(".our-works .example__items").hasClass('slick-initialized') ) {
        sliderWorks($('.our-works .example__items'));
        sliderNav($('.slider-nav'));
      }  
    } else {
      if ( $(".our-works .example__items").hasClass('slick-initialized') ) {
        $(".our-works .example__items").slick("unslick");
        $('.slider-nav').slick("unslick");
      }
    }
});