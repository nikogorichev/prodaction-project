import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { BuildOptions } from "./types/config";
import MiniCssExctractPlugin from "mini-css-extract-plugin";

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExctractPlugin({
      filename: "scc/[name].[contenthash:8].css",
      chunkFilename: "scc/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    }),
  ];
}
