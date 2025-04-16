
import React from 'react';
import { Orbit, BookOpen, Zap, Globe, BrainCircuit } from 'lucide-react';

export const DesktopNav = () => {
  return (
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
  );
};
