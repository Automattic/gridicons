

// IF YOU ARE EDITING gridicon/index.jsx THEN YOU ARE EDITING A FILE THAT GETS OUTPUT!
// DO NOT EDIT THAT FILE! EDIT index-header.jsx and index-footer.jsx instead
// OR if you're looking to change now SVGs get output, you'll need to edit strings in the Gruntfile :)

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

	getStandardizedIconSize: function() {
		// if a standard size is being used, just use that
		if(
			this.props.size === 12 ||
			this.props.size === 18 ||
			this.props.size === 24 ||
			this.props.size === 36 ||
			this.props.size === 48 ||
			this.props.size === 54 ||
			this.props.size === 72 ){
			return this.props.size;
		}
		// if it's less than 12, just use 12 [cohort of 12 sizes]
		else if( this.props.size < 12 ){
			return 12;
		}

		// if it's more than 12 but less than 16 [cohort of 4 sizes]
		else if( this.props.size > 12 && this.props.size < 16 ){
			return 12;
		}

		// if it's between 16 and 20, use 18 [cohort of 4 sizes]
		else if( this.props.size >= 16 && this.props.size <= 20 ){
			return 18;
		}

		// if it's between 20 and 28, use 24 [cohort of 8 sizes]
		else if( this.props.size > 20 && this.props.size < 28){
			return 24;
		}

		// if it's between 28 and 40, use 36 [cohort of 12 sizes]
		else if( this.props.size >=28 && this.props.size <= 40 ){
			return 36;
		}

		// if it's between 40 and 52, use 48 [cohort of 12 sizes]
		else if( this.props.size > 40 && this.props.size < 52 ){
			return 48;
		}

		// if it's between 52 and 64, use 54 [cohort of 12 sizes]
		else if( this.props.size >=52 && this.props.size <= 64 ){
			return 54;
		}

		// if it's between 64 and 80, use 72 [cohort of 16 sizes]
		else if( this.props.size > 64 && this.props.size < 80 ){
			return 72;
		}

		// if it's 80 or higher, use 96
		else if( this.props.size >= 80 ){
			return 96;
		}
	},

	render: function() {
		var icon = 'gridicons-' + this.props.icon,
				svg,
				iconSize = this.getStandardizedIconSize(),
				needsOffset = this.needsOffset( icon, iconSize );

				var iconClass = classNames(
					this.props.className,
					icon,
					'gridicon',
					{ 'needs-offset': needsOffset }
				);

		switch ( icon ) {
			default:
				svg = <svg height={ iconSize } width={ iconSize } />;
				break;
