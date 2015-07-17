/**
 * Gridicons Demo page JS
 */
(function( $ ){
    // Kick things off
    $( document ).ready( function() {
        initEvents();
    });
    function initEvents() {
        var $rows = $('#icons').find('svg');
        // When you click on an icon
        $rows.on( 'click', function() {
            var attr = $( this ).find( 'use' ).attr( 'xlink:href' ),
                cssclass = attr.split( '#' )[1];
             
            suggestCode( attr, cssclass );
         
        });
    }
    function suggestCode( attr, cssclass ) {
	    // can't point to static domain as SVG CORS prevents that 
        var cdn = '/i/gridicons/gridicons.svg',
            suggestion = '<svg class="gi" width="24px" height="24px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + cdn + attr + '"></use></svg>';
         
        window.prompt( "Copy this, paste in your HTML.\n\nNote: for now, remember to upload the gridicons.svg file as well!", suggestion );
    }
})( jQuery );