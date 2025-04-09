
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section className="section-padding bg-gptv-darker relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxRTFFMjYiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 text-center relative overflow-hidden glow">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gptv-blue via-gptv-teal to-gptv-magenta"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-animate">ABOUT THE GPTVERSE</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-8">
            Embark on an extraordinary AI journey.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 mb-10 text-left">
            <div className="flex items-start">
              <CheckCircle2 className="text-gptv-teal mt-1 mr-2 flex-shrink-0" size={18} />
              <span>Your AI Hub and DApp Gateway</span>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-gptv-teal mt-1 mr-2 flex-shrink-0" size={18} />
              <span>Multichain with BNB, Near & more</span>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-gptv-teal mt-1 mr-2 flex-shrink-0" size={18} />
              <span>20+ Years Engineering Experience</span>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-gptv-teal mt-1 mr-2 flex-shrink-0" size={18} />
              <span>MVP Ready AI Products</span>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-gptv-teal mt-1 mr-2 flex-shrink-0" size={18} />
              <span>Strong Product Roadmap</span>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-gptv-teal mt-1 mr-2 flex-shrink-0" size={18} />
              <span>Innovative Tokenomics</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-gptv-blue to-gptv-teal hover:brightness-110 text-white py-6 px-8 text-lg">
              Explore GPTVerse
            </Button>
            
            <Button variant="outline" className="border-gptv-blue text-white hover:bg-gptv-blue/20 py-6 px-8 text-lg">
              Whitepaper
            </Button>
            
            <Button variant="outline" className="border-gptv-magenta text-white hover:bg-gptv-magenta/20 py-6 px-8 text-lg">
              Join Our DAO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
