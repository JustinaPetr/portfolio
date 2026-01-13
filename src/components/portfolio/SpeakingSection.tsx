import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Presentation } from "lucide-react";

const speakingEngagements = [
  {
    title: "Stop RPC Downtime: How Lava Maintains 99% Uptime for Your Onchain App",
    event: "Eco Oncahin Event Series",
    date: "November 2025",
    link: "https://www.youtube.com/watch?v=eiiq6gAS1TA"
  },
  {
    title: "The Floor Is… Midnight x Lava: Exploring Privacy, Utility, and Community in Web3",
    event: "The Floor Is... event series",
    date: "September 2025",
    link: "https://youtube.com/live/XSXUA26cKK0"
  },
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

const SpeakingSection = () => (
  <section>
    <div className="flex items-center gap-2 justify-center mb-8">
      <Presentation className="h-8 w-8 text-primary" />
      <h2 className="text-3xl font-semibold">Speaking Engagements and Workshops</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {speakingEngagements.map((engagement) => (
        <motion.div
          key={engagement.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href={engagement.link} target="_blank" rel="noopener noreferrer">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">{engagement.title}</CardTitle>
                <CardDescription>
                  {engagement.event} - {engagement.date}
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SpeakingSection;
