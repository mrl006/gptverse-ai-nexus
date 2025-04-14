
import React from 'react';
import ExploreHeader from './explore/ExploreHeader';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Zap, Brain, Bot, Sparkles, ChevronRight, MapPin, Bookmark, RefreshCw } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import UnifiedBackground from './UnifiedBackground';

const Explore = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');
  
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'ai-tools', label: 'AI Tools' },
    { id: 'games', label: 'Games' },
    { id: 'education', label: 'Education' },
    { id: 'productivity', label: 'Productivity' }
  ];
  
  const exploreItems = [
    {
      title: 'AI Hub',
      description: 'Central platform for all your AI needs with seamless integration',
      icon: <Cpu className="text-[#0ef34b]" />,
      category: 'ai-tools',
      featured: true,
      comingSoon: false
    },
    {
      title: 'Neural Playground',
      description: 'Experiment with neural networks in an interactive sandbox environment',
      icon: <Brain className="text-[#00aeff]" />,
      category: 'education',
      featured: false,
      comingSoon: false
    },
    {
      title: 'GPT Companion',
      description: 'Your personal AI assistant that learns and adapts to your needs',
      icon: <Bot className="text-[#d946ef]" />,
      category: 'productivity',
      featured: true,
      comingSoon: false
    },
    {
      title: 'Virtual Worlds',
      description: 'Explore AI-generated worlds with dynamic environments and characters',
      icon: <Sparkles className="text-[#0ef34b]" />,
      category: 'games',
      featured: false,
      comingSoon: true
    },
    {
      title: 'AI Studio',
      description: 'Create and customize your own AI models with intuitive tools',
      icon: <Zap className="text-[#00aeff]" />,
      category: 'ai-tools',
      featured: false,
      comingSoon: true
    },
    {
      title: 'Knowledge Nexus',
      description: 'Advanced learning platform with personalized AI tutoring',
      icon: <Brain className="text-[#d946ef]" />,
      category: 'education',
      featured: false,
      comingSoon: true
    }
  ];
  
  const filteredItems = activeCategory === 'all' 
    ? exploreItems 
    : exploreItems.filter(item => item.category === activeCategory);

  // Four navigation buttons with glassy effect
  const navButtons = [
    { 
      label: 'Discover', 
      icon: <MapPin className="w-5 h-5" />, 
      color: 'from-[#0ef34b]/20 to-[#0ef34b]/5',
      borderColor: 'border-[#0ef34b]/30'
    },
    { 
      label: 'Favorites', 
      icon: <Bookmark className="w-5 h-5" />, 
      color: 'from-[#00aeff]/20 to-[#00aeff]/5',
      borderColor: 'border-[#00aeff]/30'
    },
    { 
      label: 'Latest', 
      icon: <RefreshCw className="w-5 h-5" />, 
      color: 'from-[#d946ef]/20 to-[#d946ef]/5',
      borderColor: 'border-[#d946ef]/30'
    },
    { 
      label: 'Browse All', 
      icon: <ChevronRight className="w-5 h-5" />, 
      color: 'from-white/10 to-white/5',
      borderColor: 'border-white/30'
    }
  ];

  return (
    <section id="explore" className="relative py-20 overflow-hidden">
      {/* Enhanced background */}
      <UnifiedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <ExploreHeader />
        
        {/* Four navigation buttons with glassy effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {navButtons.map((button, index) => (
            <Button
              key={index}
              variant="glassy-glow"
              className={`nav-glass-button relative overflow-hidden h-full py-3 md:py-4 flex flex-col items-center justify-center ${button.borderColor}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${button.color} opacity-20`}></div>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <div className="relative z-10 flex flex-col items-center justify-center">
                <span className="p-2 bg-black/20 rounded-full mb-2">{button.icon}</span>
                <span className="text-sm md:text-base">{button.label}</span>
              </div>
            </Button>
          ))}
        </div>
        
        {/* Category filters with glassy look */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <Toggle
              key={category.id}
              pressed={activeCategory === category.id}
              onPressedChange={() => setActiveCategory(category.id)}
              variant="glassy"
              className="backdrop-blur-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:text-white data-[state=on]:bg-[#0ef34b]/20 data-[state=on]:text-white data-[state=on]:border-[#0ef34b]/30"
            >
              {category.label}
            </Toggle>
          ))}
        </div>
        
        {/* Grid of explore items with enhanced glassy look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className={`glass-card backdrop-blur-xl bg-white/5 border border-white/10 hover:border-[#0ef34b]/20 rounded-xl overflow-hidden transition-all duration-300 shadow-lg relative group
                ${item.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Enhanced glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0ef34b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  
                  {item.comingSoon && (
                    <span className="px-3 py-1 text-xs font-medium rounded-md backdrop-blur-xl bg-black/20 border border-white/10 text-white">
                      Coming Soon
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 mb-6 flex-grow">{item.description}</p>
                
                <Button 
                  variant="glassy-glow"
                  className={`mt-auto self-start backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 text-white
                    ${item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={item.comingSoon}
                >
                  {item.comingSoon ? 'Notify Me' : 'Explore'} <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all button with glassy look */}
        <div className="flex justify-center mt-12">
          <Button 
            variant="glassy-glow"
            className="backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#0ef34b]/30 text-white px-8 transition-all duration-300 group"
          >
            View All GPTVerse Tools 
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Explore;
