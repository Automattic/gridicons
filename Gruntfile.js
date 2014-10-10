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
					<style>
					svg{
					width:72px;
					height:72px;
					fill: #555 !important;
					}
					</style>
					<head>
					<body>

					{{{svg}}}

					{{#each icons}}
						<div>
						<svg>
						<use xlink:href="#{{name}}" />
						</svg>
						<div>{{title}}</div>
						</div>
					{{/each}}
					
					</body>
					</html>
					*/})

				},
				files: {
					'svg-set/gridicons.svg': ['svg/output/*.svg']
				}
			},
		},
	});

	// Load the renamer
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Load the SVGstore
	grunt.loadNpmTasks('grunt-svgstore');
	
	// Default task(s).
	grunt.registerTask('default', ['copy', 'svgstore']);

};