
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
  const { isMobile } = useIsMobile();
  
  useEffect(() => {
    let isScrolling: ReturnType<typeof setTimeout>;
    const body = document.body;
    
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
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
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

  // Simplified animation variants for better mobile performance
  const sectionVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: isMobile ? 0.4 : 0.6 }
    }
  };

  return (
    <div className={`min-h-screen bg-[#040812] text-white relative`}>
      <GlassyBackground />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <div className="flex-grow">
          <Hero />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
            variants={sectionVariants}
          >
            <ProductView />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
            variants={sectionVariants}
          >
            <AiServices />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
            variants={sectionVariants}
          >
            <AboutGPTVerse />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
            variants={sectionVariants}
          >
            <Tokenomics />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
            variants={sectionVariants}
          >
            <Roadmap />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
            variants={sectionVariants}
          >
            <Partners />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
            variants={sectionVariants}
          >
            <Faq />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
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
