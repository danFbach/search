$(document).ready(function() {
	$('#trigger').click(function(){
		$('.eyeglassContainer').toggleClass('js-searchActive');
		$('body').removeClass('preload');
		$('.eyeglassContainer input').focus();
	});
});