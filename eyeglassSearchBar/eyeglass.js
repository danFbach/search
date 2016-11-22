$(document).ready(function() {
	$('#trigger').click(function(){
		$('.eyeglassContainer').toggleClass('js-searchActive');
		$('form.preload').removeClass('preload');
		$('.eyeglassContainer input').focus();
	});
});