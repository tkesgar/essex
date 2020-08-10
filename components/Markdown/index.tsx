import * as React from "react";

interface Markdown {
  content: string;
}

export default function Markdown({ content }: Markdown): JSX.Element {
  return (
    <div className="my-8">
      <style jsx>{`
        div :global(h2) {
          @apply text-2xl;
          @apply mt-8;
        }

        div :global(h3) {
          @apply text-xl;
          @apply mt-4;
        }

        div :global(h4) {
          @apply text-lg;
          @apply mt-3;
        }

        div :global(p) {
          @apply mb-4;
        }

        div :global(li p) {
          @apply mb-0;
        }

        div :global(a) {
          @apply text-purple-600;
        }

        div :global(a:hover) {
          @apply text-purple-400;
          @apply underline;
        }

        div :global(ul) {
          @apply list-disc;
          @apply pl-8;
        }

        div :global(img) {
          @apply border;
          @apply border-purple-200;
        }
      `}</style>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
