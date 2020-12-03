import React from "react";

import { BarGraph } from "./BarGraph";

export default {
  title: "Visx",
  component: BarGraph,
  excludeStories: /.*Data$/,
};

export const BarGraphTest = () => {
  return (
    <div style={{ padding: "10px 10px 0 10px" }}>
      <BarGraph />
    </div>
  );
};
