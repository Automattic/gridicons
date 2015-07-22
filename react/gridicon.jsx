var React = require( 'react/addons' );

var Gridicon = React.createClass({
	propTypes: {
		size: React.PropTypes.number,
		icon: React.PropTypes.string.isRequired,
		className: React.PropTypes.string,
	},

	render: function() {
		var size = '24',
			icon = this.props.icon,
			classNames = [ "gridicon" ],
			svg;

		if ( this.props.size ) {
			size = this.props.size;
		}

		if ( this.props.className ) {
			classNames.push( this.props.className );
		}
		switch ( icon ) {
			default:
				svg = <svg height={ size } width={ size } />;
				break;
			case 'aligncenter':
				classNames.push( "aligncenter" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><g fill="#333"><path d="M5 17h14v2H5zM8 13h8v2H8zM5 9h14v2H5zM8 5h8v2H8z"/></g></g>{ this.props.children }</svg>;
				break;
			case 'alignleft':
				classNames.push( "alignleft" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M5 19h14v-2H5v2zm8-6H5v2h8v-2zM5 9v2h14V9H5zm8-4H5v2h8V5z"/></g>{ this.props.children }</svg>;
				break;
			case 'alignright':
				classNames.push( "alignright" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M11 15h8v-2h-8v2zm-6 4h14v-2H5v2zm0-8h14V9H5v2zm6-6v2h8V5h-8z"/></g>{ this.props.children }</svg>;
				break;
			case 'arrow':
				classNames.push( "arrow" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#333" d="M20 11H6.414l6.293-6.293-1.414-1.414L2.586 12l8.707 8.707 1.414-1.414L6.414 13H20"/>{ this.props.children }</svg>;
				break;
			case 'attachment':
				classNames.push( "attachment" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M14 1c-2.762 0-5 2.238-5 5v10c0 1.657 1.343 3 3 3s2.99-1.343 2.99-3V6H13v10c0 .553-.447 1-1 1-.553 0-1-.447-1-1V6c0-1.657 1.343-3 3-3s3 1.343 3 3v10.125C17 18.887 14.762 21 12 21s-5-2.238-5-5v-5H5v5c0 3.866 3.134 7 7 7s6.99-3.134 6.99-7V6c0-2.762-2.228-5-4.99-5z"/></g>{ this.props.children }</svg>;
				break;
			case 'backspace':
				classNames.push( "backspace" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M19 7H8l-5 5 5 5h11c1.104 0 2-.896 2-2V9c0-1.104-.896-2-2-2zm-.647 6.646l-.707.707L16 12.707l-1.647 1.647-.707-.707L15.293 12l-1.647-1.646.707-.707L16 11.293l1.646-1.647.707.707L16.707 12l1.646 1.646z"/></g>{ this.props.children }</svg>;
				break;
			case 'bell-dot':
				classNames.push( "bell-dot" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><circle fill-rule="evenodd" clip-rule="evenodd" fill="#333" cx="8" cy="5" r="2.5"/></g>{ this.props.children }</svg>;
				break;
			case 'bell':
				classNames.push( "bell" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M6.16 16.27c-.358.02-.71.16-.982.432-.585.585-.585 1.534 0 2.12.585.584 1.534.584 2.12 0 .272-.274.412-.625.43-.982l-1.57-1.57zm7.69 3.923c-.108-.754.122-1.69.51-2.077l3.885-3.885c2.34-2.34 2.34-6.134 0-8.474s-6.135-2.34-8.475 0L5.885 9.64c-.388.388-1.323.618-2.077.51l-1.102-.157L2 10.7 13.3 22l.707-.706-.157-1.1z"/></g>{ this.props.children }</svg>;
				break;
			case 'block':
				classNames.push( "block" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12c0-4.418 3.582-8 8-8 1.848 0 3.545.633 4.9 1.686L5.686 16.9C4.633 15.545 4 13.848 4 12zm8 8c-1.848 0-3.546-.633-4.9-1.686L18.314 7.1C19.367 8.455 20 10.152 20 12c0 4.418-3.582 8-8 8z"/></g>{ this.props.children }</svg>;
				break;
			case 'bold':
				classNames.push( "bold" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M17.375 13.376c-.418-.574-1.092-.984-2.022-1.23v-.103c.705-.17 1.272-.554 1.703-1.15.43-.594.646-1.31.646-2.152 0-1.277-.494-2.22-1.482-2.824-.988-.604-2.5-.907-4.538-.907H6V20h6.288c1.764 0 3.155-.392 4.18-1.174C17.487 18.043 18 16.972 18 15.61c0-.915-.21-1.66-.625-2.234zM10 8h1.627c1.42 0 2.13.47 2.13 1.41 0 .526-.178.923-.533 1.19-.355.267-.857.4-1.505.4H10V8zm2.192 9H10v-3h2.114c.613 0 1.08.127 1.402.38.322.255.484.62.484 1.095C14 16.492 13.397 17 12.192 17z"/></g>{ this.props.children }</svg>;
				break;
			case 'bookmark':
				classNames.push( "bookmark" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M16 4H8c-1.105 0-2 .896-2 2v14l6-4 6 4V6c0-1.104-.896-2-2-2zm0 12.263l-2.89-1.927-1.11-.74-1.11.74L8 16.263V6h8v10.263z"/></g>{ this.props.children }</svg>;
				break;
			case 'bookmarked':
				classNames.push( "bookmarked" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M16 4H8c-1.105 0-2 .896-2 2v14l6-4 6 4V6c0-1.104-.896-2-2-2z"/></g>{ this.props.children }</svg>;
				break;
			case 'calendar':
				classNames.push( "calendar" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.105 0-2 .896-2 2v13c0 1.104.895 2 2 2h14c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2zm0 15H5V8h14v11z"/></g>{ this.props.children }</svg>;
				break;
			case 'camera':
				classNames.push( "camera" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#333"><path d="M18 6h-3l-1-2h-4L9 6H6c-1.105 0-2 .896-2 2v8c0 1.104.895 2 2 2h12c1.104 0 2-.896 2-2V8c0-1.104-.896-2-2-2zm-6 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/><circle cx="12" cy="12" r="2"/></g>{ this.props.children }</svg>;
				break;
			case 'cell':
				classNames.push( "cell" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M16 2H8c-1.105 0-2 .895-2 2v16c0 1.104.895 2 2 2h8c1.104 0 2-.896 2-2V4c0-1.105-.896-2-2-2zm0 16H8V6h8v12z"/></g>{ this.props.children }</svg>;
				break;
			case 'checkmark':
				classNames.push( "checkmark" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#333" d="M9 19.414l-6.707-6.707 1.414-1.414L9 16.586 20.293 5.293l1.414 1.414"/>{ this.props.children }</svg>;
				break;
			case 'cloud-download':
				classNames.push( "cloud-download" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><g fill="#333"><path d="M17.988 8.013c-.29 0-.576.03-.86.088-.683-1.95-2.165-3.08-4.13-3.08-1.447 0-2.76.65-3.576 1.637-.52-.402-1.184-.64-1.914-.64-1.39 0-2.562.95-2.898 2.236-1.81.596-3.092 2.306-3.092 4.254C1.518 14.984 3.533 17 6.01 17H10v-4h4v4h3.988c2.48 0 4.494-2.016 4.494-4.493 0-2.48-2.015-4.494-4.494-4.494z"/><path d="M13 19.586V14h-2v5.586l-1.293-1.293-1.414 1.414L12 23.414l3.707-3.707-1.414-1.414"/></g></g>{ this.props.children }</svg>;
				break;
			case 'cloud-empty':
				classNames.push( "cloud-empty" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M17.988 17H6.01c-2.477 0-4.492-2.016-4.492-4.493 0-1.953 1.29-3.666 3.102-4.258.347-1.3 1.51-2.233 2.888-2.233.73 0 1.394.237 1.914.64.817-.985 2.13-1.638 3.576-1.638 1.964 0 3.447 1.13 4.128 3.08.283-.058.572-.087.862-.087 2.48 0 4.494 2.016 4.494 4.494 0 2.477-2.015 4.493-4.494 4.493zM7.508 8.017c-.55 0-.996.447-.996.996l-.855 1.04c-1.22.175-2.14 1.23-2.14 2.454C3.518 13.882 4.638 15 6.01 15h11.98c1.374 0 2.493-1.118 2.493-2.493 0-1.532-1.427-2.77-2.967-2.444.024.297.035.602.035.917h-2c-.005-.13-.077-1.097-.11-1.45-.275-1.644-1.1-2.51-2.44-2.51-1.28 0-2.446.93-2.446 1.95h-2c0-.626-.527-.953-1.046-.953z"/></g>{ this.props.children }</svg>;
				break;
			case 'cloud-upload':
				classNames.push( "cloud-upload" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M17.988 8.013c-.29 0-.576.03-.86.088-.683-1.95-2.165-3.08-4.13-3.08-1.447 0-2.76.65-3.576 1.637-.52-.402-1.184-.64-1.914-.64-1.39 0-2.562.95-2.898 2.236-1.81.596-3.092 2.306-3.092 4.254C1.518 14.984 3.533 17 6.01 17H11v-4.586l-1.293 1.293-1.414-1.414L12 8.586l3.707 3.707-1.414 1.414L13 12.414V17h4.988c2.48 0 4.494-2.016 4.494-4.493 0-2.48-2.015-4.494-4.494-4.494z"/></g>{ this.props.children }</svg>;
				break;
			case 'cloud':
				classNames.push( "cloud" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M17.988 8.013c-.29 0-.576.03-.86.088-.683-1.95-2.165-3.08-4.13-3.08-1.447 0-2.76.65-3.576 1.637-.52-.402-1.184-.64-1.914-.64-1.39 0-2.562.95-2.898 2.236-1.81.596-3.092 2.306-3.092 4.254C1.518 14.984 3.533 17 6.01 17h11.978c2.48 0 4.494-2.016 4.494-4.493 0-2.48-2.015-4.494-4.494-4.494z"/></g>{ this.props.children }</svg>;
				break;
			case 'code':
				classNames.push( "code" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M9 6l-6 6 6 6 1.414-1.414L5.828 12l4.586-4.586L9 6zm6 0l-1.414 1.414L18.172 12l-4.586 4.586L15 18l6-6-6-6z"/></g>{ this.props.children }</svg>;
				break;
			case 'cross':
				classNames.push( "cross" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#333" d="M20.707 4.707l-1.414-1.414L12 10.586 4.707 3.293 3.293 4.707 10.586 12l-7.293 7.293 1.414 1.414L12 13.414l7.293 7.293 1.414-1.414L13.414 12"/>{ this.props.children }</svg>;
				break;
			case 'dropdown':
				classNames.push( "dropdown" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M9 11l3 3 3-3"/></g>{ this.props.children }</svg>;
				break;
			case 'edit':
				classNames.push( "edit" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M4 15v5h5l9-9-5-5-9 9zM16 3l-2 2 5 5 2-2-5-5z"/></g>{ this.props.children }</svg>;
				break;
			case 'ellipsis':
				classNames.push( "ellipsis" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#333"><circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="12" cy="12" r="2"/></g>{ this.props.children }</svg>;
				break;
			case 'flag':
				classNames.push( "flag" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M15 6c-.275 0-.625-.187-.777-.416l-1.445-2.168C12.625 3.186 12.275 3 12 3H4v18h2v-9h4c.275 0 .625.187.777.416l1.445 2.168c.153.23.503.416.778.416h8V6h-6z"/></g>{ this.props.children }</svg>;
				break;
			case 'headline':
				classNames.push( "headline" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M18 20h-3v-6H9v6H6V5.01h3V11h6V5.01h3V20z"/></g>{ this.props.children }</svg>;
				break;
			case 'help':
				classNames.push( "help" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 16h-2v-2h2v2zm2.67-7.567c-.266.427-.774.908-1.522 1.443-.513.38-.837.668-.974.866-.136.198-.205.457-.205.778V14h-2.124v-.594c0-.513.11-.96.328-1.338.22-.38.62-.783 1.203-1.21.56-.402.93-.727 1.11-.98.18-.25.27-.53.27-.84 0-.347-.13-.612-.386-.794-.256-.18-.614-.272-1.074-.272-.802 0-1.714.26-2.74.785L8.68 7.002C9.874 6.335 11.138 6 12.474 6c1.1 0 1.976.265 2.624.794.65.53.974 1.234.974 2.116 0 .587-.133 1.096-.4 1.523z"/></g>{ this.props.children }</svg>;
				break;
			case 'italic':
				classNames.push( "italic" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M10.536 5l-.427 2h1.5L9.262 18h-1.5l-.427 2h6.128l.426-2h-1.5l2.347-11h1.5l.427-2"/></g>{ this.props.children }</svg>;
				break;
			case 'link-break':
				classNames.push( "link-break" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M5.294 14.464C4.514 13.922 4 13.022 4 12c0-1.657 1.343-3 3-3h2c.553 0 1-.447 1-1 0-.553-.447-1-1-1H7c-2.76 0-5 2.24-5 5 0 1.574.742 2.96 1.88 3.878l1.414-1.414zm12.946-7.29l2.245-2.245-1.414-1.415L3.516 19.07l1.414 1.415L8.413 17H9c.553 0 1-.447 1-1 0-.17-.052-.32-.126-.46l2.54-2.54H17c.553 0 1-.447 1-1s-.447-1-1-1h-2.586l2-2H17c1.657 0 3 1.343 3 3s-1.343 3-3 3h-2c-.553 0-1 .447-1 1s.447 1 1 1h2c2.76 0 5-2.24 5-5 0-2.33-1.602-4.272-3.76-4.826zM6 12c0 .48.346.863.798.96L8.758 11H7c-.553 0-1 .447-1 1z"/></g>{ this.props.children }</svg>;
				break;
			case 'link':
				classNames.push( "link" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M6 12c0 .553.447 1 1 1h10c.553 0 1-.447 1-1s-.447-1-1-1H7c-.553 0-1 .447-1 1zm11-5h-2c-.553 0-1 .447-1 1 0 .553.447 1 1 1h2c1.657 0 3 1.343 3 3s-1.343 3-3 3h-2c-.553 0-1 .447-1 1s.447 1 1 1h2c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-8 8H7c-1.657 0-3-1.343-3-3s1.343-3 3-3h2c.553 0 1-.447 1-1 0-.553-.447-1-1-1H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h2c.553 0 1-.447 1-1s-.447-1-1-1z"/></g>{ this.props.children }</svg>;
				break;
			case 'list-ordered':
				classNames.push( "list-ordered" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M9 19h10v-2H9v2zm0-6h10v-2H9v2zm0-8v2h10V5H9zm-3.425.252c.107-.096.197-.188.27-.275-.013.228-.02.48-.02.756V8h1.176V3.717H5.96L4.487 4.915l.6.738.487-.4zm.334 7.764c.474-.426.784-.715.93-.867.145-.153.26-.298.35-.436.087-.138.152-.278.194-.42.042-.143.063-.298.063-.466 0-.225-.06-.427-.18-.608-.12-.18-.29-.32-.507-.417-.218-.1-.465-.148-.742-.148-.22 0-.42.022-.596.067-.177.045-.34.11-.49.195-.15.085-.337.226-.558.423l.636.744c.174-.15.33-.264.467-.34.138-.078.274-.117.41-.117.13 0 .232.032.304.097.073.064.11.152.11.264 0 .09-.02.176-.055.258-.036.082-.1.18-.192.294-.092.114-.287.328-.586.64L4.42 13.238V14h3.11v-.955H5.91v-.03zm.53 4.746v-.018c.306-.086.54-.225.702-.414.162-.19.243-.42.243-.685 0-.31-.126-.55-.378-.727-.252-.176-.6-.264-1.043-.264-.307 0-.58.033-.816.1s-.47.178-.696.334l.48.773c.293-.183.576-.274.85-.274.147 0 .263.027.35.082.087.055.13.14.13.252 0 .3-.294.45-.882.45h-.27v.87h.264c.217 0 .393.017.527.05.136.03.233.08.294.143.06.064.09.154.09.27 0 .153-.057.265-.173.337-.115.07-.3.106-.554.106-.164 0-.343-.022-.538-.07-.194-.044-.385-.115-.573-.21v.96c.228.088.44.148.637.182.196.033.41.05.64.05.56 0 .998-.114 1.314-.343.315-.228.473-.542.473-.94.002-.585-.356-.923-1.07-1.013z"/></g>{ this.props.children }</svg>;
				break;
			case 'list-unordered':
				classNames.push( "list-unordered" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M9 19h10v-2H9v2zm0-6h10v-2H9v2zm0-8v2h10V5H9zm-3-.5c-.828 0-1.5.672-1.5 1.5S5.172 7.5 6 7.5 7.5 6.828 7.5 6 6.828 4.5 6 4.5zm0 6c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm0 6c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z"/></g>{ this.props.children }</svg>;
				break;
			case 'mail':
				classNames.push( "mail" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M4 6v12h16V6H4zm14 4.118l-6 3-6-3V7.882l6 3 6-3v2.236z"/></g>{ this.props.children }</svg>;
				break;
			case 'menu':
				classNames.push( "menu" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#333"><path d="M3 6h18v2H3zM3 16h18v2H3zM3 11h18v2H3z"/></g>{ this.props.children }</svg>;
				break;
			case 'microphone':
				classNames.push( "microphone" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M12 13c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2-1.105 0-2 .896-2 2v5c0 1.104.895 2 2 2zm4-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6c0 2.972 2.164 5.433 5 5.91V20h2v-3.09c2.836-.478 5-2.94 5-5.91h-2z"/></g>{ this.props.children }</svg>;
				break;
			case 'minus-small':
				classNames.push( "minus-small" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#333"><path d="M9 11h12v2H9z"/><path d="M9 11h12v2H9z"/></g>{ this.props.children }</svg>;
				break;
			case 'minus':
				classNames.push( "minus" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#333" d="M3 11h18v2H3z"/>{ this.props.children }</svg>;
				break;
			case 'my-sites':
				classNames.push( "my-sites" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.5 12c0-1.232.264-2.402.736-3.46L8.29 19.65C5.456 18.272 3.5 15.365 3.5 12zm8.5 8.5c-.834 0-1.64-.12-2.4-.345l2.55-7.41 2.613 7.157c.017.042.038.08.06.117-.884.31-1.833.48-2.823.48zm1.172-12.485c.512-.027.973-.08.973-.08.458-.055.404-.728-.054-.702 0 0-1.376.108-2.265.108-.835 0-2.24-.107-2.24-.107-.458-.026-.51.674-.053.7 0 0 .434.055.892.082l1.324 3.63-1.86 5.578-3.096-9.208c.512-.027.973-.08.973-.08.458-.055.403-.728-.055-.702 0 0-1.376.108-2.265.108-.16 0-.347-.003-.547-.01C6.418 5.025 9.03 3.5 12 3.5c2.213 0 4.228.846 5.74 2.232-.037-.002-.072-.007-.11-.007-.835 0-1.427.727-1.427 1.51 0 .7.404 1.292.835 1.993.323.566.7 1.293.7 2.344 0 .727-.28 1.572-.646 2.748l-.848 2.833-3.072-9.138zm3.1 11.332l2.597-7.506c.484-1.212.645-2.18.645-3.044 0-.313-.02-.603-.057-.874.664 1.21 1.042 2.6 1.042 4.078 0 3.136-1.7 5.874-4.227 7.347z"/></g>{ this.props.children }</svg>;
				break;
			case 'note':
				classNames.push( "note" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 16h-2v-2h2v2zm0-4h-2l-.5-8h3l-.5 8z"/></g>{ this.props.children }</svg>;
				break;
			case 'plus-small':
				classNames.push( "plus-small" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#333"><path d="M14 6h2v12h-2z"/><path d="M9 11h12v2H9z"/><path d="M9 11h12v2H9z"/></g>{ this.props.children }</svg>;
				break;
			case 'plus':
				classNames.push( "plus" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#333"><path d="M11 3h2v18h-2z"/><path d="M3 11h18v2H3z"/></g>{ this.props.children }</svg>;
				break;
			case 'quote':
				classNames.push( "quote" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M3 13h4.937c0 1.622-1.315 2.938-2.937 2.938V19c3.314 0 6-2.686 6-6V5H3v8zm10-8v8h4.937c0 1.622-1.315 2.938-2.937 2.938V19c3.314 0 6-2.686 6-6V5h-8z"/></g>{ this.props.children }</svg>;
				break;
			case 'reader':
				classNames.push( "reader" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M3 4v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4H3zm7 11H5v-1h5v1zm2-2H5v-1h7v1zm0-2H5v-1h7v1zm7 4h-5v-5h5v5zm0-7H5V6h14v2z"/></g>{ this.props.children }</svg>;
				break;
			case 'redo':
				classNames.push( "redo" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M18 6v3.56l-.145-.142c-.998-.982-1.874-1.846-3.136-3.152-1.827-1.89-3.992-2.637-6.102-2.1-2.003.513-3.602 2.127-4.175 4.213-.606 2.213.067 4.505 1.85 6.287l5 5 1.414-1.414-5-5C5.982 11.528 6.13 9.79 6.372 8.907c.377-1.373 1.453-2.474 2.742-2.803 1.383-.352 2.86.197 4.166 1.55 1.276 1.322 2.162 2.194 3.172 3.19l.16.156H13v2h7V6h-2z"/></g>{ this.props.children }</svg>;
				break;
			case 'spam':
				classNames.push( "spam" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M17 2H7L2 7v10l5 5h10l5-5V7l-5-5zm-4 16h-2v-2h2v2zm0-4h-2l-.5-8h3l-.5 8z"/></g>{ this.props.children }</svg>;
				break;
			case 'strikethrough':
				classNames.push( "strikethrough" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M12.005 7.274c.055.247.383 1.376.49 1.726h2.867l-1.41-4h-3.925L8.62 9h2.895c.232-.786.398-1.37.49-1.726zM21 10H3v2h4.567l-2.812 8H8.18l.91-3h5.832l.898 3h3.424l-2.822-8H21v-2zm-10.998 4l.607-2h2.815l.6 2H10z"/></g>{ this.props.children }</svg>;
				break;
			case 'tablet':
				classNames.push( "tablet" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M22 18V6c0-1.104-.896-2-2-2H4c-1.105 0-2 .896-2 2v12c0 1.104.895 2 2 2h16c1.104 0 2-.896 2-2zM5 18V6h14v12H5z"/></g>{ this.props.children }</svg>;
				break;
			case 'tag':
				classNames.push( "tag" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M16 7H5c-1.105 0-2 .896-2 2v6c0 1.104.895 2 2 2h11l5-5-5-5z"/></g>{ this.props.children }</svg>;
				break;
			case 'undo':
				classNames.push( "undo" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M19.557 8.42c-.572-2.087-2.172-3.7-4.176-4.213-2.107-.54-4.273.207-6.1 2.1-1.262 1.306-2.138 2.17-3.136 3.15-.045.047-.097.098-.144.144V6H4v7h7v-2H7.43l.118-.117c1.01-.994 1.896-1.866 3.172-3.19 1.306-1.35 2.786-1.9 4.166-1.55 1.29.33 2.365 1.43 2.742 2.804.24.883.39 2.62-1.335 4.346l-5 5 1.414 1.414 5-5c1.782-1.782 2.456-4.074 1.85-6.288z"/></g>{ this.props.children }</svg>;
				break;
			case 'user-circle':
				classNames.push( "user-circle" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#333" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18.5c-4.694 0-8.5-3.806-8.5-8.5S7.306 3.5 12 3.5s8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5zm0-8c-3.038 0-5.5 1.728-5.5 3.5s2.462 3.5 5.5 3.5 5.5-1.728 5.5-3.5-2.462-3.5-5.5-3.5zm0-.5c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"/></g>{ this.props.children }</svg>;
				break;
			case 'user':
				classNames.push( "user" );
				svg = <svg className={ classNames.join( " " ) } height={ size } width={ size } xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="9" r="4"/><path d="M12 21s8 0 8-2c0-2.4-3.9-5-8-5s-8 2.6-8 5c0 2 8 2 8 2z"/>{ this.props.children }</svg>;
				break;
		}

		return ( svg );
	}
} );

module.exports = Gridicon;