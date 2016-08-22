'use strict';

requirejs.config({
    baseUrl: './js',
    paths: {
        
    }
});

requirejs([
	'jquery',
	'domReady',
	'slick',
	'jquery.openclose',
	'jquery-ui'
], function($) {
    $('.galleryTop').slick({
    	dots: true,
    	appendDots: '.pagination_top',
    	prevArrow: '.btn_prev_top',
   		nextArrow: '.btn_next_top'
  	});
  	$('.galleryBottom').slick({
    	dots: true,
    	appendDots: '.pagination_bottom',
    	prevArrow: '.btn_prev_bottom',
   		nextArrow: '.btn_next_bottom'
  	});
  	$('.slick-mini').slick({
  		dots: true,
    	appendDots:'.pagination_mini',
    	prevArrow:'.btn_prev_mini',
   		nextArrow:'.btn_next_mini'
  	});
    $('.toggle-block').openClose({
    	activeClass:'active',
    	opener:'.opener',
    	slider:'.slide'
    });
    $('#datepicker, #datepicker2, #datepicker3, #datepicker4').datepicker({
 		showOn: "button",
		buttonImage: "../images/picker.png",
		buttonImageOnly: true,
		buttonText: "Select date"
    });
});
