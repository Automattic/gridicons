// ****************************************************************************************************
// Rewrite to add <g> group tag in `svg-min/`
// This is used to target directly the content of the SVG.
// It's also used by the offset fix for 18px size.

module.exports = function( grunt ) {
  grunt.registerMultiTask( 'svg-transform-add-g', 'Add <g> tag to SVGs', function() {

		// Add stuff
		this.filesSrc.forEach( function( svgFile ) {

			// Grab the relevant bits from the file contents
			var fileContent = grunt.file.read( 'svg-min/' + svgFile );

			// Add <g> to each file
			fileContent = fileContent.slice( 0, fileContent.indexOf('viewBox="0 0 24 24">') + 20 ) +	// opening SVG tag
						'<g>' +
						fileContent.slice( fileContent.indexOf('viewBox="0 0 24 24">') + 20, -6 ) + 	// child elements of SVG
						'</g>' +
						fileContent.slice( -6 );	// closing SVG tag

			// Save and overwrite the files in svg-min
			grunt.file.write( 'svg-min/' + svgFile, fileContent );

		} );
	} );
};
