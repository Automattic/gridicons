/* eslint-disable no-alert */
/**
 * External dependencies
 */
var React = require( 'react' );

/**
 * Internal dependencies
 */
import Gridicon from './index.js';
module.exports = React.createClass( {
	displayName: 'Gridicons',
	handleClick: function( icon ) {
		var toCopy = '<Gridicon icon="' + icon + '" />';
		window.prompt( 'Copy component code:', toCopy );
	},

	render: function() {
		return (
			<div>
