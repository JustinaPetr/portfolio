import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const blogPosts = [
  {
    title: "Building Conversational AI Assistants",
    date: "March 15, 2024",
    description: "Exploring the fundamentals of building AI assistants using modern NLP techniques and best practices.",
    link: "#"
  },
  {
    title: "The Future of Developer Relations",
    date: "March 1, 2024",
    description: "Insights into how DevRel is evolving and what it means for the tech community.",
    link: "#"
  },
  {
    title: "Data Science in Practice",
    date: "February 15, 2024",
    description: "Real-world applications of data science and machine learning in business contexts.",
    link: "#"
  }
];

const BlogSection = () => (
  <section className="mb-16">
    <div className="flex items-center gap-2 justify-center mb-8">
      <BookOpen className="h-8 w-8 text-primary" />
      <h2 className="text-3xl font-semibold">Blog</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <motion.div
          key={post.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href={post.link} className="block h-full">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.description}</p>
              </CardContent>
            </Card>
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default BlogSection;