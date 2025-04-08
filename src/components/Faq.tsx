
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Sparkles, HelpCircle, Zap, Circle, MessageCircle, Lightbulb, Hexagon, AtSign, Atom } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", label: "All Questions", icon: <HelpCircle className="w-4 h-4" /> },
    { id: "platform", label: "Platform", icon: <Hexagon className="w-4 h-4" /> },
    { id: "token", label: "GPTV Token", icon: <Circle className="w-4 h-4" /> },
    { id: "products", label: "AI Products", icon: <Atom className="w-4 h-4" /> },
    { id: "access", label: "Access", icon: <AtSign className="w-4 h-4" /> },
  ];
  
  const faqItems = [
    {
      question: "What is GptVerse?",
      answer: "GPTVerse is a multi-platform AI hub and metaverse ecosystem that integrates advanced AI models with web3 technologies. It offers a suite of AI tools, applications, and services powered by the $GPTV token.",
      category: "platform",
      icon: <Hexagon className="text-alien-neon" />
    },
    {
      question: "How can I access GptVerse?",
      answer: "GPTVerse is accessible through multiple platforms including our web application, VR environments, WebGL interface, and dedicated Windows application. You can create an account and start exploring our tools immediately after registration.",
      category: "access",
      icon: <AtSign className="text-alien-blue" />
    },
    {
      question: "What is the GPTV token?",
      answer: "GPTV is the utility token that powers the GPTVerse ecosystem. It provides holders with revenue sharing through staking, premium feature access, discounted services, and governance rights in our DAO.",
      category: "token",
      icon: <Circle className="text-alien-magenta" />
    },
    {
      question: "What AI products are available on GptVerse?",
      answer: "Currently, we have several live products including our AI Language Tutor, Multi-PDF Chatbot, AI Persona creator, and AI Fitness Coach. More tools are being developed and will be released according to our roadmap.",
      category: "products",
      icon: <Atom className="text-alien-cyan" />
    },
    {
      question: "Can I try out the AI products before purchasing?",
      answer: "Yes! GPTVerse offers a freemium model where you can access basic features without holding tokens. Premium features and higher usage limits are available to token holders and subscribers.",
      category: "access",
      icon: <AtSign className="text-alien-blue" />
    },
    {
      question: "How can I acquire GPTV tokens?",
      answer: "GPTV tokens can be acquired through supported exchanges, participation in our staking program, contributing to the ecosystem, or earning rewards through our referral program.",
      category: "token",
      icon: <Circle className="text-alien-magenta" />
    },
    {
      question: "Which AI products are available on GptVerse?",
      answer: "Our platform offers a wide range of AI tools including but not limited to AI chatbots, content generators, image creators, code assistants, voice synthesizers, and specialized industry tools. New products are continuously being added to our ecosystem.",
      category: "products",
      icon: <Atom className="text-alien-cyan" />
    },
    {
      question: "Where can I find updates and news about GptVerse?",
      answer: "For the latest updates, follow our official channels on Telegram, Twitter, Discord, and GitHub. We also send regular newsletters to registered users with product updates and ecosystem news.",
      category: "platform",
      icon: <Hexagon className="text-alien-neon" />
    }
  ];

  const filteredFaqs = activeCategory === "all" 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-alien-darker to-alien-dark opacity-90 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMCwxNzQsMjU1LDAuMDMpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMCwxNzQsMjU1LDAuMDMpIi8+PHBhdGggZD0iTTAgMHYxaDQwVjB6IiBmaWxsPSJyZ2JhKDAsMTc0LDI1NSwwLjAzKSIvPjxwYXRoIGQ9Ik0yMCAwdjQwaDFWMHoiIGZpbGw9InJnYmEoMCwxNzQsMjU1LDAuMDMpIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE0LDI0Myw3NSwwLjAyKSIvPjwvc3ZnPg==')] opacity-10 z-0"></div>
      
      {/* Animated glowing orbs */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-alien-neon/10 rounded-full filter blur-[80px] animate-pulse-slow z-0"></div>
      <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-alien-blue/10 rounded-full filter blur-[80px] animate-pulse-slow z-0" style={{ animationDelay: '3s' }}></div>
      <div className="absolute left-1/3 bottom-0 w-32 h-32 bg-alien-magenta/10 rounded-full filter blur-[60px] animate-pulse-slow z-0" style={{ animationDelay: '5s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 rounded-full bg-alien-neon/30 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center mb-4">
            <div className="w-12 h-1 bg-alien-neon rounded-full"></div>
            <Sparkles className="mx-4 text-alien-neon animate-pulse-slow" />
            <div className="w-12 h-1 bg-alien-neon rounded-full"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-alien-neon via-alien-blue to-alien-cyan animate-text-gradient bg-[length:200%_auto]">
              QUANTUM INTELLIGENCE HUB
            </span>
            <div className="absolute -top-3 -right-6">
              <Badge className="bg-alien-neon/20 text-alien-neon border-alien-neon/40 px-2 py-0.5 text-xs font-mono">
                FAQs
              </Badge>
            </div>
          </h2>
          
          <div className="h-1 w-36 mx-auto bg-gradient-to-r from-alien-neon/40 to-alien-blue/40 rounded-full my-4"></div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white/70 max-w-2xl mx-auto relative"
          >
            <span className="relative z-10">Explore our knowledge nexus for answers about the GPTVerse ecosystem and the future of AI</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-alien-neon/5 to-transparent rounded-lg blur-xl"></span>
          </motion.p>
        </motion.div>
        
        {/* Category filtering tabs */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                  activeCategory === category.id
                    ? "border-alien-neon bg-alien-neon/10 text-alien-neon shadow-[0_0_10px_rgba(14,243,75,0.2)]"
                    : "border-white/10 bg-black/20 text-white/60 hover:bg-black/30 hover:border-white/20"
                }`}
              >
                {category.icon}
                <span className="text-sm font-medium">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid gap-4">
            {filteredFaqs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="absolute -left-4 top-5 opacity-80">{item.icon}</div>
                
                <Card className="border-0 backdrop-blur-md bg-[#0c1632]/40 border border-white/5 hover:border-alien-neon/30 rounded-lg overflow-hidden transition-all shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`item-${index}`} className="border-0">
                        <AccordionTrigger className="p-5 text-left hover:no-underline data-[state=open]:text-alien-neon data-[state=open]:bg-[#0c1632]/60 group">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-medium group-data-[state=open]:text-alien-neon transition-colors">
                              {item.question}
                            </span>
                          </div>
                          
                          <div className="relative">
                            <Zap className="h-5 w-5 shrink-0 text-alien-neon transition-transform duration-200" />
                            <div className="absolute inset-0 bg-alien-neon/20 rounded-full blur-md opacity-0 group-data-[state=open]:opacity-70 transition-opacity"></div>
                          </div>
                        </AccordionTrigger>
                        
                        <AccordionContent className="overflow-hidden transition-all data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                          <div className="p-5 pt-0">
                            <div className="border-l-2 border-alien-neon/50 pl-4 relative">
                              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-alien-dark border-2 border-alien-neon/30"></div>
                              <p className="text-white/70">{item.answer}</p>
                              <div className="absolute -left-[11px] bottom-0 w-5 h-5 rounded-full bg-alien-dark border-2 border-alien-neon/30"></div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
                
                {/* Connector line */}
                <div className="absolute -left-2 top-12 bottom-0 w-px bg-gradient-to-b from-alien-neon/30 to-transparent"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative footer element */}
        <div className="flex justify-center mt-16">
          <div className="w-16 h-16 relative">
            <div className="absolute inset-0 bg-alien-neon/10 rounded-full animate-pulse-slow"></div>
            <div className="absolute inset-2 bg-alien-neon/5 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute inset-4 bg-alien-neon/5 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            <MessageCircle className="absolute inset-0 m-auto text-alien-neon/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
