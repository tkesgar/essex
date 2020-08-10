import fs from "fs";
import marked from "marked";

export async function getMarkdown(name: string): Promise<string> {
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
