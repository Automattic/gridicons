# Publishing the wp-gridicons npm package
For `wp-gridicons` admins only.

Please follow the below steps in order to publish the contents of the `npm/publish` folder as a new version of the `wp-gridicons` npm package.

## Pre-condition checks before publishing a new npm package version
If you intend to publish the contents of the `npm/publish` folder to npm then please take note that a new `npm/publish/index.js` file is generated during the regular `grunt` build step. You should test that this file has the required set of gridicon changes before publishing to npm. Follow the testing instructions outlined in `npm/test/TESTING.md` to validate the changes before publishing to npm.

## Quick Steps to publish the wp-gridicons npm package
Execute the following commands from the `npm/publish` folder (Read the detailed instructions in the next section if you are doing this for the first time):
1. npm version patch
2. npm publish
Then validate the new version on npm website [wp-gridicons](https://npmjs.com/package/wp-gridicons).

## Detailed Steps to publish the wp-gridicons npm package
### Generate a new npm package version
It is highly recommended that you take the time to review the material provided by npm on [semantic versioning](https://docs.npmjs.com/getting-started/semantic-versioning).

To update the version of the package that you need to publish you need to execute the following command:

`npm version <version_type>`

The `version_type` parameter can take three different values and below is a summary of what these mean:
1. **patch** - This usually represents a bugfix.
2. **minor** - This represents a new feature that is backwards compatible.
3. **major** - This represents an upgrade that is not backwards compatible and will therefore require the users of this package to make changes to their project in order to upgrade and use the new version of this package.

Executing the above command will display the new version number for the package that is to be published. Kindly take a note of this version number as you will need to verify this on the npm site once you have actually published the package in the next section.

### Publish the npm package
It is highly recommended that you take the time to review the material provided by npm on [publishing npm packages](https://docs.npmjs.com/getting-started/publishing-npm-packages).

To publish the `wp-gridicons` package to npm simply execute the below command from within the `npm/publish` folder:

`npm publish`

### Test the published npm package 
Then go to the [wp-gridicons](https://npmjs.com/package/wp-gridicons) page on npm and ensure you see the new version.
