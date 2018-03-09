// ****************************************************************************************************
// Create React component (`svg-min-react/` --> `build/`)

module.exports = function( grunt ) {
  grunt.registerMultiTask( 'svg-to-react', 'Output a react component for SVGs', function() {
		let components = '';
		let componentsExample = '';
		let filesDest;
		const prepareIndividualIcon = require( '../sources/react/template-individual-icon' );
		const prepareAllIcons = require( '../sources/react/template-all-icons' );
		const prepareDevDocsExample = require( '../sources/react/template-devdocs-example' );
		const iconsThatNeedOffset = [
			'gridicons-add-outline',
			'gridicons-add',
			'gridicons-align-image-center',
			'gridicons-align-image-left',
			'gridicons-align-image-none',
			'gridicons-align-image-right',
			'gridicons-attachment',
			'gridicons-bold',
			'gridicons-bookmark-outline',
			'gridicons-bookmark',
			'gridicons-calendar',
			'gridicons-cart',
			'gridicons-create',
			'gridicons-custom-post-type',
			'gridicons-external',
			'gridicons-folder',
			'gridicons-heading',
			'gridicons-help-outline',
			'gridicons-help',
			'gridicons-history',
			'gridicons-info-outline',
			'gridicons-info',
			'gridicons-italic',
			'gridicons-layout-blocks',
			'gridicons-link-break',
			'gridicons-link',
			'gridicons-list-checkmark',
			'gridicons-list-ordered',
			'gridicons-list-unordered',
			'gridicons-menus',
			'gridicons-minus',
			'gridicons-my-sites',
			'gridicons-notice-outline',
			'gridicons-notice',
			'gridicons-plus-small',
			'gridicons-plus',
			'gridicons-popout',
			'gridicons-posts',
			'gridicons-scheduled',
			'gridicons-share-ios',
			'gridicons-star-outline',
			'gridicons-star',
			'gridicons-stats',
			'gridicons-status',
			'gridicons-thumbs-up',
			'gridicons-textcolor',
			'gridicons-time',
			'gridicons-trophy',
			'gridicons-user-circle',
			'gridicons-reader-follow',
			'gridicons-reader-following'
		];
		const iconsThatNeedOffsetY = [
			'gridicons-align-center',
			'gridicons-align-justify',
			'gridicons-align-left',
			'gridicons-align-right',
			'gridicons-arrow-left',
			'gridicons-arrow-right',
			'gridicons-house',
			'gridicons-indent-left',
			'gridicons-indent-right',
			'gridicons-minus-small',
			'gridicons-print',
			'gridicons-sign-out',
			'gridicons-stats-alt',
			'gridicons-trash',
			'gridicons-underline',
			'gridicons-video-camera'
		];
		const iconsThatNeedOffsetX = [
			'gridicons-arrow-down',
			'gridicons-arrow-up',
			'gridicons-comment',
			'gridicons-clear-formatting',
			'gridicons-flag',
			'gridicons-menu',
			'gridicons-reader',
			'gridicons-strikethrough'
		];

    this.files.forEach( function( files ) {
      files.src.forEach( function( svgFile ) {
        // Name to be used by the react components
        let name = svgFile.split( '.' )[ 0 ];

        // Grab the relevant bits from the file contents
        let fileContent = grunt.file.read( files.cwd + svgFile );

        // Add className, height, and width to the svg element
        fileContent = fileContent.slice( 0, 4 ) +
              ' className={ iconClass } height={ size } width={ size } onClick={ onClick } { ...otherProps }' +
              fileContent.slice( 4, -6 ) +
              fileContent.slice( -6 );

        // Holds the switch's cases for every icon
        components += "			case '" + name + "':\n" +
                  "				svg = " + fileContent + ";\n" +
                  "				break;\n";

        // Holds the Example Document
        name = name.replace( 'gridicons-', '' );
        componentsExample += '				<Gridicon icon="' + name + '" size={ 48 } onClick={ this.handleClick.bind( this, \'' + name + '\' ) } />\n';

				// Prepare and write to disk every individual icon separately
				grunt.file.write( files.dest + name + '.js', prepareIndividualIcon( {
					name,
					component: fileContent,
					iconsThatNeedOffset,
					iconsThatNeedOffsetX,
					iconsThatNeedOffsetY,
				} ) );

      } );

      filesDest = files.dest;
    } );

    // Prepare and write to disk the Design Docs Example component
		grunt.file.write( filesDest + 'example.js', prepareDevDocsExample( componentsExample ) );

    // Prepare and write to disk the Gridicon React component
    grunt.file.write( filesDest + 'index.js', prepareAllIcons( {
			components,
			iconsThatNeedOffset,
			iconsThatNeedOffsetX,
			iconsThatNeedOffsetY,
		} ) );
  } );
};
