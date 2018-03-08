const toString = array => array.reduce( ( acc, item ) => ( acc = acc + "'" + item + "', " ), '' );

const prepareAllIcons = ( {
	components,
	iconsThatNeedOffset,
	iconsThatNeedOffsetX,
	iconsThatNeedOffsetY,
} ) => `
/** @ssr-ready **/

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Gridicon extends PureComponent {

	static defaultProps = {
		size: 24
	};

	static propTypes = {
		icon: PropTypes.string.isRequired,
		size: PropTypes.number,
		onClick: PropTypes.func,
		className: PropTypes.string
	};

	needsOffset( icon, size ) {
		const iconNeedsOffset = [ ${ toString( iconsThatNeedOffset ) } ];

		if ( iconNeedsOffset.indexOf( icon ) >= 0 ) {
			return ( size % 18 === 0 );
		}
		return false;
	}

	needsOffsetX( icon, size ) {
		const iconNeedsOffsetX = [ ${ toString( iconsThatNeedOffsetX ) } ];

		if ( iconNeedsOffsetX.indexOf( icon ) >= 0 ) {
			return ( size % 18 === 0 );
		}
		return false;
	}

	needsOffsetY( icon, size ) {
		const iconNeedsOffsetY = [ ${ toString( iconsThatNeedOffsetY ) } ];

		if ( iconNeedsOffsetY.indexOf( icon ) >= 0 ) {
			return ( size % 18 === 0 );
		}
		return false;
	}

	render() {
		const { size, onClick, icon: iconProp, className, ...otherProps } = this.props;
		const icon = 'gridicons-' + iconProp;
		const needsOffset = this.needsOffset( icon, size );
		const needsOffsetX = this.needsOffsetX( icon, size );
		const needsOffsetY = this.needsOffsetY( icon, size );

		let svg;
		const iconClass = [
			'gridicon',
			icon,
			className,
			needsOffset ? 'needs-offset' : false,
			needsOffsetX ? 'needs-offset-x' : false,
			needsOffsetY ? 'needs-offset-y' : false,
		].filter( Boolean ).join( ' ' );

		switch ( icon ) {
			default:
				svg = <svg height={ size } width={ size } { ...otherProps } />;
				break;

			${ components }

		}

		return ( svg );
	}
}
`;

module.exports = prepareAllIcons;
