# README
The `wp-gridicons` package allows you to make use of the Icon Set that is developed for the WordPress Admin (Calypso).

To make use of the `wp-gridicons` package you just need to:
1. **Install it via npm**
To install `wp-gridicons`, execute the following command in your project's root directory:

 > `npm install wp-gridicons`

You should now see a `node_modules/wp-gridicons` folder in your project structure.

2. **Import the gridicons javascript module**
Now, simply import the `gridicons` javascript module for use in your project.

> `var gridicons = require( 'wp-gridicons' );`

Or in __ES6 style__...
> `import gridicons from 'wp-gridicons';`

3. ****
...and then call the API with the iconName, it's size and an onClickHandler...

> `gridicons( 'add-image', 24, 'onClickHandler' );`

This will return to you the respective `<svg></svg>` (Scalable Vector Graphics) tag that can be placed inside your HTML content to render the icon of your choice.

Note: For a consistent and friendly user experience the `wp-gridicons` package supports icon sizes of only 18, 24, 36 and 48px.
