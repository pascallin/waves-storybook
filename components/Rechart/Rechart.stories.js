import React from "react";

import Curve from "./Curve";

export default {
  title: "Rechart",
  component: Curve,
  excludeStories: /.*Data$/,
};

export const RechartCurveTest = () => {
  return (
    <div style={{ padding: "10px 10px 0 10px" }}>
      <Curve />
    </div>
  );
};
