import "antd/dist/antd.css";
import { addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

addParameters({
  backgrounds: [
    { name: "twitter", value: "#00aced", default: true },
    { name: "facebook", value: "#3b5998" },
  ],
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
