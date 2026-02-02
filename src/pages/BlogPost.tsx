import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Loads all markdown files as raw text from: src/content/posts/*.md
const modules = import.meta.glob("../content/posts/*.md", { as: "raw" });

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [notFound, setNotFound] = useState(false);

  const key = useMemo(() => {
    if (!slug) return null;
    return `../content/posts/${slug}.md`;
  }, [slug]);

  useEffect(() => {
    (async () => {
      setNotFound(false);
      setContent("");

      if (!key || !(key in modules)) {
        setNotFound(true);
        return;
      }

      const loader = modules[key] as () => Promise<string>;
      const md = await loader();
      setContent(md);
    })();
  }, [key]);

  if (notFound) {
    return (
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-2xl font-semibold">Post not found</h1>
          <p className="mt-2 text-muted-foreground">
            Couldn’t find: <code>{slug}.md</code> in{" "}
            <code>src/content/posts</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 max-w-3xl">
        {content ? (
          <article
            className="
              prose prose-lg dark:prose-invert max-w-none
              prose-code:before:content-none
              prose-code:after:content-none
              prose-code:px-1
              prose-code:py-0.5
              prose-code:rounded-md
              prose-code:bg-muted
              prose-code:text-foreground
            "
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </article>
        ) : (
          <p className="text-muted-foreground">Loading…</p>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
