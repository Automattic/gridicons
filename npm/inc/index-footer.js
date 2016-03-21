	};

	return( path );
};

var gridicons = function( iconName, size, onClick ) {
	var icon = 'gridicons-' + iconName,
		needOffset = needsOffset( icon, size ),
		needOffsetX = needsOffsetX( icon, size ),
		needOffsetY = needsOffsetY( icon, size ),
		svg, iconClass;

	iconClass = classNames( 'gridicon', icon, '', {
		'needs-offset': needOffset,
		'needs-offset-x': needOffsetX,
		'needs-offset-y': needOffsetY,
	} );
	
	svg = `<svg className=${ iconClass } height=${ size } width=${ size } onClick="${ onClick }()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${ getSvgPath( icon ) }</svg>`;
	
	return ( svg );
};

module.exports = gridicons;
