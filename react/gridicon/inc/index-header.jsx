/** @ssr-ready **/

/* !!!
IF YOU ARE EDITING gridicon/index.jsx
THEN YOU ARE EDITING A FILE THAT GETS OUTPUT FROM THE GRIDICONS REPO!
DO NOT EDIT THAT FILE! EDIT index-header.jsx and index-footer.jsx instead
OR if you're looking to change now SVGs get output, you'll need to edit strings in the Gruntfile :)
!!! */

/**
 * External dependencies
 */
var React = require( 'react' ),
	PureRenderMixin = require( 'react-pure-render/mixin' ),
	classNames = require( 'classnames' );

var Gridicon = React.createClass( {

	mixins: [ PureRenderMixin ],

	getDefaultProps: function() {
		return {
			className: '',
			size: 24
		};
	},

	propTypes: {
		icon: React.PropTypes.string.isRequired,
		size: React.PropTypes.number,
		onClick: React.PropTypes.func,
		className: React.PropTypes.string
	},

	needsOffset: function( icon, size ) {
		var iconNeedsOffset = [
			'gridicons-add-outline',
			'gridicons-add',
			'gridicons-align-image-center',
			'gridicons-align-image-left',
			'gridicons-align-image-none',
			'gridicons-align-image-right',
			'gridicons-attachment',
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
			'gridicons-user-circle',
			'gridicons-reader-follow',
			'gridicons-reader-following'
		];

		if ( iconNeedsOffset.indexOf( icon ) >= 0 ) {
			return ( size % 18 === 0 );
		} else {
			return false;
		}
	},

	needsOffsetX: function( icon, size ) {
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
	},

	needsOffsetY: function( icon, size ) {
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
	},

	render: function() {
		var icon = 'gridicons-' + this.props.icon,
			needsOffset = this.needsOffset( icon, this.props.size ),
			needsOffsetX = this.needsOffsetX( icon, this.props.size ),
			needsOffsetY = this.needsOffsetY( icon, this.props.size ),
			svg, iconClass;

		iconClass = classNames( 'gridicon', icon, this.props.className, {
			'needs-offset': needsOffset,
			'needs-offset-x': needsOffsetX,
			'needs-offset-y': needsOffsetY,
		} );

		switch ( icon ) {
			default:
				svg = <svg height={ this.props.size } width={ this.props.size } />;
				break;
