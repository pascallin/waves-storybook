import React from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import CodeTool from "@editorjs/code";
import Table from "@editorjs/table";
import Marker from "@editorjs/marker";
import Quote from "@editorjs/quote";
import ImageTool from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import Delimiter from "@editorjs/delimiter";
import Warning from "@editorjs/warning";
import List from "@editorjs/list";

export default function EditorJSContainer() {
  var editor = new EditorJS({
    /**
     * Create a holder for the Editor and pass its ID
     */
    holder: "editorjs",

    /**
     * Available Tools list.
     * Pass Tool's class or Settings object for each Tool you want to use
     */
    tools: {
      header: Header,
      code: CodeTool,
      inlineCode: {
        class: InlineCode,
        shortcut: "CMD+SHIFT+M",
      },
      delimiter: Delimiter,
      warning: Warning,
      table: {
        class: Table,
        inlineToolbar: true,
        config: {
          rows: 2,
          cols: 3,
        },
      },
      list: {
        class: List,
        inlineToolbar: true,
      },
      marker: {
        class: Marker,
        shortcut: "CMD+SHIFT+M",
      },
      quote: Quote,
      image: {
        class: ImageTool,
        config: {
          endpoints: {
            byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
            byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
          },
        },
      },
    },

    /**
     * Previously saved data that should be rendered
     */
    data: {},
  });

  return <div id="editorjs"></div>;
}
