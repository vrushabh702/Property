import React from "react";
import { getFontSizeForHeading, getTextAlign } from "utils/font";

export const Heading = ({ textAlign, level, content }) => {
  const contents = { __html: content };
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: contents,
    className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
  });
  return tag;
};
