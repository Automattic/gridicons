
/* !!!
IF YOU ARE EDITING gridicon/index.jsx
THEN YOU ARE EDITING A FILE THAT GETS OUTPUT FROM THE GRIDICONS REPO!
DO NOT EDIT THAT FILE! EDIT index-header.jsx and index-footer.jsx instead
OR if you're looking to change now SVGs get output, you'll need to edit strings in the Gruntfile :)
!!! */

/**
 * External dependencies
 */
var React = require( 'react/addons' ),
		classNames = require( 'classnames' );

var Gridicon = React.createClass( {

	mixins: [ React.addons.PureRenderMixin ],

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
			'gridicons-align-center',
			'gridicons-align-image-center',
			'gridicons-align-image-left',
			'gridicons-align-image-none',
			'gridicons-align-image-right',
			'gridicons-align-justify',
			'gridicons-align-left',
			'gridicons-align-right',
			'gridicons-arrow-down',
			'gridicons-arrow-left',
			'gridicons-arrow-right',
			'gridicons-arrow-up',
			'gridicons-attachment',
			'gridicons-backspace',
			'gridicons-bold',
			'gridicons-bookmark-outline',
			'gridicons-bookmark',
			'gridicons-calendar',
			'gridicons-clear-formatting',
			'gridicons-create',
			'gridicons-custom-post-type',
			'gridicons-external',
			'gridicons-flag',
			'gridicons-folder',
			'gridicons-heading',
			'gridicons-house',
			'gridicons-italic',
			'gridicons-layout-blocks',
			'gridicons-link-break',
			'gridicons-link',
			'gridicons-list-checkmark',
			'gridicons-list-ordered',
			'gridicons-list-unordered',
			'gridicons-menus',
			'gridicons-minus-small',
			'gridicons-minus',
			'gridicons-plus-small',
			'gridicons-plus',
			'gridicons-posts',
			'gridicons-reader',
			'gridicons-scheduled',
			'gridicons-share-ios',
			'gridicons-sign-out',
			'gridicons-star-outline',
			'gridicons-star',
			'gridicons-stats-alt',
			'gridicons-stats',
			'gridicons-textcolor',
			'gridicons-trophy',
			'gridicons-underline',
			'gridicons-video-camera'
		 ];

		if( iconNeedsOffset.indexOf( icon ) >= 0 ){
			return( size % 18 === 0);
		} else {
			return false;
		}
	},

	render: function() {
		var icon = 'gridicons-' + this.props.icon,
				svg,
				needsOffset = this.needsOffset( icon, this.props.size );

				var iconClass = classNames(
					this.props.className,
					icon,
					'gridicon',
					{ 'needs-offset': needsOffset }
				);

		switch ( icon ) {
			default:
				svg = <svg height={ this.props.size } width={ this.props.size } />;
				break;
