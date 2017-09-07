# Gridicons

The [Calypso](https://github.com/Automattic/wp-calypso/) / [WordPress.com](https://wordpress.com) official icon set.

## Using the Gridicon Component in your project:

Note that this component requires [react](https://www.npmjs.com/package/react) to be installed in your project.

Gridicon renders a single svg icon based on an `icon` prop. It takes a size property but defaults to 24px. For greater sharpness, the icons should only be shown at either 18px, 24px, 36px or 48px.

There's a gallery with all the available icons in http://automattic.github.io/gridicons/..

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

* the `svg-min` files can both be used in production directly or dragged to Sketch to create designs.
* the `sources/svg-32` folder contains a subset of icons optimized at 32px, for the iOS navigation bar.


## Propose a New Icon

Note that the icons in this set are tied to be used in [Calypso](https://github.com/Automattic/wp-calypso/), but there might be exceptions for more general icons that make sense to be added.

1. Make sure you have a updated local clone of the repository.
2. Draw the icon in Illustrator on a 24px grid using the guidelines above (use [icon-template.ai](https://github.com/Automattic/gridicons/wiki/Icon-Template) as starting point).
   _Tip: tap CMD + Option + Y in Illustrator to see the pixel grid version._
3. Submit a Pull Request with the icon as a SVG file (inside the `sources/svg` folder), make sure to include a screenshot, ideally containing side by side comparison with some other Gridicons as a visual reference.
4. Discuss, iterate, review, refine until ready.
5. Once ready, an admin will proceed adding it.


## Add a Proposed Icon to Gridicons (Admins Only)

1. Switch to the branch (i.e. Pull Request) with the new icon.
2. Review the SVG source of the new icons to make sure they are clean and readable.
3. Check pixel sharpness: open in Illustrator (with "Pixel Preview") or Sketch (with "Show Pixels"), adjust if needed.
4. Run `grunt` command from terminal. It will generate `svg-min`, React (`build`), `svg-sprite`, `pdf`, `php`, and `docs`.
5. Commit
6. Merge & delete branch


## Installing Automation Scripts

This icon set uses a few automation scripts to ease the generation of new icons in a reliable way. In short, we require `node` and `grunt`. For detailed instructions check [the installation page](https://github.com/Automattic/gridicons/wiki/Installation).


## Publishing to npm

Note: to proceed with this you need to have write authorization to npm.

1. Create a new PR with updated `CHANGELOG.md` and updated version in `package.json` (i.e. `1.2.3-alpha.1`), see an example [here](https://github.com/Automattic/gridicons/pull/247).
2. Pre-publish that PR branch on npm with `npm publish --tag next` ([more info])(https://docs.npmjs.com/getting-started/using-tags).
3. Create a new PR in a repository using Gridicons (i.e. [Calypso](https://github.com/Automattic/wp-calypso)), see an example [here](https://github.com/Automattic/wp-calypso/pull/17601).
4. Test if the new icons show up, and there are no regressions in the previous icons.
5. If changes look good, remove postfix in the version (i.e. `1.2.3`).
6. Merge the Gridicons PR.
7. Tag the release on GitHub: `git tag -a v1.2.3 -m "Release v1.2.3"` (and push `git push origin v1.2.3`).
8. Check if it shows up in the [Releases list](https://github.com/Automattic/gridicons/releases).
8. Publish to MASTER using the latest tag `npm publish --tag latest`.
9. Merge the test repository PR.

## License

Gridicons is licensed under [GNU General Public License v2 (or later)](./LICENSE.md).
