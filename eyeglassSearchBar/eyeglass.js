$(document).ready(function() {
	$('#trigger').click(function(){
		$('.eyeglassContainer, #trigger').toggleClass('js-searchActive');
		$('form.preload').removeClass('preload');
		$('.eyeglassContainer input').focus();
	});
	$('#boxContainer').slick({
		infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 4
	});
});