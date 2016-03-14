# README
The gridicons package allows you to make use of the Icon Set that is developed for the WordPress Admin (Calypso).

To make use of the gridicons package you just need to...

> `import gridicons from 'wp-gridicons';`

...and then call the API with the iconName, it's size and an onClickHandler...

> `gridicons( 'add-image', 24, 'onClickHandler' );`

This will return to you the respective `<svg></svg>` (Scalable Vector Graphics) tag that can be placed inside your HTML content to render the icon of your choice.

Note: For a consistent and friendly user experience the `wp-gridicons` package supports icon sizes of only 18, 24, 36 and 48px.
