import React, { useState, useEffect } from 'react';
import { PORTAL_PRESETS } from '../data/portalPresets';
import { TrackerItem, TrackerSection, CategoryType } from '../types';
import { X, Globe, Sparkles, Plus, Trash2, Calendar, Clock, Check } from 'lucide-react';

interface AddPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPortal: (portal: TrackerItem) => void;
}

export const AddPortalModal: React.FC<AddPortalModalProps> = ({
  isOpen,
  onClose,
  onAddPortal
}) => {
  const [selectedPortalId, setSelectedPortalId] = useState<string>('uc_app');
  const [isCustom, setIsCustom] = useState(false);

  // Form Fields
  const [portalName, setPortalName] = useState('');
  const [targetDeadline, setTargetDeadline] = useState('');
  const [actualDeadline, setActualDeadline] = useState('');
  const [portalUrl, setPortalUrl] = useState('');
  const [notes, setNotes] = useState('');

  // Editable Sections list (auto-populated)
  const [sections, setSections] = useState<Array<{
    title: string;
    description: string;
    category: CategoryType;
    wordLimit?: string;
  }>>([]);

  const [newSectionTitle, setNewSectionTitle] = useState('');

  const selectPortalPreset = (presetId: string) => {
    setIsCustom(false);
    setSelectedPortalId(presetId);
    const preset = PORTAL_PRESETS.find(p => p.id === presetId);
    if (!preset) return;

    setPortalName(preset.name);
    setPortalUrl(preset.website);
    setActualDeadline(preset.defaultActualDeadline);

    // Compute target buffer date
    const actualDate = new Date(`${preset.defaultActualDeadline}T12:00:00`);
    actualDate.setDate(actualDate.getDate() - preset.defaultTargetBufferDays);
    const targetStr = actualDate.toISOString().split('T')[0];
    setTargetDeadline(targetStr);

    // Auto-populate sections specific to this portal!
    setSections(preset.defaultSections.map(s => ({ ...s })));
  };

  useEffect(() => {
    if (isOpen) {
      selectPortalPreset('uc_app');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCustomMode = () => {
    setIsCustom(true);
    setSelectedPortalId('custom');
    setPortalName('');
    setPortalUrl('');
    const currentYear = new Date().getFullYear();
    setActualDeadline(`${currentYear}-12-01`);
    setTargetDeadline(`${currentYear}-11-15`);
    setSections([
      {
        title: 'Account Registration & Personal Details',
        description: 'Demographics, citizenship, and residency.',
        category: 'general'
      },
      {
        title: 'Academic Records & Transcripts',
        description: 'Coursework, grades, and self-reported GPA.',
        category: 'academics'
      },
      {
        title: 'Activities, Work & Extracurriculars',
        description: 'Listing key hobbies, achievements, and responsibilities.',
        category: 'general'
      },
      {
        title: 'Personal Essay / Statement',
        description: 'Main application essay or statement of intent.',
        category: 'essay',
        wordLimit: '500 words'
      },
      {
        title: 'Review, Fee Waiver / Payment & Submission',
        description: 'Verification of sections and official submission.',
        category: 'general'
      }
    ]);
  };

  const handleAddCustomSection = () => {
    if (!newSectionTitle.trim()) return;
    setSections([
      ...sections,
      {
        title: newSectionTitle.trim(),
        description: 'Custom portal section.',
        category: 'general'
      }
    ]);
    setNewSectionTitle('');
  };

  const handleRemoveSection = (idx: number) => {
    setSections(sections.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!portalName.trim()) return;

    const matchedPreset = PORTAL_PRESETS.find(p => p.id === selectedPortalId);

    const trackerSections: TrackerSection[] = sections.map((sec, idx) => ({
      id: `sec_portal_${Date.now()}_${idx}`,
      title: sec.title,
      description: sec.description,
      category: sec.category,
      wordLimit: sec.wordLimit,
      status: 'not_started', // Defaults to not started
      updatedAt: new Date().toISOString()
    }));

    const newPortalItem: TrackerItem = {
      id: `portal_${Date.now()}`,
      type: 'portal',
      name: portalName.trim(),
      portalType: matchedPreset?.shortName || portalName.trim(),
      location: 'Application Portal',
      color: matchedPreset?.color || '#0284c7',
      bannerEmoji: matchedPreset?.emoji || '🌐',
      targetDeadline: targetDeadline || actualDeadline,
      actualDeadline: actualDeadline || targetDeadline,
      decisionPlan: 'Standard',
      sections: trackerSections,
      notes: notes.trim(),
      portalUrl: portalUrl || matchedPreset?.website,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    onAddPortal(newPortalItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Add College Application Portal
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Track UC App, CommonApp, CSU Apply, Coalition App, and custom portals.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Portal Presets Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                1. Choose Application Portal
              </label>
              <button
                type="button"
                onClick={handleCustomMode}
                className={`text-xs font-semibold cursor-pointer transition-colors ${
                  isCustom
                    ? 'text-blue-600 dark:text-blue-400 underline'
                    : 'text-slate-500 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                + Add Custom Portal
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PORTAL_PRESETS.map((preset) => {
                const isSelected = selectedPortalId === preset.id && !isCustom;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => selectPortalPreset(preset.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? 'bg-blue-50/90 dark:bg-blue-950/60 border-blue-500 text-blue-950 dark:text-blue-100 ring-2 ring-blue-500/50 shadow-xs'
                        : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700'
                    }`}
                  >
                    <span className="text-2xl mt-0.5 shrink-0">{preset.emoji}</span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                          {preset.shortName}
                        </span>
                        {isSelected && (
                          <span className="text-xs text-blue-600 dark:text-blue-400 font-bold">✓</span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                        {preset.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Portal Settings Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Portal Display Name *
              </label>
              <input
                type="text"
                required
                value={portalName}
                onChange={(e) => setPortalName(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. UC Application (UC App)"
              />
            </div>

            {/* Target vs Actual Deadline */}
            <div className="p-3.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60">
              <div className="flex items-center gap-1.5 mb-1.5 text-blue-700 dark:text-blue-300 font-semibold text-xs">
                <Clock className="w-3.5 h-3.5" />
                <span>Your Target Deadline *</span>
              </div>
              <input
                type="date"
                required
                value={targetDeadline}
                onChange={(e) => setTargetDeadline(e.target.value)}
                className="w-full px-3 py-1.5 text-sm rounded-lg border border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-[11px] text-blue-600/80 dark:text-blue-400/80 mt-1">
                Aim to finish portal sections before actual submission.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-1.5 mb-1.5 text-slate-700 dark:text-slate-300 font-semibold text-xs">
                <Calendar className="w-3.5 h-3.5" />
                <span>Actual Portal Deadline *</span>
              </div>
              <input
                type="date"
                required
                value={actualDeadline}
                onChange={(e) => setActualDeadline(e.target.value)}
                className="w-full px-3 py-1.5 text-sm rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Official portal submission deadline.
              </p>
            </div>
          </div>

          {/* Automatically populated Portal sections */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  Automatically Loaded Portal Sections ({sections.length} sections)
                </label>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Pre-configured based on requirements specific to this portal. Defaults to "Not Started".
                </p>
              </div>
            </div>

            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {sections.map((sec, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 flex items-start justify-between gap-3 text-xs"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {idx + 1}. {sec.title}
                      </span>
                      {sec.wordLimit && (
                        <span className="px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-900 text-[10px] font-medium">
                          {sec.wordLimit}
                        </span>
                      )}
                      <span className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] capitalize">
                        {sec.category}
                      </span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed line-clamp-2">
                      {sec.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemoveSection(idx)}
                    className="p-1 text-slate-400 hover:text-red-500 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer shrink-0"
                    title="Remove this section"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Quick Add Custom Section input */}
            <div className="flex gap-2 mt-3">
              <input
                type="text"
                value={newSectionTitle}
                onChange={(e) => setNewSectionTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddCustomSection();
                  }
                }}
                placeholder="Add another portal section..."
                className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={handleAddCustomSection}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-900 hover:bg-blue-100 cursor-pointer flex items-center gap-1 shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Section
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 rounded-b-2xl flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!portalName.trim() || !targetDeadline || !actualDeadline}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-md shadow-blue-500/20 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Check className="w-4 h-4" />
            Add Portal to Tracker
          </button>
        </div>

      </div>
    </div>
  );
};
