# ThreeJS
Install the required dependencies:

npm i --save three
npm i --save parcel
npm install html-webpack-plugin --save-dev
npm install webpack-dev-server --save-dev
webpack-dev-server --version
webpack-dev-server --version

In package.json, add the following script
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack serve --mode development --open"
  },

Keep the directory structure similar:
- node_modules/
- src/
  - index.html
  - script.js
  - style.css
- package.json
- webpack.config.js (to be created)


Add the webpack.config.js in the parent directory:
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/script.js', // Your entry point file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file
    publicPath: '/', // Path to be used in the browser
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // Serve content from this directory
    },
    port: 8080, // Use a specific port (optional)
    historyApiFallback: true, // Fallback to index.html for SPA routes
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Use this HTML file as a template
    }),
  ],
  module: {
    rules: [
      // Define your loaders here (for transpiling, handling CSS, etc.)
    ],
  },
};
