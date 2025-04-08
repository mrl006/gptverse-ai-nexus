
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
  ShieldCheck,
  Lightbulb,
  Atom,
  Braces,
  Sparkles,
  Database,
  PlugZap
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const AboutGPTVerse = () => {
  const [activeTab, setActiveTab] = useState("vision");
  
  useEffect(() => {
    // Animation timing for glow effects
    const interval = setInterval(() => {
      const glowElements = document.querySelectorAll('.animate-glow-pulse');
      glowElements.forEach(el => {
        el.classList.toggle('glow-active');
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
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

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Enhanced background with parallax glowing effects */}
      <div className="absolute inset-0 z-0">
        {/* Robot image as background with improved scaling */}
        <div className="absolute inset-0 flex items-center justify-center opacity-25">
          <motion.img 
            src="/lovable-uploads/15aafb16-40a1-4864-9b57-c1508ab7f71e.png" 
            alt="AI Robot" 
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1 }}
            animate={{ 
              scale: [1, 1.02, 1],
              filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Enhanced dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040812]/95 via-[#040812]/80 to-[#040812]/90"></div>
        
        {/* Enhanced tech pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
        <div className="absolute inset-0 bg-noise"></div>
        
        {/* Enhanced tech grid lines with animation */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMykiLz48cGF0aCBkPSJNMTAgMGgxdjQwSDEweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMykiLz48cGF0aCBkPSJNMjAgMGgxdjQwSDIweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMykiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMykiLz48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDMpIi8+PHBhdGggZD0iTTAgMTB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDMpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDMpIi8+PHBhdGggZD0iTTAgMzB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDMpIi8+PC9zdmc+')] opacity-30 animate-pulse-slow" style={{animationDuration: '15s'}}></div>
        
        {/* Enhanced animated glowing elements with better positioning */}
        <motion.div 
          className="absolute top-1/4 left-1/5 w-[400px] h-[400px] rounded-full bg-[#0ef34b]/8 blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
            filter: ["blur(120px)", "blur(150px)", "blur(120px)"]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00aeff]/5 blur-[150px]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            filter: ["blur(150px)", "blur(180px)", "blur(150px)"]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        ></motion.div>
        
        <motion.div 
          className="absolute top-2/3 left-1/2 w-[300px] h-[300px] rounded-full bg-[#d946ef]/6 blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            filter: ["blur(100px)", "blur(130px)", "blur(100px)"]
          }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        ></motion.div>
        
        {/* Circuit paths animation in background */}
        <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M0,100 Q200,50 400,200 T800,300" 
            stroke="#0ef34b" 
            strokeWidth="0.5" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
          />
          <motion.path 
            d="M300,0 Q400,150 200,300 T400,600" 
            stroke="#00aeff" 
            strokeWidth="0.5" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "loop", repeatDelay: 0.5, delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header section with futuristic design */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 relative inline-block">
            <motion.span 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="absolute -top-2 -left-6 w-5 h-5 border-t-2 border-l-2 border-[#0ef34b]/50"></span>
              <span className="text-[#0ef34b] relative">
                ABOUT
                <motion.span 
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#0ef34b]"
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.span>
              </span>
            </motion.span>
            <span className="text-white mx-2">THE</span>
            <motion.span 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-[#00aeff]">GPTVERSE</span>
              <span className="absolute -bottom-2 -right-6 w-5 h-5 border-b-2 border-r-2 border-[#00aeff]/50"></span>
              <motion.span 
                className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-[#00aeff]"
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              ></motion.span>
            </motion.span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative mt-6">
              <motion.div 
                className="absolute -top-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  backgroundImage: [
                    "linear-gradient(to right, transparent, rgba(14,243,75,0.2), transparent)",
                    "linear-gradient(to right, transparent, rgba(14,243,75,0.4), transparent)",
                    "linear-gradient(to right, transparent, rgba(14,243,75,0.2), transparent)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              
              <motion.p 
                className="text-[#0ef34b]/70 text-sm md:text-base font-mono uppercase tracking-wider"
                animate={{ 
                  color: [
                    "rgba(14,243,75,0.7)", 
                    "rgba(0,174,255,0.7)", 
                    "rgba(14,243,75,0.7)"
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                EXPLORE THE FUTURE OF AI TECHNOLOGY
              </motion.p>
              
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00aeff]/20 to-transparent"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  backgroundImage: [
                    "linear-gradient(to right, transparent, rgba(0,174,255,0.2), transparent)",
                    "linear-gradient(to right, transparent, rgba(0,174,255,0.4), transparent)",
                    "linear-gradient(to right, transparent, rgba(0,174,255,0.2), transparent)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              ></motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main content with enhanced glassmorphism effects */}
        <motion.div 
          className="glass-card backdrop-blur-2xl bg-[#040812]/30 border border-white/10 rounded-2xl overflow-hidden p-6 md:p-8 shadow-[0_0_30px_rgba(14,243,75,0.15)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ 
            boxShadow: "0 0 40px rgba(14,243,75,0.2)",
            borderColor: "rgba(255,255,255,0.15)"
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Enhanced Animated Robot Visual */}
            <motion.div 
              className="lg:col-span-5 flex items-center justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative max-w-md w-full mx-auto">
                {/* Enhanced animated backdrop glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/15 via-[#00aeff]/10 to-transparent rounded-3xl blur-2xl"
                  animate={{ 
                    opacity: [0.6, 1, 0.6], 
                    scale: [0.95, 1.05, 0.95],
                    filter: ["blur(20px)", "blur(30px)", "blur(20px)"]
                  }}
                  transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                ></motion.div>
                
                {/* Main image with enhanced tech frame */}
                <motion.div 
                  className="relative glass-card p-6 rounded-2xl border border-[#0ef34b]/30 overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {/* Enhanced glowing gradient overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/15 to-transparent opacity-40"
                    animate={{ 
                      opacity: [0.4, 0.7, 0.4],
                      backgroundImage: [
                        "linear-gradient(to bottom right, rgba(14,243,75,0.15), transparent)",
                        "linear-gradient(to bottom right, rgba(14,243,75,0.25), rgba(0,174,255,0.1), transparent)",
                        "linear-gradient(to bottom right, rgba(14,243,75,0.15), transparent)"
                      ]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                  ></motion.div>
                  
                  {/* Enhanced circuit lines overlay with animation */}
                  <motion.div 
                    className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0wIDAgTDQwIDQwIiBzdHJva2U9InJnYmEoMTQsIDI0MywgNzUsIDAuMikiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgICA8cGF0aCBkPSJNNDAgMCBMMCA0MCIgc3Ryb2tlPSJyZ2JhKDE0LCAyNDMsIDc1LCAwLjIpIiBzdHJva2Utd2lkdGg9IjAuNSIvPgogIDwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+Cjwvc3ZnPg==')] opacity-30"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                  ></motion.div>
                  
                  {/* Enhanced robot image with better animation */}
                  <motion.img 
                    src="/lovable-uploads/059db707-9bc8-433a-a146-097b5b44f53a.png" 
                    alt="AI Robot" 
                    className="w-full mx-auto relative z-10"
                    initial={{ scale: 1 }}
                    animate={{ 
                      scale: [1, 1.03, 1],
                      y: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      repeatType: "reverse", 
                      ease: "easeInOut" 
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      filter: "brightness(1.1)" 
                    }}
                  />
                  
                  {/* Enhanced animated tech elements */}
                  <motion.div 
                    className="absolute -top-2 -right-2 w-4 h-4 bg-[#0ef34b] rounded-full shadow-[0_0_10px_rgba(14,243,75,0.8)]"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                      boxShadow: [
                        "0 0 10px rgba(14,243,75,0.8)",
                        "0 0 20px rgba(14,243,75,1)",
                        "0 0 10px rgba(14,243,75,0.8)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  ></motion.div>
                  
                  <motion.div 
                    className="absolute top-1/4 -left-1 w-3 h-3 bg-[#00aeff] rounded-full shadow-[0_0_8px_rgba(0,174,255,0.8)]"
                    animate={{ 
                      scale: [1, 1.4, 1],
                      opacity: [0.7, 1, 0.7],
                      boxShadow: [
                        "0 0 8px rgba(0,174,255,0.8)",
                        "0 0 15px rgba(0,174,255,1)",
                        "0 0 8px rgba(0,174,255,0.8)"
                      ]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.7 }}
                  ></motion.div>
                  
                  <motion.div 
                    className="absolute bottom-1/3 -right-1 w-3 h-3 bg-[#d946ef] rounded-full shadow-[0_0_8px_rgba(217,70,239,0.8)]"
                    animate={{ 
                      scale: [1, 1.4, 1],
                      opacity: [0.7, 1, 0.7],
                      boxShadow: [
                        "0 0 8px rgba(217,70,239,0.8)",
                        "0 0 15px rgba(217,70,239,1)",
                        "0 0 8px rgba(217,70,239,0.8)"
                      ]
                    }}
                    transition={{ duration: 3.2, repeat: Infinity, delay: 1.5 }}
                  ></motion.div>
                  
                  {/* Enhanced data visualization points with improved animations */}
                  <motion.div 
                    className="absolute right-6 top-10 w-1.5 h-1.5 bg-[#0ef34b] rounded-full"
                    animate={{ 
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                      boxShadow: [
                        "0 0 0px rgba(14,243,75,0)",
                        "0 0 10px rgba(14,243,75,0.8)",
                        "0 0 0px rgba(14,243,75,0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  ></motion.div>
                  
                  <motion.div 
                    className="absolute right-10 top-16 w-1.5 h-1.5 bg-[#0ef34b] rounded-full"
                    animate={{ 
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                      boxShadow: [
                        "0 0 0px rgba(14,243,75,0)",
                        "0 0 10px rgba(14,243,75,0.8)",
                        "0 0 0px rgba(14,243,75,0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.7 }}
                  ></motion.div>
                  
                  <motion.div 
                    className="absolute right-14 top-28 w-1.5 h-1.5 bg-[#00aeff] rounded-full"
                    animate={{ 
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                      boxShadow: [
                        "0 0 0px rgba(0,174,255,0)",
                        "0 0 10px rgba(0,174,255,0.8)",
                        "0 0 0px rgba(0,174,255,0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2.1 }}
                  ></motion.div>
                  
                  {/* Add animated scan line effect */}
                  <motion.div 
                    className="absolute left-0 right-0 top-0 h-[2px] bg-[#0ef34b]/50"
                    animate={{ 
                      top: ["0%", "100%", "0%"],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                </motion.div>
                
                {/* Enhanced circuit board pattern under the robot */}
                <motion.div 
                  className="absolute inset-x-8 bottom-0 h-16 bg-[#0ef34b]/8 rounded-t-lg -z-10 blur-sm"
                  animate={{ 
                    opacity: [0.5, 0.8, 0.5],
                    height: ["60px", "70px", "60px"]
                  }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                >
                  <motion.div 
                    className="h-full w-full opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9ImNpcmN1aXQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0xMCAxMCBMMTAgMzAgTDMwIDMwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTQsIDI0MywgNzUsIDAuNikiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgICAgIDxwYXRoIGQ9Ik0zMCAzMCBMNTAgMzAgTDUwIDUwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTQsIDI0MywgNzUsIDAuNikiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjIiIGZpbGw9InJnYmEoMTQsIDI0MywgNzUsIDAuNikiLz4KICAgICAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0icmdiYSgxNCwgMjQzLCA3NSwgMC42KSIvPgogICAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIyIiBmaWxsPSJyZ2JhKDE0LCAyNDMsIDc1LCAwLjYpIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjY2lyY3VpdCkiLz4KPC9zdmc+')]"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  ></motion.div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right Column - Enhanced Tabs with Information */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Tabs defaultValue="vision" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="mb-8 w-full bg-black/20 backdrop-blur-lg border border-white/10 rounded-lg p-1 flex justify-between">
                  <TabsTrigger 
                    value="vision" 
                    className={`relative px-6 py-3 data-[state=active]:bg-black/30 data-[state=active]:backdrop-blur-xl ${activeTab === "vision" ? "text-[#0ef34b]" : "text-white/60"}`}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="p-1.5 rounded-full bg-black/30 border border-white/10"
                        whileHover={{ scale: 1.1, borderColor: "rgba(14, 243, 75, 0.5)" }}
                        animate={activeTab === "vision" ? {
                          borderColor: ["rgba(14, 243, 75, 0.3)", "rgba(14, 243, 75, 0.6)", "rgba(14, 243, 75, 0.3)"],
                          boxShadow: [
                            "0 0 5px rgba(14, 243, 75, 0.2)",
                            "0 0 10px rgba(14, 243, 75, 0.4)",
                            "0 0 5px rgba(14, 243, 75, 0.2)"
                          ]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Lightbulb className={`w-5 h-5 ${activeTab === "vision" ? "text-[#0ef34b]" : "text-white/60"}`} />
                      </motion.div>
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
                    className={`relative px-6 py-3 data-[state=active]:bg-black/30 data-[state=active]:backdrop-blur-xl ${activeTab === "features" ? "text-[#00aeff]" : "text-white/60"}`}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="p-1.5 rounded-full bg-black/30 border border-white/10"
                        whileHover={{ scale: 1.1, borderColor: "rgba(0, 174, 255, 0.5)" }}
                        animate={activeTab === "features" ? {
                          borderColor: ["rgba(0, 174, 255, 0.3)", "rgba(0, 174, 255, 0.6)", "rgba(0, 174, 255, 0.3)"],
                          boxShadow: [
                            "0 0 5px rgba(0, 174, 255, 0.2)",
                            "0 0 10px rgba(0, 174, 255, 0.4)",
                            "0 0 5px rgba(0, 174, 255, 0.2)"
                          ]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Atom className={`w-5 h-5 ${activeTab === "features" ? "text-[#00aeff]" : "text-white/60"}`} />
                      </motion.div>
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
                    className={`relative px-6 py-3 data-[state=active]:bg-black/30 data-[state=active]:backdrop-blur-xl ${activeTab === "ecosystem" ? "text-[#d946ef]" : "text-white/60"}`}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="p-1.5 rounded-full bg-black/30 border border-white/10"
                        whileHover={{ scale: 1.1, borderColor: "rgba(217, 70, 239, 0.5)" }}
                        animate={activeTab === "ecosystem" ? {
                          borderColor: ["rgba(217, 70, 239, 0.3)", "rgba(217, 70, 239, 0.6)", "rgba(217, 70, 239, 0.3)"],
                          boxShadow: [
                            "0 0 5px rgba(217, 70, 239, 0.2)",
                            "0 0 10px rgba(217, 70, 239, 0.4)",
                            "0 0 5px rgba(217, 70, 239, 0.2)"
                          ]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles className={`w-5 h-5 ${activeTab === "ecosystem" ? "text-[#d946ef]" : "text-white/60"}`} />
                      </motion.div>
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
                
                <div className="h-[460px] overflow-y-auto pr-4 scrollbar-thin glass-card rounded-xl p-6 border border-white/10 backdrop-blur-2xl">
                  <TabsContent value="vision" className="mt-0 data-[state=active]:animate-fade-in">
                    <AnimatePresence mode="wait">
                      {activeTab === "vision" && (
                        <motion.div 
                          variants={tabContentVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
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
                            <motion.div 
                              className="flex items-start gap-3"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <motion.div 
                                className="tech-icon-primary p-3 rounded-lg backdrop-blur-xl bg-black/40 border border-[#0ef34b]/20"
                                whileHover={{ scale: 1.1 }}
                                animate={{ 
                                  borderColor: ["rgba(14, 243, 75, 0.2)", "rgba(14, 243, 75, 0.4)", "rgba(14, 243, 75, 0.2)"],
                                  boxShadow: [
                                    "0 0 5px rgba(14, 243, 75, 0.1)",
                                    "0 0 15px rgba(14, 243, 75, 0.3)",
                                    "0 0 5px rgba(14, 243, 75, 0.1)"
                                  ]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                              >
                                <BrainCircuit className="w-5 h-5 text-[#0ef34b]" />
                              </motion.div>
                              <div>
                                <h4 className="font-semibold text-white">Decentralized AI Infrastructure</h4>
                                <p className="text-white/70 text-sm">Building the backbone for next-generation AI applications without centralized control</p>
                              </div>
                            </motion.div>
                            
                            <motion.div 
                              className="flex items-start gap-3"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <motion.div 
                                className="tech-icon-primary p-3 rounded-lg backdrop-blur-xl bg-black/40 border border-[#0ef34b]/20"
                                whileHover={{ scale: 1.1 }}
                                animate={{ 
                                  borderColor: ["rgba(14, 243, 75, 0.2)", "rgba(14, 243, 75, 0.4)", "rgba(14, 243, 75, 0.2)"],
                                  boxShadow: [
                                    "0 0 5px rgba(14, 243, 75, 0.1)",
                                    "0 0 15px rgba(14, 243, 75, 0.3)",
                                    "0 0 5px rgba(14, 243, 75, 0.1)"
                                  ]
                                }}
                                transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                              >
                                <Database className="w-5 h-5 text-[#0ef34b]" />
                              </motion.div>
                              <div>
                                <h4 className="font-semibold text-white">Multichain Compatibility</h4>
                                <p className="text-white/70 text-sm">Seamless integration across multiple blockchain networks for maximum reach and utility</p>
                              </div>
                            </motion.div>
                            
                            <motion.div 
                              className="flex items-start gap-3"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <motion.div 
                                className="tech-icon-primary p-3 rounded-lg backdrop-blur-xl bg-black/40 border border-[#0ef34b]/20"
                                whileHover={{ scale: 1.1 }}
                                animate={{ 
                                  borderColor: ["rgba(14, 243, 75, 0.2)", "rgba(14, 243, 75, 0.4)", "rgba(14, 243, 75, 0.2)"],
                                  boxShadow: [
                                    "0 0 5px rgba(14, 243, 75, 0.1)",
                                    "0 0 15px rgba(14, 243, 75, 0.3)",
                                    "0 0 5px rgba(14, 243, 75, 0.1)"
                                  ]
                                }}
                                transition={{ duration: 3, delay: 1, repeat: Infinity }}
                              >
                                <PlugZap className="w-5 h-5 text-[#0ef34b]" />
                              </motion.div>
                              <div>
                                <h4 className="font-semibold text-white">AI-Powered DApps Ecosystem</h4>
                                <p className="text-white/70 text-sm">A complete suite of applications leveraging artificial intelligence for unprecedented capabilities</p>
                              </div>
                            </motion.div>
                          </div>
                          
                          <div className="pt-4">
                            <div className="flex flex-wrap gap-3 mt-4">
                              <motion.button 
                                className="px-4 py-2 bg-gradient-to-r from-[#0ef34b] to-[#00aeff] rounded-lg text-black font-medium text-sm transition hover:brightness-110 flex items-center gap-1.5"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(14, 243, 75, 0.3)" }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              >
                                <Rocket className="h-4 w-4" />
                                <span>Join GPTVerse</span>
                              </motion.button>
                              
                              <motion.button 
                                className="px-4 py-2 bg-transparent border border-[#0ef34b]/50 rounded-lg text-white font-medium text-sm transition hover:bg-[#0ef34b]/10 flex items-center gap-1.5"
                                whileHover={{ scale: 1.05, borderColor: "rgba(14, 243, 75, 0.8)" }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              >
                                <ExternalLink className="h-4 w-4" />
                                <span>Whitepaper</span>
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </TabsContent>
                  
                  <TabsContent value="features" className="mt-0 data-[state=active]:animate-fade-in">
                    <AnimatePresence mode="wait">
                      {activeTab === "features" && (
                        <motion.div
                          variants={tabContentVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
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
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                              >
                                <Card className="glass-card overflow-hidden border-white/10 bg-black/20 backdrop-blur-xl hover:border-[#00aeff]/30 transition-all duration-300">
                                  <CardContent className="p-4">
                                    <div className="flex items-center gap-4">
                                      <motion.div 
                                        className="tech-icon-secondary p-3 rounded-lg backdrop-blur-xl bg-black/40 border border-[#00aeff]/20"
                                        whileHover={{ scale: 1.1 }}
                                        animate={{ 
                                          borderColor: ["rgba(0, 174, 255, 0.2)", "rgba(0, 174, 255, 0.4)", "rgba(0, 174, 255, 0.2)"],
                                          boxShadow: [
                                            "0 0 5px rgba(0, 174, 255, 0.1)",
                                            "0 0 15px rgba(0, 174, 255, 0.3)",
                                            "0 0 5px rgba(0, 174, 255, 0.1)"
                                          ]
                                        }}
                                        transition={{ duration: 3, delay: index * 0.5, repeat: Infinity }}
                                      >
                                        {feature.icon}
                                      </motion.div>
                                      
                                      <div>
                                        <h4 className="font-semibold text-white">{feature.title}</h4>
                                        <p className="text-white/70 text-sm">{feature.description}</p>
                                      </div>
                                      
                                      <motion.div 
                                        className="ml-auto"
                                        whileHover={{ scale: 1.2, x: 2 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                      >
                                        <ChevronRight className="w-5 h-5 text-[#00aeff]/70" />
                                      </motion.div>
                                    </div>
                                  </CardContent>
                                </Card>
                              </motion.div>
                            ))}
                          </div>
                          
                          <motion.div 
                            className="mt-6 p-4 glass-card border border-[#00aeff]/20 rounded-lg backdrop-blur-xl bg-black/20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ 
                              borderColor: "rgba(0, 174, 255, 0.4)",
                              boxShadow: "0 0 20px rgba(0, 174, 255, 0.2)"
                            }}
                          >
                            <h4 className="font-semibold text-center text-[#00aeff] mb-3">Technology Stack</h4>
                            <div className="grid grid-cols-3 gap-2 text-center">
                              {["Neural Networks", "Blockchain", "Smart Contracts", "NLP", "Computer Vision", "Multichain"].map((tech, index) => (
                                <motion.div 
                                  key={index}
                                  className="p-2 bg-[#06101a]/60 rounded-lg text-xs border border-[#00aeff]/10 hover:border-[#00aeff]/30 transition-all duration-300"
                                  whileHover={{ 
                                    scale: 1.05, 
                                    borderColor: "rgba(0, 174, 255, 0.5)",
                                    boxShadow: "0 0 10px rgba(0, 174, 255, 0.2)"
                                  }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                >
                                  {tech}
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </TabsContent>
                  
                  <TabsContent value="ecosystem" className="mt-0 data-[state=active]:animate-fade-in">
                    <AnimatePresence mode="wait">
                      {activeTab === "ecosystem" && (
                        <motion.div
                          variants={tabContentVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          <h3 className="text-2xl font-bold text-[#d946ef] mb-6">
                            Explore The Ecosystem
                          </h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {ecosystemCards.map((card, index) => (
                              <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.15 }}
                              >
                                <motion.div 
                                  className="glass-card p-5 border border-white/10 backdrop-blur-xl bg-black/20 rounded-xl relative overflow-hidden group"
                                  whileHover={{ 
                                    scale: 1.02,
                                    borderColor: "rgba(217, 70, 239, 0.3)",
                                    boxShadow: "0 0 20px rgba(217, 70, 239, 0.2)"
                                  }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                >
                                  <motion.div 
                                    className="absolute inset-0 bg-gradient-to-br from-[#d946ef]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    animate={{ 
                                      background: [
                                        "radial-gradient(circle at 30% 30%, rgba(217, 70, 239, 0.1) 0%, transparent 70%)",
                                        "radial-gradient(circle at 70% 70%, rgba(217, 70, 239, 0.1) 0%, transparent 70%)",
                                        "radial-gradient(circle at 30% 30%, rgba(217, 70, 239, 0.1) 0%, transparent 70%)"
                                      ]
                                    }}
                                    transition={{ duration: 8, repeat: Infinity }}
                                  ></motion.div>
                                  
                                  <div className="flex flex-col items-center text-center gap-3 relative z-10">
                                    <motion.div 
                                      className="tech-icon-tertiary p-3 rounded-lg backdrop-blur-xl bg-black/40 border border-[#d946ef]/20"
                                      whileHover={{ scale: 1.1, rotate: 5 }}
                                      transition={{ type: "spring", stiffness: 200 }}
                                      animate={{ 
                                        borderColor: ["rgba(217, 70, 239, 0.2)", "rgba(217, 70, 239, 0.4)", "rgba(217, 70, 239, 0.2)"],
                                        boxShadow: [
                                          "0 0 5px rgba(217, 70, 239, 0.1)",
                                          "0 0 15px rgba(217, 70, 239, 0.3)",
                                          "0 0 5px rgba(217, 70, 239, 0.1)"
                                        ]
                                      }}
                                      transition={{ duration: 3, delay: index * 0.5, repeat: Infinity }}
                                    >
                                      {card.icon}
                                    </motion.div>
                                    
                                    <div>
                                      <h4 className="text-lg font-semibold text-white mb-1">{card.title}</h4>
                                      <p className="text-white/70 text-sm">{card.description}</p>
                                    </div>
                                  </div>
                                </motion.div>
                              </motion.div>
                            ))}
                          </div>
                          
                          <motion.div 
                            className="glass-card p-5 border border-[#d946ef]/20 rounded-xl backdrop-blur-xl bg-black/20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            whileHover={{ 
                              borderColor: "rgba(217, 70, 239, 0.4)",
                              boxShadow: "0 0 20px rgba(217, 70, 239, 0.2)"
                            }}
                          >
                            <h4 className="font-semibold text-center text-[#d946ef] mb-3">Upcoming Releases</h4>
                            <ul className="space-y-2">
                              {[
                                "GPTVerse NFT Marketplace - Q3 2025",
                                "Cross-chain AI Bridge - Q4 2025",
                                "AI-Enhanced DAO Governance - Q1 2026"
                              ].map((item, index) => (
                                <motion.li 
                                  key={index}
                                  className="flex items-center gap-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                                  whileHover={{ x: 3 }}
                                >
                                  <motion.div 
                                    className="w-2 h-2 rounded-full bg-[#d946ef]"
                                    animate={{ 
                                      scale: [1, 1.5, 1],
                                      opacity: [0.7, 1, 0.7],
                                      boxShadow: [
                                        "0 0 0px rgba(217, 70, 239, 0.5)",
                                        "0 0 5px rgba(217, 70, 239, 0.8)",
                                        "0 0 0px rgba(217, 70, 239, 0.5)"
                                      ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                  ></motion.div>
                                  <span className="text-sm">{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                            
                            <div className="mt-4 flex justify-center">
                              <motion.button 
                                className="px-4 py-2 bg-gradient-to-r from-[#d946ef] to-[#00aeff] rounded-lg text-black font-medium text-sm transition hover:brightness-110"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(217, 70, 239, 0.3)" }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              >
                                View Full Roadmap
                              </motion.button>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </TabsContent>
                </div>
              </Tabs>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutGPTVerse;
