import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import { BuildPaths } from "../build/types/config";
import path from "path";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", "tsx");
  config.resolve?.alias = {
    ...config.resolve?.alias,
    "@": paths.src,
  };

  if (config.module?.rules !== undefined) {
    config.module.rules = config.module.rules.map(
      (rule: RuleSetRule | "...") => {
        if (
          rule !== "..." &&
          rule.test instanceof RegExp &&
          rule.test.toString().includes("svg")
        ) {
          return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
      }
    );

    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
  }
  config.module?.rules?.push(buildCssLoaders(true));
  config.plugins?.push(
    new DefinePlugin({ __IS_DEV__: true, __PROJECT__: "storybook" })
  );
  return config;
};
