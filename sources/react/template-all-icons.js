const toString = array =>
        array.reduce((acc, item) => (acc = acc + "'" + item + "', "), '');

const prepareAllIcons = ({
        components,
        iconsThatNeedOffset,
        iconsThatNeedOffsetX,
        iconsThatNeedOffsetY,
}) => `
/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const doesItNeedOffset = ( name, icons ) => icons.indexOf( name ) >= 0;
const isModulo18 = size => size % 18 === 0;

const iconsThatNeedOffset = [ ${toString(iconsThatNeedOffset)} ];

const iconsThatNeedOffsetX = [ ${toString(iconsThatNeedOffsetX)} ];

const iconsThatNeedOffsetY = [ ${toString(iconsThatNeedOffsetY)} ];

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

	render() {
		const { size, onClick, icon: iconProp, className, ...otherProps } = this.props;

		const icon = 'gridicons-' + iconProp;
		const needsOffset = doesItNeedOffset( icon, iconsThatNeedOffset ) && isModulo18( size );
		const needsOffsetX = doesItNeedOffset( icon, iconsThatNeedOffsetX ) && isModulo18( size );
		const needsOffsetY = doesItNeedOffset( icon, iconsThatNeedOffsetY ) && isModulo18( size );

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

			${components}
		}

		return ( svg );
	}
}
`;

module.exports = prepareAllIcons;
