
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
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [showingImages, setShowingImages] = useState(false);
  
  // Enhanced set of images using the uploaded collage
  const imageSources = [
    "/lovable-uploads/28e04e4f-cace-4c3d-a467-d7c5b5afa839.png#sprite=0",
    "/lovable-uploads/28e04e4f-cace-4c3d-a467-d7c5b5afa839.png#sprite=1",
    "/lovable-uploads/28e04e4f-cace-4c3d-a467-d7c5b5afa839.png#sprite=2",
    "/lovable-uploads/28e04e4f-cace-4c3d-a467-d7c5b5afa839.png#sprite=3",
    "/lovable-uploads/28e04e4f-cace-4c3d-a467-d7c5b5afa839.png#sprite=4",
    "/lovable-uploads/28e04e4f-cace-4c3d-a467-d7c5b5afa839.png#sprite=5",
    "/lovable-uploads/28e04e4f-cace-4c3d-a467-d7c5b5afa839.png#sprite=6",
    "/lovable-uploads/28e04e4f-cace-4c3d-a467-d7c5b5afa839.png#sprite=7"
  ];
  
  // Captions for each generated image
  const imageCaptions = [
    "Cozy reading corner with coffee",
    "3D character portrait with expressions",
    "Colorful fantasy child character",
    "Vibrant geometric wolf illustration",
    "Futuristic armored warrior concept",
    "Isometric technology gadgets",
    "Abstract portrait with nature elements",
    "Cute cartoon monkey character"
  ];

  // Reset state when showGeneratedImage changes
  useEffect(() => {
    if (showGeneratedImage) {
      setImgLoaded(false);
      setCurrentImageIndex(0);
      setShowingImages(true);
    } else {
      setShowingImages(false);
    }
  }, [showGeneratedImage]);
  
  // Advance through images
  useEffect(() => {
    let imageInterval: ReturnType<typeof setTimeout>;
    
    if (showingImages && imgLoaded) {
      imageInterval = setTimeout(() => {
        setImgLoaded(false);
        setTimeout(() => {
          setCurrentImageIndex((prev) => 
            prev < imageSources.length - 1 ? prev + 1 : prev
          );
        }, 300);
      }, 3000); // Show each image for 3 seconds
    }
    
    return () => {
      if (imageInterval) clearTimeout(imageInterval);
    };
  }, [showingImages, imgLoaded, currentImageIndex, imageSources.length]);
  
  const handleImageLoad = () => {
    setImgLoaded(true);
  };
  
  if (showGeneratedImage) {
    return (
      <motion.div 
        className="flex-grow flex flex-col items-center justify-center py-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative group max-w-[90%] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
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
                src={imageSources[currentImageIndex]} 
                alt={`AI Generated ${imageCaptions[currentImageIndex]}`} 
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
            <>
              <motion.div 
                className="absolute bottom-3 right-3 bg-black/80 px-3 py-1 rounded text-xs text-white/90 backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                AI Generated
              </motion.div>
              
              <motion.div 
                className="absolute bottom-3 left-3 bg-black/80 px-3 py-1 rounded text-xs text-white/90 backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {imageCaptions[currentImageIndex]}
              </motion.div>
              
              <div className="absolute top-3 right-3 flex gap-1.5">
                {imageSources.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`h-1.5 w-1.5 rounded-full ${
                      index === currentImageIndex 
                        ? 'bg-white' 
                        : 'bg-white/40'
                    }`}
                    initial={{ scale: index === currentImageIndex ? 1.2 : 1 }}
                    animate={{ scale: index === currentImageIndex ? 1.2 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        <motion.div 
          className="mt-4 text-center max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: imgLoaded ? 1 : 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/80 text-sm">
            Generating variant {currentImageIndex + 1} of {imageSources.length}
          </p>
        </motion.div>
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
            Creating image variations...
          </motion.p>
          
          <motion.p 
            className="text-white/50 text-sm mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Analyzing your prompt and generating styles
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
