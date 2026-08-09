import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => <h2 className="mt-10 font-display text-2xl font-medium text-text-dark" {...props} />,
  h3: (props) => <h3 className="mt-8 font-display text-xl font-medium text-text-dark" {...props} />,
  p: (props) => <p className="mt-5 leading-relaxed text-text-mid" {...props} />,
  ul: (props) => <ul className="mt-5 list-disc space-y-2 pl-6 text-text-mid" {...props} />,
  ol: (props) => <ol className="mt-5 list-decimal space-y-2 pl-6 text-text-mid" {...props} />,
  li: (props) => <li {...props} />,
  strong: (props) => <strong className="text-text-dark" {...props} />,
  a: (props) => <a className="text-green-mid underline underline-offset-4" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-green-primary pl-4 italic text-text-muted"
      {...props}
    />
  ),
};
