import { getTextAlign } from "utils/font";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrl";

export const Paragraph = ({ textAlign = "left", content, textColor }) => {
  const contents = { _html: content };
  return (
    <p
      className={`max-w-5xl mx-auto ${getTextAlign(textAlign)}`}
      style={{ color: textColor }}
      // dangerouslySetInnerHTML={{ contents }}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    >
      {/* newvalue */}
    </p>
  );
};
