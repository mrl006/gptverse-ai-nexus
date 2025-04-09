
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#040812] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,243,75,0.15)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMTAgMGgxdjQwSDEweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMjAgMGgxdjQwSDIweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMTB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMzB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PC9zdmc+')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 text-center relative overflow-hidden glow">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0ef34b] via-[#00aeff] to-[#0ef34b]/50"></div>
          
          <h2 className="heading-gradient text-3xl md:text-4xl mb-4">
            ABOUT THE GPTVERSE
          </h2>
          
          <p className="text-xl text-white/80 mb-8">
            Embark on an extraordinary AI journey.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 mb-10 text-left">
            <div className="flex items-start">
              <CheckCircle2 className="text-[#0ef34b] mt-1 mr-2 flex-shrink-0" size={18} />
              <span>Your AI Hub and DApp Gateway</span>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-[#0ef34b] mt-1 mr-2 flex-shrink-0" size={18} />
              <span>Multichain with BNB, Near & more</span>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-[#0ef34b] mt-1 mr-2 flex-shrink-0" size={18} />
              <span>20+ Years Engineering Experience</span>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-[#0ef34b] mt-1 mr-2 flex-shrink-0" size={18} />
              <span>MVP Ready AI Products</span>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-[#0ef34b] mt-1 mr-2 flex-shrink-0" size={18} />
              <span>Strong Product Roadmap</span>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-[#0ef34b] mt-1 mr-2 flex-shrink-0" size={18} />
              <span>Innovative Tokenomics</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-[#0ef34b] to-[#00aeff] hover:brightness-110 text-black py-6 px-8 text-lg">
              Explore GPTVerse
            </Button>
            
            <Button variant="outline" className="border-[#0ef34b]/50 text-white hover:bg-[#0ef34b]/10 py-6 px-8 text-lg">
              Whitepaper
            </Button>
            
            <Button variant="outline" className="border-[#0ef34b]/50 text-white hover:bg-[#0ef34b]/10 py-6 px-8 text-lg">
              Join Our DAO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
