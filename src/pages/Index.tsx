import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4">
        <div className="h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
          >
            I'm a passionate developer creating beautiful and functional web experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="/portfolio"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;