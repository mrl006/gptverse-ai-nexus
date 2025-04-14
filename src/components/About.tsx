
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, ArrowUpRight, Shield, Gem, LayoutGrid } from 'lucide-react';

const About = () => {
  // Four featured buttons with glassy effect
  const featureButtons = [
    { 
      label: 'AI Platform', 
      icon: <LayoutGrid className="w-5 h-5" />, 
      color: 'from-[#0ef34b]/10 to-transparent',
      description: 'Access all AI tools in one place'
    },
    { 
      label: 'Multi-Chain', 
      icon: <Shield className="w-5 h-5" />, 
      color: 'from-[#00aeff]/10 to-transparent',
      description: 'Built for BNB, Near and more'
    },
    { 
      label: 'Security', 
      icon: <Shield className="w-5 h-5" />, 
      color: 'from-[#d946ef]/10 to-transparent',
      description: 'Enterprise-grade protection'
    },
    { 
      label: 'Token Utility', 
      icon: <Gem className="w-5 h-5" />, 
      color: 'from-white/10 to-transparent',
      description: 'Powerful tokenomics model'
    }
  ];

  return (
    <section className="section-padding bg-gptv-darker relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxRTFFMjYiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 text-center relative overflow-hidden glow backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0ef34b]/30 via-[#00aeff]/40 to-[#d946ef]/30"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-animate">ABOUT THE GPTVERSE</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-8">
            Embark on an extraordinary AI journey.
          </p>
          
          {/* Four feature buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {featureButtons.map((button, index) => (
              <div key={index} className="feature-glass-card relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${button.color} opacity-10 group-hover:opacity-30 transition-opacity duration-500`}></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-black/20 mr-3 relative">
                    {button.icon}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-[#0ef34b]/10 blur-md transition-opacity duration-500"></div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-white group-hover:text-[#0ef34b]/90 transition-colors duration-300">{button.label}</h3>
                    <p className="text-white/70 text-sm">{button.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
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
            <Button className="bg-gradient-to-r from-[#0ef34b] to-[#00aeff] hover:brightness-110 text-black font-semibold py-6 px-8 text-lg group relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                Explore GPTVerse
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button variant="outline" className="backdrop-blur-xl bg-white/5 border border-[#0ef34b]/30 text-white hover:bg-[#0ef34b]/10 py-6 px-8 text-lg group">
              <span className="flex items-center">
                Whitepaper
                <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </Button>
            
            <Button variant="outline" className="backdrop-blur-xl bg-white/5 border border-[#d946ef]/30 text-white hover:bg-[#d946ef]/10 py-6 px-8 text-lg group">
              <span className="flex items-center">
                Join Our DAO
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
