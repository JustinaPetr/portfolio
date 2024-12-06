import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4">
        <div className="h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="mb-8"
            >
              <img 
                src="/lovable-uploads/1079fa62-a2f3-4bc9-90ba-f4f98d578e5a.png" 
                alt="Logo" 
                className="w-32 h-32 mx-auto mb-4"
              />
              <h2 className="text-xl text-primary mb-8 font-medium">Doing stuff with computers</h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed"
            >
              Data Scientist, Developer Relations Engineer, and educator with a passion for enabling developers to build great applications and turn data into meaningful insights and innovative products.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="/portfolio"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block"
              >
                View My Work
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;