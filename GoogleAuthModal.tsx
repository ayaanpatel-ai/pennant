import React, { useState } from 'react';
import { UserProfile } from '../types';
import { X, Check, ArrowRight, UserPlus, Shield } from 'lucide-react';

interface GoogleAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: UserProfile) => void;
  defaultEmail?: string;
}

export const GoogleAuthModal: React.FC<GoogleAuthModalProps> = ({
  isOpen,
  onClose,
  onLogin,
  defaultEmail = 'patelkandeel@gmail.com'
}) => {
  const [useCustom, setUseCustom] = useState(false);
  const [customEmail, setCustomEmail] = useState('');
  const [customName, setCustomName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSelectAccount = (email: string, name: string) => {
    setIsLoading(true);
    setTimeout(() => {
      onLogin({
        email,
        name,
        intendedMajor: 'Computer Science & Cognitive Science',
        isLoggedIn: true
      });
      setIsLoading(false);
      onClose();
    }, 400);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customEmail.trim()) return;
    const computedName = customName.trim() || customEmail.split('@')[0];
    handleSelectAccount(customEmail.trim(), computedName);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Google Header */}
        <div className="p-6 pb-4 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* Official Google Colored G */}
            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
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
            <span className="font-semibold text-sm text-slate-700 dark:text-slate-300">
              Sign in with Google
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div className="text-left">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Choose an account
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              to continue to <strong className="text-slate-700 dark:text-slate-300">Pennant</strong>
            </p>
          </div>

          {!useCustom ? (
            <div className="space-y-2.5">
              {/* Primary Detected Google Account */}
              <button
                type="button"
                disabled={isLoading}
                onClick={() => handleSelectAccount(defaultEmail, 'Kandeel Patel')}
                className="w-full p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-navy-400 dark:hover:border-navy-600 hover:bg-navy-50/50 dark:hover:bg-navy-950/30 transition-all flex items-center justify-between text-left cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-100 dark:bg-navy-950 text-navy-700 dark:text-navy-300 font-bold flex items-center justify-center text-sm border border-navy-200 dark:border-navy-800 shrink-0">
                    KP
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-navy-600 dark:group-hover:text-navy-400">
                      Kandeel Patel
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {defaultEmail}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-navy-600 dark:group-hover:text-navy-400 group-hover:translate-x-0.5 transition-all" />
              </button>

              {/* Use Another Account Button */}
              <button
                type="button"
                onClick={() => setUseCustom(true)}
                className="w-full p-3.5 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all flex items-center gap-3 text-left cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                  <UserPlus className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Use another Google account
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Sign in with a different school or personal email
                  </p>
                </div>
              </button>
            </div>
          ) : (
            <form onSubmit={handleCustomSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Google Email Address
                </label>
                <input
                  type="email"
                  required
                  value={customEmail}
                  onChange={(e) => setCustomEmail(e.target.value)}
                  placeholder="yourname@gmail.com"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="e.g. Alex Johnson"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setUseCustom(false)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer"
                >
                  Back to accounts
                </button>

                <button
                  type="submit"
                  disabled={isLoading || !customEmail.trim()}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-navy-600 hover:bg-navy-700 active:scale-95 shadow-md shadow-navy-500/20 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </form>
          )}

          {/* Privacy and Trust Disclaimer */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-start gap-2 text-[11px] text-slate-400 leading-normal">
            <Shield className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
            <span>
              To continue, Google will share your name, email address, and profile picture with Pennant.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
