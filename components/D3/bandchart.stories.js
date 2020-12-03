import React from "react";

import { BandChart } from "./BandChart";

export default {
  title: "D3 Band Chart Test",
  component: BandChart,
  excludeStories: /.*Data$/,
};

export const Demo = () => {
  return (
    <div style={{ padding: "10px 10px 0 10px" }}>
      <BandChart />
    </div>
  );
};
