const prepareDevDocsExample = components => `
/* eslint-disable no-alert */

/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import Gridicon from './index.js';

export default function() {
	const displayName = 'Gridicons'; // Don't remove, needed for Calypso devdocs!

	const handleClick = icon => {
		const toCopy = '<Gridicon icon="' + icon + '" />';
		window.prompt( 'Copy component code:', toCopy );
	}

	return (
		<div>
		${ components }
		</div>
	);
}
`;

module.exports = prepareDevDocsExample;
