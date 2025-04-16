
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const EnterpriseButton = () => {
  return (
    <div className="hidden md:flex">
      <Button className="rounded-full bg-gradient-to-r from-[#0B3954] to-[#087E8B] hover:brightness-110 text-white font-sans shadow-md border border-[#087E8B]/30">
        Enterprise Portal <ArrowRight className="ml-1" size={16} />
      </Button>
    </div>
  );
};
