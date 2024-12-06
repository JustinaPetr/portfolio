import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A modern web application built with React and TypeScript",
      image: "placeholder.svg",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Project 2",
      description: "Full-stack e-commerce platform with real-time updates",
      image: "placeholder.svg",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
    },
    {
      title: "Project 3",
      description: "Mobile-first responsive web application",
      image: "placeholder.svg",
      tags: ["React Native", "GraphQL", "AWS"],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12"
        >
          My Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;