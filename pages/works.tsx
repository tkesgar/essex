import * as React from "react";
import { GetStaticProps } from "next";
import { createGetMarkdownStaticProps } from "../utils";
import MarkdownContent from "../components/MarkdownComponent";

interface WorksProps {
  content: string;
  buildDate: string;
}

export default function Works(props: WorksProps): JSX.Element {
  return <MarkdownContent {...props} />;
}

export const getStaticProps: GetStaticProps = createGetMarkdownStaticProps(
  "works"
);
