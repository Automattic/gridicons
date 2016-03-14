# Testing the gridicons npm package

## Getting Started
This instruction set only applies to the gridicons admin who generates and publishes the gridicons npm package.

As an admin, before you publish the index.js module which is auto-generated via grunt, it is important that you test the module locally in your browser. There are a few steps involved in doing this, however, before you proceed this document assumes that you have already used grunt to auto-generate a new set of index.js files under:
- npm/publish/index.js
- npm/test/index.js

## Background
In order for your browser to be able to use and hence test the `index.js`
file, it will need to be able to understand the `node` based `require` form of importing modules. This is because the `gridicons` package is dependent on certain node packages like `classnames` (and potentially others may be added in the future). In general, this is not available on the client side browser because node is on the server side.

In order to make any node package dependencies available on the client side we use Browserify which simply traces through all node package dependencies in your file and pulls them in to a single `*.js` file that you simply include into your client side `html` document.

Now lets look at the steps involved:

### Installing Browserify
[Browserify](http://browserify.org/) is available as an npm package so you can simply go to your project's root folder and install it as:

`npm install browserify`

### Bundling up your require dependencies into a single JS file
Browserify is a simple tool that will take as input a javascript file and then output a javascript file by traversing through the AST (Abstract Syntax Tree) and pulling in all `require` dependencies into a single bundled up file that can be imported into your html document. To create your browserify'ed bundle run:

1. Go to your `npm/test/` folder which has the input `index.js` file.
2. Execute the below command which will take `index.js` file as input and generate the `bundle.js` file. The `-o` switch will overwrite any `bundle.js` files if they already exist in the same folder.

`browserify index.js -o bundle.js` 

That's it!

Also note that the `bundle.js` file is already included in the `index.html` file, so you're all set to test.

### Testing the icons 
Simply open the `index.html` file in the browser and ensure you see the newest set of icons that you intend to publish and also the list of previously published icons look good.
