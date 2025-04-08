
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Orbit, Globe, BrainCircuit, Zap, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen
        ? 'py-2 backdrop-blur-xl bg-[#040812]/90 border-b border-[#0ef34b]/10 shadow-lg' 
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
          <span className="text-xl md:text-2xl font-bold text-white font-mono tracking-wider relative">
            GPTVerse
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#0ef34b] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="bg-[#06101a]/70 backdrop-blur-md border border-[#0ef34b]/10 rounded-full flex items-center">
            <a href="#overview" className="text-white/70 hover:text-[#0ef34b] px-6 py-2 transition-colors flex items-center gap-2">
              <Orbit size={14} /> Overview
            </a>
            <a href="#products" className="text-white/70 hover:text-[#0ef34b] px-6 py-2 transition-colors flex items-center gap-2">
              <BookOpen size={14} /> Products
            </a>
            <a href="#features" className="text-white/70 hover:text-[#0ef34b] px-6 py-2 transition-colors flex items-center gap-2">
              <Zap size={14} /> Features
            </a>
            <a href="#roadmap" className="text-white/70 hover:text-[#0ef34b] px-6 py-2 transition-colors flex items-center gap-2">
              <Globe size={14} /> Roadmap
            </a>
            <a href="#faq" className="text-white/70 hover:text-[#0ef34b] px-6 py-2 transition-colors flex items-center gap-2">
              <BrainCircuit size={14} /> FAQ
            </a>
          </div>
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:flex">
          <Button className="rounded-full bg-[#0ef34b] hover:brightness-110 text-black font-mono">
            Access Portal <ArrowRight className="ml-1" size={16} />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white hover:text-[#0ef34b] transition-colors p-1 bg-[#06101a]/40 rounded-lg backdrop-blur-md border border-[#0ef34b]/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu with enhanced styling */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[56px] left-0 w-full h-[calc(100vh-56px)] backdrop-blur-xl bg-[#040812]/98 z-50 border-b border-[#0ef34b]/20 animate-fade-in overflow-y-auto">
          <div className="container px-4 pt-6 pb-24 flex flex-col h-full">
            <div className="space-y-6">
              <div className="bg-[#0ef34b]/5 p-4 rounded-xl border border-[#0ef34b]/20 mb-8">
                <h2 className="font-mono text-[#0ef34b] mb-1 text-sm uppercase tracking-widest">Navigation</h2>
                <div className="grid grid-cols-1 gap-4">
                  <a 
                    href="#overview" 
                    className="flex items-center gap-3 bg-[#06101a]/50 p-4 rounded-lg border border-[#0ef34b]/10 hover:border-[#0ef34b]/30 transition-all" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="bg-[#0ef34b]/10 p-2 rounded-lg">
                      <Orbit size={20} className="text-[#0ef34b]" />
                    </div>
                    <span className="text-white font-medium">Overview</span>
                  </a>
                  
                  <a 
                    href="#products" 
                    className="flex items-center gap-3 bg-[#06101a]/50 p-4 rounded-lg border border-[#0ef34b]/10 hover:border-[#0ef34b]/30 transition-all" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="bg-[#0ef34b]/10 p-2 rounded-lg">
                      <BookOpen size={20} className="text-[#0ef34b]" />
                    </div>
                    <span className="text-white font-medium">Products</span>
                  </a>
                  
                  <a 
                    href="#features" 
                    className="flex items-center gap-3 bg-[#06101a]/50 p-4 rounded-lg border border-[#0ef34b]/10 hover:border-[#0ef34b]/30 transition-all" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="bg-[#0ef34b]/10 p-2 rounded-lg">
                      <Zap size={20} className="text-[#0ef34b]" />
                    </div>
                    <span className="text-white font-medium">Features</span>
                  </a>
                  
                  <a 
                    href="#roadmap" 
                    className="flex items-center gap-3 bg-[#06101a]/50 p-4 rounded-lg border border-[#0ef34b]/10 hover:border-[#0ef34b]/30 transition-all" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="bg-[#0ef34b]/10 p-2 rounded-lg">
                      <Globe size={20} className="text-[#0ef34b]" />
                    </div>
                    <span className="text-white font-medium">Roadmap</span>
                  </a>
                  
                  <a 
                    href="#faq" 
                    className="flex items-center gap-3 bg-[#06101a]/50 p-4 rounded-lg border border-[#0ef34b]/10 hover:border-[#0ef34b]/30 transition-all" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="bg-[#0ef34b]/10 p-2 rounded-lg">
                      <BrainCircuit size={20} className="text-[#0ef34b]" />
                    </div>
                    <span className="text-white font-medium">FAQ</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-6 pb-6">
              <Button className="w-full py-6 rounded-xl bg-gradient-to-r from-[#0ef34b] to-[#0ef34b]/80 hover:brightness-110 text-black font-mono text-lg">
                Access Portal <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
