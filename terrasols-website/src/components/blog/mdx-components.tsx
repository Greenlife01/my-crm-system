import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => <h2 className="mt-10 font-display text-2xl font-medium text-text-primary" {...props} />,
  h3: (props) => <h3 className="mt-8 font-display text-xl font-medium text-text-primary" {...props} />,
  p: (props) => <p className="mt-5 leading-relaxed text-text-secondary" {...props} />,
  ul: (props) => <ul className="mt-5 list-disc space-y-2 pl-6 text-text-secondary" {...props} />,
  ol: (props) => <ol className="mt-5 list-decimal space-y-2 pl-6 text-text-secondary" {...props} />,
  li: (props) => <li {...props} />,
  strong: (props) => <strong className="text-text-primary" {...props} />,
  a: (props) => <a className="text-carbon-teal underline underline-offset-4" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-growth-green pl-4 italic text-text-muted"
      {...props}
    />
  ),
};
