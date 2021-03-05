
$(document).ready(function() {
    $('.blog__slider').slick({
        dots: true,
        // autoplay: true,
        arrows: false
    });
    
    $('.menu__burger').click(function(){
		$('.menu__list').slideToggle();
	});
    $('.menu__burger').click(function () {
        $('.menu__burger').toggleClass('active');
    });

    $('.hero').on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });

    var mixer = mixitup('.gallery__pictures');

    $('.fancybox').fancybox({
        padding : 30,
        helpers:  {
            overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    });

    $('.video__play').click(function(){
		$('.fancybox').click();
	});

});



