import * as React from "react";
import { GetStaticProps } from "next";
import { createGetMarkdownStaticProps } from "../utils";
import MarkdownContent from "../components/MarkdownComponent";

interface IndexProps {
  content: string;
  buildDate: string;
}

export default function Index(props: IndexProps): JSX.Element {
  return <MarkdownContent {...props} />;
}

export const getStaticProps: GetStaticProps = createGetMarkdownStaticProps(
  "home"
);
