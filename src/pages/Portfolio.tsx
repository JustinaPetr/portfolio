import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const courses = [
    {
      title: "Conversational AI Assistants with CALM",
      description: "A freelance project to create a 11-episode developer course for creating AI assistants using CALM - Rasa's Conversational AI with Language Models.",
      link: "https://www.youtube.com/watch?v=6vaQP1VC95k&list=PL75e0qA87dlHPWoD4c-NrYszndgq-NFz3",
    },
    {
      title: "Rasa Masterclass",
      description: "Developing contextual AI assistants using Open Source tools. 15-episode course.",
      link: "https://www.youtube.com/watch?v=rlAQWbhwqLA&list=PL75e0qA87dlHQny7z43NduZHPo6qd-cRc",
    },
  ];

  const videoTutorials = [
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

  const speakingEngagements = [
    {
      title: "Future trends in Web3 Infrastructure",
      event: "EthCC Builders Club",
      date: "July 2024",
      link: "https://youtu.be/Q3xFj5O1tTM?si=uuRf00tTjXL8r6TF",
    },
    {
      title: "Augment AI Hackathon Recap",
      event: "EthCC",
      date: "July 2023",
      link: "https://www.youtube.com/watch?v=SLaiz-_PBTE",
    },
    {
      title: "The future of web3 Infrastructure",
      event: "Protocol Labs Week",
      date: "November 2022",
      link: "https://www.youtube.com/watch?v=kbjcMWSbckk",
    },
    {
      title: "Sign in With Ethereum: the Most Powerful Protocol in Web3?",
      event: "Web3 Conference",
      date: "October 2022",
      link: "https://www.youtube.com/watch?v=y4Q7Y_8wjAs",
    },
    {
      title: "Conversation Driven Development",
      event: "Bots Brasil",
      date: "August 2021",
      link: "https://www.youtube.com/watch?v=RqiBinnpSHc",
    },
    {
      title: "Rasa Community Updates",
      event: "Rasa Summit",
      date: "November 2019",
      link: "https://www.youtube.com/watch?v=xGkcYn4TzSg",
    },
    {
      title: "Building contextual AI assistants with OSS tools",
      event: "PyBay 2019",
      date: "October 2019",
      link: "https://www.youtube.com/watch?v=3IbsnctEkRc",
    },
    {
      title: "Building Your Own Conversational AI assistants using Open Source tools",
      event: "PyCon.DE",
      date: "November 2018",
      link: "https://www.youtube.com/watch?v=vVco861PUJo",
    },
    {
      title: "L3-AI panel: Deploying Assistants",
      event: "L3-AI conference",
      date: "July 2020",
      link: "https://www.youtube.com/watch?v=YdCH6614qt0",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Portfolio
        </motion.h1>

        {/* Courses Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-2"
                    >
                      Watch Course <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Tutorials</h2>
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
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                        {tutorial.description && (
                          <CardDescription>{tutorial.description}</CardDescription>
                        )}
                      </CardHeader>
                      <CardContent>
                        <a
                          href={tutorial.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-2"
                        >
                          Watch Tutorial <ExternalLink className="h-4 w-4" />
                        </a>
                      </CardContent>
                    </Card>
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
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <a
                          href={tutorial.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-2"
                        >
                          Read Tutorial <ExternalLink className="h-4 w-4" />
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Speaking Engagements Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">Speaking Engagements and Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakingEngagements.map((engagement) => (
              <motion.div
                key={engagement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{engagement.title}</CardTitle>
                    <CardDescription>
                      {engagement.event} - {engagement.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={engagement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-2"
                    >
                      Watch Presentation <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;