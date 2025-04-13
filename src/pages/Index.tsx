
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
    
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          const navbarHeight = 80;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: isMobile ? 'auto' : 'smooth' // Use auto for mobile for better performance
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [isMobile]);

  // Super optimized animation variants for mobile
  const sectionVariants = {
    hidden: { opacity: 0, y: isSmallMobile ? 0 : (isMobile ? 3 : 15) },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: isSmallMobile ? 0.1 : (isMobile ? 0.2 : 0.4),
        ease: "easeOut"
      }
    }
  };

  // Minimize viewport margin for mobile to improve scrolling performance
  const viewportMargin = isSmallMobile ? "0px" : (isMobile ? "-5px" : "-40px");

  return (
    <div className="min-h-screen bg-[#040812] text-white relative">
      <GlassyBackground />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <div className="flex-grow">
          <Hero />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: viewportMargin }}
            variants={sectionVariants}
          >
            <ProductView />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: viewportMargin }}
            variants={sectionVariants}
          >
            <AiServices />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: viewportMargin }}
            variants={sectionVariants}
          >
            <AboutGPTVerse />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: viewportMargin }}
            variants={sectionVariants}
          >
            <Tokenomics />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: viewportMargin }}
            variants={sectionVariants}
          >
            <Roadmap />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: viewportMargin }}
            variants={sectionVariants}
          >
            <Partners />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: viewportMargin }}
            variants={sectionVariants}
          >
            <Faq />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: viewportMargin }}
            variants={sectionVariants}
          >
            <ContactGPTVerse />
          </motion.div>
          
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
