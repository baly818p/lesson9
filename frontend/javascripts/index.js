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
    $('.slick-slider').slick({
    	dots: true,
    	appendDots:'.slick-pagination',
    	prevArrow:'.btn-prev',
   		nextArrow:'.btn-next'
  	});
  	$('.slick-mini').slick({
    	appendDots:'.pagination-mini',
    	prevArrow:'.btn-prev2',
   		nextArrow:'.btn-next2'
  	});
    $('.toggle-block').openClose({
    	activeClass:'active',
    	opener:'.opener',
    	slider:'.slide'
    });
    $('#datepicker').datepicker({
 		showOn: "button",
		buttonImage: "../images/picker.png",
		buttonImageOnly: true,
		buttonText: "Select date"
    });
    $('#datepicker2').datepicker({
 		showOn: "button",
		buttonImage: "../images/picker.png",
		buttonImageOnly: true,
		buttonText: "Select date"
    });
    $('#datepicker3').datepicker({
 		showOn: "button",
		buttonImage: "../images/picker.png",
		buttonImageOnly: true,
		buttonText: "Select date"
    });
    $('#datepicker4').datepicker({
 		showOn: "button",
		buttonImage: "../images/picker.png",
		buttonImageOnly: true,
		buttonText: "Select date"
    });
});