
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductView from '../components/ProductView';
import AiServices from '../components/AiServices';
import Footer from '../components/Footer';
import AboutGPTVerse from '../components/AboutGPTVerse';
import Tokenomics from '../components/Tokenomics';
import Roadmap from '../components/Roadmap';
import Faq from '../components/Faq';
import Partners from '../components/Partners';
import ContactGPTVerse from '../components/ContactGPTVerse';
import { useIsMobile } from '@/hooks/use-mobile';
import { Toaster } from '@/components/ui/toaster';
import { motion } from 'framer-motion';

const Index = () => {
  const { isMobile } = useIsMobile();
  
  useEffect(() => {
    // Improved scroll performance by preventing painting during scroll
    let isScrolling: ReturnType<typeof setTimeout>;
    const body = document.body;
    
    window.scrollTo(0, 0);
    
    // Add smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          const navbarHeight = 80; // Adjusted for more accurate navbar height
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    // Optimize for mobile performance
    if (isMobile) {
      const handleScrollStart = () => {
        clearTimeout(isScrolling);
        body.classList.add('is-scrolling');
      };
      
      const handleScrollEnd = () => {
        isScrolling = setTimeout(() => {
          body.classList.remove('is-scrolling');
        }, 100);
      };
      
      window.addEventListener('scroll', handleScrollStart, { passive: true });
      window.addEventListener('scroll', handleScrollEnd, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', handleScrollStart);
        window.removeEventListener('scroll', handleScrollEnd);
        document.removeEventListener('click', handleAnchorClick);
        clearTimeout(isScrolling);
      }
    }
    
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [isMobile]);

  // Define common section fade-in animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className={`min-h-screen bg-[#040812] text-white ${isMobile ? '' : 'overflow-x-hidden'}`}>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSg4LDEyNiwxMzksMC4wMikiLz48cGF0aCBkPSJNMTAgMGgxdjQwSDEweiIgZmlsbD0icmdiYSg4LDEyNiwxMzksMC4wMikiLz48cGF0aCBkPSJNMjAgMGgxdjQwSDIweiIgZmlsbD0icmdiYSg4LDEyNiwxMzksMC4wMikiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSg4LDEyNiwxMzksMC4wMikiLz48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoOCwxMjYsMTM5LDAuMDIpIi8+PHBhdGggZD0iTTAgMTB2MWg0MHYtMXoiIGZpbGw9InJnYmEoOCwxMjYsMTM5LDAuMDIpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoOCwxMjYsMTM5LDAuMDIpIi8+PHBhdGggZD0iTTAgMzB2MWg0MHYtMXoiIGZpbGw9InJnYmEoOCwxMjYsMTM5LDAuMDIpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-[#087E8B] rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-[25%] left-[40%] w-1 h-1 bg-[#0CF574] rounded-full opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-[70%] left-[20%] w-1 h-1 bg-[#0B3954] rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-[30%] right-[25%] w-1 h-1 bg-[#087E8B] rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-[60%] right-[10%] w-1 h-1 bg-[#0CF574] rounded-full opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        <div className="absolute h-full w-full opacity-10">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(ellipse_at_center,rgba(8,126,139,0.1)_0%,rgba(8,126,139,0)_70%)] animate-pulse-slow" style={{transformOrigin: '30% 30%'}}></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(ellipse_at_center,rgba(12,245,116,0.1)_0%,rgba(12,245,116,0)_70%)] animate-pulse-slow" style={{transformOrigin: '70% 60%', animationDelay: '2s'}}></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(ellipse_at_center,rgba(11,57,84,0.05)_0%,rgba(11,57,84,0)_70%)] animate-pulse-slow" style={{transformOrigin: '50% 50%', animationDelay: '4s'}}></div>
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <div className="flex-grow">
          <Hero />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <ProductView />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <AiServices />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <AboutGPTVerse />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <Tokenomics />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <Roadmap />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <Partners />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <Faq />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <ContactGPTVerse />
          </motion.div>
          
          <div id="overview" className="section-anchor pt-20"></div>
          <div id="features" className="section-anchor pt-20"></div>
          <div id="roadmap" className="section-anchor pt-20"></div>
          <div id="faq" className="section-anchor pt-20"></div>
        </div>
        
        <Footer />
      </div>
      
      <Toaster />
    </div>
  );
};

export default Index;
