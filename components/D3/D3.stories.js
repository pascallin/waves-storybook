import React from "react";

import { BarChart } from "./BarChart";

export default {
  title: "D3",
  component: BarChart,
  excludeStories: /.*Data$/,
};

export const BarChartTest = () => {
  return (
    <div style={{ padding: "10px 10px 0 10px" }}>
      <BarChart />
    </div>
  );
};
