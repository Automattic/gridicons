# Gridicons

The [Calypso](https://github.com/Automattic/wp-calypso/) / [WordPress.com](https://wordpress.com) official icon set.

## Using the Gridicon Component in your project

Note that this component requires [react](https://www.npmjs.com/package/react) to be installed in your project. If you don't want to use React, you can simply include the raw `.svg` files from the [`svg-min`](https://github.com/Automattic/gridicons/tree/master/svg-min) folder.

Gridicon renders a single svg icon based on an `icon` prop. It takes a size property but defaults to 24px. For greater sharpness, the icons should only be shown at either 18px, 24px, 36px or 48px.

There's a gallery with all the available icons in http://automattic.github.io/gridicons/.

### Install

Use the following command and execute in your terminal:

```sh
npm install gridicons --save
```

#### Usage

You can either import the whole iconset and decide at run-time which icon to use:

```jsx
import Gridicon from 'gridicons';
//...
render() {
    return <Gridicon icon="add-image" />;
}
```

Or import icons individually:

```jsx
import GridiconAddImage from 'gridicons/dist/add-image';
//...
render() {
    return <GridiconAddImage />;
}
```

If you use only a few icons, the recommended way of using the Gridicon library is to import them individually. At the moment of writing this, individual icons are between 1K and 2K, and the file containing the whole iconset sits at 92K.

#### Props

* `icon`: String - the icon name. This is ignored when importing icons individually.
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
4. Run `grunt` command from terminal. It will generate `svg-min`, `build`, `dist`, `svg-sprite`, `pdf`, `php`, and `docs`.
5. Commit
6. Merge & delete branch


## Installing Automation Scripts

This icon set uses a few automation scripts to ease the generation of new icons in a reliable way. In short, we require `node` and `grunt`. For detailed instructions check [the installation page](https://github.com/Automattic/gridicons/wiki/Installation).

Once you checkout the repo run `npm install` in the `gridicons` folder.
To generate all the fonts, svgs and so on you run `npm run build`

## Publishing to npm

Note: to proceed with this you need to have write authorization to npm.

1. Create a new PR with updated `CHANGELOG.md` and updated version in `package.json` (i.e. `1.2.3-alpha.1`), see an example [here](https://github.com/Automattic/gridicons/pull/275).
2. In the "CHANGELOG.md" make sure to check all the previous commits since the previous versioned release.
3. Pre-publish that PR branch on npm with `npm publish --tag next` ([more info](https://docs.npmjs.com/cli/dist-tag)). Running the `npm publish --tag next` command will send the data that you have localy to npm. Having the alpha version in the `package.json` file will create a newly tagged version npm package. Use `npm view gridicons` to look at the list of current tags. You do not need to commit changes to github in order to publish to npm, but it is recommended so folks testing know what's available.
4. Create a new update PR in a repository that makes use of Gridicons and run `npm install gridicons@next --save` (which will update `packages.json`). If you're creating the PR in [Calypso](https://github.com/Automattic/wp-calypso) and you get warnings, it might need to regenerate the shrinkwrap, in which case run `npm run update-deps`. See an example [here](https://github.com/Automattic/wp-calypso/pull/17601).
5. Test if the new icons show up, and there are no regressions in the previous icons. Take a look at the `http://calypso.localhost:3000/devdocs/design/gridicons` for example.
6. If changes look good, remove the alpha postfix in the version (i.e. `1.2.3-alpha.1` to `1.2.3`) on both repositories PRs.
7. Merge the Gridicons PR.
8. Tag the release on GitHub: `git tag -a v1.2.3 -m "Release v1.2.3"` (and push `git push origin v1.2.3`).
9. Check if it shows up in the [Releases list](https://github.com/Automattic/gridicons/releases).
10. Publish to MASTER using the latest tag `npm publish`.
11. Merge the update PR in the other repository.

## License

Gridicons is licensed under [GNU General Public License v2 (or later)](./LICENSE.md).

## More notes on publishing to npm
You need to have a npm user account. [Create one here](https://www.npmjs.com/signup).
Once you have created it, set up the account on you machine via
$ `npm adduser`

Setup the 2fa with npm
$ `npm profile enable-2fa`

Now everytime before you can publish
You will be asked for a your [2FA code (OPT)](https://en.wikipedia.org/wiki/One-time_password)
