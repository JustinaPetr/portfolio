import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Video, FileText } from "lucide-react";

const videoTutorials = [
  {
   title: "Build the Next Generation of Dapps on Arbitrum with Arbitrum Stylus via Lava RPC", 
   link: "https://youtu.be/9pvCE-LfDP4"
  },
  {
    title: "How to Get Access to Hyperliquid RPC Endpoints on Lava Gateway",
    link: "https://youtu.be/yFQ3mq2F-Cc"
  }
  {
    title: "Intro to composable search with Index Network",
    description: "Indexing the Base documentation",
    link: "https://www.youtube.com/watch?v=cOuJorrCtps",
  },
  {
    title: "Exploring data stored on Ceramic using Cerscan",
    description: "The Ceramic data explorer",
    link: "https://www.youtube.com/watch?v=kRCHI6KMb2A",
  },
  {
    title: "How to run a mainnet Ceramic node on Digital Ocean Kubernetes",
    link: "https://www.youtube.com/watch?v=L9LJHqO7LVk",
  },
  {
    title: "Rasa livestream - Rasa Core 11 and Rasa Core SDK",
    link: "https://www.youtube.com/watch?v=5gSZ_ZcrbRY",
  },
  {
    title: "Building a chatbot with Rasa NLU and Rasa Core",
    link: "https://www.youtube.com/watch?v=xu6D_vLP5vY",
  },
];

const writtenTutorials = [
  {
    title: "Understanding Lava RPC Provider Reputation",
    link: "https://www.lavanet.xyz/blog/understanding-lava-rpc-provider-reputation",
  },
  {
    title: "Getting Started With ComposeDB on Ceramic",
    link: "https://blog.ceramic.network/getting-started-with-composedb-on-ceramic-2/",
  },
  {
    title: "Use 'Create Ceramic App' to Launch Your Project",
    link: "https://blog.ceramic.network/launching-create-ceramic-app/",
  },
  {
    title: "Building an AI Voice Assistants with Rasa and Mozilla tools",
    link: "https://rasa.com/blog/how-to-build-a-voice-assistant-with-open-source-rasa-and-mozilla-tools/",
  },
  {
    title: "Going Beyond 'Hey Google': Building a Rasa-Powered Assistant",
    link: "https://rasa.com/blog/going-beyond-hey-google-building-a-rasa-powered-google-assistant/",
  },
  {
    title: "Migrating your Rasa 1.x assistant to Rasa 2.0",
    link: "https://rasa.com/blog/migrating-your-rasa-1-x-assistant-to-rasa-2-0/",
  },
  {
    title: "Designing Rasa training stories",
    link: "https://rasa.com/blog/designing-rasa-training-stories/",
  },
  {
    title: "Enhancing Rasa NLU models with Custom Components",
    link: "https://rasa.com/blog/enhancing-rasa-nlu-with-custom-components/",
  },
];

const TutorialsSection = () => (
  <section className="mb-16">
    <div className="flex items-center gap-2 justify-center mb-8">
      <FileText className="h-8 w-8 text-primary" />
      <h2 className="text-3xl font-semibold">Tutorials</h2>
    </div>
    <Tabs defaultValue="video" className="w-full">
      <TabsList className="mb-8">
        <TabsTrigger value="video">Video Tutorials</TabsTrigger>
        <TabsTrigger value="written">Written Tutorials</TabsTrigger>
      </TabsList>
      <TabsContent value="video">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoTutorials.map((tutorial) => (
            <motion.div
              key={tutorial.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href={tutorial.link} target="_blank" rel="noopener noreferrer">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                    {tutorial.description && (
                      <CardDescription>{tutorial.description}</CardDescription>
                    )}
                  </CardHeader>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="written">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {writtenTutorials.map((tutorial) => (
            <motion.div
              key={tutorial.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href={tutorial.link} target="_blank" rel="noopener noreferrer">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                  </CardHeader>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  </section>
);

export default TutorialsSection;
