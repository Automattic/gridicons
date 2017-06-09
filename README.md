# Gridicons

The [Calypso](https://github.com/Automattic/wp-calypso/) / [WordPress.com](https://wordpress.com) official icon set.

## Using the Gridicon Component in your project:

Note that this component requires [react](https://www.npmjs.com/package/react) to be installed in your project.

Gridicon renders a single svg icon based on an `icon` prop. It takes a size property but defaults to 24px. For greater sharpness, the icons should only be shown at either 18px, 24px, 36px or 48px.

There's a gallery with all the available icons in https://wpcalypso.wordpress.com/devdocs/design/gridicons.

```
npm install gridicons --save
```
#### Usage

```
import Gridicon from 'gridicons';
//...
render() {
    return <Gridicon icon="add-image" />;
}
```

#### Props

* `icon`: String - the icon name.
* `size`: Number - (default: 24) set the size of the icon.
* `onClick`: Function - (optional) if you need a click callback.

**Notes**:

* The icon set is made to be used exactly at these pixel sizes: 12, 18, 24, 36, 48, 54, 72.
* `gridicon-my-sites` as it's a small-size version of the WordPress logo, shouldn't be used larger than 36px. If you need to use the WordPress logo in larger sizes, see the [Social Logos project](https://github.com/Automattic/social-logos).


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
3. Submit a Pull Request with the icon as a SVG file (inside the `sources/svg` folder).
4. Discuss, iterate, review, refine until ready.
5. Once ready, an admin will proceed adding it.


## Add a Proposed Icon to Gridicons (Admins Only)

1. Switch to the branch (i.e. Pull Request) with the new icon.
2. Review the SVG source of the new icons to make sure they are clean.
3. Check pixel sharpness: open in Illustrator (with "Pixel Preview") or Sketch (with "Show Pixels"), adjust if needed.
4. Run `grunt` command from terminal. It will generate `svg-min`, `react`, and `svg-sprite`.
   _Optional: if you need to update pdf files, [generate these too](https://github.com/Automattic/gridicons/wiki/Installation)._
10. Commit
11. Merge & delete branch


## Installing Automation Scripts

This icon set uses a few automation scripts to ease the generation of new icons in a reliable way. In short, we require `node` and `grunt`. For detailed instructions check [the installation page](https://github.com/Automattic/gridicons/wiki/Installation).


### Publishing to NPM

- Follow install instructions
- Check in changes if any and follow PR process.
- Bump package version in package.json to the next desired version and add an alpha postfix `1.1.0-alpha.1`
- While testing changes publish using the next tag `npm publish --tag next`
- If changes look good remove postfix in the version `1.1.0`
- Publish using the latest tag `npm publish --tag latest`

## License

Gridicons is licensed under [GNU General Public License v2 (or later)](./LICENSE.md).
