
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
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
        ? 'py-3 backdrop-blur-xl bg-black/80 shadow-lg' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold">
            D
          </div>
          <span className="text-xl md:text-2xl font-bold text-white">dora</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="backdrop-blur-md bg-[#13131f]/60 border border-white/10 rounded-full flex items-center">
            <a href="#overview" className="text-white/80 hover:text-white px-6 py-2 transition-colors">
              Overview
            </a>
            <a href="#features" className="text-white/80 hover:text-white px-6 py-2 transition-colors">
              Features
            </a>
            <a href="#roadmap" className="text-white/80 hover:text-white px-6 py-2 transition-colors">
              Roadmap
            </a>
            <a href="#faq" className="text-white/80 hover:text-white px-6 py-2 transition-colors">
              FAQ
            </a>
            <a href="#about" className="text-white/80 hover:text-white px-6 py-2 transition-colors">
              About Dora
            </a>
          </div>
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:flex">
          <Button className="rounded-full bg-gradient-to-r from-orange-600 to-orange-500 hover:opacity-90 text-white">
            Get Started <ArrowRight className="ml-1" size={16} />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full backdrop-blur-xl bg-black/95 border-b border-white/10 py-4 animate-fade-in shadow-lg">
          <div className="container px-4 flex flex-col space-y-4">
            <a href="#overview" className="text-white/80 hover:text-white py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Overview</a>
            <a href="#features" className="text-white/80 hover:text-white py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#roadmap" className="text-white/80 hover:text-white py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Roadmap</a>
            <a href="#faq" className="text-white/80 hover:text-white py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
            <a href="#about" className="text-white/80 hover:text-white py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About Dora</a>
            
            <Button className="rounded-full bg-gradient-to-r from-orange-600 to-orange-500 hover:opacity-90 text-white w-full">
              Get Started <ArrowRight className="ml-1" size={16} />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
