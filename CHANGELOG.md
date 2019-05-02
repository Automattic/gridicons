_The versioning refers to the React component build._
### v3.3.1 (2019-05-02)
* Remove duplicate file from NPM package.

### v3.3.0 (2019-05-02)
* Include SVG spritemap (svg-sprite/gridicons.svg) in gridicons npm package.
* Include offset configuration (sources/react/icons-offset) in gridicons npm package.

### v3.2.0 (2019-04-11)
* Icon added: "site"

### v3.1.1 (2018-09-10)
* Icon added: "list-ordered-rtl"
* Icon added: "stats-up"
* Icon added: "stats-up-alt"
* Icon added: "stats-down"
* Icon added: "stats-down-alt"
* Icon added: "line-graph"
* Icon updated: "filter"
* Icon updated: "pin"

#### v3.0.1 (2018-03-14)
* React: Revert to use React.PureComponent in main Gridicon, as to not break backward compatibility.

#### v3.0.0 (2018-03-14)
* React: remove obsolete @ssr-ready pragma from components.
* React: allow importing individual icons in CommonJS module formats.
* React: substitute React.PureComponent for a JavaScript function, to minimize the bundle size of transpiled CommonJS files as much as possible.
* Build: use template literals to create the React components and centralize the _icon needs offset_ logic in the svg-to-react Grunt task.
* Build: renamed `build/` to `dist/`, which is now part of the gridicons npm package.

#### v2.1.3 (2018-02-22)
* Icon added: "Shutter"

#### v2.1.2 (2018-01-23)
* Icon added: "Plans"

#### v2.1.1 (2017-12-12)
* Icon updated: "Create"
* Icon added: "Zoom In"
* Icon added: "Zoom Out"

#### v2.1.0 (2017-10-25)
* React: Update example headers and footers to use `PureComponent` instead of `createClass`.
* React: Allow version ^16.0.0.
* Icon updated: "image"
* Icon updated: "video"
* Icon added: "image-remove"
* Icon added: "video-remove"

#### v2.0.5 (2017-10-16)
* Icon updated: "Reply", flipped direction so it is pointing down and to the right.

#### v2.0.4 (2017-09-20)
* Icon added: "Gift"

#### v2.0.3 (2017-08-29)
* Icon added: "Reader Follow Conversation"
* Icon added: "Reader Following Conversation"
* Icon updated: "Chat", made sure this matches all bubble icons style
* Icon updated: "Comment", made sure this matches all bubble icons style

#### v2.0.2 (2017-08-15)

* Icon updated: "Chat", flipped direction for more modularity.

#### v2.0.1 (2017-07-21)

* Icon added: "Nametag".
* React: fix `className` generation.
* Build: now automatically builds PDFs using `svg-to-pdfkit`.

#### v2.0.0 (2017-06-28)

* Icon added: "Play".
* Icon added: "Bug".
* Icon added: "Share Computer".
* Icon added: "H1" to "H6".
* Icon updated: "Code".
* Icon updated: "Read More".
* React: dependency raised to 15.3.0.
* React: dependency added to `prop-type` 15.5.10.
* Build: refactoring, now SVG are master sources.
* Build: polished example site.
