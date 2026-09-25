import React, { useState } from 'react';
import { UserProfile } from '../types';
import { GraduationCap, CheckCircle2, Calendar, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface LoginViewProps {
  onLogin: (user: UserProfile) => void;
  defaultEmail?: string;
}

export const LoginView: React.FC<LoginViewProps> = ({
  onLogin,
  defaultEmail = 'patelkandeel@gmail.com'
}) => {
  const [emailInput, setEmailInput] = useState(defaultEmail);
  const [nameInput, setNameInput] = useState('Kandeel Patel');
  const [showCustomFields, setShowCustomFields] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = (emailToUse?: string, nameToUse?: string) => {
    setIsLoading(true);
    const chosenEmail = emailToUse || emailInput || 'student@gmail.com';
    const chosenName = nameToUse || nameInput || chosenEmail.split('@')[0];

    setTimeout(() => {
      onLogin({
        email: chosenEmail,
        name: chosenName,
        intendedMajor: 'Undecided / STEM',
        isLoggedIn: true
      });
      setIsLoading(false);
    }, 450);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-navy-50/30 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 selection:bg-navy-500 selection:text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center px-4">
        {/* App Logo */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-tr from-navy-600 to-blue-500 text-white shadow-lg shadow-navy-500/25 mb-5 ring-4 ring-navy-100 dark:ring-navy-950/60">
          <GraduationCap className="w-9 h-9" />
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Pennant
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
          Master your application portals, institutional supplements, target deadlines, and section statuses in one command center.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white dark:bg-slate-900 py-8 px-6 shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-200/80 dark:border-slate-800 rounded-2xl sm:px-10">
          
          {/* Main Google Sign-in Button */}
          <div className="space-y-4">
            <button
              type="button"
              disabled={isLoading}
              onClick={() => handleGoogleLogin(emailInput, nameInput)}
              className="w-full flex items-center justify-center gap-3.5 px-5 py-3.5 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-100 bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-xs hover:shadow-md transition-all text-sm font-semibold cursor-pointer group disabled:opacity-50"
            >
              {/* Google official colored "G" SVG */}
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
              <span>{isLoading ? 'Signing in with Google...' : 'Continue with Google'}</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform ml-auto" />
            </button>

            {/* Quick account indicator */}
            <div className="p-3 rounded-lg bg-navy-50/70 dark:bg-navy-950/40 border border-navy-100 dark:border-navy-900/50 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-slate-600 dark:text-slate-300 font-medium">
                  {emailInput}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowCustomFields(!showCustomFields)}
                className="text-navy-600 dark:text-navy-400 hover:underline font-medium cursor-pointer"
              >
                {showCustomFields ? 'Hide' : 'Switch account'}
              </button>
            </div>

            {showCustomFields && (
              <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                    Google Account Email
                  </label>
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
                    placeholder="student@gmail.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
                    placeholder="Your Name"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Key Application Features Pill List */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Built Specifically for College Applicants
            </p>
            
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Portal Requirements:</strong> UC App, Common App, Cal State Apply, & Coalition App preloaded with exact sections.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-navy-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Target vs Actual Deadlines:</strong> Set your target buffer so you submit days before the server crash rush.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Institution-Specific Requirements:</strong> Pre-loaded Stanford, MIT, Harvard, Berkeley, UCLA, Columbia, CMU, and more.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Visual Color Progress:</strong> Not Started, In Progress, Finished, and Submitted indicators.
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-500">
          Your application progress and deadlines are securely saved in your browser session.
        </p>
      </div>
    </div>
  );
};
