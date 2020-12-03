import React from "react";

import { BarGraph } from "./Test";

export default {
  title: "BarGraph",
  component: BarGraph,
  excludeStories: /.*Data$/,
};

export const Demo = () => {
  return (
    <div style={{ padding: "10px 10px 0 10px" }}>
      <BarGraph />
    </div>
  );
};
