
import React from 'react';
import { MessageSquare, Twitter, Github, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gptv-darker border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-gradient-animate">GPTVerse</span>
            </h3>
            <p className="text-white/70">
              Your AI Hub and Multi-Platform Gateway to a Next-Level Dapp
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gptv-gray/40 flex items-center justify-center hover:bg-gptv-teal/30 transition-colors"
                aria-label="Telegram"
              >
                <MessageSquare size={18} className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gptv-gray/40 flex items-center justify-center hover:bg-gptv-blue/30 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gptv-gray/40 flex items-center justify-center hover:bg-gptv-magenta/30 transition-colors"
                aria-label="Discord"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-white"
                >
                  <circle cx="9" cy="12" r="1"/>
                  <circle cx="15" cy="12" r="1"/>
                  <path d="M7.5 7.2c.7-1 2-2.2 4.5-2.2s3.8 1.2 4.5 2.2"/>
                  <path d="M7.5 16.8c.7 1 2 2.2 4.5 2.2s3.8-1.2 4.5-2.2"/>
                  <path d="M3 9.5c-.7-1.5-.7-3 0-4.5"/>
                  <path d="M3 19c-.7-1.5-.7-3 0-4.5"/>
                  <path d="M21 9.5c.7-1.5.7-3 0-4.5"/>
                  <path d="M21 19c.7-1.5.7-3 0-4.5"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gptv-gray/40 flex items-center justify-center hover:bg-gptv-green/30 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors flex items-center">AI Language Tutor <ArrowUpRight size={14} className="ml-1" /></a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors flex items-center">Multi-PDF Chatbot <ArrowUpRight size={14} className="ml-1" /></a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors flex items-center">AI Persona <ArrowUpRight size={14} className="ml-1" /></a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors flex items-center">AI Fitness Coach <ArrowUpRight size={14} className="ml-1" /></a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors flex items-center">AI Receptionist <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-gptv-magenta/20 text-gptv-magenta">Soon</span></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">DAO</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 GPTVerse. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Products</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Community</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">$GPTV</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Contact</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
