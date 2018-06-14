/* @flow */
const getStorybookConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules = [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            ["@babel/preset-env", { modules: false }],
            "@babel/preset-react"
          ]
        }
      }
    },
    {
      test: /\.graphql$/,
      use: "raw-loader"
    }
  ];
  return defaultConfig;
};
