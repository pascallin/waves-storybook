import React from "react";

import EditorJS from "./EditorJS";

export default {
  title: "EditorJS",
  component: EditorJS,
  excludeStories: /.*Data$/,
};

export const Demo = () => {
  return (
    <div style={{ padding: "10px 10px 0 10px" }}>
      <EditorJS />
    </div>
  );
};
