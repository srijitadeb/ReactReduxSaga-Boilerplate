// Using Nodejs native package 'path'
// https://nodejs.org/api/path.html
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//Constant with out paths
const paths = {
  DIST: path.resolve(__dirname, "dist"),
  JS: path.resolve(__dirname, "src"),
  SRC: path.resolve(__dirname, "") //SOURCE FOLDER PATH -added in this step
};

// WEBPACK configuration
module.exports = {
  entry: path.join(paths.JS,'index.js'),
  output: {
    path: paths.DIST,
    filename: "app.bundle.js"
  },

  //Tell webpack to use html plugin
  //index.html is used as a template in which it'll inject bundled app
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, "index.html")
    }),
    new ExtractTextPlugin("style.bundle.css") // CSS will be extracted to this bundle file.
  ],

  //Loaders configuration
  // We are telling webpack to use "babel-loader" for .js and  .jsx files.
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },

      //CSS loader to css files
      //Files will get handled by css loader and then passed to the extract text plugin
      //this will write it to the file defined above
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: "css-loader"
        })
      },

      // File Loader for image assets
      // We'll add only image extensions but can also add svg's fonts and videos
      {
        test: /\.(png|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },

  //Dev server configuration added in this step
  //now it will use our 'src' folder as a starting point
  //   devServer: {
  //     contentBase: paths.SRC
  //   }

  //Enable importing JS files without specifying their's extension
  //
  // So we can write:
  // import MyComponent from './my-component';
  //
  //Instead of:
  // import MyComponent from './my-component.jsx';
  resolve: {
    extensions: [".js", ".jsx"]
  }
};