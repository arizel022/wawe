
$(document).ready(function() {
    $('.blog__slider').slick({
        dots: true,
        // autoplay: true,
        arrows: false
    });
    $(".menu__burger").click(function(){
		$('.menu__list').slideToggle();
	});
});



