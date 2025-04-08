
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

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

export default AiServiceCard;
