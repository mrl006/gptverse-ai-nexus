
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const faqItems = [
    {
      question: "What is GptVerse?",
      answer: "GPTVerse is a multi-platform AI hub and metaverse ecosystem that integrates advanced AI models with web3 technologies. It offers a suite of AI tools, applications, and services powered by the $GPTV token."
    },
    {
      question: "How can I access GptVerse?",
      answer: "GPTVerse is accessible through multiple platforms including our web application, VR environments, WebGL interface, and dedicated Windows application. You can create an account and start exploring our tools immediately after registration."
    },
    {
      question: "What is the GPTV token?",
      answer: "GPTV is the utility token that powers the GPTVerse ecosystem. It provides holders with revenue sharing through staking, premium feature access, discounted services, and governance rights in our DAO."
    },
    {
      question: "What AI products are available on GptVerse?",
      answer: "Currently, we have several live products including our AI Language Tutor, Multi-PDF Chatbot, AI Persona creator, and AI Fitness Coach. More tools are being developed and will be released according to our roadmap."
    },
    {
      question: "Can I try out the AI products before purchasing?",
      answer: "Yes! GPTVerse offers a freemium model where you can access basic features without holding tokens. Premium features and higher usage limits are available to token holders and subscribers."
    },
    {
      question: "How can I acquire GPTV tokens?",
      answer: "GPTV tokens can be acquired through supported exchanges, participation in our staking program, contributing to the ecosystem, or earning rewards through our referral program."
    },
    {
      question: "Which AI products are available on GptVerse?",
      answer: "Our platform offers a wide range of AI tools including but not limited to AI chatbots, content generators, image creators, code assistants, voice synthesizers, and specialized industry tools. New products are continuously being added to our ecosystem."
    },
    {
      question: "Where can I find updates and news about GptVerse?",
      answer: "For the latest updates, follow our official channels on Telegram, Twitter, Discord, and GitHub. We also send regular newsletters to registered users with product updates and ecosystem news."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-alien-darker to-alien-dark opacity-90 z-0"></div>
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMCwxNzQsMjU1LDAuMDMpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMCwxNzQsMjU1LDAuMDMpIi8+PHBhdGggZD0iTTAgMHYxaDQwVjB6IiBmaWxsPSJyZ2JhKDAsMTc0LDI1NSwwLjAzKSIvPjxwYXRoIGQ9Ik0yMCAwdjQwaDFWMHoiIGZpbGw9InJnYmEoMCwxNzQsMjU1LDAuMDMpIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE0LDI0Myw3NSwwLjAyKSIvPjwvc3ZnPg==')] opacity-10 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-alien-neon/10 rounded-full filter blur-[80px] z-0"></div>
      <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-alien-blue/10 rounded-full filter blur-[80px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">FREQUENTLY</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-alien-neon via-alien-blue to-alien-cyan animate-text-gradient bg-[length:200%_auto]">
              ASKED QUESTIONS
            </span>
          </h2>
          <div className="h-1 w-36 mx-auto bg-gradient-to-r from-alien-neon/40 to-alien-blue/40 rounded-full my-4"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Find answers to the most common questions about GPTVerse and the $GPTV token
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="backdrop-blur-md bg-[#0c1632]/40 border border-white/5 hover:border-alien-neon/30 rounded-lg overflow-hidden transition-all">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`item-${index}`} className="border-0">
                      <AccordionTrigger className="p-5 text-left hover:no-underline data-[state=open]:text-alien-neon data-[state=open]:bg-[#0c1632]/60">
                        <span className="text-lg font-medium">{item.question}</span>
                        <ChevronDown className="h-5 w-5 shrink-0 text-alien-neon transition-transform duration-200" />
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-5 pt-2 text-white/70">
                        <div className="border-l-2 border-alien-neon/50 pl-4">
                          {item.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
