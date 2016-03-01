# Gridicons

The [Calypso](https://github.com/Automattic/wp-calypso/) / [WordPress.com](https://wordpress.com) official icon set.


## Icon Set Style Guidelines

- 24dp base grid
- straight 45 degree angles
- flat, bidimensional look (no faux 3D whatsoever)
- 2dp lines
- 2dp radius rounded corners
- no logos
- hollow means inactive, solid means active (for example a hollow bookmark star is solid when checked)
- icons should be sized optically so they are balanced against each other, see icon-template.ai

These are not rules, they are guidelines that can be broken with the proper reason. The purpose of them is to achieve a uniform look as we all work on it together. They are also open to growing organically. They are meant to guide you to create an icon that fits with all the others (style, alignment, size, ...), if you break any of the above to make it fit better, that works too.

**Notes**:

* the bundled file, `gridicons-32.ai`, will only ever contain 5 icons used for WordPress.com main navigation. It's only there to add some flexibility to the sizing of this navigation.
* the `svg-min` files can both be used in production directly or dragged to Sketch to create designs.


## Propose a New Icon

Note that the icons in this set are tied to be used in [Calypso](https://github.com/Automattic/wp-calypso/), but there might be exceptions for more general icons that make sense to be added.

1. Make sure you have a updated local clone of the repository.
2. Draw the icon in Illustrator on a 24px grid using the guidelines above (use [icon-template.ai](https://github.com/Automattic/gridicons/wiki/Icon-Template) if you'd like).  
   _Tip: tap CMD + Option + Y in Illustrator to see the pixel grid version._
3. Submit a Pull Request with the icon as a SVG file (inside the `svg` folder).
4. Discuss, iterate, review, refine until ready.
5. Once ready, an admin will proceed adding it.


## Add a Proposed Icon to Gridicons (Admins Only)

1. Switch to the branch (i.e. Pull Request) with the new icon.
2. Open 'gridicons.ai' in Illustrator.
3. Add a new containing layer with the name of the icon (i.e. "trophy").
4. Add the icon from the SVG on that containing layer. Make sure to check pixel preview.
7. Generate an SVG by dragging the script `exporter-multi.jsx` inside the Illustrator window.
8. In the dialog, select your new icon layer from the "Export layers" dropdown and click Export (make sure the output directory is `gridicons/svg`).
9. Run `grunt` command from terminal, to generate the `svg-min`, `react`, and `svg-sprite` directories.  
   _Optional: if you need to update pdf files, [generate these too](https://github.com/Automattic/gridicons/wiki/Installation)._
10. Commit
11. Merge & delete branch


## Installing Automation Scripts

This icon set uses a few automation scripts to ease the generation of new icons in a reliable way. In short, we require `node` and `grunt`. For detailed instructions check [the installation page](https://github.com/Automattic/gridicons/wiki/Installation).


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
