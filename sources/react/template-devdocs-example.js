const prepareDevDocsExample = components => `
/* eslint-disable no-alert */

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';

/**
 * Internal dependencies
 */
import Gridicon from './index.js';

export default class Gridicons extends PureComponent {
	static displayName = 'Gridicons'; // Don't remove, needed for Calypso devdocs!

	handleClick = ( icon ) => {
		const toCopy = '<Gridicon icon="' + icon + '" />';
		window.prompt( 'Copy component code:', toCopy );
	};

	render() {
		return (
			<div>
			${ components }
			</div>
		);
	}
}
`;

module.exports = prepareDevDocsExample;
