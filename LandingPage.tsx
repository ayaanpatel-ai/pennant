import React, { useState } from 'react';
import { UserProfile } from '../types';
import { 
  GraduationCap, 
  Sparkles, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  ChevronRight, 
  Star, 
  Users, 
  BookOpen, 
  FileText,
  Search,
  ExternalLink,
  LayoutDashboard,
  LogOut,
  User
} from 'lucide-react';
import { COLLEGE_PRESETS } from '../data/collegePresets';

interface LandingPageProps {
  user?: UserProfile;
  onSignInWithGoogle: () => void;
  onGoToTracker?: () => void;
  onLogout?: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  user,
  onSignInWithGoogle,
  onGoToTracker,
  onLogout
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Sample spotlight colleges for the landing page
  const spotlightColleges = COLLEGE_PRESETS.slice(0, 4);

  const isLoggedIn = user?.isLoggedIn;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col selection:bg-navy-500 selection:text-white overflow-x-hidden">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-maroon-700 to-navy-800 flex items-center justify-center text-gold-400 shadow-md shadow-maroon-900/30">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                Pennant
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-navy-950 text-navy-300 border border-navy-800">
                Top 100 Edition
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {user?.name?.split(' ')[0] || user?.email}
                </span>

                <button
                  type="button"
                  onClick={onGoToTracker}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-navy-600 hover:bg-navy-500 text-white shadow-md shadow-navy-500/20 transition-all cursor-pointer"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Open Tracker</span>
                </button>

                {onLogout && (
                  <button
                    type="button"
                    onClick={onLogout}
                    className="p-2 text-slate-400 hover:text-red-400 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Sign Out"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                )}
              </div>
            ) : (
              /* Google Sign In Button */
              <button
                type="button"
                onClick={onSignInWithGoogle}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white text-slate-800 hover:bg-slate-100 active:scale-95 shadow-md shadow-white/5 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Sign in with Google</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden">
        {/* Glow backdrop effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-navy-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-950/80 border border-navy-800/80 text-navy-300 text-xs font-semibold mb-6 shadow-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Built for High School Seniors & Transfer Applicants</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight sm:leading-none">
            Master your college applications{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-maroon-400 via-gold-300 to-navy-300">
              without the chaos.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Track top 100 universities, official undergraduate majors, target vs. actual deadlines, and institutional supplemental essays in one distraction-free dashboard.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {isLoggedIn ? (
              <button
                type="button"
                onClick={onGoToTracker}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold bg-navy-600 hover:bg-navy-500 text-white active:scale-95 shadow-xl shadow-navy-600/30 transition-all cursor-pointer group"
              >
                <LayoutDashboard className="w-5 h-5 text-navy-200" />
                <span>Open Your Tracker Dashboard</span>
                <ArrowRight className="w-4 h-4 text-navy-200 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onSignInWithGoogle}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl text-base font-bold bg-white text-slate-900 hover:bg-slate-100 active:scale-95 shadow-xl shadow-navy-950/50 transition-all cursor-pointer group"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Get Started with Google</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

          {/* Social Proof Bullet */}
          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              100+ Top US Colleges
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              Official Majors Catalogs
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              No Clutter, 100% Free
            </span>
          </div>

        </div>

        {/* Dashboard Preview Card Grid */}
        <div className="max-w-6xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-4 sm:p-6 bg-slate-950/70 border border-slate-800 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-[11px] text-slate-500">app-tracker.internal/dashboard</span>
              </div>
              <span className="text-[11px] font-semibold text-navy-400 bg-navy-950/80 px-2.5 py-0.5 rounded-full border border-navy-800">
                Application Tracker Preview
              </span>
            </div>

            {/* Mock Dashboard Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
              {spotlightColleges.map((c) => (
                <div 
                  key={c.id}
                  className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-navy-500/50 transition-all text-left flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl">{c.emoji}</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-navy-950 text-navy-300 border border-navy-800">
                        {c.defaultPlan}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-white group-hover:text-navy-400 transition-colors">
                      {c.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">{c.location}</p>
                    
                    <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] space-y-1">
                      <div className="flex justify-between text-slate-400">
                        <span>Target:</span>
                        <span className="font-semibold text-navy-300">Dec 18, 2026</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Actual:</span>
                        <span className="font-semibold text-rose-300">{c.actualDeadline}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">{c.defaultSections.length} sections</span>
                    <span className="font-bold text-emerald-400">Ready</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-navy-400">
              Why Students Love It
            </h2>
            <p className="text-3xl font-extrabold text-white mt-2">
              Everything you need to stay 2 weeks ahead of deadlines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-navy-950/80 text-navy-400 flex items-center justify-center mb-5 border border-navy-800">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Top 100 Colleges Pre-Loaded
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Stanford, Harvard, MIT, UCLA, UC Berkeley, TAMU, Northeastern, and over 100 top universities pre-populated with official deadlines, portals, and requirements.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-950/80 text-blue-400 flex items-center justify-center mb-5 border border-blue-800">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Official Undergraduate Majors
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Never guess college majors again. Choose from official academic programs curated directly from each university's undergraduate catalog, with direct links to department websites.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/80 text-emerald-400 flex items-center justify-center mb-5 border border-emerald-800">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Target vs. Actual Deadlines
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Set a buffer date (default 14 days early) to review essays with mentors and avoid portal crashes on submission night.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gold-950/80 text-gold-400 flex items-center justify-center mb-5 border border-gold-800">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Institutional Supplement Checklists
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Pre-configured with word limits, Why-Us essays, UC PIQs, graded papers, counselor reports, and teacher recommendations.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-950/80 text-amber-400 flex items-center justify-center mb-5 border border-amber-800">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Google Login & Profile Sync
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sign in with Google to manage your applicant profile, track high school GPAs, and save your application roadmap securely.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-rose-950/80 text-rose-400 flex items-center justify-center mb-5 border border-rose-800">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Custom College Insert Option
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Applying to an international school, specialized conservatory, or local institution? Add custom colleges and requirements in seconds.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'How does Google Sign-In work with the tracker?',
                a: 'You can securely sign in with your Google account in one click. Your profile, tracked colleges, notes, and deadlines are preserved across sessions.'
              },
              {
                q: 'Are the top 100 colleges and deadlines accurate?',
                a: 'Yes, deadline defaults, portal types (Common App, UC App, CSU Apply, Institutional), and signature majors are curated specifically for each institution.'
              },
              {
                q: 'Can I add colleges not in the top 100?',
                a: 'Absolutely! Click "+ Insert Custom College" inside the modal to add any college in the world with custom deadlines, majors, and requirements.'
              },
              {
                q: 'Why should I have a target deadline and an actual deadline?',
                a: 'College admissions servers frequently slow down or crash within hours of deadlines. Your target deadline gives you peace of mind to submit ahead of time without anxiety.'
              }
            ].map((faq, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-semibold text-white hover:text-navy-400 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-90 text-navy-400' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-slate-900 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-linear-to-b from-navy-950/60 to-slate-950 border-t border-navy-900/40 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to organize your college applications?
          </h2>
          <p className="mt-3 text-slate-300 text-base max-w-xl mx-auto">
            Join students tracking their dream colleges with zero stress and crystal-clear deadlines.
          </p>

          <div className="mt-8 flex justify-center">
            {isLoggedIn ? (
              <button
                type="button"
                onClick={onGoToTracker}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold bg-navy-600 hover:bg-navy-500 text-white active:scale-95 shadow-xl shadow-navy-600/30 transition-all cursor-pointer"
              >
                <LayoutDashboard className="w-5 h-5" />
                <span>Jump to Tracker Dashboard</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onSignInWithGoogle}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold bg-white text-slate-900 hover:bg-slate-100 active:scale-95 shadow-xl transition-all cursor-pointer"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Sign in with Google to Start</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Pennant. Built for students navigating college admissions.</p>
      </footer>

    </div>
  );
};
