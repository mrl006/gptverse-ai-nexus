import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Orbit, Globe, BrainCircuit, Zap, BookOpen, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isMobile } = useIsMobile();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen
        ? 'py-2 backdrop-blur-xl bg-[#040812]/90 border-b border-[#087E8B]/20 shadow-lg' 
        : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden">
            <img 
              src="/lovable-uploads/e322c390-0e26-442f-90b3-bc13622b55e6.png" 
              alt="GPTVerse Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl md:text-2xl font-bold text-white font-sans tracking-wider relative">
            GPTVerse
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#087E8B] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </span>
        </a>
        
        <nav className="hidden md:flex items-center">
          <div className="bg-[#06101a]/70 backdrop-blur-md border border-[#087E8B]/20 rounded-full flex items-center">
            <a href="#overview" className="text-white/80 hover:text-[#0CF574] px-5 py-2 transition-colors flex items-center gap-2">
              <Orbit size={16} /> Overview
            </a>
            <a href="#products" className="text-white/80 hover:text-[#0CF574] px-5 py-2 transition-colors flex items-center gap-2">
              <BookOpen size={16} /> Products
            </a>
            <a href="#features" className="text-white/80 hover:text-[#0CF574] px-5 py-2 transition-colors flex items-center gap-2">
              <Zap size={16} /> Features
            </a>
            <a href="#roadmap" className="text-white/80 hover:text-[#0CF574] px-5 py-2 transition-colors flex items-center gap-2">
              <Globe size={16} /> Roadmap
            </a>
            <a href="#faq" className="text-white/80 hover:text-[#0CF574] px-5 py-2 transition-colors flex items-center gap-2">
              <BrainCircuit size={16} /> FAQ
            </a>
          </div>
        </nav>

        <div className="hidden md:flex">
          <Button className="rounded-full bg-gradient-to-r from-[#0B3954] to-[#087E8B] hover:brightness-110 text-white font-sans shadow-md border border-[#087E8B]/30">
            Enterprise Portal <ArrowRight className="ml-1" size={16} />
          </Button>
        </div>

        <button 
          className="md:hidden text-white hover:text-[#0CF574] transition-colors p-1 bg-[#06101a]/40 rounded-lg backdrop-blur-md border border-[#087E8B]/20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[56px] left-0 w-full backdrop-blur-xl bg-[#040812]/98 z-50 border-b border-[#087E8B]/20 overflow-hidden"
          >
            <div className="container px-4 pt-6 pb-24 flex flex-col">
              <div className="space-y-6">
                <div className="bg-[#087E8B]/5 p-4 rounded-xl border border-[#087E8B]/20 mb-8">
                  <h2 className="font-sans text-[#0CF574] mb-3 text-sm uppercase tracking-widest">Enterprise Menu</h2>
                  <div className="grid grid-cols-1 gap-3">
                    <a 
                      href="#overview" 
                      className="flex items-center gap-3 bg-[#06101a]/50 p-4 rounded-lg border border-[#087E8B]/10 hover:border-[#087E8B]/30 transition-all" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="bg-[#087E8B]/10 p-2 rounded-lg">
                        <Orbit size={20} className="text-[#0CF574]" />
                      </div>
                      <span className="text-white font-medium">Overview</span>
                    </a>
                    
                    <a 
                      href="#products" 
                      className="flex items-center gap-3 bg-[#06101a]/50 p-4 rounded-lg border border-[#087E8B]/10 hover:border-[#087E8B]/30 transition-all" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="bg-[#087E8B]/10 p-2 rounded-lg">
                        <BookOpen size={20} className="text-[#0CF574]" />
                      </div>
                      <span className="text-white font-medium">Products</span>
                    </a>
                    
                    <a 
                      href="#features" 
                      className="flex items-center gap-3 bg-[#06101a]/50 p-4 rounded-lg border border-[#087E8B]/10 hover:border-[#087E8B]/30 transition-all" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="bg-[#087E8B]/10 p-2 rounded-lg">
                        <Zap size={20} className="text-[#0CF574]" />
                      </div>
                      <span className="text-white font-medium">Features</span>
                    </a>
                    
                    <a 
                      href="#roadmap" 
                      className="flex items-center gap-3 bg-[#06101a]/50 p-4 rounded-lg border border-[#087E8B]/10 hover:border-[#087E8B]/30 transition-all" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="bg-[#087E8B]/10 p-2 rounded-lg">
                        <Globe size={20} className="text-[#0CF574]" />
                      </div>
                      <span className="text-white font-medium">Roadmap</span>
                    </a>
                    
                    <a 
                      href="#faq" 
                      className="flex items-center gap-3 bg-[#06101a]/50 p-4 rounded-lg border border-[#087E8B]/10 hover:border-[#087E8B]/30 transition-all" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="bg-[#087E8B]/10 p-2 rounded-lg">
                        <BrainCircuit size={20} className="text-[#0CF574]" />
                      </div>
                      <span className="text-white font-medium">FAQ</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto pt-6 pb-6">
                <Button className="w-full py-6 rounded-xl bg-gradient-to-r from-[#0B3954] to-[#087E8B] hover:brightness-110 text-white font-sans text-lg border border-[#087E8B]/30 shadow-md">
                  Enterprise Portal <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
