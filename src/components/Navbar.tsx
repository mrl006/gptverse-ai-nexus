
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-gptv-darker/80 backdrop-blur-lg' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-bold text-gradient-animate">GPTVerse</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#explore" className="text-white/80 hover:text-white transition-colors">Explore</a>
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#tokenomics" className="text-white/80 hover:text-white transition-colors">Tokenomics</a>
          <a href="#roadmap" className="text-white/80 hover:text-white transition-colors">Roadmap</a>
          <a href="#partners" className="text-white/80 hover:text-white transition-colors">Partners</a>
          <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-gptv-blue text-white hover:bg-gptv-blue/20">
            Login
          </Button>
          <Button className="bg-gradient-to-r from-gptv-blue to-gptv-teal hover:brightness-110 text-white">
            Get Started
          </Button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gptv-darker/95 backdrop-blur-lg py-4 animate-fade-in">
          <div className="container px-4 flex flex-col space-y-4">
            <a href="#explore" className="text-white/80 hover:text-white py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Explore</a>
            <a href="#features" className="text-white/80 hover:text-white py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#tokenomics" className="text-white/80 hover:text-white py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Tokenomics</a>
            <a href="#roadmap" className="text-white/80 hover:text-white py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Roadmap</a>
            <a href="#partners" className="text-white/80 hover:text-white py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Partners</a>
            <a href="#faq" className="text-white/80 hover:text-white py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
            
            <div className="flex flex-col space-y-3 pt-2">
              <Button variant="outline" className="border-gptv-blue text-white hover:bg-gptv-blue/20 w-full">
                Login
              </Button>
              <Button className="bg-gradient-to-r from-gptv-blue to-gptv-teal hover:brightness-110 text-white w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
