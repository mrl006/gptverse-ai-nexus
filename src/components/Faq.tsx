
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Faq = () => {
  const faqItems = [
    {
      question: "What is GPTVerse?",
      answer: "GPTVerse is a cutting-edge multi-platform that leverages AI technology to provide unique Dapp and metaverse experiences. It offers a range of AI-powered tools, products and services."
    },
    {
      question: "How can I access GPTVerse?",
      answer: "You can access GPTVerse through our user-friendly Dapp at https://hub.gptverse.art/ and metaverse at https://multiverse.gptverse.art/. Simply visit the websites and explore the diverse range of AI-powered products and features available."
    },
    {
      question: "What is the GPTV token?",
      answer: "The GPTV token is our native utility token that powers the GPTVerse ecosystem. It provides holders with sharing GPTVerse revenues by staking, access to exclusive features, discounts, governance participation, and more."
    },
    {
      question: "Which AI products are available on GPTVerse?",
      answer: "GPTVerse offers an array of AI products, including chatbots, language tutors, pdf chatbot, design generators, and more. These products are designed to enhance various aspects of your digital experience."
    },
    {
      question: "Can I try out the AI products before purchasing?",
      answer: "Yes, you can! We offer \"Try in Web App\" and \"Try in GPTVerse\" features for many of our AI products. This allows you to experience their capabilities before making a decision."
    },
    {
      question: "How can I acquire GPTV tokens?",
      answer: "GPTV tokens can be acquired through our upcoming token sale events. Stay tuned to our official channels for announcements regarding token sale dates."
    },
    {
      question: "Where can I find updates and news about GPTVerse?",
      answer: "Stay updated with the latest news, announcements, and developments by following us on our official social media channels and visiting our website."
    }
  ];

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040812] to-[#06101a] opacity-95 z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMTAgMGgxdjQwSDEweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMjAgMGgxdjQwSDIweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMTB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMzB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PC9zdmc+')] opacity-30 z-0"></div>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(14,243,75,0.15)_0%,transparent_50%)] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* FAQ Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#0ef34b] uppercase tracking-wider text-sm font-mono mb-3">FAQ</h2>
          <h3 className="heading-gradient text-4xl md:text-5xl font-bold mb-6">Got questions?</h3>
          <p className="text-3xl md:text-4xl font-bold mb-8">Join the community.</p>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Our Discord community and staff are here to help!<br />
            Your feedback will help GPTVerse AI improve in future versions.
          </p>
          
          <Button className="bg-[#040812]/60 hover:bg-[#040812]/80 text-white border border-[#0ef34b]/30 rounded-lg px-6 py-2 shadow-[0_0_15px_rgba(14,243,75,0.2)] group transition-all duration-300 backdrop-blur-md">
            <span className="mr-2">Join Discord</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="backdrop-blur-md bg-[#040812]/40 border border-[#0ef34b]/20 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(14,243,75,0.05)]"
              >
                <AccordionTrigger 
                  className="px-6 py-4 text-left hover:no-underline hover:bg-[#0ef34b]/5 transition-colors data-[state=open]:text-[#0ef34b]"
                >
                  <span className="text-lg font-medium">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-white/70">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
