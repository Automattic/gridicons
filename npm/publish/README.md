# README
The `wp-gridicons` package allows you to make use of the Icon Set that is developed for the WordPress Admin (Calypso).

## Quick Steps for using wp-gridicons
1. **Install wp-gridicons**: Execute the following command in your project's root folder `npm install wp-gridicons`.
2. **Import wp-gridicons**: Import the wp-gridicons package in your javascript file via `var wpGridicon = require( 'wp-gridicons' ).wpGridicon;`.
3. **Call the wpGridicon api**: Retrieve a gridicon by calling the wpGridicon api e.g., `wpGridicon( 'add-image', 24, 'onClickHandler' );`.

## Detailed Steps for using wp-gridicons
To make use of the `wp-gridicons` package you just need to:
1. **Install it via npm**
To install `wp-gridicons`, execute the following command in your project's root directory:

 > `npm install wp-gridicons`

You should now see a `node_modules/wp-gridicons` folder in your project structure.

2. **Import the gridicons javascript module**
Now, simply import the `wp-gridicons` javascript module for use in your project.

> `var wpGridicon = require( 'wp-gridicons' ).wpGridicon;`

Or in __ES6 style__...
> `import { wpGridicon } from 'wp-gridicons';`

3. **Calling the gridicons module**
...and then call the API with the iconName, it's size and an onClickHandler...

> `wpGridicon( 'add-image', 24, 'onClickHandler' );`

This will return to you the respective `<svg></svg>` (Scalable Vector Graphics) tag that can be placed inside your HTML content to render the icon of your choice.

Note: For a consistent and friendly user experience the `wp-gridicons` package supports icon sizes of only 18, 24, 36 and 48px.
