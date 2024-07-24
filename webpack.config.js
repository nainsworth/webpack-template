// npm init -y
// npm i -D webpack webpack-cli
// npm i -D sass style-loader css-loader sass-loader
// npm i -D html-webpack-plugin

// combined
// npm i -D webpack webpack-cli sass style-loader css-loader sass-loader html-webpack-plugin

// optional
// npm i -D babel-loader @babel/core @babel/preset-env
// npm i axios


const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// npm i -D webpack-bundle-analyzer
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Template",
      filename: "index.html",
      template: "src/template.html",
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
