		const needsOffset = this.needsOffset( icon, size );
		const needsOffsetX = this.needsOffsetX( icon, size );
		const needsOffsetY = this.needsOffsetY( icon, size );
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
}
