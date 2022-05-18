const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); // only add this if you don't have yet
const { ModuleFederationPlugin } = webpack.container;

module.exports = {
  output: {
    publicPath: "auto",
  },
  mode: "development",
  devServer: {
    port: 3000,
    open: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ModuleFederationPlugin({
      name: "container",
      filename: "remoteEntry.js",
      remotes: {
        modal: "modal@http://localhost:6001/remoteEntry.js",
        calendar: "calendar@http://localhost:5000/remoteEntry.js",
        button: "button@http://localhost:4500/remoteEntry.js",
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
