
import React from 'react';

interface ImageGeneratorPreviewProps {
  showGeneratedImage: boolean;
  isTyping: boolean;
}

const ImageGeneratorPreview: React.FC<ImageGeneratorPreviewProps> = ({ 
  showGeneratedImage, 
  isTyping 
}) => {
  if (showGeneratedImage) {
    return (
      <div className="flex-grow flex items-center justify-center">
        <div className="relative">
          <img 
            src="/lovable-uploads/aa4883fb-56f2-46d8-95f2-c7e2d19ba69d.png" 
            alt="Generated" 
            className="max-w-full max-h-[300px] rounded-lg border border-white/10 object-cover"
          />
        </div>
      </div>
    );
  }
  
  if (isTyping) {
    return (
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-lg border border-white/10 bg-[#1e1e2f] mx-auto mb-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#d946ef]/30 via-[#8b5cf6]/30 to-[#0ef34b]/30 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-8 w-8 border-4 border-[#d946ef] border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
          <p className="text-white/80">Generating your image...</p>
        </div>
      </div>
    );
  }
  
  return null;
};

export default ImageGeneratorPreview;
