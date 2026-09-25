import React, { useState } from 'react';
import { TrackerItem, SectionStatus } from '../types';
import { calculateItemProgress, getDaysRemaining } from '../services/storageService';
import { StatusBadge } from './StatusBadge';
import { 
  Building2, 
  Globe, 
  Calendar, 
  Clock, 
  ChevronRight, 
  ExternalLink, 
  MoreVertical,
  Trash2,
  Edit3,
  CheckCircle2,
  AlertCircle,
  GraduationCap
} from 'lucide-react';

interface TrackerCardProps {
  item: TrackerItem;
  onUpdateSectionStatus: (itemId: string, sectionId: string, status: SectionStatus) => void;
  onOpenDetails: (item: TrackerItem) => void;
  onDeleteItem: (itemId: string) => void;
}

export const TrackerCard: React.FC<TrackerCardProps> = ({
  item,
  onUpdateSectionStatus,
  onOpenDetails,
  onDeleteItem
}) => {
  const [showAllSections, setShowAllSections] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const progress = calculateItemProgress(item.sections);
  const targetInfo = getDaysRemaining(item.targetDeadline);
  const actualInfo = getDaysRemaining(item.actualDeadline);

  const isCollege = item.type === 'college';

  // Visible sections preview (first 4 or all if expanded)
  const visibleSections = showAllSections ? item.sections : item.sections.slice(0, 4);
  const hasHiddenSections = item.sections.length > 4;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group">
      
      {/* Top Banner & Header */}
      <div className="p-5 pb-4 border-b border-slate-100 dark:border-slate-800/80">
        <div className="flex items-start justify-between gap-3 mb-3">
          
          <div className="flex items-center gap-3 min-w-0">
            {/* Visual Icon Badge */}
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-2xs"
              style={{ backgroundColor: `${item.color || '#4f46e5'}18`, border: `1px solid ${item.color || '#4f46e5'}40` }}
            >
              <span>{item.bannerEmoji || (isCollege ? '🏛️' : '🌐')}</span>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center gap-1">
                  {isCollege ? <Building2 className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
                  {isCollege ? 'College' : 'Portal'}
                </span>
                {item.decisionPlan && (
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-navy-50 text-navy-700 dark:bg-navy-950/70 dark:text-navy-300 border border-navy-100 dark:border-navy-900/50">
                    {item.decisionPlan}
                  </span>
                )}
                {item.portalType && isCollege && (
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    via {item.portalType}
                  </span>
                )}
              </div>

              <h3 
                onClick={() => onOpenDetails(item)}
                className="text-base font-bold text-slate-900 dark:text-white truncate cursor-pointer hover:text-navy-600 dark:hover:text-navy-400 mt-1"
                title={item.name}
              >
                {item.name}
              </h3>

              {item.intendedMajor && (
                <div className="flex items-center gap-1.5 mt-1 text-xs text-navy-700 dark:text-navy-300 font-medium">
                  <GraduationCap className="w-3.5 h-3.5 text-navy-500 shrink-0" />
                  <span className="truncate">Major: {item.intendedMajor}</span>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons: Direct Quick Delete & More Menu */}
          <div className="flex items-center gap-1 shrink-0">
            {confirmDelete ? (
              <div className="flex items-center gap-1 animate-in fade-in">
                <button
                  type="button"
                  onClick={() => onDeleteItem(item.id)}
                  className="px-2.5 py-1 text-[11px] font-bold text-white bg-red-600 hover:bg-red-700 active:scale-95 rounded-lg shadow-xs transition-all cursor-pointer flex items-center gap-1"
                  title="Click to confirm deletion"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Confirm Delete</span>
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmDelete(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer text-xs"
                  title="Cancel"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setConfirmDelete(true)}
                className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition-colors cursor-pointer"
                title="Delete from Tracker"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}

            <div className="relative">
              <button
                type="button"
                onClick={() => setShowMenu(!showMenu)}
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <MoreVertical className="w-4 h-4" />
              </button>

              {showMenu && (
                <div 
                  className="absolute right-0 mt-1 w-44 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl z-20 py-1"
                  onMouseLeave={() => setShowMenu(false)}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setShowMenu(false);
                      onOpenDetails(item);
                    }}
                    className="w-full px-3 py-2 text-xs text-left text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2 cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    View & Edit Sections
                  </button>
                  {item.portalUrl && (
                    <a
                      href={item.portalUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setShowMenu(false)}
                      className="w-full px-3 py-2 text-xs text-left text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Open Portal Website
                    </a>
                  )}
                  <div className="border-t border-slate-100 dark:border-slate-800 my-1" />
                  <button
                    type="button"
                    onClick={() => {
                      setShowMenu(false);
                      onDeleteItem(item.id);
                    }}
                    className="w-full px-3 py-2 text-xs text-left text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 flex items-center gap-2 cursor-pointer font-medium"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Delete Application
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Deadlines Section: Target vs Actual */}
        <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs">
          
          {/* Target Deadline */}
          <div className="p-2.5 rounded-xl bg-navy-50/70 dark:bg-navy-950/40 border border-navy-100 dark:border-navy-900/50">
            <div className="flex items-center justify-between text-navy-700 dark:text-navy-300 font-semibold mb-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-navy-600 dark:text-navy-400" />
                Target Goal
              </span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                targetInfo.isPast 
                  ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300' 
                  : targetInfo.days <= 7 
                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' 
                    : 'bg-navy-100 text-navy-800 dark:bg-navy-900 dark:text-navy-200'
              }`}>
                {targetInfo.isPast ? 'Past target' : targetInfo.isToday ? 'Today!' : `${targetInfo.days}d left`}
              </span>
            </div>
            <p className="font-bold text-slate-800 dark:text-slate-200 text-xs">
              {targetInfo.formatted}
            </p>
          </div>

          {/* Actual Deadline */}
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
            <div className="flex items-center justify-between text-slate-600 dark:text-slate-400 font-medium mb-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-500" />
                Official Deadline
              </span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                actualInfo.isPast
                  ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                  : actualInfo.days <= 7
                    ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 animate-pulse'
                    : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
              }`}>
                {actualInfo.isPast ? 'Closed' : `${actualInfo.days}d left`}
              </span>
            </div>
            <p className="font-semibold text-slate-800 dark:text-slate-200 text-xs">
              {actualInfo.formatted}
            </p>
          </div>

        </div>

        {/* Progress Bar & Status Pill Breakdown */}
        <div className="mt-3.5 space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <span>Section Progress</span>
              {progress.allDone && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> All Done!
                </span>
              )}
            </span>
            <span className="font-bold text-slate-900 dark:text-white">
              {progress.percent}%
            </span>
          </div>

          {/* Multi-segment progress bar */}
          <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex">
            {/* Submitted */}
            <div 
              style={{ width: `${(progress.submitted / progress.total) * 100}%` }}
              className="bg-navy-600 transition-all duration-300"
              title={`${progress.submitted} Submitted`}
            />
            {/* Finished */}
            <div 
              style={{ width: `${(progress.finished / progress.total) * 100}%` }}
              className="bg-emerald-500 transition-all duration-300"
              title={`${progress.finished} Finished`}
            />
            {/* In Progress */}
            <div 
              style={{ width: `${(progress.inProgress / progress.total) * 100}%` }}
              className="bg-amber-500 transition-all duration-300"
              title={`${progress.inProgress} In Progress`}
            />
          </div>

          {/* Small Status Counts summary */}
          <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500 dark:text-slate-400 flex-wrap">
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600" />
              {progress.notStarted} Not Started
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              {progress.inProgress} In Progress
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {progress.finished} Finished
            </span>
            {progress.submitted > 0 && (
              <>
                <span>•</span>
                <span className="inline-flex items-center gap-1 text-navy-700 dark:text-navy-400">
                  <span className="w-2 h-2 rounded-full bg-navy-600" />
                  {progress.submitted} Submitted
                </span>
              </>
            )}
          </div>
        </div>

      </div>

      {/* Sections List */}
      <div className="p-4 flex-1 bg-slate-50/50 dark:bg-slate-900/40 space-y-2">
        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1">
          <span>Sections ({item.sections.length})</span>
          <span>Click status to update</span>
        </div>

        <div className="space-y-1.5">
          {visibleSections.map((sec) => (
            <div
              key={sec.id}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-800 flex items-center justify-between gap-3 text-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="min-w-0 flex-1">
                <p 
                  onClick={() => onOpenDetails(item)}
                  className="font-medium text-slate-800 dark:text-slate-200 truncate cursor-pointer hover:text-navy-600 dark:hover:text-navy-400"
                  title={sec.title}
                >
                  {sec.title}
                </p>
                {sec.wordLimit && (
                  <span className="text-[10px] text-slate-400 dark:text-slate-500">
                    {sec.wordLimit}
                  </span>
                )}
              </div>

              {/* Color-coded interactive status badge */}
              <StatusBadge
                status={sec.status}
                onChange={(newStatus) => onUpdateSectionStatus(item.id, sec.id, newStatus)}
                size="sm"
                isInteractive={true}
              />
            </div>
          ))}
        </div>

        {hasHiddenSections && (
          <button
            type="button"
            onClick={() => setShowAllSections(!showAllSections)}
            className="w-full py-1.5 text-center text-xs font-semibold text-navy-600 dark:text-navy-400 hover:text-navy-800 dark:hover:text-navy-300 hover:underline cursor-pointer transition-colors"
          >
            {showAllSections
              ? 'Show less'
              : `+ Show ${item.sections.length - 4} more sections`}
          </button>
        )}
      </div>

      {/* Footer link to open detailed editor */}
      <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
        <button
          type="button"
          onClick={() => onOpenDetails(item)}
          className="text-slate-600 dark:text-slate-400 hover:text-navy-600 dark:hover:text-navy-400 font-semibold flex items-center gap-1 cursor-pointer transition-colors"
        >
          <span>Open Full Checklist & Notes</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        {progress.percent === 100 && (
          <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800">
            Ready to Submit!
          </span>
        )}
      </div>

    </div>
  );
};
