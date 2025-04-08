
import React from 'react';
import { Twitter, Youtube, MessageSquare, Linkedin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ContactGPTVerse = () => {
  // Social media links data with icons and URLs
  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com/' },
    { name: 'YouTube', icon: <Youtube className="h-5 w-5" />, url: 'https://youtube.com/' },
    { name: 'Discord', icon: 
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="h-5 w-5"
      >
        <circle cx="9" cy="12" r="1"/>
        <circle cx="15" cy="12" r="1"/>
        <path d="M7.5 7.2c.7-1 2-2.2 4.5-2.2s3.8 1.2 4.5 2.2"/>
        <path d="M7.5 16.8c.7 1 2 2.2 4.5 2.2s3.8-1.2 4.5-2.2"/>
        <path d="M3 9.5c-.7-1.5-.7-3 0-4.5"/>
        <path d="M3 19c-.7-1.5-.7-3 0-4.5"/>
        <path d="M21 9.5c.7-1.5.7-3 0-4.5"/>
        <path d="M21 19c.7-1.5.7-3 0-4.5"/>
      </svg>, 
      url: 'https://discord.com/' 
    },
    { name: 'Telegram', icon: <MessageSquare className="h-5 w-5" />, url: 'https://t.me/' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com/' },
    { name: 'Telegram', icon: <Send className="h-5 w-5" />, url: 'https://t.me/' },
  ];
  
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06101a] to-[#040812] opacity-95 z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMTAgMGgxdjQwSDEweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMjAgMGgxdjQwSDIweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMTB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMzB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PC9zdmc+')] opacity-30 z-0"></div>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(14,243,75,0.15)_0%,transparent_50%)] z-0"></div>
      
      {/* Glowing orbs in background */}
      <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-[#0ef34b] rounded-full opacity-70 blur-sm animate-pulse"></div>
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-[#00aeff] rounded-full opacity-60 blur-sm animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#d946ef] rounded-full opacity-50 blur-sm animate-pulse" style={{animationDelay: '0.7s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#0ef34b] uppercase tracking-wider text-sm font-mono mb-2">Connect With Us</h2>
          <div className="relative inline-block">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
              CONTACT GPTVERSE
            </h3>
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-[#0ef34b]/0 via-[#0ef34b] to-[#0ef34b]/0"></div>
          </div>
          <p className="text-white/70 max-w-2xl mx-auto mt-6">
            Please use these channels to get in touch with us
          </p>
        </div>
        
        {/* Social Media Icons Container */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-3xl mx-auto">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={link.name}
            >
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-xl backdrop-blur-xl bg-[#040812]/60 border border-[#0ef34b]/20
                          flex items-center justify-center text-white/80 hover:text-white transition-all duration-500
                          hover:border-[#0ef34b]/40 hover:shadow-[0_0_20px_rgba(14,243,75,0.15)] group-hover:scale-105"
              >
                {/* Glow effect overlay */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-[#0ef34b]/0 via-[#0ef34b]/10 to-[#00aeff]/0"></div>
                
                {/* Icon */}
                <div className="relative">
                  {link.icon}
                  
                  {/* Animated ping effect */}
                  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#0ef34b] opacity-0 group-hover:opacity-75 group-hover:animate-ping"></span>
                  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#0ef34b] opacity-0 group-hover:opacity-100"></span>
                </div>
              </div>
              
              {/* Name tooltip that appears on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 text-center text-white/70 text-sm">
                {link.name}
              </div>
            </a>
          ))}
        </div>
        
        {/* Contact Us Button */}
        <div className="text-center mt-12">
          <Button className="bg-[#040812]/60 hover:bg-[#040812]/80 text-white border border-[#0ef34b]/30 rounded-lg px-8 py-2.5 shadow-[0_0_15px_rgba(14,243,75,0.2)] group transition-all duration-300 backdrop-blur-md">
            <span className="mr-2 text-lg">Get in Touch</span>
            <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactGPTVerse;
