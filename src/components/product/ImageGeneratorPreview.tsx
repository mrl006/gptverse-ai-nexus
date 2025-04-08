
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageGeneratorPreviewProps {
  showGeneratedImage: boolean;
  isTyping: boolean;
}

const ImageGeneratorPreview: React.FC<ImageGeneratorPreviewProps> = ({ 
  showGeneratedImage, 
  isTyping 
}) => {
  const [randomImage, setRandomImage] = useState<string>("");
  const [imgLoaded, setImgLoaded] = useState(false);
  
  // Enhanced set of images
  const imageSources = [
    "/lovable-uploads/aa4883fb-56f2-46d8-95f2-c7e2d19ba69d.png", // Futuristic city
    "/lovable-uploads/939e5c07-6b47-4f15-a272-e60eef74ee1f.png", // Space scene
    "/lovable-uploads/e322c390-0e26-442f-90b3-bc13622b55e6.png", // Fantasy creature
    "/lovable-uploads/becd59a9-582c-40e3-822c-52261c79f955.png", // Landscape
    "/lovable-uploads/dba72d8f-2091-4bb0-898a-3e7b02d665ce.png", // Additional image
    "/lovable-uploads/e5ebce5d-7c0d-44be-9b2f-c0219df5d657.png", // Additional image
    "/lovable-uploads/6acb1d46-209d-4450-b48e-5ec82fa59a10.png", // Additional image
    "/lovable-uploads/27ee7e18-ad05-4a4d-b4a4-2b12e35ff8d3.png"  // Additional image
  ];
  
  useEffect(() => {
    if (showGeneratedImage) {
      // Select a random image from available options
      const randomIndex = Math.floor(Math.random() * imageSources.length);
      setRandomImage(imageSources[randomIndex]);
      
      // Reset image loaded state
      setImgLoaded(false);
    }
  }, [showGeneratedImage]);
  
  const handleImageLoad = () => {
    setImgLoaded(true);
  };
  
  if (showGeneratedImage) {
    return (
      <motion.div 
        className="flex-grow flex items-center justify-center py-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative group max-w-[90%] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={randomImage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: imgLoaded ? 1 : 0,
                scale: imgLoaded ? 1 : 0.8,
                filter: imgLoaded ? "blur(0px)" : "blur(10px)"
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-lg"
            >
              <motion.img 
                src={randomImage} 
                alt="AI Generated artwork" 
                className="max-w-full rounded-lg border border-white/10 object-cover shadow-lg"
                style={{ maxHeight: "280px" }}
                onLoad={handleImageLoad}
                animate={{ 
                  scale: [1, 1.01, 1],
                  filter: ["brightness(1)", "brightness(1.03)", "brightness(1)"] 
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {imgLoaded && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              )}
            </motion.div>
          </AnimatePresence>
          
          {imgLoaded && (
            <motion.div 
              className="absolute bottom-3 right-3 bg-black/80 px-3 py-1 rounded text-xs text-white/90 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              AI Generated
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  }
  
  if (isTyping) {
    return (
      <motion.div 
        className="flex-grow flex items-center justify-center py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center">
          <div className="w-32 h-32 rounded-lg border border-white/10 bg-[#1e1e2f] mx-auto mb-4 relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#d946ef]/20 via-[#8b5cf6]/20 to-[#0ef34b]/20"
              animate={{ 
                background: [
                  "radial-gradient(circle at 30% 30%, rgba(217, 70, 239, 0.3) 0%, transparent 70%)",
                  "radial-gradient(circle at 70% 30%, rgba(14, 243, 75, 0.3) 0%, transparent 70%)",
                  "radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
                  "radial-gradient(circle at 30% 70%, rgba(0, 174, 255, 0.3) 0%, transparent 70%)",
                  "radial-gradient(circle at 30% 30%, rgba(217, 70, 239, 0.3) 0%, transparent 70%)",
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ 
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="h-12 w-12 border-4 border-[#d946ef] border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
          
          <motion.p 
            className="text-white/90 font-medium"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Creating your masterpiece...
          </motion.p>
          
          <motion.p 
            className="text-white/50 text-sm mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Applying neural style transfer
          </motion.p>
          
          <div className="mt-4 flex gap-1.5 justify-center">
            <motion.div 
              className="h-1.5 w-40 bg-black/30 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div 
                className="h-full bg-gradient-to-r from-[#d946ef] to-[#8b5cf6] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }
  
  return null;
};

export default ImageGeneratorPreview;
