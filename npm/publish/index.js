// This is not an auto-generated file. It should be auto-generated via grunt.
// This is just kept here for purposes of proof-of-concept.
// A corresponding auto-generated file via grunt will need to replace this file.

/**
 * External Dependencies
 */
var classNames = require( 'classnames' );

var needsOffset = function( icon, size ) {
	var iconNeedsOffset = [
		'gridicons-add-outline',
		'gridicons-add',
		'gridicons-align-image-center',
		'gridicons-align-image-left',
		'gridicons-align-image-none',
		'gridicons-align-image-right',
		'gridicons-attachment',
		'gridicons-backspace',
		'gridicons-bold',
		'gridicons-bookmark-outline',
		'gridicons-bookmark',
		'gridicons-calendar',
		'gridicons-cart',
		'gridicons-create',
		'gridicons-custom-post-type',
		'gridicons-external',
		'gridicons-folder',
		'gridicons-heading',
		'gridicons-help-outline',
		'gridicons-help',
		'gridicons-history',
		'gridicons-info-outline',
		'gridicons-info',
		'gridicons-italic',
		'gridicons-layout-blocks',
		'gridicons-link-break',
		'gridicons-link',
		'gridicons-list-checkmark',
		'gridicons-list-ordered',
		'gridicons-list-unordered',
		'gridicons-menus',
		'gridicons-minus',
		'gridicons-my-sites',
		'gridicons-notice-outline',
		'gridicons-notice',
		'gridicons-plus-small',
		'gridicons-plus',
		'gridicons-popout',
		'gridicons-posts',
		'gridicons-scheduled',
		'gridicons-share-ios',
		'gridicons-star-outline',
		'gridicons-star',
		'gridicons-stats',
		'gridicons-status',
		'gridicons-thumbs-up',
		'gridicons-textcolor',
		'gridicons-time',
		'gridicons-trophy',
		'gridicons-user-circle'
	];

	if ( iconNeedsOffset.indexOf( icon ) >= 0 ) {
		return ( size % 18 === 0 );
	} else {
		return false;
	}
};

var needsOffsetX = function( icon, size ) {
	var iconNeedsOffsetX = [
		'gridicons-arrow-down',
		'gridicons-arrow-up',
		'gridicons-comment',
		'gridicons-clear-formatting',
		'gridicons-flag',
		'gridicons-menu',
		'gridicons-reader',
		'gridicons-strikethrough'
	];

	if ( iconNeedsOffsetX.indexOf( icon ) >= 0 ) {
		return ( size % 18 === 0 );
	} else {
		return false;
	}
};

var needsOffsetY = function( icon, size ) {
	var iconNeedsOffsetY = [
		'gridicons-align-center',
		'gridicons-align-justify',
		'gridicons-align-left',
		'gridicons-align-right',
		'gridicons-arrow-left',
		'gridicons-arrow-right',
		'gridicons-house',
		'gridicons-indent-left',
		'gridicons-indent-right',
		'gridicons-minus-small',
		'gridicons-print',
		'gridicons-sign-out',
		'gridicons-stats-alt',
		'gridicons-trash',
		'gridicons-underline',
		'gridicons-video-camera'
	];

	if ( iconNeedsOffsetY.indexOf( icon ) >= 0 ) {
		return ( size % 18 === 0 );
	} else {
		return false;
	}
};

var getSvgPath = function( icon ) {
	var path = '';

	switch ( icon ) {	
		case 'gridicons-add-image':
			path = `<g><path d="M23 4v2h-3v3h-2V6h-3V4h3V1h2v3h3zm-8.5 7c.828 0 1.5-.672 1.5-1.5S15.328 8 14.5 8 13 8.672 13 9.5s.672 1.5 1.5 1.5zm3.5 3.234l-.513-.57c-.794-.885-2.18-.885-2.976 0l-.655.73L9 9l-3 3.333V6h7V4H6c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2v-7h-2v3.234z"/></g>`;
			break;
		case 'gridicons-add-outline':
			path = `<g><path d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 9h-4V7h-2v4H7v2h4v4h2v-4h4v-2z"/></g>`;
			break;
		case 'gridicons-add':
			path = `<g><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></g>`;
			break;
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
	
	console.log( svg );

	return ( svg );
};

module.exports = gridicons;
