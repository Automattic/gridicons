var defaultClickHandler = function() {
	console.log( 'Default Click handler.' );
}

var wpGridicon = function( iconName, size, onClick ) {
	var icon = 'gridicons-' + iconName,
		iconSize = size || 24,
		onClickHandler = onClick || defaultClickHandler,
		needOffset, needOffsetX, needOffsetY, svg, iconClass;

	needOffset = needsOffset( icon, iconSize );
	needOffsetX = needsOffsetX( icon, iconSize );
	needOffsetY = needsOffsetY( icon, iconSize );

	iconClass = classNames( 'gridicon', icon, '', {
		'needs-offset': needOffset,
		'needs-offset-x': needOffsetX,
		'needs-offset-y': needOffsetY,
	} );
	
	svg = `<svg class=${ iconClass } height=${ iconSize } width=${ iconSize } onClick="(${ onClickHandler })()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${ getSvgPath( icon ) }</svg>`;
	
	return( svg );
};

module.exports = {
	wpGridicon: wpGridicon,
	wpAllIcons: wpAllIcons,
};
