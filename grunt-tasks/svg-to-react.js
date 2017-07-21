// ****************************************************************************************************
// Create React component (`svg-min-react/` --> `build/`)

var xml2js = require( 'xml2js' );

/**
 * Transforms kebab case names to camel case
 * @param name        ex: foo-bar-baz
 * @returns {String}  ex: fooBarBaz
 */
function kebabToCamelCase( name ) {
  var KEBAB_REGEX = /\-(\w)/g;

	return name.replace( KEBAB_REGEX, function replacer( match, capture ) {
		return capture.toUpperCase();
	} );
}

module.exports = function( grunt ) {

  grunt.registerTask( 'svg-to-react', [
    'kebab-toCamelCase',
    'svg-to-react-build',
    'babel'
  ] );

  grunt.registerTask( 'kebab-toCamelCase', 'Rename any SVG attributes to camel case for react', function() {
		var svgFiles = grunt.file.expand( { filter: 'isFile', cwd: 'svg-min/' }, [ '**/*.svg' ] );

		// Add stuff
		svgFiles.forEach( function( svgFile ) {

			// Grab the relevant bits from the file contents
			var fileContent = grunt.file.read( 'svg-min/' + svgFile );

			// Rename any attributes to camel case for react
			xml2js.parseString( fileContent, {
					async: false, // set callback is sync, since this task is sync
					trim: true,
					attrNameProcessors: [ kebabToCamelCase ]
				},
				function ( err, result ) {
					if ( ! err ) {
						var builder = new xml2js.Builder( {
							renderOpts: { pretty: false },
							headless: true //omit xml header
						} );
						fileContent = builder.buildObject( result );
					}
				} );

			grunt.file.write( 'svg-min-react/' + svgFile, fileContent );

		} );

	});

  grunt.registerTask( 'svg-to-react-build', 'Output a react component for SVGs', function() {
    var svgFiles = grunt.file.expand( { filter: 'isFile', cwd: 'svg-min-react/' }, [ '**/*.svg' ] ),
      content, designContent;

    // Start the React component
    content =	grunt.file.read( 'sources/react/index-header.jsx' );

    // Create a switch() case for each svg file
    svgFiles.forEach( function( svgFile ) {
      // Clean up the filename to use for the react components
      var name = svgFile.split( '.' );
      name = name[0];

      // Grab the relevant bits from the file contents
      var fileContent = grunt.file.read( 'svg-min-react/' + svgFile );

      // Add className, height, and width to the svg element
      fileContent = fileContent.slice( 0, 4 ) +
            ' className={ iconClass } height={ size } width={ size } onClick={ onClick } { ...otherProps }' +
            fileContent.slice( 4, -6 ) +
            fileContent.slice( -6 );

      // Output the case for each icon
      var iconComponent = "			case '" + name + "':\n" +
                "				svg = " + fileContent + ";\n" +
                "				break;\n";

      content += iconComponent;
    } );

    // Finish up the React component
    content += grunt.file.read( 'sources/react/index-footer.jsx' );

    // Start design/docs component
    designContent =	"/* eslint-disable no-alert */\n" +
          "/**\n" +
          " * External dependencies\n" +
          " */\n" +
          "var React = require( 'react' );\n\n" +
          "/**\n" +
          " * Internal dependencies\n" +
          " */\n" +
          "import Gridicon from './index.js';\n\n" +
          "module.exports = React.createClass( {\n" +
          "	displayName: 'Gridicons',\n\n" +
          "	handleClick: function( icon ) {\n" +
          "		var toCopy = '<Gridicon icon=\"' + icon + '\" />';\n" +
          "		window.prompt( 'Copy component code:', toCopy );\n" +
          "	},\n\n" +
          "	render: function() {\n" +
          '		return (\n' +
          '			<div>\n';

    // Create a switch() case for each svg file
    svgFiles.forEach( function( svgFile ) {
      // Clean up the filename to use for the react components
      var name = svgFile.split( '.' );
      name = name[0].replace( 'gridicons-', '' );

      // Output the case for each icon
      var iconComponent = '				<Gridicon icon="' + name + '" size={ 48 } onClick={ this.handleClick.bind( this, \'' + name + '\' ) } />\n';
      designContent += iconComponent;
    } );

    designContent +=	'			</div>\n' +
              '		);\n' +
              '	}\n' +
              '} );\n';

    // Write the React component to gridicon/index.jsx
    grunt.file.write( 'build/index.jsx', content );
    grunt.file.write( 'build/example.jsx', designContent );
  });
}
