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
