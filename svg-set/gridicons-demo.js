/**
 * Gridicons Demo page JS
 */
(function( $ ){
    // Kick things off
    $( document ).ready( function() {
        initEvents();
        //initCheckHash();
    });
    function displayGlyph() {
        //TODO: Add this functionality
    }
    function initCheckHash() {
        // pick random icon if no permalink, otherwise go to permalink
        if ( window.location.hash ) {
            var permalink = window.location.hash.split('#')[1],
                attr = $( '.gridicon-' + permalink ).find( 'use' ).attr( 'xlink:href' );
             
            displayGlyph( attr, permalink );
        } else {
            pickRandomIcon();
        }
    }
    function initEvents() {
        var $rows = $('#icons').find('svg');
        // When you click on an icon
        $rows.on( 'click', function() {
            var attr = $( this ).find( 'use' ).attr( 'xlink:href' ),
                cssclass = attr.split( '#' )[1];
             
            suggestCode( attr, cssclass );
         
        });
        // Show results while searching
        /*$( '#search' ).keyup( function() {
            // remove update text when using search
            $( 'body' ).addClass( 'searching' );
             
            var val = $.trim( $( this ).val() ).replace(/ +/g, ' ').toLowerCase();
             
            $rows.show().filter( function() {
                var text = $( this ).text().replace(/\s+/g, ' ').toLowerCase();
                return !~text.indexOf( val );
            }).hide();
        });*/
    }
    function pickRandomIcon() {
        //TODO: Add this functionality
    }
    function suggestCode( attr, cssclass ) {
	    // can't point to static domain as SVG CORS prevents that 
        var cdn = '/i/gridicons/gridicons.svg',
            suggestion = '<svg class="gi" width="24px" height="24px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + cdn + attr + '"></use></svg>';
         
        window.prompt( "Copy this, paste in your HTML.\n\nNote: for now, remember to upload the gridicons.svg file as well!", suggestion );
    }
})( jQuery );