'use strict';
// AOS Effect
AOS.init({
	once:true
})

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
// About Background
$('.voise__about__bg:eq(1)').css('background-color', '#00c0ff');
$('.voise__about__bg:eq(2)').css('background-color', '#ed515a');
// Features Background
$('.voise__features__bg:eq(1)').css('background-color', '#07d296');
$('.voise__features__bg:eq(2)').css('background-color', '#ed515a');
$('.voise__features__bg:eq(3)').css('background-color', '#ac06f7');
$('.voise__features__bg:eq(4)').css('background-color', '#5a05ee');
$('.voise__features__bg:eq(5)').css('background-color', '#027bfe');
$('.voise__features__bg:eq(6)').css('background-color', '#0bbef9');
$('.voise__features__bg:eq(7)').css('background-color', '#fdce89');
// Slick Carousel
$('.voise__hero__brand').slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: false,
	autoplay:true,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true
      }
    }
  ]
});

$('.voise__testimonial__company').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // dots:true,
  // autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay:true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay:true,
      }
    }
  ]
});
//  Back to top button
$(document).ready(function() {
  // Show or hide the sticky footer button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
      } else {
        $('.go-top').fadeOut(200);
      }
    });
    // Animate the scroll to top
    $('.go-top').click(function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
    })
 });