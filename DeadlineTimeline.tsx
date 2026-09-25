import React from 'react';
import { TrackerItem } from '../types';
import { calculateItemProgress, getDaysRemaining } from '../services/storageService';
import { Calendar, Clock, Building2, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

interface DeadlineTimelineProps {
  items: TrackerItem[];
  onOpenDetails: (item: TrackerItem) => void;
}

export const DeadlineTimeline: React.FC<DeadlineTimelineProps> = ({
  items,
  onOpenDetails
}) => {
  // Sort items by target deadline, then actual deadline
  const sortedItems = [...items].sort((a, b) => {
    const dateA = new Date(a.targetDeadline || a.actualDeadline).getTime();
    const dateB = new Date(b.targetDeadline || b.actualDeadline).getTime();
    return dateA - dateB;
  });

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-navy-600 dark:text-navy-400" />
            Deadline & Target Timeline
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Compare your personal Target submission dates against official institution deadlines.
          </p>
        </div>
      </div>

      {sortedItems.length === 0 ? (
        <div className="text-center py-12 text-slate-400 text-sm">
          No application items added yet. Click "+ Add College" or "+ Add Portal" above.
        </div>
      ) : (
        <div className="relative border-l-2 border-navy-100 dark:border-navy-900/50 ml-4 sm:ml-6 space-y-6">
          {sortedItems.map((item) => {
            const progress = calculateItemProgress(item.sections);
            const targetInfo = getDaysRemaining(item.targetDeadline);
            const actualInfo = getDaysRemaining(item.actualDeadline);
            const isCollege = item.type === 'college';

            return (
              <div key={item.id} className="relative pl-6 sm:pl-8 group">
                {/* Timeline Node Dot */}
                <div
                  className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center text-white shadow-xs"
                  style={{ backgroundColor: item.color || '#4f46e5' }}
                />

                <div 
                  onClick={() => onOpenDetails(item)}
                  className="p-4 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 hover:border-navy-300 dark:hover:border-navy-700 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{item.bannerEmoji || '🎓'}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-navy-600 dark:group-hover:text-navy-400 transition-colors">
                            {item.name}
                          </span>
                          <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                            {isCollege ? 'College' : 'Portal'}
                          </span>
                        </div>
                        {item.decisionPlan && (
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {item.decisionPlan} • {item.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Progress pill */}
                    <div className="flex items-center gap-2">
                      <div className="text-right text-xs">
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          {progress.percent}% done
                        </span>
                        <p className="text-[10px] text-slate-400">
                          {progress.finished + progress.submitted}/{progress.total} sections
                        </p>
                      </div>
                      <div className="w-16 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <div
                          className="h-full bg-navy-600 transition-all"
                          style={{ width: `${progress.percent}%` }}
                        />
                      </div>
                    </div>

                  </div>

                  {/* Dual Deadline Comparative Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    
                    {/* Target Deadline */}
                    <div className="p-2.5 rounded-lg bg-navy-50/80 dark:bg-navy-950/50 border border-navy-100 dark:border-navy-900/60 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-navy-600 dark:text-navy-400 shrink-0" />
                        <div>
                          <p className="text-[10px] uppercase font-bold text-navy-600 dark:text-navy-400">
                            Your Target
                          </p>
                          <p className="font-bold text-slate-900 dark:text-white">
                            {targetInfo.formatted}
                          </p>
                        </div>
                      </div>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        targetInfo.isPast
                          ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                          : targetInfo.days <= 7
                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                            : 'bg-navy-100 text-navy-800 dark:bg-navy-900 dark:text-navy-200'
                      }`}>
                        {targetInfo.isPast ? 'Passed' : `${targetInfo.days}d left`}
                      </span>
                    </div>

                    {/* Actual Deadline */}
                    <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400">
                            Official Deadline
                          </p>
                          <p className="font-semibold text-slate-900 dark:text-white">
                            {actualInfo.formatted}
                          </p>
                        </div>
                      </div>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        actualInfo.isPast
                          ? 'bg-rose-100 text-rose-700'
                          : actualInfo.days <= 7
                            ? 'bg-rose-100 text-rose-800 animate-pulse'
                            : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                      }`}>
                        {actualInfo.isPast ? 'Closed' : `${actualInfo.days}d hard cut-off`}
                      </span>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
