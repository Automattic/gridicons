# Gridicons

The WordPress.com consistent collaborative icon set.


## Icon Set Guidelines

- 24dp base grid
- straight 45 degree angles
- flat, bidimensional look (no faux 3D whatsoever)
- 2dp lines
- 2dp radius rounded corners only when necessary
- no logos
- hollow means inactive, solid means active (for example a hollow bookmark star is solid when checked)
- icons should be sized optically so they are balanced against eachother, see icon-template.ai

These are not rules, they are guidelines that can be broken in style. The purpose of them is to try an ensure a uniform look as we all work on it together. They are also open to growing organically. They are meant to guide you to create an icon that fits with all the others (style, alignment, size, ...), if you break any of the above to make it fit, that works too.


## Propose a New Icon

1. Make sure you have a updated local clone of the repository.
2. Draw the icon in Illustrator on a 24px grid using the guidelines above (use `icon-template.ai` if you'd like).
3. Submit a Pull Request with the icon as a SVG file (inside the `svg` folder).
4. Discuss, iterate, review, refine until ready.


## Add a Proposed Icon to Gridicons

1. Switch to the branch (i.e. Pull Request) with the new icon.
2. Open 'gridicons.ai' in Illustrator.
3. Add a new containing layer with the name of the icon (i.e. "trophy").
4. Add the icon from the SVG on that containing layer. Make sure to check pixel preview.
5. Copy a transparent square from another layer and paste it behind the icon on your new layer.
6. Remove the SVG of the new icon (from the `svg` folder).
7. Generate an SVG by dragging the script `exporter-multi.jsx` inside the Illustrator window.
8. In the dialog, select your new icon layer from the "Export layers" dropdown and click Export.
9. Run `grunt` command from terminal, to generate the svg-min, react, and svg-set files.
10. Commit
11. Merge & delete branch


### Grunt: Installing

1. Go to http://nodejs.org/ and press "Install". Follow instructions.
2. Open a terminal. Change to your Gridicons directory. Type `npm install`
3. Now type `npm install -g grunt-cli`


### Grunt: Running

Make sure you have `grunt` and `grunt-svgstore` installed (also might require `grunt-svgmin`). 

In the commandline, type `grunt`. This will clean up and combine all the SVG icons into a single sprite in the `svg-set` directory, called `gridicons.svg`.

## Using `icon-template.ai`
![Icon Template](https://cldup.com/AdRe2pH1mz.png)

Use the `icon-template.ai` file to create a balanced icon for the Gridicon set. Guides are set up for common shapes such as square, circle, and rectangles.

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
