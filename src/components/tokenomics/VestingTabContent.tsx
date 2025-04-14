
import React from 'react';
import { unlockSchedules } from './TokenDistributionData';

const VestingTabContent = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white">Vesting Schedule</h3>
      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
        {unlockSchedules.map((schedule, index) => (
          <div 
            key={index}
            className="p-4 rounded-lg backdrop-blur-xl bg-white/10 border border-white/20 hover:border-[#8B5CF6]/30 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <span className="text-white font-medium">{schedule.category}</span>
              <span className="text-[#8B5CF6] bg-[#8B5CF6]/10 px-2 py-1 rounded text-xs backdrop-blur-sm">
                {schedule.months} months
              </span>
            </div>
            <div className="mt-3">
              <div className="flex justify-between items-center text-sm mb-1">
                <span className="text-white/70">Initial Unlock:</span>
                <span className="text-white">{schedule.initialUnlock}%</span>
              </div>
              <div className="mt-1 text-white/80 text-sm">{schedule.schedule}</div>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full mt-3 overflow-hidden">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]"
                style={{ width: `${schedule.initialUnlock}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VestingTabContent;
