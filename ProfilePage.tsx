import React, { useState } from 'react';
import { UserProfile, TrackerItem } from '../types';
import { 
  GraduationCap, 
  User, 
  Mail, 
  School, 
  Calendar, 
  Award, 
  BookOpen, 
  Save, 
  LogOut, 
  ArrowLeft, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  Clock, 
  FileText,
  AlertCircle,
  Home
} from 'lucide-react';
import { calculateItemProgress } from '../services/storageService';

interface ProfilePageProps {
  user: UserProfile;
  items: TrackerItem[];
  onSaveProfile: (updatedUser: UserProfile) => void;
  onLogout: () => void;
  onBackToDashboard: () => void;
  onGoToHome?: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  user,
  items,
  onSaveProfile,
  onLogout,
  onBackToDashboard,
  onGoToHome
}) => {
  const [name, setName] = useState(user.name);
  const [email] = useState(user.email);
  const [highSchool, setHighSchool] = useState(user.highSchool || '');
  const [graduationYear, setGraduationYear] = useState(user.graduationYear || '2027');
  const [gpa, setGpa] = useState(user.gpa || '3.95');
  const [testScore, setTestScore] = useState(user.testScore || 'SAT 1540 / ACT 35');
  const [intendedMajor, setIntendedMajor] = useState(user.intendedMajor || 'Computer Science & Cognitive Science');
  const [bio, setBio] = useState(user.bio || 'Aspiring engineer passionate about human-computer interaction, robotics, and applied economics.');
  const [targetBufferDays, setTargetBufferDays] = useState<number>(user.targetBufferDays || 14);

  const [savedSuccess, setSavedSuccess] = useState(false);
  const [isConfirmingLogout, setIsConfirmingLogout] = useState(false);

  // Application Stats
  const collegesCount = items.filter(i => i.type === 'college').length;
  const portalsCount = items.filter(i => i.type === 'portal').length;
  
  let totalSections = 0;
  let finishedSections = 0;
  items.forEach(item => {
    item.sections.forEach(s => {
      totalSections++;
      if (s.status === 'finished' || s.status === 'submitted') {
        finishedSections++;
      }
    });
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: UserProfile = {
      ...user,
      name: name.trim(),
      highSchool: highSchool.trim(),
      graduationYear: graduationYear.trim(),
      gpa: gpa.trim(),
      testScore: testScore.trim(),
      intendedMajor: intendedMajor.trim(),
      bio: bio.trim(),
      targetBufferDays: Number(targetBufferDays) || 14
    };
    onSaveProfile(updated);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Navigation & Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onBackToDashboard}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-navy-600 dark:hover:text-navy-400 bg-white dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Tracker</span>
            </button>

            {onGoToHome && (
              <button
                type="button"
                onClick={onGoToHome}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-navy-600 dark:hover:text-navy-400 bg-white dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Home Page</span>
              </button>
            )}
          </div>

          <span className="text-xs font-semibold text-slate-400">
            Applicant Profile & Settings
          </span>
        </div>

        {/* Profile Card Header Banner */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-32 bg-navy-500/10 dark:bg-navy-500/5 blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
            {/* User Icon Badge (No photo) */}
            <div className="relative shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-navy-50 dark:bg-navy-950/80 border-2 border-navy-200 dark:border-navy-800 flex items-center justify-center text-navy-600 dark:text-navy-400 shadow-xs">
                <User className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900 flex items-center justify-center text-white" title="Active">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                    {user.name}
                  </h1>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-1">
                    <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      {user.email}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/80 px-2 py-0.5 rounded-full">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      Google Verified
                    </span>
                  </div>
                </div>

                {/* Log Out of Google Button */}
                {!isConfirmingLogout ? (
                  <button
                    type="button"
                    onClick={() => setIsConfirmingLogout(true)}
                    className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 hover:bg-red-100 dark:hover:bg-red-900/50 border border-red-200 dark:border-red-900/50 rounded-xl transition-all cursor-pointer shrink-0"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Log Out of Google</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={onLogout}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 active:scale-95 rounded-xl shadow-xs transition-all cursor-pointer animate-in fade-in"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Yes, Log Out</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsConfirmingLogout(false)}
                      className="px-2.5 py-2 text-xs font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 rounded-xl cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              {/* Bio summary */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                {bio}
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-5 border-t border-slate-100 dark:border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center">
                  <p className="text-lg font-black text-navy-600 dark:text-navy-400">{collegesCount}</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Colleges</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center">
                  <p className="text-lg font-black text-blue-600 dark:text-blue-400">{portalsCount}</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Portals</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center">
                  <p className="text-lg font-black text-emerald-600 dark:text-emerald-400">{finishedSections}</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Sections Done</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center">
                  <p className="text-lg font-black text-amber-600 dark:text-amber-400">{totalSections - finishedSections}</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">In Progress</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Edit Profile Form */}
        <form onSubmit={handleSave} className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Academic & Applicant Details
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Update your academic records and personalized tracker preferences.
              </p>
            </div>
            {savedSuccess && (
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 animate-in fade-in">
                ✓ Profile saved!
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
                />
              </div>
            </div>

            {/* Google Email (Read Only) */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Google Account Email (Linked)
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="email"
                  disabled
                  value={email}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/50 text-slate-500 cursor-not-allowed"
                />
              </div>
            </div>

            {/* High School */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                High School / Current Institution
              </label>
              <div className="relative">
                <School className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  value={highSchool}
                  onChange={(e) => setHighSchool(e.target.value)}
                  placeholder="e.g. Lincoln High School"
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
                />
              </div>
            </div>

            {/* Graduation Year */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                High School Graduation Year
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  value={graduationYear}
                  onChange={(e) => setGraduationYear(e.target.value)}
                  placeholder="e.g. 2027"
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
                />
              </div>
            </div>

            {/* GPA */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Grade Point Average (GPA)
              </label>
              <div className="relative">
                <Award className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  value={gpa}
                  onChange={(e) => setGpa(e.target.value)}
                  placeholder="e.g. 3.95 UW / 4.4 W"
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
                />
              </div>
            </div>

            {/* Test Scores */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Standardized Testing (SAT / ACT / Optional)
              </label>
              <div className="relative">
                <FileText className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  value={testScore}
                  onChange={(e) => setTestScore(e.target.value)}
                  placeholder="e.g. SAT 1540 (780M / 760EBRW) or Test Optional"
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
                />
              </div>
            </div>

            {/* Primary Intended Major */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Target Major / Primary Academic Field of Interest
              </label>
              <div className="relative">
                <BookOpen className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  value={intendedMajor}
                  onChange={(e) => setIntendedMajor(e.target.value)}
                  placeholder="e.g. Computer Science, Mechanical Engineering, Economics, Pre-Med..."
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
                />
              </div>
            </div>

            {/* Bio / Aspirations */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Applicant Personal Bio / Academic Focus
              </label>
              <textarea
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Share a short summary of your academic passions, extracurricular focus, or career aspirations..."
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
              />
            </div>

            {/* Target Buffer Days */}
            <div className="sm:col-span-2 p-4 rounded-xl bg-navy-50/60 dark:bg-navy-950/40 border border-navy-100 dark:border-navy-900/50">
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-navy-200 mb-1">
                Target Deadline Buffer (Days Before Actual University Cut-Off)
              </label>
              <p className="text-xs text-navy-700/80 dark:text-navy-300/80 mb-2">
                When adding a new college preset, your target deadline will automatically be set this many days before the actual university deadline.
              </p>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min={1}
                  max={60}
                  value={targetBufferDays}
                  onChange={(e) => setTargetBufferDays(Number(e.target.value))}
                  className="w-24 px-3 py-1.5 text-sm rounded-lg border border-navy-200 dark:border-navy-800 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                />
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  days early (Recommended: 14 days)
                </span>
              </div>
            </div>

          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onBackToDashboard}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-navy-600 hover:bg-navy-700 active:scale-95 shadow-md shadow-navy-500/20 transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Save Profile Changes</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
