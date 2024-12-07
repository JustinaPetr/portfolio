import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const courses = [
  {
    title: "Conversational AI Assistants with CALM",
    description: "A freelance project to create a 11-episode developer course for creating AI assistants using CALM - Rasa's Conversational AI with Language Models.",
    link: "https://www.youtube.com/watch?v=6vaQP1VC95k&list=PL75e0qA87dlHPWoD4c-NrYszndgq-NFz3",
    image: "/lovable-uploads/f9444473-e4d6-40d0-a496-43ee04ae99ed.png"
  },
  {
    title: "Rasa Masterclass",
    description: "Developing contextual AI assistants using Open Source tools. 15-episode course.",
    link: "https://www.youtube.com/watch?v=rlAQWbhwqLA&list=PL75e0qA87dlHQny7z43NduZHPo6qd-cRc",
    image: "/lovable-uploads/15455991-586a-4d4b-b256-46b3568739a9.png"
  },
];

const CoursesSection = () => (
  <section className="mb-16">
    <div className="flex items-center gap-2 justify-center mb-8">
      <BookOpen className="h-8 w-8 text-primary" />
      <h2 className="text-3xl font-semibold">Courses</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {courses.map((course) => (
        <motion.div
          key={course.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href={course.link} target="_blank" rel="noopener noreferrer">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-contain bg-gray-100" 
                  />
                </div>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
            </Card>
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CoursesSection;