/* Smoother Scrolling----------------------------------------------------*/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/* bxSlider ----------------------------------------------------------------*/

$(function(){
  $('.bxslider').bxSlider({
    speed: 500,
    controls: false,
    auto: true,
    easing: 'ease-in',
    minSlides: 2,
    maxSlides: 4,
    slideMargin: 0,
    slideWidth: 0
  });
});

/* Alert Message *---------------------------------------------------------*/

$(function() {
		$('.newsletter').on('submit', 'form', function(event) {
			event.preventDefault();
			var emailAlert = $('#your-email');
			if (emailAlert.val()) {
				alert('Thanks for subscribing!');
				emailAlert.val('');
			}
      else
      {
				alert('Please submit a valid email address.');
			}
		});
	});
