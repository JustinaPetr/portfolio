import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Building Full Stack Apps with Lovable.dev",
    date: "March 15, 2024",
    description: "A comprehensive guide to building modern web applications using Lovable.dev's AI-powered development platform.",
    link: "/blog/building-with-lovable"
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

          <div className="max-w-3xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={post.link} className="block">
                  <Card className="hover:shadow-lg transition-shadow mb-8">
                    <CardHeader>
                      <CardTitle className="text-2xl">{post.title}</CardTitle>
                      <CardDescription>{post.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{post.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;