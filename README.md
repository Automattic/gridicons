# Gridicons

The WordPress.com consistent collaborative icon set.


## Icon Set Guidelines

- 24dp base grid
- straight 45 degree angles
- flat, bidimensional look (no faux 3D whatsoever)
- 2dp lines
- 2dp radius rounded corners
- no logos
- hollow means inactive, solid means active (for example a hollow bookmark star is solid when checked)
- icons should be sized optically so they are balanced against each other, see icon-template.ai

These are not rules, they are guidelines that can be broken in style. The purpose of them is to try an ensure a uniform look as we all work on it together. They are also open to growing organically. They are meant to guide you to create an icon that fits with all the others (style, alignment, size, ...), if you break any of the above to make it fit, that works too.

**Note**: the bundled file, `gridicons-32.ai`, will only ever contain 5 icons used for WordPress.com main navigation. It's only there to add some flexibility to the sizing of this navigation. 


## Propose a New Icon

1. Make sure you have a updated local clone of the repository.
2. Draw the icon in Illustrator on a 24px grid using the guidelines above (use `icon-template.ai` if you'd like). Tip: tap CMD + Option + Y in Illustrator to see the pixel grid version.
3. Submit a Pull Request with the icon as a SVG file (inside the `svg` folder).
4. Discuss, iterate, review, refine until ready.


## Add a Proposed Icon to Gridicons

1. Switch to the branch (i.e. Pull Request) with the new icon.
2. Open 'gridicons.ai' in Illustrator.
3. Add a new containing layer with the name of the icon (i.e. "trophy").
4. Add the icon from the SVG on that containing layer. Make sure to check pixel preview.
7. Generate an SVG by dragging the script `exporter-multi.jsx` inside the Illustrator window.
8. In the dialog, select your new icon layer from the "Export layers" dropdown and click Export (make sure the output directory is `gridicons/svg`).
9. Run `grunt` command from terminal, to generate the svg-min, react, and svg-sprite directories.
10. Commit
11. Merge & delete branch

### Grunt: Installing

1. Go to http://nodejs.org/ and press "Install". Follow instructions.
2. Open a terminal. Change to your Gridicons directory. Type `npm install`
3. Now type `npm install -g grunt-cli`


### Grunt: Running

Make sure you have `grunt` and `grunt-svgstore` installed (also might require `grunt-svgmin`). 

In the commandline, type `grunt`. This will clean up, polish, and generate the following:

- A folder called `svg-min`. This folder contains minimized SVGs of every gridicon. These SVGs can be dragged directly into Sketch for mockups.
- A folder called `svg-sprite`. This folder contains a single SVG sprite called `gridicons.svg`, which can be referenced using `use`. But this doesn't work in IE at all yet, eventually it will work in Edge and newer. 
- A folder called `react`. This folder contains a gridicons component for use in React based environment. 

Do remember to update the React components where they are used, when you add a new icon. 

## Making PDF versions

Gridicons comes with a shell-script that will make highly optimized 1:1 size PDF versions of every SVG found in `svg-min`. These are not automatically make by the grunt script. 

You need to have CairoSVG installed:

```
sudo easy_install pip
sudo pip install cairosvg
brew install cairo
```

To make PDF versions, open a commandline in the gridicons directory type:

`sh makepdfs.sh`

Now every icon in the `svg-min` folder will have been converted to PDFs in the `pdf` folder.

Since this script isn't automatically run by `grunt` (due to the extra dependencies not installed by `npm install`), we should just run this script every once in a while (when you need a PDF icon that isn't baked, basically). 

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
- Dave W.

## License

Gridicons is licensed under [GNU General Public License v2 (or later)](./LICENSE.md).