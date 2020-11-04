import React from "react";

import EditorTextArea from "./EditorTextArea";

export default {
  title: "EditorTextArea",
  component: EditorTextArea,
  excludeStories: /.*Data$/,
};

export const Demo = () => {
  return (
    <div style={{ padding: "10px 10px 0 10px" }}>
      <EditorTextArea />
    </div>
  );
};
