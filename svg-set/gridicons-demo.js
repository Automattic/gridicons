/**
 * Gridicons Demo page JS
 */

function suggestCode ( attr, cssclass ) {

	var cdn = 'gridicons.svg';	// Todo: should have permanent home somewhere
	var suggestion = '<svg class="gi"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + cdn + attr + '"></use></svg>';

	window.prompt( "Copy this, paste in your HTML.\n\nNote: for now, remember to upload the gridicons.svg file as well!", suggestion );
}

jQuery(document).ready(function() {

	// pick random icon if no permalink, otherwise go to permalink
	/*if ( window.location.hash ) {
		permalink = window.location.hash.split('#')[1];
		attr = jQuery( '.gridicon-' + permalink ).find( 'use' ).attr( 'xlink:href' );
		cssclass = permalink;
		displayGlyph( attr, cssclass );
	} else {
		pickRandomIcon();
	}*/

	jQuery( '#icons svg' ).click(function() {
	
		attr = jQuery( this ).find('use').attr( 'xlink:href' );
		cssclass = attr.split('#')[1];

		suggestCode( attr, cssclass );

	});

	/*var $rows = jQuery('#icons svg');
	jQuery('#search').keyup(function() {
	
		// remove update text when using search
		jQuery('body').addClass('searching');
	
	    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
	
	    $rows.show().filter(function() {
	        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
	        return !~text.indexOf(val);
	    }).hide();
	});
	
	jQuery('input#search').focus();*/


});

