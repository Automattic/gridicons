# Gridicons

An experiment to collaboratively create a new consistent icon set. 


## Icon Guidelines

- 24dp base grid
- straight 45 degree angles
- flat, bidimensional look (no faux 3D whatsoever)
- 2dp lines
- 2dp radius rounded corners only when necessary
- no logos
- hollow means inactive, solid means active (for example a hollow bookmark star is solid when checked)

These are not rules, they are guidelines that can be broken in style. The purpose of them is to try an ensure a uniform look as we all work on it together. They are also open to growing organically.


## Making a new icon

1. Make sure your repo is fresh, then open gridicons.ai. 
2. Press Shift + O to open the Artboard manager. 
3. Now create a new artboard and position it where it makes sense. Name the artboard using lowercase letters and dashes.
4. Draw your icon. 


### Setting up Grunt

1. Go to http://nodejs.org/ and press "Install". Follow instructions.
2. Open a terminal. Change to your Gridicons directory. Type `npm install`
3. Now type `npm install -g grunt-cli`


### Exporting

To export SVGs, do this:

1. In Illustrator pick "Save as Copy...", pick the SVG format and the filename "gridicons.svg" (it defaults to "gridicons copy.svg"). Now check "Use Artboards". 
2. In the SVG save dialog, pick "More Options", now pick "Presentation Attributes" instead of "Style Properties".
3. Save to the "svg" folder and overwrite files. Files will be named "gridicons-[artboard].svg", for example "gridicons-calendar.svg".

### Clean up with Grunt

Make sure you have `grunt` and `grunt-svgstore` installed. 

In the commandline, type `grunt`. This will clean up and combine all the SVG icons into a single sprite in the `svg-set` directory, called `gridicons.svg`. 

## Committers

If you'd like to contribute an icon, but are unable to bake the sprite with grunt, or upload it, you can ping someone on this list and they'll help you compile and deploy:

- Joen
- Kevin
- Michael
- Filipe
- Davide
- Dave M.

## Todo

- implement svgo (grunt-svgmin) for compression
- implement search and permalinks in demo page
- find alternative to picking Style Properties in exporting -- a grunt cleaner that doesn't just remove the entire style block in other words
