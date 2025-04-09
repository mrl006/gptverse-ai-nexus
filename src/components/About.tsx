
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Network, 
  BrainCircuit, 
  CheckCircle, 
  ExternalLink,
  Zap 
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const About = () => {
  const { isMobile } = useIsMobile();
  
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Subtle background with green glow */}
      <div className="absolute inset-0 bg-[#040812] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,243,75,0.03)_0%,transparent_70%)]"></div>
        <div className="absolute w-full h-full opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMTAgMGgxdjQwSDEweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMjAgMGgxdjQwSDIweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMTB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMzB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PC9zdmc+')] opacity-20"></div>
        </div>
        
        {/* Animated green glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#0ef34b]/5 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#0ef34b]/3 rounded-full blur-[80px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-1 h-1 rounded-full animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 15}s`,
              opacity: 0.4,
              background: Math.random() > 0.5 ? '#0ef34b' : '#00aeff',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with improved design */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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

        {/* Split layout with robot image and content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Side - AI Robot Image with Animated Effects */}
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
              <div className="relative backdrop-blur-md bg-[#040812]/40 p-8 rounded-2xl border border-[#0ef34b]/20 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                <img 
                  src="/lovable-uploads/059db707-9bc8-433a-a146-097b5b44f53a.png" 
                  alt="AI Robot" 
                  className="w-full mx-auto transform transition-all duration-700 hover:scale-105 z-10 relative"
                />
                
                {/* Floating Data Points */}
                <div className="absolute right-6 top-1/3 flex flex-col gap-3">
                  <div className="p-2 backdrop-blur-md bg-[#040812]/40 flex gap-2 items-center rounded-lg border border-[#0ef34b]/20 text-sm animate-pulse-slow">
                    <Zap className="w-4 h-4 text-[#0ef34b]" />
                    <span>AI Power</span>
                  </div>
                  <div className="p-2 backdrop-blur-md bg-[#040812]/40 flex gap-2 items-center rounded-lg border border-[#00aeff]/20 text-sm animate-pulse-slow" style={{animationDelay: '1s'}}>
                    <Network className="w-4 h-4 text-[#00aeff]" />
                    <span>Multichain</span>
                  </div>
                  <div className="p-2 backdrop-blur-md bg-[#040812]/40 flex gap-2 items-center rounded-lg border border-[#d946ef]/20 text-sm animate-pulse-slow" style={{animationDelay: '2s'}}>
                    <CheckCircle className="w-4 h-4 text-[#d946ef]" />
                    <span>Verified</span>
                  </div>
                </div>
                
                {/* Animated dots */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#0ef34b] rounded-full animate-pulse"></div>
                <div className="absolute top-1/4 -left-1 w-2 h-2 bg-[#00aeff] rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
                <div className="absolute bottom-1/3 -right-1 w-2 h-2 bg-[#d946ef] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>
              
              {/* Stats under image */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="backdrop-blur-md bg-[#040812]/40 p-3 border border-[#0ef34b]/10 rounded-lg text-center">
                  <div className="text-xl font-bold text-[#0ef34b]">100+</div>
                  <div className="text-xs opacity-70">AI Models</div>
                </div>
                <div className="backdrop-blur-md bg-[#040812]/40 p-3 border border-[#00aeff]/10 rounded-lg text-center">
                  <div className="text-xl font-bold text-[#00aeff]">5</div>
                  <div className="text-xs opacity-70">Blockchains</div>
                </div>
                <div className="backdrop-blur-md bg-[#040812]/40 p-3 border border-[#d946ef]/10 rounded-lg text-center">
                  <div className="text-xl font-bold text-[#d946ef]">20+</div>
                  <div className="text-xs opacity-70">Years Exp</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0ef34b] via-white to-[#00aeff] bg-clip-text text-transparent mb-6">
              Your Gateway to the AI-Powered Universe
            </h3>
            
            <p className="text-white/80 leading-relaxed mb-8">
              GPTVerse stands at the frontier of innovation, bringing together cutting-edge AI 
              technologies with blockchain to create a seamless multi-platform experience that 
              transcends traditional boundaries.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-[#06101a]/60 border border-[#0ef34b]/20">
                  <BrainCircuit className="w-5 h-5 text-[#0ef34b]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Decentralized AI Infrastructure</h4>
                  <p className="text-white/70 text-sm">Building the backbone for next-generation AI applications without centralized control</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-[#06101a]/60 border border-[#0ef34b]/20">
                  <Network className="w-5 h-5 text-[#0ef34b]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Multichain Compatibility</h4>
                  <p className="text-white/70 text-sm">Seamless integration across multiple blockchain networks for maximum reach and utility</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-[#06101a]/60 border border-[#0ef34b]/20">
                  <Globe className="w-5 h-5 text-[#0ef34b]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">AI-Powered DApps Ecosystem</h4>
                  <p className="text-white/70 text-sm">A complete suite of applications leveraging artificial intelligence for unprecedented capabilities</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="px-6 py-2 bg-gradient-to-r from-[#0ef34b] to-[#00aeff] rounded-lg text-black font-medium transition hover:brightness-110 flex items-center gap-1.5">
                <Zap className="h-4 w-4" />
                <span>Join GPTVerse</span>
              </Button>
              
              <Button variant="outline" className="px-6 py-2 bg-transparent border border-[#0ef34b]/50 rounded-lg text-white font-medium transition hover:bg-[#0ef34b]/10 flex items-center gap-1.5">
                <ExternalLink className="h-4 w-4" />
                <span>Whitepaper</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
