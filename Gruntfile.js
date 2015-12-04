/*
 * Export Gridicons
 */

'use strict';

var multiline = require('multiline');

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		// Minify SVGs from svg directory, output to svg-min
		svgmin: {
			dist: {
				files: [{
					attrs: 'fill',
					expand: true,
					cwd: 'svg',
					src: ['*.svg'],
					dest: 'svg-min/',
					ext: '.svg'
				}]
			},
			options: {
				plugins: [
					{ removeAttrs: { attrs: ['fill'] } },
					{ removeViewBox: false },
					{ removeEmptyAttrs: false }
				]
			}
		},

		// Create single SVG sprite for use outside of React environments, output to svg-set
		svgstore: {
			withCustomTemplate:{
				options: {
					prefix : 'gridicon-', // This will prefix each ID
					svg: { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
						viewBox : '0 0 24 24',
						xmlns: 'http://www.w3.org/2000/svg'
					},

					cleanup : ['style', 'fill', 'id'],

					includedemo : multiline.stripIndent(function(){/*
					<!DOCTYPE html>
					<html>
					<head>
					<title>Gridicons</title>
					<meta name="robots" content="noindex">
					<link rel="stylesheet" type="text/css" href="gridicons-demo.css" />
					<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
					<script src="gridicons-demo.js"></script>
					<head>
					<body>

					<h1>Gridicons</h1>
					<p><em>Tap icon to get insertion code. <a href="gridicons.svg" title="Right-click -> Save as...">Download the SVG sprite</a>.</em></p>

					{{{svg}}}

					<div id="icons">
					{{#each icons}}
						<div>
							<svg>
							<use xlink:href="#{{name}}" />
							</svg>
							<p>{{title}}</p>
						</div>
					{{/each}}
					</div>

					</body>
					</html>
					*/})

				},
				files: {
					'svg-set/gridicons.svg': ['svg/*.svg']
				}
			},
		},

		rename: {
			moveThis: {
					src: 'svg-set/gridicons-demo.html',
					dest: 'svg-set/index.html'
			},
		},
	});

	// Load the copier
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Load the SVGstore
	grunt.loadNpmTasks('grunt-svgstore');

	// Load the renamer
	grunt.loadNpmTasks('grunt-rename');

	// Load svgmin
	grunt.loadNpmTasks('grunt-svgmin');


	// Update all files in svg-min to add transparent square, this ensures copy/pasting to Sketch maintains a 24x24 size
	grunt.registerTask( 'addsquare', 'Add transparent square to SVGs', function() {
		var svgFiles = grunt.file.expand( { filter: 'isFile', cwd: 'svg-min/' }, [ '**/*.svg' ] );

		// Add stuff
		svgFiles.forEach( function( svgFile ) {

			// Grab the relevant bits from the file contents
			var fileContent = grunt.file.read( 'svg-min/' + svgFile );


			// Add transparent rectangle to each file
			fileContent = fileContent.slice( 0, 60 ) +
						'<rect x="0" fill="none" width="24" height="24"/>' +
						fileContent.slice( 60, -6 ) + 
						fileContent.slice( -6 );

			// Save and overwrite the files in svg-min
			grunt.file.write( 'svg-min/' + svgFile, fileContent );

		} );

	});

	// Create React component, output to react
	grunt.registerTask( 'svgreact', 'Output a react component for SVGs', function() {
		var svgFiles = grunt.file.expand( { filter: 'isFile', cwd: 'svg-min/' }, [ '**/*.svg' ] ),
			content, designContent;

		// Start the React component
		content =	grunt.file.read( 'react/gridicon/index-header.jsx' );

		// Create a switch() case for each svg file
		svgFiles.forEach( function( svgFile ) {
			// Clean up the filename to use for the react components
			var name = svgFile.split( '.' );
			name = name[0];

			// Grab the relevant bits from the file contents
			var fileContent = grunt.file.read( 'svg-min/' + svgFile );

			// Add className, height, and width to the svg element
			fileContent = fileContent.slice( 0, 4 ) +
						' className={ iconClass } height={ this.props.size } width={ this.props.size } onClick={ this.props.onClick }' +
						fileContent.slice( 4, -6 ) +
						fileContent.slice( -6 );

			// Output the case for each icon
			var iconComponent = "			case '" + name + "':\n" +
								"				svg = " + fileContent + ";\n" +
								"				break;\n";

			content += iconComponent;
		} );

		// Finish up the React component
		content += grunt.file.read( 'react/gridicon/index-footer.jsx' );

		// Start design/docs component
		designContent =	"/* eslint-disable no-alert */\n" +
					"/**\n" +
					" * External dependencies\n" +
					" */\n" +
					"var React = require( 'react' );\n\n" +
					"/**\n" +
					" * Internal dependencies\n" +
					" */\n" +
					"var Gridicon = require( 'components/gridicon' );\n\n" +
					"module.exports = React.createClass( {\n" +
					"	displayName: 'Gridicons',\n\n" +
					"	handleClick: function( icon ) {\n" +
					"		var toCopy = '<Gridicon icon=\"' + icon + '\" />';\n" +
					"		window.prompt( 'Copy component code:', toCopy );\n" +
					"	},\n\n" +
					"	render: function() {\n" +
					'		return (\n' +
					'			<div className="design-assets__group">\n' +
					'				<h2><a href="/devdocs/design/gridicons">Gridicons</a></h2>\n';

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
		grunt.file.write( 'react/gridicon/index.jsx', content );
		grunt.file.write( 'react/gridicon/example.jsx', designContent );
	});

	// Default task(s).
	grunt.registerTask('default', ['svgmin', 'svgstore', 'rename', 'svgreact', 'addsquare']);

};
