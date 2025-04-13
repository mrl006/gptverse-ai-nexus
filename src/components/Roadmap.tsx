
import React from 'react';
import RoadmapHeader from './roadmap/RoadmapHeader';
import RoadmapTimeline from './roadmap/RoadmapTimeline';
import RoadmapBackground from './roadmap/RoadmapBackground';
import { roadmapData } from '@/data/roadmapData';

const Roadmap = () => {
  return (
    <section id="history" className="section-padding py-20 relative overflow-hidden">
      <RoadmapBackground />
      
      <div className="container mx-auto px-4 relative">
        <RoadmapHeader />
        <RoadmapTimeline items={roadmapData} />
      </div>
    </section>
  );
};

export default Roadmap;
