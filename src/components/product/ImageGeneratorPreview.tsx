
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ImageGeneratorPreviewProps {
  showGeneratedImage: boolean;
  isTyping: boolean;
}

const ImageGeneratorPreview: React.FC<ImageGeneratorPreviewProps> = ({ 
  showGeneratedImage, 
  isTyping 
}) => {
  const [randomImage, setRandomImage] = useState<string>("");
  
  const imageSources = [
    "/lovable-uploads/aa4883fb-56f2-46d8-95f2-c7e2d19ba69d.png",
    "/lovable-uploads/939e5c07-6b47-4f15-a272-e60eef74ee1f.png",
    "/lovable-uploads/e322c390-0e26-442f-90b3-bc13622b55e6.png",
    "/lovable-uploads/becd59a9-582c-40e3-822c-52261c79f955.png"
  ];
  
  useEffect(() => {
    if (showGeneratedImage) {
      // Select a random image from available options
      const randomIndex = Math.floor(Math.random() * imageSources.length);
      setRandomImage(imageSources[randomIndex]);
    }
  }, [showGeneratedImage]);
  
  if (showGeneratedImage) {
    return (
      <motion.div 
        className="flex-grow flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative group">
          <motion.img 
            src={randomImage} 
            alt="Generated" 
            className="max-w-full max-h-[300px] rounded-lg border border-white/10 object-cover shadow-lg"
            initial={{ filter: "blur(10px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#d946ef]/10 to-[#0ef34b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          <div className="absolute bottom-3 right-3 bg-black/70 px-3 py-1 rounded text-xs text-white/90">AI Generated</div>
        </div>
      </motion.div>
    );
  }
  
  if (isTyping) {
    return (
      <motion.div 
        className="flex-grow flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center">
          <div className="w-24 h-24 rounded-lg border border-white/10 bg-[#1e1e2f] mx-auto mb-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#d946ef]/30 via-[#8b5cf6]/30 to-[#0ef34b]/30 animate-pulse"></div>
            
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ 
                background: [
                  "radial-gradient(circle at 20% 20%, rgba(217, 70, 239, 0.2) 0%, transparent 70%)",
                  "radial-gradient(circle at 80% 20%, rgba(14, 243, 75, 0.2) 0%, transparent 70%)",
                  "radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
                  "radial-gradient(circle at 20% 80%, rgba(0, 174, 255, 0.2) 0%, transparent 70%)",
                  "radial-gradient(circle at 20% 20%, rgba(217, 70, 239, 0.2) 0%, transparent 70%)",
                ]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              <div className="h-10 w-10 border-4 border-[#d946ef] border-t-transparent rounded-full animate-spin"></div>
            </motion.div>
          </div>
          <p className="text-white/80 font-medium">Generating your image...</p>
          <p className="text-white/50 text-sm mt-1">Creating artistic masterpiece</p>
          
          <div className="mt-3 flex gap-1.5 justify-center">
            <motion.div 
              className="h-1.5 w-16 bg-gradient-to-r from-[#d946ef] to-[#8b5cf6] rounded-full"
              animate={{ width: ["20%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    );
  }
  
  return null;
};

export default ImageGeneratorPreview;
