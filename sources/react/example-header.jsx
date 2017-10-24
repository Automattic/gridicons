/* eslint-disable no-alert */
/**
 * External dependencies
 */
import React, { PureComponent } from 'react';

/**
 * Internal dependencies
 */
import Gridicon from './index.js';

class Gridicons extends PureComponent {
	handleClick = ( icon ) => {
		const toCopy = '<Gridicon icon="' + icon + '" />';
		window.prompt( 'Copy component code:', toCopy );
	};

	render() {
		return (
			<div>
