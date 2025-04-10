import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Rocket, 
  BrainCircuit, 
  Code, 
  Network, 
  ExternalLink, 
  Layers3, 
  BarChart4, 
  Star,
  ChevronRight,
  CheckCircle,
  Zap,
  Sparkles,
  Atom,
  Infinity,
  Cloud
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const AboutGPTVerse = () => {
  const [activeTab, setActiveTab] = useState("vision");
  const [activeIcon, setActiveIcon] = useState(0);
  
  // Auto rotate through icons
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % animatedIcons.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Animated icons with color variants
  const animatedIcons = [
    { icon: <Atom className="h-12 w-12" />, color: "#0ef34b" },
    { icon: <BrainCircuit className="h-12 w-12" />, color: "#00aeff" },
    { icon: <Globe className="h-12 w-12" />, color: "#d946ef" },
    { icon: <Rocket className="h-12 w-12" />, color: "#0ef34b" },
    { icon: <Infinity className="h-12 w-12" />, color: "#00aeff" },
    { icon: <Cloud className="h-12 w-12" />, color: "#d946ef" },
  ];
  
  const features = [
    {
      icon: <Globe className="text-[#0ef34b] h-7 w-7" />,
      title: "AI Hub & Multi-Platform Gateway",
      description: "Your central gateway to next-level Dapps and AI-powered experiences"
    },
    {
      icon: <Network className="text-[#00aeff] h-7 w-7" />,
      title: "Multichain Architecture",
      description: "First published on BNB Chain, now expanding across multiple blockchains"
    },
    {
      icon: <BrainCircuit className="text-[#d946ef] h-7 w-7" />,
      title: "Veteran Engineering Team",
      description: "Backed by developers with 20+ years of industry experience"
    },
    {
      icon: <Rocket className="text-[#0ef34b] h-7 w-7" />,
      title: "MVP-Ready Products",
      description: "Launch-ready AI solutions delivering immediate value"
    },
    {
      icon: <Layers3 className="text-[#00aeff] h-7 w-7" />,
      title: "Robust Product Roadmap",
      description: "Strategic vision for continuous innovation and growth"
    },
    {
      icon: <BarChart4 className="text-[#d946ef] h-7 w-7" />,
      title: "Advanced Tokenomics",
      description: "Sustainable economic model designed for long-term value"
    }
  ];

  const ecosystemCards = [
    {
      icon: <Star className="h-12 w-12 text-[#0ef34b]" />,
      title: "Design & NFTs",
      description: "Create stunning visual assets as NFTs using AI-powered design algorithms"
    },
    {
      icon: <Code className="h-12 w-12 text-[#00aeff]" />,
      title: "AI Education Hub",
      description: "Interactive learning experiences with courses tailored to your unique needs"
    },
    {
      icon: <BarChart4 className="h-12 w-12 text-[#d946ef]" />,
      title: "Trading Solutions",
      description: "AI-powered trading tools with real-time signals and comprehensive analytics"
    }
  ];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };
  
  // Floating icon animation
  const floatAnimation = {
    y: [0, -10, 0],
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 bg-[#040812] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,243,75,0.03)_0%,transparent_70%)]"></div>
        <div className="absolute w-full h-full opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMTAgMGgxdjQwSDEweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMjAgMGgxdjQwSDIweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMTB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMzB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PC9zdmc+')] opacity-20"></div>
        </div>
        
        {/* Enhanced animated glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0ef34b]/5 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#0ef34b]/3 rounded-full blur-[80px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        
        {/* New animated constellation lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ef34b" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00aeff" stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <g filter="url(#glow)">
            <path 
              d="M100,100 L300,150 L500,80 L700,200" 
              stroke="url(#grad1)" 
              strokeWidth="1.5" 
              fill="none"
              className="animate-pulse-slow"
            />
            <path 
              d="M200,500 L400,450 L600,520 L800,400" 
              stroke="url(#grad1)" 
              strokeWidth="1.5" 
              fill="none"
              className="animate-pulse-slow"
              style={{animationDelay: '1s'}}
            />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced header with animated decorations */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated floating icons ring */}
          <div className="relative h-24 mb-6">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-[#0ef34b]/10"></div>
            
            {animatedIcons.map((iconData, index) => (
              <motion.div 
                key={index}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={floatAnimation}
                style={{ 
                  x: Math.sin(index * (Math.PI * 2 / animatedIcons.length)) * 70,
                  y: Math.cos(index * (Math.PI * 2 / animatedIcons.length)) * 70,
                  zIndex: activeIcon === index ? 10 : 1,
                  filter: activeIcon === index ? 'drop-shadow(0 0 8px ' + iconData.color + ')' : 'none',
                  opacity: activeIcon === index ? 1 : 0.5,
                  color: iconData.color,
                  scale: activeIcon === index ? 1.2 : 1,
                  rotate: index * 30,
                  transition: { duration: 0.5 }
                }}
              >
                {iconData.icon}
              </motion.div>
            ))}
            
            {/* Central animated icon with special effects */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIcon}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center" 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-[#040812]/80 p-4 rounded-full border border-[#0ef34b]/30 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full animate-pulse" style={{ 
                    boxShadow: `0 0 20px ${animatedIcons[activeIcon].color}`, 
                    opacity: 0.5 
                  }}></div>
                  <div style={{ color: animatedIcons[activeIcon].color }}>
                    {animatedIcons[activeIcon].icon}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-3 relative inline-block">
            <span className="relative">
              <span className="absolute -top-2 -left-6 w-5 h-5 border-t-2 border-l-2 border-[#0ef34b]/50"></span>
              <span className="text-[#0ef34b]">ABOUT</span>
            </span>
            <span className="text-white mx-2">THE</span>
            <span className="relative">
              <span className="text-[#00aeff]">GPTVERSE</span>
              <span className="absolute -bottom-2 -right-6 w-5 h-5 border-b-2 border-r-2 border-[#00aeff]/50"></span>
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative mt-6">
              <div className="absolute -top-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"></div>
              <p className="text-[#0ef34b]/70 text-sm md:text-base font-mono uppercase tracking-wider">
                EXPLORE THE FUTURE OF AI TECHNOLOGY
              </p>
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00aeff]/20 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* New hexagonal grid layout with animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Content blocks with hexagonal style */}
          {[
            { 
              title: "The Vision", 
              icon: <Sparkles className="h-8 w-8 text-[#0ef34b]" />,
              description: "Pioneering the future of AI and blockchain integration", 
              color: "#0ef34b"
            },
            { 
              title: "The Tech", 
              icon: <Atom className="h-8 w-8 text-[#00aeff]" />, 
              description: "Cutting-edge neural networks with blockchain security",
              color: "#00aeff"
            },
            { 
              title: "The Ecosystem", 
              icon: <Globe className="h-8 w-8 text-[#d946ef]" />, 
              description: "A thriving community of developers and users",
              color: "#d946ef"
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative">
                {/* Hexagonal shape with clip path */}
                <div className="clip-hexagon relative bg-gradient-to-br from-[#06101a] to-black border border-white/5 p-8">
                  <div className="absolute inset-0 clip-hexagon bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundImage: `linear-gradient(to bottom right, ${item.color}20, transparent)` }}></div>
                  
                  {/* Content */}
                  <div className="flex flex-col items-center text-center z-10 relative">
                    <motion.div 
                      className="mb-4 p-3 rounded-full bg-[#06101a] border"
                      style={{ borderColor: `${item.color}40` }}
                      animate={floatAnimation}
                    >
                      {item.icon}
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-2" style={{ color: item.color }}>{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                    
                    <motion.div 
                      className="mt-4 flex gap-1 items-center text-sm font-medium cursor-pointer"
                      whileHover={{ x: 5 }}
                      style={{ color: item.color }}
                    >
                      <span>Learn more</span>
                      <ChevronRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </div>
                
                {/* Glowing dots for decoration */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color, filter: `drop-shadow(0 0 8px ${item.color})` }}></div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color, filter: `drop-shadow(0 0 8px ${item.color})` }}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced split layout with selectable tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Left Side - AI Robot Image with enhanced Animated Effects */}
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/10 via-[#00aeff]/5 to-transparent rounded-3xl blur-2xl"></div>
              
              {/* Main image with animated elements */}
              <div className="relative glass-card p-8 rounded-2xl border border-[#0ef34b]/20 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                {/* Circular animation around the robot */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="150" fill="none" stroke="#0ef34b" strokeWidth="0.5" strokeDasharray="5,5" className="animate-spin-slow" style={{transformOrigin: 'center'}} />
                    <circle cx="200" cy="200" r="180" fill="none" stroke="#00aeff" strokeWidth="0.5" strokeDasharray="8,8" className="animate-reverse-spin" style={{transformOrigin: 'center'}} />
                  </svg>
                </div>
                
                <motion.img 
                  src="/lovable-uploads/059db707-9bc8-433a-a146-097b5b44f53a.png" 
                  alt="AI Robot" 
                  className="w-full mx-auto z-10 relative"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: [1, 1.03, 1],
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Interactive Data Points with motion */}
                <div className="absolute right-6 top-1/3 flex flex-col gap-3">
                  <motion.div 
                    className="p-2 glass-card flex gap-2 items-center rounded-lg border border-[#0ef34b]/20 text-sm group/item"
                    whileHover={{ x: -5, backgroundColor: 'rgba(14, 243, 75, 0.1)' }}
                  >
                    <Zap className="w-4 h-4 text-[#0ef34b]" />
                    <span>AI Power</span>
                  </motion.div>
                  <motion.div 
                    className="p-2 glass-card flex gap-2 items-center rounded-lg border border-[#00aeff]/20 text-sm group/item"
                    whileHover={{ x: -5, backgroundColor: 'rgba(0, 174, 255, 0.1)' }}
                    style={{animationDelay: '1s'}}
                  >
                    <Network className="w-4 h-4 text-[#00aeff]" />
                    <span>Multichain</span>
                  </motion.div>
                  <motion.div 
                    className="p-2 glass-card flex gap-2 items-center rounded-lg border border-[#d946ef]/20 text-sm group/item"
                    whileHover={{ x: -5, backgroundColor: 'rgba(217, 70, 239, 0.1)' }}
                    style={{animationDelay: '2s'}}
                  >
                    <CheckCircle className="w-4 h-4 text-[#d946ef]" />
                    <span>Verified</span>
                  </motion.div>
                </div>
                
                {/* Animated dots with enhanced motion */}
                <motion.div 
                  className="absolute -top-2 -right-2 w-3 h-3 bg-[#0ef34b] rounded-full"
                  animate={{ 
                    boxShadow: ['0 0 0px #0ef34b', '0 0 10px #0ef34b', '0 0 0px #0ef34b'] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute top-1/4 -left-1 w-2 h-2 bg-[#00aeff] rounded-full"
                  animate={{ 
                    boxShadow: ['0 0 0px #00aeff', '0 0 8px #00aeff', '0 0 0px #00aeff'] 
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                />
                <motion.div 
                  className="absolute bottom-1/3 -right-1 w-2 h-2 bg-[#d946ef] rounded-full"
                  animate={{ 
                    boxShadow: ['0 0 0px #d946ef', '0 0 8px #d946ef', '0 0 0px #d946ef'] 
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
              </div>
              
              {/* Stats under image with hover animations */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                <motion.div 
                  className="glass-card p-3 border border-[#0ef34b]/10 rounded-lg text-center"
                  whileHover={{ y: -5, backgroundColor: 'rgba(14, 243, 75, 0.05)' }}
                >
                  <div className="text-xl font-bold text-[#0ef34b]">100+</div>
                  <div className="text-xs opacity-70">AI Models</div>
                </motion.div>
                <motion.div 
                  className="glass-card p-3 border border-[#00aeff]/10 rounded-lg text-center"
                  whileHover={{ y: -5, backgroundColor: 'rgba(0, 174, 255, 0.05)' }}
                >
                  <div className="text-xl font-bold text-[#00aeff]">5</div>
                  <div className="text-xs opacity-70">Blockchains</div>
                </motion.div>
                <motion.div 
                  className="glass-card p-3 border border-[#d946ef]/10 rounded-lg text-center"
                  whileHover={{ y: -5, backgroundColor: 'rgba(217, 70, 239, 0.05)' }}
                >
                  <div className="text-xl font-bold text-[#d946ef]">20+</div>
                  <div className="text-xs opacity-70">Years Exp</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Side - Enhanced Tabs with Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="backdrop-blur-sm bg-black/10 rounded-xl border border-white/10 p-6"
          >
            <Tabs defaultValue="vision" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="mb-8 w-full bg-transparent border-b border-white/10 flex justify-between">
                <TabsTrigger 
                  value="vision" 
                  className={`relative px-6 py-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none ${activeTab === "vision" ? "text-[#0ef34b]" : "text-white/60"}`}
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className={`w-4 h-4 ${activeTab === "vision" ? "opacity-100" : "opacity-50"}`} />
                    <span>Our Vision</span>
                  </div>
                  {activeTab === "vision" && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0ef34b]"
                    />
                  )}
                </TabsTrigger>
                <TabsTrigger 
                  value="features" 
                  className={`relative px-6 py-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none ${activeTab === "features" ? "text-[#00aeff]" : "text-white/60"}`}
                >
                  <div className="flex items-center gap-2">
                    <Atom className={`w-4 h-4 ${activeTab === "features" ? "opacity-100" : "opacity-50"}`} />
                    <span>Key Features</span>
                  </div>
                  {activeTab === "features" && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00aeff]"
                    />
                  )}
                </TabsTrigger>
                <TabsTrigger 
                  value="ecosystem" 
                  className={`relative px-6 py-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none ${activeTab === "ecosystem" ? "text-[#d946ef]" : "text-white/60"}`}
                >
                  <div className="flex items-center gap-2">
                    <Globe className={`w-4 h-4 ${activeTab === "ecosystem" ? "opacity-100" : "opacity-50"}`} />
                    <span>Ecosystem</span>
                  </div>
                  {activeTab === "ecosystem" && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d946ef]"
                    />
                  )}
                </TabsTrigger>
              </TabsList>
              
              <div className="h-[460px] overflow-y-auto pr-4 scrollbar-thin">
                <AnimatePresence mode="wait">
                  <TabsContent value="vision" className="mt-0 data-[state=active]:animate-fade-in">
                    <motion.div 
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0ef34b] via-white to-[#00aeff] bg-clip-text text-transparent">
                        Your Gateway to the AI-Powered Universe
                      </h3>
                      
                      <p className="text-white/80 leading-relaxed">
                        GPTVerse stands at the frontier of innovation, bringing together cutting-edge AI 
                        technologies with blockchain to create a seamless multi-platform experience that 
                        transcends traditional boundaries.
                      </p>
                      
                      <div className="space-y-4">
                        {['Decentralized AI Infrastructure', 'Multichain Compatibility', 'AI-Powered DApps Ecosystem'].map((item, index) => (
                          <motion.div 
                            key={index} 
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                          >
                            <div className="p-2 rounded-full bg-[#06101a]/60 border border-[#0ef34b]/20">
                              <CheckCircle className="w-5 h-5 text-[#0ef34b]" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white">{item}</h4>
                              <p className="text-white/70 text-sm">Building the backbone for next-generation AI applications without centralized control</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="pt-4">
                        <div className="flex flex-wrap gap-3 mt-4">
                          <motion.button 
                            className="px-4 py-2 bg-gradient-to-r from-[#0ef34b] to-[#00aeff] rounded-lg text-black font-medium text-sm transition hover:brightness-110 flex items-center gap-1.5"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Rocket className="h-4 w-4" />
                            <span>Join GPTVerse</span>
                          </motion.button>
                          
                          <motion.button 
                            className="px-4 py-2 bg-transparent border border-[#0ef34b]/50 rounded-lg text-white font-medium text-sm transition hover:bg-[#0ef34b]/10 flex items-center gap-1.5"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span>Whitepaper</span>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>
                  
                  <TabsContent value="features" className="mt-0 data-[state=active]:animate-fade-in">
                    <motion.div
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <h3 className="text-2xl font-bold text-[#00aeff] mb-6">
                        Cutting-Edge Features
                      </h3>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Card className="glass-card overflow-hidden border-white/10 bg-transparent hover:border-[#00aeff]/30 transition-all duration-300">
                              <CardContent className="p-4">
                                <div className="flex items-center gap-4">
                                  <motion.div 
                                    className="p-3 bg-[#06101a]/60 rounded-lg border border-white/10"
                                    whileHover={{ rotate: 10 }}
                                  >
                                    {feature.icon}
                                  </motion.div>
                                  
                                  <div>
                                    <h4 className="font-semibold text-white">{feature.title}</h4>
                                    <p className="text-white/70 text-sm">{feature.description}</p>
                                  </div>
                                  
                                  <motion.div 
                                    className="ml-auto" 
                                    whileHover={{ x: 3 }}
                                  >
                                    <ChevronRight className="w-5 h-5 text-[#00aeff]/50" />
                                  </motion.div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                      
                      <motion.div 
                        className="mt-6 p-4 glass-card border border-[#00aeff]/20 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h4 className="font-semibold text-[#00aeff] mb-2">Technology Stack</h4>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          {['Neural Networks', 'Blockchain', 'Smart Contracts', 'NLP', 'Computer Vision', 'Multichain'].map((tech, index) => (
                            <motion.div 
                              key={index} 
                              className="p-2 bg-[#06101a]/60 rounded-lg text-xs"
                              whileHover={{ y: -2, backgroundColor: 'rgba(0, 174, 255, 0.1)' }}
                            >
                              {tech}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  </TabsContent>
                  
                  <TabsContent value="ecosystem" className="mt-0 data-[state=active]:animate-fade-in">
                    <motion.div
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <h3 className="text-2xl font-bold text-[#d946ef] mb-6">
                        Explore The Ecosystem
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {ecosystemCards.map((card, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card p-5 border border-white/10 rounded-xl relative overflow-hidden group hover:border-[#d946ef]/30 transition-all duration-300"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#d946ef]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <div className="flex flex-col items-center text-center gap-3 relative z-10">
                              <motion.div 
                                className="p-3 bg-[#06101a]/60 rounded-full border border-white/10"
                                animate={{
                                  rotate: [0, 5, 0, -5, 0],
                                  scale: [1, 1.05, 1]
                                }}
                                transition={{
                                  duration: 5,
                                  repeat: Infinity,
                                  delay: index
                                }}
                              >
                                {card.icon}
                              </motion.div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-1">{card.title}</h4>
                                <p className="text-white/70 text-sm">{card.description}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <motion.div 
                        className="glass-card p-5 border border-[#d946ef]/20 rounded-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h4 className="font-semibold text-center text-[#d946ef] mb-3">Upcoming Releases</h4>
                        <ul className="space-y-2">
                          {[
                            'GPTVerse NFT Marketplace - Q3 2025',
                            'Cross-chain AI Bridge - Q4 2025',
                            'AI-Enhanced DAO Governance - Q1 2026'
                          ].map((item, index) => (
                            <motion.li 
                              key={index} 
                              className="flex items-center gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.8 + (index * 0.1) }}
                            >
                              <div className="w-2 h-2 rounded-full bg-[#d946ef]"></div>
                              <span className="text-sm">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                        
                        <motion.div 
                          className="mt-4 flex justify-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <button className="px-4 py-2 bg-gradient-to-r from-[#d946ef] to-[#00aeff] rounded-lg text-black font-medium text-sm transition hover:brightness-110">
                            View Full Roadmap
                          </button>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </TabsContent>
                </AnimatePresence>
              </div>
            </Tabs>
          </motion.div>
        </div>

        {/* Added animated call to action section */}
        <motion.div 
          className="max-w-4xl mx-auto text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0ef34b]/5 via-[#00aeff]/5 to-[#d946ef]/5 blur-3xl opacity-30 rounded-3xl"></div>
          
          <div className="relative glass-card border border-white/10 rounded-2xl p-10">
            <motion.div 
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#0ef34b] to-[#00aeff] p-3 rounded-full"
              animate={{ 
                boxShadow: ['0 0 0px rgba(14,243,75,0.5)', '0 0 20px rgba(14,243,75,0.8)', '0 0 0px rgba(14,243,75,0.5)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Rocket className="h-6 w-6 text-black" />
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to join the GPTVerse?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">Experience the next generation of AI and blockchain technology. Join our community of innovators, developers, and visionaries.</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button 
                className="px-6 py-3 bg-gradient-to-r from-[#0ef34b] to-[#00aeff] rounded-lg text-black font-bold text-sm transition hover:brightness-110 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="h-5 w-5" />
                <span>Join Community</span>
              </motion.button>
              
              <motion.button 
                className="px-6 py-3 bg-transparent border border-[#00aeff]/50 rounded-lg text-white font-bold text-sm transition hover:bg-[#00aeff]/10 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="h-5 w-5" />
                <span>Developer Portal</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutGPTVerse;
