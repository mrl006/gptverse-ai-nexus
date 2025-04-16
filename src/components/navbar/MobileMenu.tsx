
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Orbit, BookOpen, Zap, Globe, BrainCircuit, Laptop, Headset } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed top-[56px] left-0 w-full backdrop-blur-xl bg-[#040812]/98 z-50 border-b border-[#087E8B]/20 overflow-hidden"
        >
          <div className="container px-4 pt-6 pb-24 flex flex-col">
            <div className="space-y-6">
              <div className="bg-[#06101a]/80 p-4 rounded-xl border border-[#087E8B]/20 mb-8">
                <h2 className="font-sans text-[#0CF574] mb-3 text-sm uppercase tracking-widest">ENTERPRISE MENU</h2>
                
                <div className="mb-6">
                  <h3 className="text-white text-2xl font-bold mb-1">Multi-Platform Hub</h3>
                  <p className="text-white/70 text-sm mb-4">Your AI Hub and Multi-Platform Gateway to a Next-Level Dapp!</p>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { title: 'Overview', icon: Orbit, href: '#overview' },
                    { title: 'Products', icon: BookOpen, href: '#products' },
                    { title: 'Features', icon: Zap, href: '#features' },
                    { title: 'Roadmap', icon: Globe, href: '#roadmap' },
                    { title: 'FAQ', icon: BrainCircuit, href: '#faq' }
                  ].map((item) => (
                    <a 
                      key={item.title}
                      href={item.href} 
                      className="flex items-center gap-3 bg-[#06101a]/50 p-4 rounded-lg border border-[#087E8B]/10 hover:border-[#087E8B]/30 transition-all" 
                      onClick={onClose}
                    >
                      <div className="bg-[#087E8B]/10 p-2 rounded-lg">
                        <item.icon size={20} className="text-[#0CF574]" />
                      </div>
                      <span className="text-white font-medium">{item.title}</span>
                    </a>
                  ))}
                  
                  <div className="grid grid-cols-2 gap-2 my-2">
                    <a 
                      href="#windows"
                      className="flex flex-col items-center justify-center bg-[#06101a] p-3 rounded-lg border border-[#087E8B]/20 hover:border-[#087E8B]/40 transition-all"
                      onClick={onClose}
                    >
                      <Laptop size={22} className="text-white mb-1" />
                      <div className="text-center">
                        <div className="text-[10px] text-white/60">Get it on</div>
                        <div className="text-white text-sm font-medium">WINDOWS</div>
                      </div>
                    </a>
                    
                    <a 
                      href="#vr"
                      className="flex flex-col items-center justify-center bg-[#06101a] p-3 rounded-lg border border-[#087E8B]/20 hover:border-[#087E8B]/40 transition-all"
                      onClick={onClose}
                    >
                      <Headset size={22} className="text-white mb-1" />
                      <div className="text-center">
                        <div className="text-[10px] text-white/60">Get it on</div>
                        <div className="text-white text-sm font-medium">VR SIDEQUEST</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
