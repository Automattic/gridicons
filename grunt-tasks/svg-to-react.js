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
		const {
			iconsThatNeedOffset,
			iconsThatNeedOffsetX,
			iconsThatNeedOffsetY
		} = require( '../sources/react/icons-offset' );

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
				grunt.file.write( files.dest + name + '.jsx', prepareIndividualIcon( {
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
		grunt.file.write( filesDest + 'example.jsx', prepareDevDocsExample( componentsExample ) );

    // Prepare and write to disk the Gridicon React component
    grunt.file.write( filesDest + 'index.jsx', prepareAllIcons( {
			components,
			iconsThatNeedOffset,
			iconsThatNeedOffsetX,
			iconsThatNeedOffsetY,
		} ) );
  } );
};
