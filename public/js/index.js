'use strict';

requirejs.config({
    baseUrl: './js',
    paths: {
        
    }
});

requirejs([
	'jquery',
	'jquery.fullpage',
	'slick.min',
	'jquery.carousel',
	'jquery.openclose'
], function($) {
    $('.slick-slider').slick({
    	prevArrow:'<a class="btn-prev">Previous2</a>',
   		nextArrow:'<a class="btn-next">Next2</a>'
  });
    $('.toggle-block').openClose({
    	activeClass:'active',
    	opener:'.opener',
    	slider:'.slide',
    	event:'click'
    });
    $('div.gallery').scrollGallery({

    });
});