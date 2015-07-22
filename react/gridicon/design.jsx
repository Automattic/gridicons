/**
 * External dependencies
 */
var React = require( 'react' );

/**
 * Internal dependencies
 */
var Gridicon = require( 'components/gridicon' );

module.exports = React.createClass( {
	displayName: 'Gridicons',

	handleClick: function( icon ) {
		var toCopy = '<Gridicon icon="' + icon + '" />';
		prompt( 'Copy component code:', toCopy );
	},

	render: function() {
		return (
			<div className="design-assets__group">
				<h2>Gridicons</h2>
				<Gridicon icon="gridicons-add-outline" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-add-outline' ) } />
				<Gridicon icon="gridicons-add" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-add' ) } />
				<Gridicon icon="gridicons-align-center" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-align-center' ) } />
				<Gridicon icon="gridicons-align-image-center" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-align-image-center' ) } />
				<Gridicon icon="gridicons-align-image-left" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-align-image-left' ) } />
				<Gridicon icon="gridicons-align-image-none" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-align-image-none' ) } />
				<Gridicon icon="gridicons-align-image-right" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-align-image-right' ) } />
				<Gridicon icon="gridicons-align-left" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-align-left' ) } />
				<Gridicon icon="gridicons-align-right" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-align-right' ) } />
				<Gridicon icon="gridicons-arrow-down" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-arrow-down' ) } />
				<Gridicon icon="gridicons-arrow-left" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-arrow-left' ) } />
				<Gridicon icon="gridicons-arrow-right" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-arrow-right' ) } />
				<Gridicon icon="gridicons-arrow-up" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-arrow-up' ) } />
				<Gridicon icon="gridicons-attachment" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-attachment' ) } />
				<Gridicon icon="gridicons-backspace" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-backspace' ) } />
				<Gridicon icon="gridicons-bell" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-bell' ) } />
				<Gridicon icon="gridicons-block" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-block' ) } />
				<Gridicon icon="gridicons-bold" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-bold' ) } />
				<Gridicon icon="gridicons-bookmark-outline" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-bookmark-outline' ) } />
				<Gridicon icon="gridicons-bookmark" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-bookmark' ) } />
				<Gridicon icon="gridicons-calendar" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-calendar' ) } />
				<Gridicon icon="gridicons-camera" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-camera' ) } />
				<Gridicon icon="gridicons-cart" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-cart' ) } />
				<Gridicon icon="gridicons-checkmark" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-checkmark' ) } />
				<Gridicon icon="gridicons-chevron-down" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-chevron-down' ) } />
				<Gridicon icon="gridicons-chevron-left" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-chevron-left' ) } />
				<Gridicon icon="gridicons-chevron-right" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-chevron-right' ) } />
				<Gridicon icon="gridicons-chevron-up" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-chevron-up' ) } />
				<Gridicon icon="gridicons-clipboard" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-clipboard' ) } />
				<Gridicon icon="gridicons-cloud-download" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-cloud-download' ) } />
				<Gridicon icon="gridicons-cloud-outline" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-cloud-outline' ) } />
				<Gridicon icon="gridicons-cloud-upload" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-cloud-upload' ) } />
				<Gridicon icon="gridicons-cloud" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-cloud' ) } />
				<Gridicon icon="gridicons-code" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-code' ) } />
				<Gridicon icon="gridicons-cog" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-cog' ) } />
				<Gridicon icon="gridicons-comment" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-comment' ) } />
				<Gridicon icon="gridicons-computer" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-computer' ) } />
				<Gridicon icon="gridicons-create" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-create' ) } />
				<Gridicon icon="gridicons-cross-small" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-cross-small' ) } />
				<Gridicon icon="gridicons-cross" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-cross' ) } />
				<Gridicon icon="gridicons-dropdown" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-dropdown' ) } />
				<Gridicon icon="gridicons-ellipsis" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-ellipsis' ) } />
				<Gridicon icon="gridicons-external" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-external' ) } />
				<Gridicon icon="gridicons-flag" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-flag' ) } />
				<Gridicon icon="gridicons-folder" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-folder' ) } />
				<Gridicon icon="gridicons-globe" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-globe' ) } />
				<Gridicon icon="gridicons-heading" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-heading' ) } />
				<Gridicon icon="gridicons-heart-outline" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-heart-outline' ) } />
				<Gridicon icon="gridicons-heart" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-heart' ) } />
				<Gridicon icon="gridicons-help-outline" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-help-outline' ) } />
				<Gridicon icon="gridicons-help" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-help' ) } />
				<Gridicon icon="gridicons-house" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-house' ) } />
				<Gridicon icon="gridicons-image-multiple" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-image-multiple' ) } />
				<Gridicon icon="gridicons-image" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-image' ) } />
				<Gridicon icon="gridicons-info-outline" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-info-outline' ) } />
				<Gridicon icon="gridicons-info" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-info' ) } />
				<Gridicon icon="gridicons-ink" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-ink' ) } />
				<Gridicon icon="gridicons-italic" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-italic' ) } />
				<Gridicon icon="gridicons-layout" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-layout' ) } />
				<Gridicon icon="gridicons-link-break" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-link-break' ) } />
				<Gridicon icon="gridicons-link" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-link' ) } />
				<Gridicon icon="gridicons-list-checkmark" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-list-checkmark' ) } />
				<Gridicon icon="gridicons-list-ordered" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-list-ordered' ) } />
				<Gridicon icon="gridicons-list-unordered" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-list-unordered' ) } />
				<Gridicon icon="gridicons-location" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-location' ) } />
				<Gridicon icon="gridicons-lock" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-lock' ) } />
				<Gridicon icon="gridicons-mail" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-mail' ) } />
				<Gridicon icon="gridicons-menu" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-menu' ) } />
				<Gridicon icon="gridicons-microphone" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-microphone' ) } />
				<Gridicon icon="gridicons-minus-small" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-minus-small' ) } />
				<Gridicon icon="gridicons-minus" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-minus' ) } />
				<Gridicon icon="gridicons-my-sites" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-my-sites' ) } />
				<Gridicon icon="gridicons-not-visible" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-not-visible' ) } />
				<Gridicon icon="gridicons-notice-outline" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-notice-outline' ) } />
				<Gridicon icon="gridicons-notice" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-notice' ) } />
				<Gridicon icon="gridicons-pages" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-pages' ) } />
				<Gridicon icon="gridicons-pencil" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-pencil' ) } />
				<Gridicon icon="gridicons-phone" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-phone' ) } />
				<Gridicon icon="gridicons-plus-small" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-plus-small' ) } />
				<Gridicon icon="gridicons-plus" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-plus' ) } />
				<Gridicon icon="gridicons-posts" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-posts' ) } />
				<Gridicon icon="gridicons-quote" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-quote' ) } />
				<Gridicon icon="gridicons-reader" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-reader' ) } />
				<Gridicon icon="gridicons-reblog" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-reblog' ) } />
				<Gridicon icon="gridicons-redo" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-redo' ) } />
				<Gridicon icon="gridicons-refresh" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-refresh' ) } />
				<Gridicon icon="gridicons-reply" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-reply' ) } />
				<Gridicon icon="gridicons-search" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-search' ) } />
				<Gridicon icon="gridicons-share-ios" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-share-ios' ) } />
				<Gridicon icon="gridicons-sign-out" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-sign-out' ) } />
				<Gridicon icon="gridicons-spam" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-spam' ) } />
				<Gridicon icon="gridicons-star-outline" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-star-outline' ) } />
				<Gridicon icon="gridicons-star" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-star' ) } />
				<Gridicon icon="gridicons-stats-alt" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-stats-alt' ) } />
				<Gridicon icon="gridicons-stats" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-stats' ) } />
				<Gridicon icon="gridicons-strikethrough" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-strikethrough' ) } />
				<Gridicon icon="gridicons-sync" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-sync' ) } />
				<Gridicon icon="gridicons-tablet" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-tablet' ) } />
				<Gridicon icon="gridicons-tag" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-tag' ) } />
				<Gridicon icon="gridicons-time" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-time' ) } />
				<Gridicon icon="gridicons-trash" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-trash' ) } />
				<Gridicon icon="gridicons-types" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-types' ) } />
				<Gridicon icon="gridicons-undo" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-undo' ) } />
				<Gridicon icon="gridicons-user-circle" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-user-circle' ) } />
				<Gridicon icon="gridicons-user" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-user' ) } />
				<Gridicon icon="gridicons-video-camera" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-video-camera' ) } />
				<Gridicon icon="gridicons-video" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-video' ) } />
				<Gridicon icon="gridicons-visible" size={ 48 } onClick={ this.handleClick.bind( this, 'gridicons-visible' ) } />
			</div>
		);
	}
} );
