
import React from 'react';
import { Roadmap, RoadmapTopic, RoadmapTopicType } from '../types';
import { Icons } from './ui';

interface RoadmapCanvasProps {
  roadmap: Roadmap;
}

// Helper: Get styles for the card based on topic type
const getTypeStyles = (type: RoadmapTopicType) => {
  switch (type) {
    case 'core':
      return 'border-brand-500 hover:shadow-brand-500/20';
    case 'advanced':
      return 'border-purple-500 hover:shadow-purple-500/20';
    case 'optional':
      return 'border-slate-300 dark:border-slate-700 border-dashed hover:border-slate-400';
    case 'milestone':
      return 'border-amber-500 bg-amber-50/50 dark:bg-amber-900/10 hover:shadow-amber-500/20';
    default:
      return 'border-slate-200 dark:border-slate-700';
  }
};

// Helper: Get color for the center node dot
const getIndicatorColor = (type: RoadmapTopicType) => {
  switch (type) {
    case 'core': return 'bg-brand-500';
    case 'advanced': return 'bg-purple-500';
    case 'optional': return 'bg-slate-300 dark:bg-slate-600';
    case 'milestone': return 'bg-amber-500';
    default: return 'bg-slate-200';
  }
};

// Internal Component: Single Topic Node
const TopicNode: React.FC<{ topic: RoadmapTopic; isEven: boolean; index: number }> = ({ topic, isEven, index }) => {
  return (
    <div className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row-reverse' : ''} mb-8 md:mb-0 group`}>

      {/* Spacer for Desktop Alignment (Pushes content to one side) */}
      <div className="hidden md:block w-5/12" />

      {/* Center Point / Marker */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-slate-900 z-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 shadow-sm transition-transform duration-300 group-hover:scale-125">
        <div className={`w-3 h-3 rounded-full ${getIndicatorColor(topic.type)}`} />
      </div>

      {/* Connector Line (Horizontal) - Desktop Only */}
      {/* We draw a line from the center to the card */}
      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 bg-slate-200 dark:bg-slate-700 w-[calc(8.33%-1rem)] transition-colors duration-300 group-hover:bg-brand-200 ${isEven ? 'right-1/2 mr-4' : 'left-1/2 ml-4'}`} />

      {/* Card Container */}
      <div className={`w-full pl-16 md:pl-0 md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <div className={`
            relative p-5 rounded-xl border-2 transition-all duration-300 
            bg-white dark:bg-slate-900 shadow-premium
            hover:-translate-y-1 hover:shadow-2xl hover:border-brand-600
            ${getTypeStyles(topic.type)}
          `}>
          {/* Small triangle pointer for desktop */}
          <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-inherit border-inherit border-t-2 border-r-2 rotate-45 z-0
                ${isEven ? '-right-[7px] border-l-0 border-b-0 bg-white dark:bg-slate-900' : '-left-[7px] border-t-0 border-r-0 border-l-2 border-b-2 bg-white dark:bg-slate-900'}
             `}></div>

          <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} relative z-10`}>
            <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:flex-row-reverse' : ''}`}>
              {topic.type === 'milestone' && <span className="text-lg">🏆</span>}
              <h4 className="font-bold text-base md:text-lg text-slate-900 dark:text-white">{topic.title}</h4>
              {topic.type !== 'core' && topic.type !== 'milestone' && (
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                  {topic.type}
                </span>
              )}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {topic.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
export const RoadmapCanvas: React.FC<RoadmapCanvasProps> = ({ roadmap }) => {
  // We need a global index to alternate left/right correctly across stages
  let globalTopicIndex = 0;

  return (
    <div className="roadmap-canvas w-full max-w-5xl mx-auto py-10 px-4 select-none">

      {/* Container for the timeline */}
      <div className="relative">

        {/* Central Vertical Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 dark:bg-slate-800 -translate-x-1/2 rounded-full" />

        {/* Mobile Vertical Line (Left aligned) */}
        <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-slate-100 dark:bg-slate-800 rounded-full" />

        <div className="space-y-20">
          {roadmap.stages.map((stage) => (
            <div key={stage.id} className="relative">

              {/* Stage Marker */}
              <div className="flex items-center justify-center mb-12 relative z-10">
                <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-full font-bold text-sm shadow-xl border-4 border-white dark:border-slate-900 uppercase tracking-widest">
                  {stage.label}
                </div>
              </div>

              {/* Topics Grid */}
              <div className="space-y-12 md:space-y-0">
                {stage.topics.map((topic) => {
                  const isEven = globalTopicIndex % 2 === 0;
                  globalTopicIndex++;

                  return (
                    <TopicNode
                      key={topic.id}
                      topic={topic}
                      isEven={isEven}
                      index={globalTopicIndex}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Completion Marker */}
        <div className="flex justify-center mt-16 relative z-10">
          <div className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-900 shadow-xl text-2xl animate-bounce">
            🎓
          </div>
        </div>
      </div>
    </div>
  );
};
