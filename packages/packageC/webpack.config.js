const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { MFLiveReloadPlugin } = require("@module-federation/fmr");

const devServer = {
  hot: true,
  port: 8082,
};

module.exports = {
  mode: "development",
  entry: "./src/bootstrap.js",
  output: {
    publicPath: "auto",
  },
  devServer,
  plugins: [
    new MFLiveReloadPlugin({
      port: 8082,
      container: "packageC",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      filename: "remoteEntryC.js",
      name: "packageC",
      exposes: {
        "./packageC": "./src/packageC.js",
      },
      remotes: {
        packageA: "packageA@http://localhost:8080/remoteEntryA.js",
        packageB: "packageB@http://localhost:8081/remoteEntryB.js",
      },
    }),
  ],
};
