import React, { useState } from 'react';
import { TrackerItem, TrackerSection, SectionStatus, CategoryType } from '../types';
import { StatusBadge } from './StatusBadge';
import { calculateItemProgress, getDaysRemaining } from '../services/storageService';
import {
  X,
  Building2,
  Globe,
  Calendar,
  Clock,
  Plus,
  Trash2,
  ExternalLink,
  Save,
  CheckCircle2,
  FileText,
  Link as LinkIcon,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COLLEGE_PRESETS } from '../data/collegePresets';

interface TrackerDetailModalProps {
  item: TrackerItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSaveItem: (updatedItem: TrackerItem) => void;
  onDeleteItem: (itemId: string) => void;
}

export const TrackerDetailModal: React.FC<TrackerDetailModalProps> = ({
  item,
  isOpen,
  onClose,
  onSaveItem,
  onDeleteItem
}) => {
  if (!isOpen || !item) return null;

  // Local state for editing
  const [name, setName] = useState(item.name);
  const [targetDeadline, setTargetDeadline] = useState(item.targetDeadline);
  const [actualDeadline, setActualDeadline] = useState(item.actualDeadline);
  const [intendedMajor, setIntendedMajor] = useState(item.intendedMajor || '');
  const [alternateMajor, setAlternateMajor] = useState(item.alternateMajor || '');
  const [notes, setNotes] = useState(item.notes || '');
  const [sections, setSections] = useState<TrackerSection[]>([...item.sections]);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  
  // New section input
  const [newSectionTitle, setNewSectionTitle] = useState('');
  const [newSectionCategory, setNewSectionCategory] = useState<CategoryType>('supplemental');
  const [newSectionWordLimit, setNewSectionWordLimit] = useState('');

  const isCollege = item.type === 'college';
  const progress = calculateItemProgress(sections);
  const targetInfo = getDaysRemaining(targetDeadline);
  const actualInfo = getDaysRemaining(actualDeadline);

  const handleSectionStatusChange = (sectionId: string, newStatus: SectionStatus) => {
    const updated = sections.map((sec) => {
      if (sec.id === sectionId) {
        return {
          ...sec,
          status: newStatus,
          updatedAt: new Date().toISOString()
        };
      }
      return sec;
    });
    setSections(updated);

    // If section was set to submitted or finished and reached 100%, trigger celebration!
    const newProgress = calculateItemProgress(updated);
    if (newProgress.allDone) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Safe fallback
      }
    }
  };

  const handleSectionNotesChange = (sectionId: string, notesVal: string) => {
    setSections(
      sections.map((sec) =>
        sec.id === sectionId ? { ...sec, notes: notesVal } : sec
      )
    );
  };

  const handleSectionUrlChange = (sectionId: string, urlVal: string) => {
    setSections(
      sections.map((sec) =>
        sec.id === sectionId ? { ...sec, draftUrl: urlVal } : sec
      )
    );
  };

  const handleRemoveSection = (sectionId: string) => {
    setSections(sections.filter((s) => s.id !== sectionId));
  };

  const handleAddSection = () => {
    if (!newSectionTitle.trim()) return;
    const newSec: TrackerSection = {
      id: `sec_custom_${Date.now()}`,
      title: newSectionTitle.trim(),
      description: 'Custom requirement added to this tracker.',
      category: newSectionCategory,
      wordLimit: newSectionWordLimit.trim() || undefined,
      status: 'not_started',
      updatedAt: new Date().toISOString()
    };
    setSections([...sections, newSec]);
    setNewSectionTitle('');
    setNewSectionWordLimit('');
  };

  const handleSave = () => {
    const updatedItem: TrackerItem = {
      ...item,
      name: name.trim(),
      targetDeadline,
      actualDeadline,
      intendedMajor: intendedMajor.trim() || undefined,
      alternateMajor: alternateMajor.trim() || undefined,
      notes: notes.trim(),
      sections,
      updatedAt: new Date().toISOString()
    };
    onSaveItem(updatedItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-2xs"
              style={{
                backgroundColor: `${item.color || '#4f46e5'}18`,
                border: `1px solid ${item.color || '#4f46e5'}40`
              }}
            >
              <span>{item.bannerEmoji || (isCollege ? '🏛️' : '🌐')}</span>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center gap-1">
                  {isCollege ? <Building2 className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
                  {isCollege ? 'College' : 'Portal'}
                </span>
                {item.decisionPlan && (
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-navy-50 text-navy-700 dark:bg-navy-950/70 dark:text-navy-300">
                    {item.decisionPlan}
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white truncate">
                {item.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {item.portalUrl && (
              <a
                href={item.portalUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Visit Portal</span>
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* Intended Major (for Colleges) */}
          {isCollege && (
            <div className="p-4 rounded-xl bg-linear-to-r from-navy-50/70 to-blue-50/70 dark:from-navy-950/40 dark:to-blue-950/40 border border-navy-100 dark:border-navy-900/60">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-navy-200 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-navy-600 dark:text-navy-400" />
                  Intended Undergraduate Major
                </label>
                {(() => {
                  const preset = COLLEGE_PRESETS.find(p => p.name.toLowerCase() === item.name.toLowerCase() || p.shortName.toLowerCase() === item.name.toLowerCase());
                  if (preset?.majorsUrl) {
                    return (
                      <a
                        href={preset.majorsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-navy-600 dark:text-navy-400 hover:underline"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>View {preset.shortName} Official Undergrad Majors Catalog</span>
                      </a>
                    );
                  }
                  return null;
                })()}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    value={intendedMajor}
                    onChange={(e) => setIntendedMajor(e.target.value)}
                    placeholder="e.g. Computer Science, Mechanical Engineering, Economics..."
                    className="w-full px-3 py-2 text-sm rounded-lg border border-navy-200 dark:border-navy-800 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-navy-500"
                  />
                  <p className="text-[11px] text-navy-700/80 dark:text-navy-300/80 mt-1">
                    Primary declared or intended major for this application.
                  </p>
                </div>

                <div>
                  <input
                    type="text"
                    value={alternateMajor}
                    onChange={(e) => setAlternateMajor(e.target.value)}
                    placeholder="Alternate / Second-choice major (optional)"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-navy-500"
                  />
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Alternate major or joint program concentration.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Target Deadline vs Actual Deadline Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Target Deadline */}
            <div className="p-4 rounded-xl bg-navy-50/70 dark:bg-navy-950/40 border border-navy-200 dark:border-navy-900/60">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-navy-700 dark:text-navy-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Target Deadline
                </label>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                  targetInfo.isPast
                    ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                    : targetInfo.days <= 7
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                      : 'bg-navy-100 text-navy-800 dark:bg-navy-900 dark:text-navy-200'
                }`}>
                  {targetInfo.isPast ? 'Past target goal' : `${targetInfo.days} days remaining`}
                </span>
              </div>
              <input
                type="date"
                value={targetDeadline}
                onChange={(e) => setTargetDeadline(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-navy-200 dark:border-navy-800 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 font-semibold"
              />
              <p className="text-[11px] text-navy-600/80 dark:text-navy-400/80 mt-1.5">
                Target date you aim to wrap up all sections before final submission.
              </p>
            </div>

            {/* Actual Deadline */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Actual Official Deadline
                </label>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                  actualInfo.isPast
                    ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                    : actualInfo.days <= 7
                      ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 animate-pulse'
                      : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                }`}>
                  {actualInfo.isPast ? 'Past Cut-off' : `${actualInfo.days} days until hard deadline`}
                </span>
              </div>
              <input
                type="date"
                value={actualDeadline}
                onChange={(e) => setActualDeadline(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 font-semibold"
              />
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5">
                Official institution or portal cut-off deadline.
              </p>
            </div>

          </div>

          {/* Overall Progress Banner */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <span className="text-slate-700 dark:text-slate-300">
                Application Checklist Completion ({progress.percent}%)
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                {progress.finished + progress.submitted} of {progress.total} sections ready
              </span>
            </div>

            <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex">
              <div 
                style={{ width: `${(progress.submitted / progress.total) * 100}%` }}
                className="bg-navy-600 transition-all duration-300"
              />
              <div 
                style={{ width: `${(progress.finished / progress.total) * 100}%` }}
                className="bg-emerald-500 transition-all duration-300"
              />
              <div 
                style={{ width: `${(progress.inProgress / progress.total) * 100}%` }}
                className="bg-amber-500 transition-all duration-300"
              />
            </div>

            {/* Status Legend Pills */}
            <div className="flex items-center gap-3 mt-3 pt-2 border-t border-slate-200 dark:border-slate-700/60 text-xs flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                Not Started ({progress.notStarted})
              </span>
              <span className="inline-flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                In Progress ({progress.inProgress})
              </span>
              <span className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                Finished ({progress.finished})
              </span>
              <span className="inline-flex items-center gap-1.5 text-navy-700 dark:text-navy-400 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-navy-600" />
                Submitted ({progress.submitted})
              </span>
            </div>
          </div>

          {/* Section Items Detailed List */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Requirements & Sections ({sections.length})
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Click any status indicator below to update your progress.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {sections.map((sec, idx) => (
                <div
                  key={sec.id}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                          {idx + 1}. {sec.title}
                        </span>
                        {sec.wordLimit && (
                          <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-900 text-[10px] font-semibold">
                            {sec.wordLimit}
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] capitalize font-medium">
                          {sec.category}
                        </span>
                      </div>
                      {sec.description && (
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          {sec.description}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {/* Visual Color-coded Status Badge with dropdown picker */}
                      <StatusBadge
                        status={sec.status}
                        onChange={(newStatus) => handleSectionStatusChange(sec.id, newStatus)}
                        size="md"
                        isInteractive={true}
                      />

                      <button
                        type="button"
                        onClick={() => handleRemoveSection(sec.id)}
                        className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                        title="Delete section"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Optional Draft Link & Notes for this section */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                    <div className="relative">
                      <LinkIcon className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                      <input
                        type="url"
                        value={sec.draftUrl || ''}
                        onChange={(e) => handleSectionUrlChange(sec.id, e.target.value)}
                        placeholder="Google Doc draft link or portfolio URL..."
                        className="w-full pl-8 pr-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-navy-500"
                      />
                    </div>

                    <div className="relative">
                      <FileText className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                      <input
                        type="text"
                        value={sec.notes || ''}
                        onChange={(e) => handleSectionNotesChange(sec.id, e.target.value)}
                        placeholder="Notes (e.g. proofread by counselor, prompt 2 idea)..."
                        className="w-full pl-8 pr-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-navy-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Custom Section Form */}
            <div className="mt-4 p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/50">
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                + Add Another Section or Requirement
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input
                  type="text"
                  value={newSectionTitle}
                  onChange={(e) => setNewSectionTitle(e.target.value)}
                  placeholder="Section title (e.g. Peer Recommendation)"
                  className="sm:col-span-2 px-3 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
                />
                <input
                  type="text"
                  value={newSectionWordLimit}
                  onChange={(e) => setNewSectionWordLimit(e.target.value)}
                  placeholder="Word limit (e.g. 250 words)"
                  className="px-3 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
                />
              </div>
              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  onClick={handleAddSection}
                  disabled={!newSectionTitle.trim()}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-navy-600 hover:bg-navy-700 transition-colors cursor-pointer disabled:opacity-50"
                >
                  Add Requirement
                </button>
              </div>
            </div>

          </div>

          {/* Strategy / General Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
              General Strategy & Application Notes
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Keep track of login credentials notes, specific faculty or programs you mentioned, scholarship deadlines, interview dates..."
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
            />
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 rounded-b-2xl flex items-center justify-between">
          {!isConfirmingDelete ? (
            <button
              type="button"
              onClick={() => setIsConfirmingDelete(true)}
              className="px-3 py-2 text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Delete from Tracker</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  onDeleteItem(item.id);
                  onClose();
                }}
                className="px-3.5 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 active:scale-95 rounded-xl shadow-xs transition-all cursor-pointer flex items-center gap-1.5 animate-in fade-in"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Yes, Delete {item.type === 'college' ? 'College' : 'Portal'}</span>
              </button>
              <button
                type="button"
                onClick={() => setIsConfirmingDelete(false)}
                className="px-2.5 py-2 text-xs font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          )}

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-navy-600 hover:bg-navy-700 active:scale-95 shadow-md shadow-navy-500/20 transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
