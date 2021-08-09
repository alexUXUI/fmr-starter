const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { MFLiveReloadPlugin } = require("@module-federation/fmr");

const devServer = {
  port: 8081,
  hot: true,
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
      port: 8081,
      container: "packageB",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      filename: "remoteEntryB.js",
      name: "packageB",
      exposes: {
        "./packageB": "./src/packageB.js",
      },
      remotes: {
        packageA: "packageA@http://localhost:8080/remoteEntryA.js",
        packageC: "packageC@http://localhost:8082/remoteEntryC.js",
      },
    }),
  ],
};
