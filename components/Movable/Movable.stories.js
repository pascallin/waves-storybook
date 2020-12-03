import React from "react";

import MovableTest from "./Movable";

export default {
  title: "MovableTest",
  component: MovableTest,
  excludeStories: /.*Data$/,
};

export const Demo = () => {
  return (
    <div style={{ padding: "10px 10px 0 10px" }}>
      <MovableTest />
    </div>
  );
};
