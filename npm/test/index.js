var wpGridicon = require( '../publish/index.js' ).wpGridicon;
var wpAllIcons = require( '../publish/index.js' ).wpAllIcons;

var clickHandler = function() {
	console.log( 'This is a test onClickHandler' );
}

function getGridIconHtml() {
	var iconList = wpAllIcons(),
		html = '';

	for (var i = 0; i < iconList.length; i++) {
		html += wpGridicon( iconList[i], 18 );
		html += wpGridicon( iconList[i] );
		html += wpGridicon( iconList[i], 32 );
		html += wpGridicon( iconList[i], 48 );
		html += wpGridicon( iconList[i], 48, clickHandler );
		html += wpGridicon( iconList[i], null, clickHandler );
		html += '<br>';
	}

	return( html );
}

document.getElementById( 'display-gridicons' ).innerHTML = getGridIconHtml(); 
