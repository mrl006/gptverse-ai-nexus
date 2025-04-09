import React from 'react';
import ExploreHeader from './explore/ExploreHeader';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Zap, Brain, Bot, Sparkles } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

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

  return (
    <section id="explore" className="relative py-20 overflow-hidden">
      {/* Background effects similar to home page */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040812] via-[#081019] to-[#0a1a20] z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMTAgMGgxdjQwSDEweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMjAgMGgxdjQwSDIweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMTB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMzB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ExploreHeader />
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <Toggle
              key={category.id}
              pressed={activeCategory === category.id}
              onPressedChange={() => setActiveCategory(category.id)}
              variant="outline"
              className="bg-[#040812]/60 backdrop-blur-md border border-white/10 text-white hover:bg-[#040812]/80 hover:text-white data-[state=on]:bg-[#0ef34b]/20 data-[state=on]:text-white data-[state=on]:border-[#0ef34b]/30"
            >
              {category.label}
            </Toggle>
          ))}
        </div>
        
        {/* Grid of explore items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className={`backdrop-blur-xl bg-[#040812]/40 border border-white/10 hover:border-white/20 rounded-xl overflow-hidden transition-all duration-300 shadow-lg relative group
                ${item.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0ef34b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#040812]/80 border border-white/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  
                  {item.comingSoon && (
                    <span className="px-3 py-1 text-xs font-medium rounded-md backdrop-blur-md bg-[#040812]/60 border border-white/10 text-white">
                      Coming Soon
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 mb-6 flex-grow">{item.description}</p>
                
                <Button 
                  className={`mt-auto self-start bg-[#040812]/60 backdrop-blur-md border border-white/10 hover:bg-[#040812]/80 text-white
                    ${item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={item.comingSoon}
                >
                  {item.comingSoon ? 'Notify Me' : 'Explore'} <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all button */}
        <div className="flex justify-center mt-12">
          <Button className="bg-[#040812]/60 backdrop-blur-md border border-white/10 hover:bg-[#040812]/80 text-white px-8">
            View All GPTVerse Tools <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Explore;
