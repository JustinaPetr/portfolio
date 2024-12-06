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
            I'm a passionate application developer and educator specializing in AI and Web3 topics. I started my career as a Data Scientist and have spent the past six years building Developer Relations strategies and leading teams at early-stage startups. As a constant self-learner, I aim to make technology more accessible, engaging, and easier for developers of all backgrounds and experience levels.

            I specialize in creating seamless Developer Experience flows, developing hands-on educational content (both written and video), and helping teams improve their products through direct user feedback. I strive to make the learning process both insightful and enjoyable, ensuring developers feel empowered to build with confidence.

            Throughout my career, I've shared my experiences at numerous developer conferences, from PyData, OSCON, and PyCon for AI topics, to EthCC, EthDenver, and DevCon for Web3 topics.

            Outside of Developer Relations, I'm an avid runner, always on the lookout for my next challenge.
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