import React from 'react';
import { TrackerItem } from '../types';
import { calculateItemProgress, getDaysRemaining } from '../services/storageService';
import {
  Sparkles,
  Calendar,
  Clock,
  CheckCircle2,
  Building2,
  Globe,
  Search,
  Filter,
  Plus
} from 'lucide-react';

interface StatsBannerProps {
  items: TrackerItem[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  statusFilter: 'all' | 'incomplete' | 'completed';
  setStatusFilter: (filter: 'all' | 'incomplete' | 'completed') => void;
  sortBy: 'target_deadline' | 'actual_deadline' | 'progress' | 'name';
  setSortBy: (sort: 'target_deadline' | 'actual_deadline' | 'progress' | 'name') => void;
  onOpenAddCollege: () => void;
  onOpenAddPortal: () => void;
}

export const StatsBanner: React.FC<StatsBannerProps> = ({
  items,
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  sortBy,
  setSortBy,
  onOpenAddCollege,
  onOpenAddPortal
}) => {
  // Aggregate stats
  const totalColleges = items.filter(i => i.type === 'college').length;
  const totalPortals = items.filter(i => i.type === 'portal').length;

  let totalSections = 0;
  let finishedSections = 0;
  let submittedSections = 0;
  let inProgressSections = 0;

  items.forEach((item) => {
    item.sections.forEach((sec) => {
      totalSections++;
      if (sec.status === 'finished') finishedSections++;
      if (sec.status === 'submitted') submittedSections++;
      if (sec.status === 'in_progress') inProgressSections++;
    });
  });

  const overallPercent = totalSections > 0
    ? Math.round(((submittedSections * 1.0 + finishedSections * 0.9 + inProgressSections * 0.4) / totalSections) * 100)
    : 0;

  // Find nearest target deadline
  const upcomingTargets = items
    .map(i => ({ item: i, remaining: getDaysRemaining(i.targetDeadline) }))
    .filter(x => !x.remaining.isPast)
    .sort((a, b) => a.remaining.days - b.remaining.days);

  const nextTarget = upcomingTargets[0];

  return (
    <div className="space-y-6">
      
      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Metric 1: Tracked Apps */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Applications Tracked
            </p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {items.length}
              </span>
              <span className="text-xs text-slate-500">
                ({totalColleges} colleges, {totalPortals} portals)
              </span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-navy-50 dark:bg-navy-950 text-navy-600 dark:text-navy-400 flex items-center justify-center">
            <Building2 className="w-5 h-5" />
          </div>
        </div>

        {/* Metric 2: Completion Progress */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Checklist Completion
            </p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {overallPercent}%
              </span>
              <span className="text-xs text-slate-500">
                {finishedSections + submittedSections}/{totalSections} sections
              </span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        {/* Metric 3: Next Target Goal */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs flex items-center justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-600 dark:text-navy-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              Nearest Target
            </p>
            {nextTarget ? (
              <div className="mt-1">
                <span className="text-lg font-bold text-slate-900 dark:text-white truncate block">
                  {nextTarget.remaining.isToday ? 'Today!' : `${nextTarget.remaining.days} days left`}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate block">
                  {nextTarget.item.name}
                </span>
              </div>
            ) : (
              <p className="text-xs text-slate-400 mt-1">No upcoming targets</p>
            )}
          </div>
          <div className="w-10 h-10 rounded-xl bg-navy-50 dark:bg-navy-950 text-navy-600 dark:text-navy-400 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        {/* Metric 4: Active Sections */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Active Sections
            </p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {inProgressSections}
              </span>
              <span className="text-xs text-slate-500">
                currently in progress
              </span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

      </div>

      {/* Filter, Search & Quick Action Toolbar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search colleges, portals, requirements..."
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
          />
        </div>

        {/* Filters and Sort */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Status Filter */}
          <div className="flex items-center rounded-xl bg-slate-100 dark:bg-slate-800 p-1 text-xs">
            <button
              type="button"
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                statusFilter === 'all'
                  ? 'bg-white dark:bg-slate-900 text-navy-600 dark:text-navy-400 shadow-2xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter('incomplete')}
              className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                statusFilter === 'incomplete'
                  ? 'bg-white dark:bg-slate-900 text-navy-600 dark:text-navy-400 shadow-2xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Needs Work
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter('completed')}
              className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                statusFilter === 'completed'
                  ? 'bg-white dark:bg-slate-900 text-navy-600 dark:text-navy-400 shadow-2xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Completed
            </button>
          </div>

          {/* Sort Selector */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-navy-500 font-medium"
          >
            <option value="target_deadline">Sort: Target Deadline (Earliest)</option>
            <option value="actual_deadline">Sort: Actual Deadline (Earliest)</option>
            <option value="progress">Sort: Progress % (Lowest first)</option>
            <option value="name">Sort: Alphabetical (A-Z)</option>
          </select>
        </div>

      </div>

    </div>
  );
};
