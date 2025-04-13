
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
import GlassyBackground from '../components/GlassyBackground';

const Index = () => {
  const { isMobile, isSmallMobile } = useIsMobile();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Remove any listeners that might affect scroll
    const cleanupListeners = () => {
      document.querySelectorAll('*').forEach(element => {
        // Fixed: using a more generic approach without specific properties
        const el = element as HTMLElement;
        if (el.onscroll) {
          el.onscroll = null;
        }
      });
    };
    
    // Simple anchor handling - no smooth scrolling on mobile
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          const navbarHeight = 70;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          
          // No smooth scrolling on mobile - instant for better performance
          window.scrollTo({
            top: targetPosition,
            behavior: 'auto'
          });
        }
      }
    };
    
    // Cleanup first
    cleanupListeners();
    
    // Then add simplified event listener
    document.addEventListener('click', handleAnchorClick, { passive: false });
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cleanupListeners();
    };
  }, [isMobile]);

  // Ultra-minimal animation for mobile
  const sectionVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#040812] text-white relative">
      <GlassyBackground />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <div className="flex-grow">
          <Hero />
          
          {/* Convert to regular divs on mobile for better performance */}
          {isMobile ? (
            <>
              <div><ProductView /></div>
              <div><AiServices /></div>
              <div><AboutGPTVerse /></div>
              <div><Tokenomics /></div>
              <div><Roadmap /></div>
              <div><Partners /></div>
              <div><Faq /></div>
              <div><ContactGPTVerse /></div>
            </>
          ) : (
            <>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={sectionVariants}
              >
                <ProductView />
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={sectionVariants}
              >
                <AiServices />
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={sectionVariants}
              >
                <AboutGPTVerse />
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={sectionVariants}
              >
                <Tokenomics />
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={sectionVariants}
              >
                <Roadmap />
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={sectionVariants}
              >
                <Partners />
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={sectionVariants}
              >
                <Faq />
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={sectionVariants}
              >
                <ContactGPTVerse />
              </motion.div>
            </>
          )}
          
          <div id="overview" className="section-anchor pt-16"></div>
          <div id="features" className="section-anchor pt-16"></div>
          <div id="roadmap" className="section-anchor pt-16"></div>
          <div id="faq" className="section-anchor pt-16"></div>
        </div>
        
        <Footer />
      </div>
      
      <Toaster />
    </div>
  );
};

export default Index;
