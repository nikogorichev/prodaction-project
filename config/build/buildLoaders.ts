import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import { buildBabelLoaders } from "./loaders/buildBabelLoaders";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = buildCssLoaders(options);

  // const babelLoader = buildBabelLoaders(options);
  const codeBabelLoader = buildBabelLoaders({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoaders({ ...options, isTsx: true });

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  return [
    fileLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    // typescriptLoader,
    cssLoader,
    svgLoader,
  ];
}
