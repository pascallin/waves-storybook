const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.js", "../components/**/*.stories.js"],
  addons: [
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-graphql",
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: [path.resolve(__dirname, "../components")], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
};
