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
      {
        test: /\.js$/, // Match JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Basic preset for compatibility
          },
        },
      },
    ],
  },  
};
