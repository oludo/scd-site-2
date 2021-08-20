import ReactMarkdown from "react-markdown";
import { HeadingThree, Paragraph } from "../base/Typography";

export default function Markdown({ ...rest }) {
  return (
    <ReactMarkdown
      components={{
        h3: HeadingThree,
        p: Paragraph,
      }}
      {...rest}
    />
  );
}
