import { motion } from "framer-motion";
import { 
  Code2, Database, Brain, Globe, Terminal, 
  GraduationCap, Rocket, FileCode 
} from "lucide-react";

const About = () => {
  const skills = [
    { name: "Python", icon: <FileCode className="w-4 h-4" /> },
    { name: "TypeScript", icon: <Code2 className="w-4 h-4" /> },
    { name: "Node.js", icon: <Terminal className="w-4 h-4" /> },
    { name: "Solidity", icon: <Database className="w-4 h-4" /> },
    { name: "Rust", icon: <Brain className="w-4 h-4" /> },
    { name: "GraphQL", icon: <Globe className="w-4 h-4" /> },
    { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
    { name: "Kubernetes", icon: <Rocket className="w-4 h-4" /> },
    { name: "Docusaurus", icon: <GraduationCap className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="relative">
              <div className="sticky top-24 h-[600px]">
                <img
                  src="/lovable-uploads/b340cc1a-5dfb-49f1-afe0-e851ef897ba3.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <h1 className="text-4xl font-bold">Hi, I'm Justina</h1>
              
              <div className="space-y-8 text-lg">
                <p>
                  I'm a passionate application developer and educator specializing in AI and Web3 topics. I started my career as a Data Scientist and have spent the past six years building Developer Relations strategies and leading teams at early-stage startups.
                </p>

                <p>
                  I specialize in creating seamless Developer Experience flows, developing hands-on educational content (both written and video), and helping teams improve their products through direct user feedback. I strive to make the learning process both insightful and enjoyable, ensuring developers feel empowered to build with confidence.
                </p>

                <p>
                  Throughout my career, I've shared my experiences at numerous developer conferences, from PyData, DevCon, and PyCon for AI topics, to EthCC, EthDenver, and DevCon for Web3 topics.
                </p>

                <p>
                  Outside of Developer Relations, I'm an avid runner, always on the lookout for my next challenge.
                </p>
              </div>

              <div className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
                <div className="flex flex-wrap gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;