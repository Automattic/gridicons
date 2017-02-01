		}

		if ( d ) {
			svg = <g><path d={ d } /></g>;
		}

		return <svg className={ iconClass } height={ size } width={ size } onClick={ onClick }>{ svg }</svg>;
	}
}
