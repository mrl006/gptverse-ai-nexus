
import React from 'react';
import { FileText } from 'lucide-react';

const FileUploadPreview: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center h-full rounded-xl border border-dashed border-white/20 p-8">
      <div className="mb-4 p-3 rounded-full bg-[#1e1e2f]">
        <FileText className="h-8 w-8 text-[#00aeff]" />
      </div>
      <h4 className="text-lg font-medium text-white mb-2">Uploading PDF...</h4>
      <div className="w-48 h-1 bg-[#121827] rounded-full overflow-hidden mt-2">
        <div className="h-full bg-[#00aeff] rounded-full animate-[progress_2s_ease-in-out]" style={{width: '70%'}}></div>
      </div>
    </div>
  );
};

export default FileUploadPreview;
