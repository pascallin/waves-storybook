import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MediumEditor from "medium-editor";
import HighLightExtension from "./extensions/highlight";
import CodeExtension from "./extensions/code";

import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/beagle.css";
import "./EditorTextArea.css";

const EditorContainer = styled.div`
  padding: 4em;
`;

const EditorTextArea = () => {
  const [editor, setEditor] = useState(null);
  const EditorConfig = {
    delay: 1000,
    targetBlank: true,
    toolbar: {
      buttons: [
        "bold",
        "italic",
        "underline",
        "h2",
        "h3",
        "orderedlist",
        "unorderedlist",
        "quote",
        "highlighter",
        "code",
      ],
      diffLeft: 25,
      diffTop: 10,
    },
    anchor: {
      placeholderText: "Type a link",
      customClassOption: "btn",
      customClassOptionText: "Create Button",
    },
    paste: {
      cleanPastedHTML: true,
      cleanAttrs: ["style", "dir"],
      cleanTags: ["label", "meta"],
      unwrapTags: ["sub", "sup"],
    },
    anchorPreview: {
      hideDelay: 300,
    },
    placeholder: {
      text: "Click to edit",
    },
    autoLink: true,
    extensions: {
      highlighter: new HighLightExtension(),
      code: new CodeExtension(),
    },
  };

  useEffect(() => {
    if (editor) return;
    setEditor(new MediumEditor(".editor", EditorConfig));
  });
  return (
    <EditorContainer>
      <div className="editor" />
    </EditorContainer>
  );
};

export default EditorTextArea;
