/** @format */

const needsOffset = ( name, icons ) => icons.indexOf( 'gridicons-' + name ) >= 0;

const prepareIndividualIcon = ( {
	name,
	component,
	iconsThatNeedOffset,
	iconsThatNeedOffsetX,
	iconsThatNeedOffsetY,
} ) => `
/**
 * External dependencies
 */
import React from 'react';

// We don't want the icon prop in to otherProps, as we'll pass those to the svg component.
// That's why we destructure it from the props but not use it.
export default function( { size = 24, onClick, icon, className, ...otherProps } ) {
	const isModulo18 = size => size % 18 === 0;
	const iconClass = [
		'gridicon',
		'gridicons-${ name }',
		className,
		${
			needsOffset( name, iconsThatNeedOffset )
				? "isModulo18( size ) ? 'needs-offset' : false"
				: false
		} ,
		${
			needsOffset( name, iconsThatNeedOffsetX )
				? "isModulo18( size ) ? 'needs-offset-x' : false"
				: false
		},
		${
			needsOffset( name, iconsThatNeedOffsetY )
				? "isModulo18( size ) ? 'needs-offset-y' : false"
				: false
		},
	].filter( Boolean ).join( ' ' );

	return ( ${ component } );
}
`;

module.exports = prepareIndividualIcon;
