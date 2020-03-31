import fs from "fs";
import marked from "marked";
import { GetStaticProps } from "next";

export async function getMarkdownContent(name: string): Promise<string> {
  const markdown = await new Promise<string>((resolve, reject) => {
    fs.readFile(`./assets/markdown/${name}.md`, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(data.toString());
    });
  });

  return marked(markdown);
}

export function createGetMarkdownStaticProps(name: string): GetStaticProps {
  const fn: GetStaticProps = async () => {
    const content = await getMarkdownContent(name);
    const buildDate = new Date().toISOString();

    return {
      props: { content, buildDate },
    };
  };

  return fn;
}
