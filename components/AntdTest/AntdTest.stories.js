import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import AntdTest from "./AntdTest";

export default {
  title: "AntdTest",
  component: AntdTest,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

const taskData = {
  id: 1,
};

export const Demo = () => {
  return (
    <AntdTest
      task={object("task", { ...taskData })}
      onClick={action("button-click")}
    />
  );
};
