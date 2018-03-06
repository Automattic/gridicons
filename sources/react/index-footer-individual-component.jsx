	const needsOffset = calculateNeedsOffset( icon, size );
	const needsOffsetX = calculateNeedsOffsetX( icon, size );
	const needsOffsetY = calculateNeedsOffsetY( icon, size );
	const iconClass = [
		'gridicon',
		icon,
		className,
		needsOffset ? 'needs-offset' : false,
		needsOffsetX ? 'needs-offset-x' : false,
		needsOffsetY ? 'needs-offset-y' : false,
	].filter( Boolean ).join( ' ' );

	return ( svg );
}
