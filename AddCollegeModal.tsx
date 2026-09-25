import React, { useState, useEffect } from 'react';
import { COLLEGE_PRESETS } from '../data/collegePresets';
import { TrackerItem, TrackerSection, CategoryType } from '../types';
import { 
  X, 
  Search, 
  Sparkles, 
  Building2, 
  Plus, 
  Trash2, 
  Calendar, 
  Clock, 
  Check, 
  ExternalLink,
  BookOpen,
  GraduationCap
} from 'lucide-react';

interface AddCollegeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCollege: (college: TrackerItem) => void;
}

export const AddCollegeModal: React.FC<AddCollegeModalProps> = ({
  isOpen,
  onClose,
  onAddCollege
}) => {
  const [activeMode, setActiveMode] = useState<'preset' | 'custom'>('preset');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPresetId, setSelectedPresetId] = useState<string>('princeton');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'uc' | 'ivy' | 'top20' | 'liberal_arts'>('all');

  // Form Fields
  const [name, setName] = useState('');
  const [portalType, setPortalType] = useState('Common App');
  const [decisionPlan, setDecisionPlan] = useState<'Regular Decision' | 'Early Action' | 'Early Decision' | 'Rolling' | 'Transfer'>('Regular Decision');
  const [targetDeadline, setTargetDeadline] = useState('');
  const [actualDeadline, setActualDeadline] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  
  // Majors Field
  const [intendedMajor, setIntendedMajor] = useState<string>('');
  const [customMajorInput, setCustomMajorInput] = useState<string>('');
  const [isTypingCustomMajor, setIsTypingCustomMajor] = useState(false);
  const [alternateMajor, setAlternateMajor] = useState<string>('');

  // Editable Sections list (auto-populated)
  const [sections, setSections] = useState<Array<{
    title: string;
    description: string;
    category: CategoryType;
    wordLimit?: string;
  }>>([]);

  const [newSectionTitle, setNewSectionTitle] = useState('');

  const currentPreset = COLLEGE_PRESETS.find(p => p.id === selectedPresetId);

  // Handle Preset selection
  const selectPreset = (presetId: string) => {
    setActiveMode('preset');
    setSelectedPresetId(presetId);
    const preset = COLLEGE_PRESETS.find(p => p.id === presetId);
    if (!preset) return;

    setName(preset.name);
    setPortalType(preset.portalType);
    setDecisionPlan(preset.defaultPlan);
    setActualDeadline(preset.actualDeadline);
    setLocation(preset.location);

    // Default major to first official major
    if (preset.majors && preset.majors.length > 0) {
      setIntendedMajor(preset.majors[0]);
    } else {
      setIntendedMajor('Computer Science');
    }
    setIsTypingCustomMajor(false);
    setCustomMajorInput('');

    // Calculate default target deadline (e.g. 14 days before actual)
    const actualDate = new Date(`${preset.actualDeadline}T12:00:00`);
    actualDate.setDate(actualDate.getDate() - preset.defaultTargetBufferDays);
    const targetStr = actualDate.toISOString().split('T')[0];
    setTargetDeadline(targetStr);

    // Auto-populate institution-specific requirements!
    setSections(preset.defaultSections.map(s => ({ ...s })));
  };

  // Initialize once open
  useEffect(() => {
    if (isOpen) {
      selectPreset('princeton');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredPresets = COLLEGE_PRESETS.filter((p) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.shortName.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q) ||
      (p.aliases && p.aliases.some((a) => a.toLowerCase().includes(q)));

    if (!matchesSearch) return false;

    if (categoryFilter === 'uc') {
      return (
        p.portalType === 'UC Application' ||
        p.id.startsWith('uc') ||
        p.name.toLowerCase().includes('california')
      );
    }
    if (categoryFilter === 'ivy') {
      return [
        'harvard',
        'yale',
        'princeton',
        'columbia',
        'upenn',
        'brown',
        'dartmouth',
        'cornell'
      ].includes(p.id);
    }
    if (categoryFilter === 'liberal_arts') {
      return [
        'williams',
        'amherst',
        'swarthmore',
        'pomona',
        'wellesley',
        'bowdoin',
        'carleton',
        'cmc',
        'middlebury',
        'harvey_mudd',
        'davidson',
        'colgate',
        'vassar',
        'barnard'
      ].includes(p.id);
    }
    if (categoryFilter === 'top20') {
      return [
        'princeton',
        'mit',
        'harvard',
        'stanford',
        'yale',
        'caltech',
        'duke',
        'jhu',
        'northwestern',
        'upenn',
        'cornell',
        'uchicago',
        'brown',
        'columbia',
        'dartmouth',
        'ucla',
        'uc_berkeley',
        'rice',
        'vanderbilt',
        'notre_dame',
        'umich',
        'georgetown',
        'cmu',
        'northeastern'
      ].includes(p.id);
    }

    return true;
  });

  const switchToCustomMode = () => {
    setActiveMode('custom');
    setName('');
    setLocation('');
    setPortalType('Common App');
    setDecisionPlan('Regular Decision');
    setIntendedMajor('');
    setIsTypingCustomMajor(true);
    setCustomMajorInput('');
    setAlternateMajor('');
    
    const nextYear = new Date().getFullYear() + 1;
    setActualDeadline(`${nextYear}-01-05`);
    setTargetDeadline(`${nextYear}-01-01`);

    setSections([
      {
        title: 'Application Core Profile & Activities',
        description: 'Demographics, high school coursework, and 10 extracurricular activities.',
        category: 'general'
      },
      {
        title: 'Main Personal Statement Essay',
        description: '650-word primary personal essay.',
        category: 'essay',
        wordLimit: '650 words'
      },
      {
        title: 'Institutional Supplemental Essay: Why Us?',
        description: 'Institution-specific explanation of academic and extracurricular match.',
        category: 'supplemental',
        wordLimit: '250–350 words'
      },
      {
        title: 'Counselor Recommendation & High School Transcript',
        description: 'Secondary school report and official counselor evaluation.',
        category: 'recommendations'
      },
      {
        title: 'Teacher Recommendations (2 academic)',
        description: 'Confidential teacher recommendation letters.',
        category: 'recommendations'
      }
    ]);
  };

  const handleAddCustomSection = () => {
    if (!newSectionTitle.trim()) return;
    setSections([
      ...sections,
      {
        title: newSectionTitle.trim(),
        description: 'Custom requirement added by applicant.',
        category: 'supplemental'
      }
    ]);
    setNewSectionTitle('');
  };

  const handleRemoveSection = (idx: number) => {
    setSections(sections.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const matchedPreset = activeMode === 'preset' ? currentPreset : undefined;
    const finalMajor = isTypingCustomMajor ? customMajorInput.trim() : intendedMajor.trim();

    const trackerSections: TrackerSection[] = sections.map((sec, idx) => ({
      id: `sec_${Date.now()}_${idx}`,
      title: sec.title,
      description: sec.description,
      category: sec.category,
      wordLimit: sec.wordLimit,
      status: 'not_started',
      updatedAt: new Date().toISOString()
    }));

    const newCollegeItem: TrackerItem = {
      id: `college_${Date.now()}`,
      type: 'college',
      name: name.trim(),
      portalType,
      location: location || 'United States',
      color: matchedPreset?.color || '#4f46e5',
      bannerEmoji: matchedPreset?.emoji || '🎓',
      targetDeadline: targetDeadline || actualDeadline,
      actualDeadline: actualDeadline || targetDeadline,
      decisionPlan,
      intendedMajor: finalMajor || undefined,
      alternateMajor: alternateMajor.trim() || undefined,
      sections: trackerSections,
      notes: notes.trim(),
      portalUrl: matchedPreset?.website,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    onAddCollege(newCollegeItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-navy-50 dark:bg-navy-950/60 text-navy-600 dark:text-navy-400 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Add College to Tracker
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Choose from Top 100 colleges or insert a custom institution.
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

        {/* Mode Switcher Tabs */}
        <div className="px-6 pt-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              setActiveMode('preset');
              selectPreset(selectedPresetId || 'princeton');
            }}
            className={`pb-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeMode === 'preset'
                ? 'border-navy-600 text-navy-600 dark:text-navy-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Top 100 Colleges Catalog ({COLLEGE_PRESETS.length})</span>
          </button>

          <button
            type="button"
            onClick={switchToCustomMode}
            className={`pb-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeMode === 'custom'
                ? 'border-navy-600 text-navy-600 dark:text-navy-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>+ Insert Custom College</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Preset Selection Browser */}
          {activeMode === 'preset' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Select from Top 100 Colleges
                </label>
                <span className="text-[11px] font-semibold text-navy-600 dark:text-navy-400">
                  {filteredPresets.length} colleges available
                </span>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search colleges or aliases (e.g. UCLA, Berkeley, MIT, Harvard, Northeastern, TAMU, Stanford)..."
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Quick Filter Categories */}
              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { id: 'all', label: 'All 100+' },
                  { id: 'uc', label: '🐻 UC Campuses (UCLA, Berkeley, UCSD...)' },
                  { id: 'top20', label: '🏆 Top 20 National' },
                  { id: 'ivy', label: '🏛️ Ivy League' },
                  { id: 'liberal_arts', label: '🌲 Liberal Arts' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setCategoryFilter(tab.id as any)}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-all cursor-pointer ${
                      categoryFilter === tab.id
                        ? 'bg-navy-600 text-white shadow-2xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Colleges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-64 sm:max-h-72 overflow-y-auto p-1.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-950/40">
                {filteredPresets.map((preset) => {
                  const isSelected = selectedPresetId === preset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => selectPreset(preset.id)}
                      className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer flex items-center gap-2.5 ${
                        isSelected
                          ? 'bg-navy-50 dark:bg-navy-950/70 border-navy-500 text-navy-950 dark:text-navy-200 ring-2 ring-navy-500 shadow-2xs'
                          : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-navy-300 dark:hover:border-navy-700'
                      }`}
                    >
                      <span className="text-xl shrink-0">{preset.emoji}</span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold truncate text-slate-900 dark:text-white">
                          {preset.shortName}
                        </p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                            {preset.location}
                          </span>
                          {preset.acceptanceRate && (
                            <span className="text-[9px] font-medium px-1 rounded-sm bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 shrink-0">
                              {preset.acceptanceRate}
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Custom College Info Banner */}
          {activeMode === 'custom' && (
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 flex items-start gap-3 text-xs">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-amber-900 dark:text-amber-200">
                  Custom College Entry Mode
                </p>
                <p className="text-amber-800 dark:text-amber-300 mt-0.5">
                  Enter your target college details below. You can customize the intended major, deadlines, and application requirements.
                </p>
              </div>
            </div>
          )}

          {/* College Core Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                College / University Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
                placeholder="e.g. Stanford University"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Decision Plan
              </label>
              <select
                value={decisionPlan}
                onChange={(e) => setDecisionPlan(e.target.value as any)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
              >
                <option value="Regular Decision">Regular Decision (RD)</option>
                <option value="Early Action">Early Action (EA)</option>
                <option value="Early Decision">Early Decision (ED - Binding)</option>
                <option value="Early Decision II">Early Decision II (ED II)</option>
                <option value="Rolling">Rolling Admissions</option>
                <option value="Transfer">Transfer</option>
              </select>
            </div>
          </div>

          {/* Undergrad Major Selector (Specific to Institution) */}
          <div className="p-4 rounded-xl bg-linear-to-r from-navy-50/70 to-blue-50/70 dark:from-navy-950/40 dark:to-blue-950/40 border border-navy-100 dark:border-navy-900/60 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-navy-200 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-navy-600 dark:text-navy-400" />
                Intended Undergraduate Major *
              </label>

              {activeMode === 'preset' && currentPreset?.majorsUrl && (
                <a
                  href={currentPreset.majorsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-navy-600 dark:text-navy-400 hover:underline"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Official {currentPreset.shortName} Majors Catalog</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              )}
            </div>

            {/* Major Dropdown or Custom Input */}
            {activeMode === 'preset' && currentPreset?.majors && !isTypingCustomMajor ? (
              <div className="space-y-2">
                <select
                  value={intendedMajor}
                  onChange={(e) => {
                    if (e.target.value === '__custom__') {
                      setIsTypingCustomMajor(true);
                      setCustomMajorInput('');
                    } else {
                      setIntendedMajor(e.target.value);
                    }
                  }}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-navy-200 dark:border-navy-800 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-navy-500"
                >
                  <optgroup label={`${currentPreset.shortName} Undergraduate Majors`}>
                    {currentPreset.majors.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Custom Options">
                    <option value="__custom__">+ Enter Custom Major / Joint Degree...</option>
                  </optgroup>
                </select>

                <p className="text-[11px] text-navy-700/80 dark:text-navy-300/80">
                  Pre-loaded from {currentPreset.name}’s official undergraduate programs list.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={customMajorInput}
                    onChange={(e) => setCustomMajorInput(e.target.value)}
                    placeholder="e.g. Computer Science & Economics (Joint), Cognitive Science..."
                    className="flex-1 px-3 py-2 text-sm rounded-xl border border-navy-300 dark:border-navy-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 font-medium"
                  />
                  {activeMode === 'preset' && (
                    <button
                      type="button"
                      onClick={() => setIsTypingCustomMajor(false)}
                      className="px-3 py-1.5 text-xs font-semibold rounded-xl border border-navy-200 dark:border-navy-800 text-navy-700 dark:text-navy-300 hover:bg-navy-100 dark:hover:bg-navy-900 cursor-pointer"
                    >
                      Back to list
                    </button>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Type your custom major, double major, or undeclared preference.
                </p>
              </div>
            )}

            {/* Optional Alternate Major */}
            <div className="pt-2 border-t border-navy-100 dark:border-navy-900/60">
              <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                Alternate / Second-Choice Major (Optional)
              </label>
              <input
                type="text"
                value={alternateMajor}
                onChange={(e) => setAlternateMajor(e.target.value)}
                placeholder="e.g. Data Science, Mathematics, or Undeclared"
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-navy-500"
              />
            </div>
          </div>

          {/* Target Deadline vs Actual Deadline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-navy-50/60 dark:bg-navy-950/40 border border-navy-100 dark:border-navy-900/60">
              <div className="flex items-center gap-1.5 mb-1.5 text-navy-700 dark:text-navy-300 font-semibold text-xs">
                <Clock className="w-3.5 h-3.5" />
                <span>Your Target Deadline *</span>
              </div>
              <input
                type="date"
                required
                value={targetDeadline}
                onChange={(e) => setTargetDeadline(e.target.value)}
                className="w-full px-3 py-1.5 text-sm rounded-lg border border-navy-200 dark:border-navy-800 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
              />
              <p className="text-[11px] text-navy-600/80 dark:text-navy-400/80 mt-1">
                Target date to finish drafts before submission rush.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-1.5 mb-1.5 text-slate-700 dark:text-slate-300 font-semibold text-xs">
                <Calendar className="w-3.5 h-3.5" />
                <span>Actual University Deadline *</span>
              </div>
              <input
                type="date"
                required
                value={actualDeadline}
                onChange={(e) => setActualDeadline(e.target.value)}
                className="w-full px-3 py-1.5 text-sm rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
              />
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Official institution cut-off date.
              </p>
            </div>
          </div>

          {/* Automatically populated sections */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Automatically Loaded Requirements ({sections.length} sections)
                </label>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Pre-configured based on institutional requirements. Defaults to "Not Started".
                </p>
              </div>
            </div>

            <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
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
                        <span className="px-1.5 py-0.5 rounded-md bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-900 text-[10px] font-medium">
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

            {/* Quick Add Custom Section */}
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
                placeholder="Add another section (e.g., Peer Recommendation, Video Portfolio)..."
                className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
              />
              <button
                type="button"
                onClick={handleAddCustomSection}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold text-navy-700 dark:text-navy-300 bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-900 hover:bg-navy-100 cursor-pointer flex items-center gap-1 shrink-0"
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
            disabled={!name.trim() || !targetDeadline || !actualDeadline || (isTypingCustomMajor && !customMajorInput.trim())}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-navy-600 hover:bg-navy-700 active:scale-95 shadow-md shadow-navy-500/20 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Check className="w-4 h-4" />
            Add to My Tracker
          </button>
        </div>

      </div>
    </div>
  );
};
