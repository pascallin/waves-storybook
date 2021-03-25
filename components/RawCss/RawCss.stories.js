import React from "react";
import { withKnobs, text, number } from "@storybook/addon-knobs/react";

import CoverImage from "./CoverImage";
import ConcaveRound from "./ConcaveRound";

export default {
  title: "Raw Css Component",
  component: CoverImage,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

const imageUrl =
  "https://raw.githubusercontent.com/pascallin/thruster/main/icon.svg";

export const CoverImageTest = () => {
  return (
    <div style={{ padding: "10px 10px 0 10px" }}>
      <CoverImage
        imageURL={text("imageURL", imageUrl)}
        width={number("width", 100)}
      />
    </div>
  );
};

export const ConcaveRoundTest = () => {
  return (
    <div style={{ backgroundColor: "yellow", height: 100, width: 100 }}>
      <ConcaveRound
        rightTop
        rightBottom
        bgColor={"white"}
        style={{ height: 100, width: 100 }}
      >
        <p>Hello</p>
      </ConcaveRound>
    </div>
  );
};
