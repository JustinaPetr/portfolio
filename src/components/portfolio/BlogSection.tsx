import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const blogs = [
  {
    title: "Building Conversational AI Assistants",
    description: "A deep dive into the architecture and implementation of modern conversational AI systems using open source tools.",
    date: "March 15, 2024",
    link: "#"
  },
  {
    title: "The Future of Developer Relations",
    description: "Exploring how DevRel is evolving in the age of AI and what it means for technical education and community building.",
    date: "February 28, 2024",
    link: "#"
  }
];

const BlogSection = () => (
  <section className="mb-16">
    <div className="flex items-center gap-2 justify-center mb-8">
      <BookOpen className="h-8 w-8 text-primary" />
      <h2 className="text-3xl font-semibold">Blog</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {blogs.map((blog) => (
        <motion.div
          key={blog.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href={blog.link} className="block">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription>{blog.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{blog.description}</p>
              </CardContent>
            </Card>
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default BlogSection;