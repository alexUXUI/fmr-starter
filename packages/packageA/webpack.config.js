const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const { MFLiveReloadPlugin } = require("@module-federation/fmr");

const devServer = {
  port: 8080,
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
      port: 8080,
      container: "packageA",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      filename: "remoteEntryA.js",
      name: "packageA",
      exposes: {
        "./packageA": "./src/packageA.js",
      },
      remotes: {
        packageB: "packageB@http://localhost:8081/remoteEntryB.js",
        packageC: "packageC@http://localhost:8082/remoteEntryC.js",
      },
    }),
  ],
};
