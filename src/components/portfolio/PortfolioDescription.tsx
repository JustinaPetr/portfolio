import { motion } from "framer-motion";

const PortfolioDescription = () => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16 text-center"
  >
    This page showcases some of my work in Developer Relations, including developer courses, tutorials, and public speaking engagements. Here, you'll find examples of my efforts to educate, inspire, and support developers through various media and events.
  </motion.p>
);

export default PortfolioDescription;