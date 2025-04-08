
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface AiServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  statusLabels: Array<{text: string, color: string}>;
  flipped?: boolean;
  actionButtons?: React.ReactNode;
}

const AiServiceCard: React.FC<AiServiceCardProps> = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  statusLabels, 
  flipped = false,
  actionButtons
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full"
    >
      <Card className="group w-full overflow-hidden border-0 bg-transparent">
        <div className={`relative transition-all duration-500 ${flipped ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'} group-hover:-translate-y-2`}>
          {/* Animated gradient background that shifts on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/10 via-[#00aeff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
          
          {/* Energized border effect */}
          <div className={`absolute inset-0 rounded-xl overflow-hidden border border-white/5 transition-all duration-500 
                          before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                          ${flipped ? 'before:via-[#00aeff]/40 before:to-[#0ef34b]/40' : 'before:via-[#0ef34b]/40 before:to-[#00aeff]/40'} 
                          before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 before:animate-pulse-slow`}></div>
          
          <div className="w-full bg-[#0e1623]/60 rounded-xl overflow-hidden backdrop-blur-md border border-white/5 group-hover:border-white/10 transition-all duration-500 shadow-xl shadow-[#0ef34b]/5 group-hover:shadow-[#0ef34b]/10">
            <div className={`flex flex-col ${flipped ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8`}>
              {/* Image container with overlay effects */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#040812]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#040812]/80 z-10"></div>
                <motion.img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Animated corner accents */}
                <motion.div 
                  className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
                  initial={{ opacity: 0.5 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                >
                  <div className="absolute top-0 left-0 w-6 h-1 bg-[#0ef34b]/40 transform group-hover:w-10 transition-all duration-500"></div>
                  <div className="absolute top-0 left-0 w-1 h-6 bg-[#0ef34b]/40 transform group-hover:h-10 transition-all duration-500"></div>
                </motion.div>
                <motion.div 
                  className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none"
                  initial={{ opacity: 0.5 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  <div className="absolute bottom-0 right-0 w-6 h-1 bg-[#00aeff]/40 transform group-hover:w-10 transition-all duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-1 h-6 bg-[#00aeff]/40 transform group-hover:h-10 transition-all duration-500"></div>
                </motion.div>
              </div>
              
              <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center relative z-10">
                {/* Animated status labels with hover effect */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {statusLabels.map((label, index) => (
                    <motion.span 
                      key={index} 
                      className={`px-3 py-1 text-sm font-medium rounded-md ${label.color} backdrop-blur-sm transition-all duration-300`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(14, 243, 75, 0.3)" }}
                    >
                      {label.text}
                    </motion.span>
                  ))}
                </div>
                
                {/* Enhanced title with animated hover effect */}
                <motion.div 
                  className="overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-1 transform transition-transform duration-500 group-hover:-translate-y-1">
                    {title}
                  </h2>
                </motion.div>
                
                <motion.div 
                  className="overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0ef34b] to-[#00aeff] bg-clip-text text-transparent mb-6 transform transition-transform duration-500 group-hover:-translate-y-1">
                    {subtitle}
                  </h3>
                </motion.div>
                
                {/* Tech-inspired description frame */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-[#0ef34b]/40 to-transparent"></div>
                  <motion.p 
                    className="text-white/80 mb-8 text-lg pl-4 transition-all duration-500 group-hover:text-white/90 group-hover:pl-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  >
                    {description}
                  </motion.p>
                </motion.div>
                
                {/* Enhanced action buttons with animated effects */}
                {actionButtons && (
                  <motion.div 
                    className="flex flex-wrap gap-4 transition-all duration-500 group-hover:translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {actionButtons}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const AiServices = () => {
  const aiServices = [
    {
      title: "AI",
      subtitle: "Hub",
      description: "AI Hub is a multi-platform solution that allows you to access multiple AI services with a single account and payment method. It consolidates various distributed AI services under one roof, supported and enhanced by three core feeders: GPTVerse, Partners, Community",
      image: "/lovable-uploads/f9c53327-d079-460f-b593-f1086215163f.png",
      statusLabels: [
        { text: "On Live", color: "bg-[#0ef34b]/20 text-[#0ef34b]" },
        { text: "MVP Ready", color: "bg-[#00aeff]/20 text-[#00aeff]" }
      ],
      actionButtons: (
        <Button className="bg-[#0070f3] hover:bg-[#0070f3]/90 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0070f3]/20">
          Try AI HUB
        </Button>
      )
    },
    {
      title: "AI Education",
      subtitle: "Language Tutor",
      description: "With the AI Language Tutor, you can learn any language, assess your proficiency level, and enhance your conversational skills through interactive chats. Utilize AI HUB for text-based interactions and GPTVerse Multiverse for voice-based communication.",
      image: "/lovable-uploads/90260616-99d1-4348-a347-ac152303bc6b.png",
      statusLabels: [
        { text: "On Live", color: "bg-[#0ef34b]/20 text-[#0ef34b]" },
        { text: "Integrated", color: "bg-[#f0db4f]/20 text-[#f0db4f]" }
      ],
      flipped: true,
      actionButtons: (
        <>
          <Button className="bg-[#0ef34b] hover:bg-[#0ef34b]/90 text-black font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0ef34b]/20">
            Try in AI HUB
          </Button>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:border-white/30">
            <Play size={16} /> Watch Trailer
          </Button>
        </>
      )
    },
    {
      title: "AI",
      subtitle: "Persona",
      description: "Would you like to personalize artificial intelligence? It's now possible to characterize AI by adding features such as name, emotion, life story, and more. With AI Persona, limited only by your imagination, create your own artificial intelligence character.",
      image: "/lovable-uploads/e0137b19-a304-4537-9ef3-e39e89f1d6a4.png",
      statusLabels: [
        { text: "MVP Ready", color: "bg-[#00aeff]/20 text-[#00aeff]" }
      ],
      actionButtons: (
        <Button className="bg-gradient-to-r from-[#d946ef] to-[#00aeff] hover:opacity-90 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#d946ef]/20">
          Learn More
        </Button>
      )
    },
    {
      title: "AI",
      subtitle: "Fitness Coach",
      description: "AI Fitness Coach is the first character developed with our AI persona product. Ready to assist you in the realms of a healthy lifestyle and fitness through our AI Hub and Multiverse platforms.",
      image: "/lovable-uploads/7465b83d-7726-4b8b-b81e-746efde99eab.png",
      statusLabels: [
        { text: "On Live", color: "bg-[#0ef34b]/20 text-[#0ef34b]" }
      ],
      flipped: true,
      actionButtons: (
        <Button className="bg-[#0ef34b] hover:bg-[#0ef34b]/90 text-black font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0ef34b]/20">
          Start Training
        </Button>
      )
    },
    {
      title: "AI",
      subtitle: "Receptionist",
      description: "Let artificial intelligence track and organize your appointments on your behalf. As your most loyal assistant, it will always be by your side to support business development. Its customizable structure allows it to understand your business model and tailor its services to your unique needs.",
      image: "/lovable-uploads/18a49ba5-8c2f-43d1-a442-6c7f9444f3ab.png",
      statusLabels: [
        { text: "Coming Soon", color: "bg-[#f43f5e]/20 text-[#f43f5e]" },
        { text: "MVP Ready", color: "bg-[#00aeff]/20 text-[#00aeff]" }
      ],
      actionButtons: (
        <Button variant="outline" className="border-[#f43f5e]/30 text-[#f43f5e] hover:bg-[#f43f5e]/10 font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1">
          Join Waitlist
        </Button>
      )
    }
  ];

  return (
    <section id="ai-services" className="py-24 relative overflow-hidden">
      {/* Enhanced animated background with more tech-inspired elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0ef34b]/5 to-[#00aeff]/5 opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,243,75,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,174,255,0.1),transparent_70%)]"></div>
        
        {/* Tech grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMTAgMGgxdjQwSDEweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMjAgMGgxdjQwSDIweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMTB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMzB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PC9zdmc+')] opacity-30"></div>
      
        {/* Animated pulse points */}
        <div className="absolute top-[20%] left-[10%]">
          <div className="w-1 h-1 bg-[#0ef34b] rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
          <div className="absolute inset-0 w-2 h-2 bg-[#0ef34b]/50 rounded-full animate-ping" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
        </div>
        <div className="absolute top-[70%] right-[15%]">
          <div className="w-1 h-1 bg-[#00aeff] rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
          <div className="absolute inset-0 w-3 h-3 bg-[#00aeff]/30 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '0.2s'}}></div>
        </div>
        <div className="absolute top-[40%] right-[30%]">
          <div className="w-1 h-1 bg-[#d946ef] rounded-full animate-ping" style={{animationDuration: '5s'}}></div>
          <div className="absolute inset-0 w-2 h-2 bg-[#d946ef]/30 rounded-full animate-ping" style={{animationDuration: '5s', animationDelay: '0.7s'}}></div>
        </div>
      
        {/* Enhanced gradient accents */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00aeff]/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Enhanced futuristic heading */}
          <div className="relative inline-block">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono tracking-tight relative z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-[#0ef34b] via-[#00aeff] to-[#d946ef] bg-clip-text text-transparent animate-text-gradient bg-[length:200%_auto]"
                animate={{ 
                  backgroundPosition: ['0% center', '200% center', '0% center'],
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                AI SERVICES
              </motion.span>
            </motion.h2>
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-[#0ef34b]/20 via-[#00aeff]/20 to-[#d946ef]/20 blur-xl opacity-70 -z-10 rounded-full"
              animate={{ 
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            ></motion.div>
          </div>
          
          <motion.div 
            className="flex justify-center space-x-3 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="h-0.5 w-16 bg-gradient-to-r from-[#0ef34b]/80 to-transparent"
              animate={{ width: ['4rem', '5rem', '4rem'] }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
            <motion.div 
              className="text-[#0ef34b]/70 text-lg font-mono"
              animate={{ 
                color: ['rgba(14,243,75,0.7)', 'rgba(0,174,255,0.7)', 'rgba(14,243,75,0.7)'],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >POWERED BY GPTVERSE</motion.div>
            <motion.div 
              className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#00aeff]/80"
              animate={{ width: ['4rem', '5rem', '4rem'] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
            ></motion.div>
          </motion.div>
          
          {/* Tech accent lines */}
          <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"></div>
        </motion.div>
        
        <div className="space-y-20">
          {aiServices.map((service, index) => (
            <AiServiceCard
              key={index}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              image={service.image}
              statusLabels={service.statusLabels}
              flipped={service.flipped}
              actionButtons={service.actionButtons}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiServices;
