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

const Blog = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 justify-center mb-12">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-semibold">Blog</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;