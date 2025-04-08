
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqItems = [
    {
      question: "What is GPTVerse?",
      answer: "GPTVerse is a multi-platform AI hub and metaverse ecosystem that integrates advanced AI models with web3 technologies. It offers a suite of AI tools, applications, and services powered by the $GPTV token."
    },
    {
      question: "How do I access it?",
      answer: "GPTVerse is accessible through multiple platforms including our web application, VR environments, WebGL interface, and dedicated Windows application. You can create an account and start exploring our tools immediately after registration."
    },
    {
      question: "What is the GPTV token?",
      answer: "GPTV is the utility token that powers the GPTVerse ecosystem. It provides holders with revenue sharing through staking, premium feature access, discounted services, and governance rights in our DAO."
    },
    {
      question: "Which products are live?",
      answer: "Currently, we have several live products including our AI Language Tutor, Multi-PDF Chatbot, AI Persona creator, and AI Fitness Coach. More tools are being developed and will be released according to our roadmap."
    },
    {
      question: "Can I try before I buy?",
      answer: "Yes! GPTVerse offers a freemium model where you can access basic features without holding tokens. Premium features and higher usage limits are available to token holders and subscribers."
    },
    {
      question: "How do I get GPTV?",
      answer: "GPTV tokens can be acquired through supported exchanges, participation in our staking program, contributing to the ecosystem, or earning rewards through our referral program."
    },
    {
      question: "Where do I find updates?",
      answer: "For the latest updates, follow our official channels on Telegram, Twitter, Discord, and GitHub. We also send regular newsletters to registered users with product updates and ecosystem news."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gptv-dark relative">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(14,243,75,0.15)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-animate">Frequently Asked Questions</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Find answers to the most common questions about GPTVerse and the $GPTV token.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 transition-colors">
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
