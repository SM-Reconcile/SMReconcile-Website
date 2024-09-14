import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import MDXComponents from "@/components/content/MDXComponents";

const Matter = ({ code }: { code: string }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <div>
      <article className="mdx prose dark:prose-invert mx-auto mt-4 w-full transition-colors">
        <Component
          components={
            {
              ...MDXComponents,
            } as any
          }
        />
      </article>
    </div>
  );
};

export default Matter;
