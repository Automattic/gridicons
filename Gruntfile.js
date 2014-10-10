/*
 * Export Gridicons
 */

'use strict';

var multiline = require('multiline');

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		// Rename files first
		copy: {
			main: {
				files: [{
					expand: true, 
					cwd: 'svg/', 
					src: ['**/*.svg'], 
					dest: 'svg/output/', 
					rename: function(dest, src) {
						return dest + src.split('_')[1];
					}
				}]
			},
		},

		// Configuration to be run (and then tested).
		svgstore: {

			withCustomTemplate:{
				options: {
					prefix : 'gridicon-', // This will prefix each ID
					svg: { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
						viewBox : '0 0 24 24',
						xmlns: 'http://www.w3.org/2000/svg'
					},

					cleanup : ['style', 'fill'],

					includedemo : multiline.stripIndent(function(){/*
					<!DOCTYPE html>
					<html>
					<head>
					<link rel="stylesheet" type="text/css" href="gridicons-demo.css" />
					<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
					<script src="gridicons-demo.js"></script>
					<script src="svg4everybody.ie8.min.js"></script>
					<head>
					<body>
					
					<h1>Gridicons</h1>
					<p><em>Tap icon to get insertion code.</em></p>

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
					'svg-set/gridicons.svg': ['svg/output/*.svg']
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
	
	// Default task(s).
	grunt.registerTask('default', ['copy', 'svgstore', 'rename']);

};