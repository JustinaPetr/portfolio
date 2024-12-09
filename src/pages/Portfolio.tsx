import { motion } from "framer-motion";
import PortfolioDescription from "@/components/portfolio/PortfolioDescription";
import CoursesSection from "@/components/portfolio/CoursesSection";
import TutorialsSection from "@/components/portfolio/TutorialsSection";
import SpeakingSection from "@/components/portfolio/SpeakingSection";
import RunnerGame from "@/components/portfolio/RunnerGame";

const Portfolio = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Portfolio
        </motion.h1>
        
        <PortfolioDescription />
        <CoursesSection />
        <TutorialsSection />
        <SpeakingSection />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <RunnerGame />
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;