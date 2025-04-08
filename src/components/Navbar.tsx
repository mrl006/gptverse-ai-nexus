
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Orbit, Globe, BrainCircuit, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-2 backdrop-blur-xl bg-[#040812]/90 border-b border-[#0ef34b]/10' 
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
          className="md:hidden text-white hover:text-[#0ef34b] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu with alien tech styling */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full backdrop-blur-xl bg-[#040812]/95 border-b border-[#0ef34b]/20 py-4 animate-fade-in shadow-lg">
          <div className="container px-4 flex flex-col space-y-4">
            <a href="#overview" className="text-white/70 hover:text-[#0ef34b] py-2 transition-colors flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              <Orbit size={16} /> Overview
            </a>
            <a href="#features" className="text-white/70 hover:text-[#0ef34b] py-2 transition-colors flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              <Zap size={16} /> Features
            </a>
            <a href="#roadmap" className="text-white/70 hover:text-[#0ef34b] py-2 transition-colors flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              <Globe size={16} /> Roadmap
            </a>
            <a href="#faq" className="text-white/70 hover:text-[#0ef34b] py-2 transition-colors flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              <BrainCircuit size={16} /> FAQ
            </a>
            
            <Button className="rounded-full bg-[#0ef34b] hover:brightness-110 text-black w-full font-mono">
              Access Portal <ArrowRight className="ml-1" size={16} />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
