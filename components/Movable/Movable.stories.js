import React from "react";

import MovableTest from "./Movable";

export default {
  title: "Movable",
  component: MovableTest,
  excludeStories: /.*Data$/,
};

export const MovableDemo = () => {
  return (
    <div style={{ padding: "10px 10px 0 10px" }}>
      <MovableTest />
    </div>
  );
};
