$(document).ready(function() {
	$('.boxContainer').slick({
		infinite: false,
	  	slidesToShow: 5,
	  	slidesToScroll: 4,
	  	dots: false,
	  	responsive: [ 
	  		{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2						
				}	  	
		  	},
		  	{
		  		breakpoint: 640,
		  		settings: {
			  		slidesToShow: 2,
			  		slidesToScroll: 1		  			
		  		}
		  	}
	  	]
	});
	$('.boxContainer .slick-disabled').hide();
	$('#trigger').click(function(){
		$('.eyeglassContainer, #trigger').toggleClass('js-searchActive');
		$('form.preload').removeClass('preload');
		$('.eyeglassContainer input').focus();
	});
	$('input#text').val('');
	$('button').click(function(){
		$('.slick-arrow').each(function(){
			if($(this).hasClass('slick-disabled')){
				$(this).fadeOut(350);
			}else{
				$(this).fadeIn(350);
			}
		});
	});
});
