import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Tailwind CSS",
    "Next.js", "GraphQL", "PostgreSQL", "AWS"
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              I'm a full-stack developer with a passion for creating beautiful and functional web applications. 
              With years of experience in web development, I specialize in building responsive and user-friendly interfaces.
            </p>
            <p className="text-lg mb-12">
              My approach combines technical expertise with creative problem-solving to deliver exceptional digital experiences.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary p-4 rounded-lg text-center"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;