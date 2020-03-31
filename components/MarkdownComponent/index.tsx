import * as React from "react";
import Template from "../Template";

interface MarkdownComponentProps {
  content: string;
  buildDate: string;
}

export default function MarkdownContent({
  content,
  buildDate: strBuildDate,
}: MarkdownComponentProps): JSX.Element {
  const buildDate = new Date(strBuildDate);

  return (
    <Template buildDate={buildDate}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Template>
  );
}
