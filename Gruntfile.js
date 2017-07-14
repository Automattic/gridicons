/*
 * Export Gridicons
 */

'use strict';

var multiline = require( 'multiline' );
var xml2js = require( 'xml2js' );
var svg2pdfkit = require('svg-to-pdfkit');
var PDFDocument = require('pdfkit');
var fs = require('fs');

var KEBAB_REGEX = /\-(\w)/g;

/**
 * Transforms kebab case names to camel case
 * @param name        ex: foo-bar-baz
 * @returns {String}  ex: fooBarBaz
 */
function kebabToCamelCase( name ) {
	return name.replace( KEBAB_REGEX, function replacer( match, capture ) {
		return capture.toUpperCase();
	} );
}

module.exports = function( grunt ) {

	require( 'load-grunt-tasks' )( grunt );

	// Project configuration.
	grunt.initConfig({

		// clean up tmp dirs
		clean: [ 'svg-min-react' ],

		// Minify SVGs from svg directory, output to svg-min
		svgmin: {
			dist: {
				files: [{
					attrs: 'fill',
					expand: true,
					cwd: 'sources/svg/',
					src: ['*.svg'],
					dest: 'svg-min/',
					ext: '.svg'
				}]
			},
			options: {
				plugins: [
					{ removeAttrs: { attrs: ['fill'] } },
					{ removeViewBox: false },
					{ removeEmptyAttrs: false },
					{ removeTitle: true } // addtitle will add it back in later
				]
			}
		},

		// Create single SVG sprite for use outside of React environments, output to svg-sprite
		svgstore: {
			withCustomTemplate:{
				options: {
					includeTitleElement: false,
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
					<style type="text/css">
					html {
						background: #fff;
						color: #767676;
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", sans-serif;
						line-height: 1.15;
					}

					a:link, a:visited {
						color: #999;
					}

					a:active {
						color: #1fc1ad;
					}

					h1 {
						text-align: center;
						font-size: 24pt;
					}

					body > p {
						text-align: center;
						margin-bottom: 2em;
					}

					body {
						max-width: 900px;
						margin: 100px auto;
					}

					[type=checkbox] {
						margin: 0;
					}

					.icons {
						padding: 0 20px;
						overflow: hidden;
						margin-bottom: 50px;
						display: flex;
						flex-wrap: wrap;
						justify-content: center;
					}

					.icons div {
						width: 64px;
						height: 64px;
						float: left;
						padding: 6px 2px;
						position: relative;
						font-size: 7pt;
						cursor: pointer;
						text-align: center;
					}

					.icons div p {
						margin: 0;
						color: #767676;
						text-align: center;
						overflow: hidden;
						max-height: 2.2em;
						word-break: break-word;
					}

					.icons div p.is-hidden {
						display: none;
					}

					.icons div svg {
						width: 48px;
						height: 48px;
						fill: #000;
					}

					.icons div svg.is-small {
						width: 24px;
						height: 24px;
					}

					.icons div:hover svg {
						fill: #1fc1ad;
					}

					.display-control-group {
						display: flex;
						justify-content: space-around;
						margin-bottom: 20px;
					}

					.display-control {
						display: flex;
					}

					.display-control h4 {
						margin: 0 10px 0 0;
					}

					.switch {
						position: relative;
						display: inline-block;
						width: 40px;
						height: 20px;
					}

					.switch input {
						-webkit-appearance: none;
						-moz-appearance: none;
						appearance: none;
					}

					.handle {
						position: absolute;
						cursor: pointer;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						border: 2px solid gray;
						border-radius: 10px;
						transition: .4s;
						box-sizing: border-box;
					}

					.handle:before {
						position: absolute;
						content: "";
						height: 12px;
						width: 12px;
						left: 2px;
						bottom: 2px;
						background: gray;
						border-radius: 50%;
						transition: .4s;
					}

					input:checked + .handle {
						border-color: #3AA662;
					}

					input:checked + .handle:before {
						background: #3AA662;
						transform: translateX(20px);
					}

					input:focus + .handle {
						box-shadow: 0 0 3px #2196F3;
					}

					.switch-label {
						font-size: 10px;
						font-weight: bold;
						vertical-align: middle;
					}

					.switch-label:after {
						content: attr(data-off);
						color: gray;
					}
					.switch-label:before {
						content: attr(data-on);
						color: #3AA662;
						opacity: 0;
					}

					input:checked ~ .switch-label:after,
					input:checked ~ .switch-label:before {
						transition: .4s;
					}

					input:checked ~ .switch-label:after {
						opacity: 0;
					}

					input:checked ~ .switch-label:before {
						opacity: 1;
					}
					</style>
					<script type="text/javascript">
					window.onload = function () {
					    var rows = document.getElementsByTagName( 'svg' );
					    for ( i=0; i<rows.length; i++ ) {
					        rows[i].onclick = function () {
					            var cssClass = this.getAttribute( 'class' );
					            var iconID = cssClass.split(' gridicons-')[1];
					            var suggestion = '<Gridicon icon="'+ iconID +'" />';
					            window.prompt( 'Copy this, paste in your React component.', suggestion );
					        }
					    }
					}

					function toggleSize() {
						var icons = document.querySelectorAll( '.gridicon' );
						for ( var i = 0; i < icons.length; i++ ) {
					    icons[i].classList.toggle( "is-small" );
						}
					}

					function toggleName() {
						var icons = document.querySelector( '.icons' ).getElementsByTagName( 'p' );
						for ( var i = 0; i < icons.length; i++ ) {
					    icons[i].classList.toggle( "is-hidden" );
						}
					}

					// SVG for Everybody
					!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<m.length;){var h=m[c],i=h.parentNode,j=d(i);if(j){var n=h.getAttribute("xlink:href")||h.getAttribute("href");if(f&&(!g.validate||g.validate(n,j,h))){i.removeChild(h);var o=n.split("#"),p=o.shift(),q=o.join("#");if(p.length){var r=k[p];r||(r=k[p]=new XMLHttpRequest,r.open("GET",p),r.send(),r._embeds=[]),r._embeds.push({parent:i,svg:j,id:q}),b(r)}else a(i,document.getElementById(q))}}else++c}l(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537;var k={},l=window.requestAnimationFrame||setTimeout,m=document.getElementsByTagName("use");f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});svg4everybody();
					</script>
					</head>
					<body>

					<h1>Gridicons</h1>

					<div class="display-control-group">
						<div class="display-control">
							<h4>Small icons</h4>
							<label class="switch">
								<input type="checkbox" onchange="toggleSize()">
								<span class="handle"></span>
								<span class="switch-label" data-on="On" data-off="Off"></span>
							</label>
						</div>
						<div class="display-control">
							<h4>Icon names</h4>
							<label class="switch">
								<input type="checkbox" onchange="toggleName()" checked>
								<span class="handle"></span>
								<span class="switch-label" data-on="On" data-off="Off"></span>
							</label>
						</div>
					</div>

					<div class="icons">
					{{#each icons}}
						<div>
							<svg width="24" height="24" class="gridicon {{name}}">
							<use xlink:href="gridicons.svg#{{name}}" />
							</svg>
							<p>{{title}}</p>
						</div>
					{{/each}}
					</div>

					<p><a href="https://github.com/Automattic/gridicons">GitHub</a></p>

					</body>
					</html>
					*/})

				},
				files: {
					'svg-sprite/gridicons.svg': ['svg-min/*.svg']
				}
			}
		},

		rename: {
			moveThis: {
					src: 'svg-sprite/gridicons-demo.html',
					dest: 'svg-sprite/index.html'
			}
		},

		copy: {
			main: {
				src: 'svg-sprite/index.html',
				dest: 'docs/index.html'
			},
			sprite: {
				src: 'svg-sprite/gridicons.svg',
				dest: 'docs/gridicons.svg'
			}
		},

		babel: {
			options: {
				sourceMap: false,
				presets: [
					'es2015',
					'stage-2',
					'babili'
				],
				comments: false,
				plugins: [
					'transform-class-properties',
					'transform-export-extensions',
					'add-module-exports',
					'syntax-jsx',
					'transform-react-jsx',
					'transform-react-display-name'
				]
			},
			dist: {
				files: {
					"build/index.js": "build/index.jsx",
					"build/example.js": "build/example.jsx"
				}
			}
		}

	});

	// Load the copier
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Load the SVGstore
	grunt.loadNpmTasks('grunt-svgstore');

	// Load the renamer
	grunt.loadNpmTasks('grunt-rename');

	// Load svgmin
	grunt.loadNpmTasks('grunt-svgmin');

  // ****************************************************************************************************
  // Rewrite to add <g> group tag in `svg-min/`
	grunt.registerTask( 'group', 'Add <g> tag to SVGs', function() {
		var svgFiles = grunt.file.expand( { filter: 'isFile', cwd: 'svg-min/' }, [ '**/*.svg' ] );

		// Add stuff
		svgFiles.forEach( function( svgFile ) {

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

	});

  // ****************************************************************************************************
  // Create temporary SVGs with React syntax (`svg-min/` --> `svg-min-react/`)
	grunt.registerTask( 'kebabToCamelCase', 'Rename any svg attributes to camel case for react', function() {
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

  // ****************************************************************************************************
  // Create React component (`svg-min-react/` --> `build/`)
	grunt.registerTask( 'svgreact', 'Output a react component for SVGs', function() {
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

  // ****************************************************************************************************
	// Create PHP WordPress plugin (`svg-min/` --> `php/`)
	grunt.registerTask( 'svgphp', 'Output a PHP WordPress plugin for SVGs', function() {
		var svgFiles = grunt.file.expand( { filter: 'isFile', cwd: 'svg-min/' }, [ '**/*.svg' ] ),
			content;

		// Start the plugin
		content = grunt.file.read( 'sources/php/index-header.php' );

		// Create a switch() case for each svg file
		svgFiles.forEach( function( svgFile ) {
			// Clean up the filename to use for the react components
			var name = svgFile.split( '.' );
			name = name[0];

			// Grab the relevant bits from the file contents
			var fileContent = grunt.file.read( 'svg-min/' + svgFile );

			// Add className, height, and width to the svg element
			fileContent = fileContent.slice( 0, 4 ) +
						' class="gridicon ' + name + '" height="24" width="24"' +
						fileContent.slice( 4, -6 ) +
						fileContent.slice( -6 );

			// Output the case for each icon
			var iconComponent = "		case '" + name + "':\n" +
								"			$svg = '" + fileContent + "';\n" +
								"			break;\n";

			content += iconComponent;
		} );

		// Finish up and write the plugin
		content += grunt.file.read( 'sources/php/index-footer.php' );
		grunt.file.write( 'php/gridicons.php', content );

	});

  // ****************************************************************************************************
	// Rewrite to add transparent square in `svg-min/`
  // This ensures precise 24x24 pixel copy/pasting and placement to design apps (i.e. Sketch)
	grunt.registerTask( 'addsquare', 'Add transparent square to SVGs', function() {
		var svgFiles = grunt.file.expand( { filter: 'isFile', cwd: 'svg-min/' }, [ '**/*.svg' ] );

		// Add stuff
		svgFiles.forEach( function( svgFile ) {

			// Grab the relevant bits from the file contents
			var fileContent = grunt.file.read( 'svg-min/' + svgFile );

			// Add transparent rectangle to each file
			var insertAt = fileContent.indexOf( '>' ) + 1;
			fileContent = fileContent.slice( 0, insertAt ) +
						'<rect x="0" fill="none" width="24" height="24"/>' +
						fileContent.slice( insertAt );

			// Save and overwrite the files in svg-min
			grunt.file.write( 'svg-min/' + svgFile, fileContent );

		} );

	});

  // ****************************************************************************************************
  // Create PDF version (`svg-min/` --> `pdf/`)
  grunt.registerTask( 'svg2pdf', 'Convert SVG to PDF', function() {
    var svgFiles = grunt.file.expand( { filter: 'isFile', cwd: 'svg-min/' }, [ '**/*.svg' ] );
    var self = this;

    // Add stuff
    svgFiles.forEach( function( svgFile ) {
      // Grab the relevant bits from the file contents
      var fileContent = grunt.file.read( 'svg-min/' + svgFile );

      // PDFkit writes to a stream, so it has to be async
      var done = self.async();
      var pdf = new PDFDocument( { size: [ 24, 24 ] } );
      pdf.pipe( fs.createWriteStream( 'pdf/' + svgFile.slice(0, -4) + '.pdf' ) );
      pdf.on('close', function() { done(); });

      svg2pdfkit(pdf, fileContent, 0, 0 );
      pdf.end();
    } );
  } );

  // ****************************************************************************************************
	// Default task
	grunt.registerTask('default', [
    'svgmin',
    'group',
    'svgstore',
    'rename',
    'copy',
    'svgphp',
    'kebabToCamelCase',
    'svgreact',
    'babel',
    'addsquare',
    'svg2pdf',
    'clean'
  ]);
};
