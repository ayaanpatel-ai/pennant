import React, { useState } from 'react';
import { UserProfile } from '../types';
import { 
  GraduationCap, 
  RotateCcw, 
  Plus, 
  Globe, 
  Building2, 
  User, 
  LogOut, 
  LayoutDashboard,
  ShieldCheck,
  ChevronDown,
  Home
} from 'lucide-react';

interface NavbarProps {
  user: UserProfile;
  currentView: 'dashboard' | 'profile' | 'landing';
  setCurrentView: (view: 'dashboard' | 'profile' | 'landing') => void;
  onLogout: () => void;
  onOpenAddCollege: () => void;
  onOpenAddPortal: () => void;
  onOpenGoogleLogin?: () => void;
  activeTab: 'all' | 'colleges' | 'portals' | 'timeline';
  setActiveTab: (tab: 'all' | 'colleges' | 'portals' | 'timeline') => void;
  counts: {
    total: number;
    colleges: number;
    portals: number;
  };
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  currentView,
  setCurrentView,
  onLogout,
  onOpenAddCollege,
  onOpenAddPortal,
  onOpenGoogleLogin,
  activeTab,
  setActiveTab,
  counts
}) => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Left: Brand & Navigation */}
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setCurrentView('landing')}
              className="flex items-center gap-3 text-left cursor-pointer group"
              title="Return to Home page"
            >
              <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-maroon-700 to-navy-800 flex items-center justify-center text-gold-400 shadow-md shadow-maroon-900/30 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight group-hover:text-navy-600 dark:group-hover:text-navy-400 transition-colors">
                    Pennant
                  </span>
                </div>
                <p className="hidden md:block text-[11px] text-slate-500 dark:text-slate-400">
                  Top 100 Universities & Deadlines
                </p>
              </div>
            </button>

            {/* View Switcher: Home vs Dashboard vs Profile */}
            <div className="hidden md:flex items-center gap-1 pl-4 border-l border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setCurrentView('landing')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  currentView === 'landing'
                    ? 'bg-navy-50 dark:bg-navy-950/70 text-navy-600 dark:text-navy-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Go to Website Home Page"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentView('dashboard')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  currentView === 'dashboard'
                    ? 'bg-navy-50 dark:bg-navy-950/70 text-navy-600 dark:text-navy-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Go to Application Tracker Dashboard"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Tracker</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentView('profile')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  currentView === 'profile'
                    ? 'bg-navy-50 dark:bg-navy-950/70 text-navy-600 dark:text-navy-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Go to Applicant Profile"
              >
                <User className="w-3.5 h-3.5" />
                <span>My Profile</span>
              </button>
            </div>
          </div>

          {/* Center: Navigation View Tabs (Only on Dashboard) */}
          {currentView === 'dashboard' && (
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-white dark:bg-slate-900 text-navy-600 dark:text-navy-400 shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All Items ({counts.total})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('colleges')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'colleges'
                    ? 'bg-white dark:bg-slate-900 text-navy-600 dark:text-navy-400 shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                Colleges ({counts.colleges})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('portals')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'portals'
                    ? 'bg-white dark:bg-slate-900 text-navy-600 dark:text-navy-400 shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                Portals ({counts.portals})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('timeline')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'timeline'
                    ? 'bg-white dark:bg-slate-900 text-navy-600 dark:text-navy-400 shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Timeline
              </button>
            </nav>
          )}

          {/* Right: Actions & User */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Add Portal Button */}
            <button
              type="button"
              onClick={onOpenAddPortal}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/50 dark:hover:bg-blue-900/60 transition-all cursor-pointer shadow-2xs"
              title="Add College Application Portal (Common App, UC App, etc.)"
            >
              <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="hidden sm:inline">+ Add Portal</span>
              <span className="sm:hidden">+ Portal</span>
            </button>

            {/* Add College Button */}
            <button
              type="button"
              onClick={onOpenAddCollege}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-navy-600 hover:bg-navy-700 active:scale-95 shadow-sm shadow-navy-500/20 transition-all cursor-pointer"
              title="Add Institution / College with automated requirements"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span className="hidden sm:inline">Add College</span>
              <span className="sm:hidden">College</span>
            </button>

            {/* User Profile Avatar & Dropdown */}
            {user.isLoggedIn ? (
              <div className="relative pl-2 ml-1 border-l border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="flex items-center gap-2 p-1 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-xl bg-navy-50 dark:bg-navy-950/70 border border-navy-200 dark:border-navy-800 flex items-center justify-center text-navy-600 dark:text-navy-400">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="hidden xl:inline-block text-xs font-semibold text-slate-700 dark:text-slate-200">
                    {user.name.split(' ')[0]}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200" />
                </button>

                {/* Dropdown Menu */}
                {showUserDropdown && (
                  <div
                    className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl z-40 p-2 animate-in fade-in zoom-in-95 duration-100"
                    onMouseLeave={() => setShowUserDropdown(false)}
                  >
                    <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800">
                      <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                        {user.name}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {user.email}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                        <ShieldCheck className="w-3 h-3" />
                        Google Connected
                      </span>
                    </div>

                    <div className="py-1">
                      <button
                        type="button"
                        onClick={() => {
                          setShowUserDropdown(false);
                          setCurrentView('landing');
                        }}
                        className="w-full px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl flex items-center gap-2 cursor-pointer"
                      >
                        <Home className="w-3.5 h-3.5 text-navy-500" />
                        <span>Home Page</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setShowUserDropdown(false);
                          setCurrentView('dashboard');
                        }}
                        className="w-full px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl flex items-center gap-2 cursor-pointer"
                      >
                        <LayoutDashboard className="w-3.5 h-3.5 text-navy-500" />
                        <span>Tracker Dashboard</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setShowUserDropdown(false);
                          setCurrentView('profile');
                        }}
                        className="w-full px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl flex items-center gap-2 cursor-pointer"
                      >
                        <User className="w-3.5 h-3.5 text-navy-500" />
                        <span>My Profile & Settings</span>
                      </button>
                    </div>

                    <div className="border-t border-slate-100 dark:border-slate-800 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setShowUserDropdown(false);
                          onLogout();
                        }}
                        className="w-full px-3 py-2 text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-xl flex items-center gap-2 cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Log Out of Google</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                type="button"
                onClick={onOpenGoogleLogin}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
              >
                <span>Sign in with Google</span>
              </button>
            )}

          </div>

        </div>

        {/* Mobile Sub-Navigation Tabs */}
        {currentView === 'dashboard' && (
          <div className="lg:hidden flex items-center justify-around border-t border-slate-100 dark:border-slate-800/60 py-2 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`py-1 px-2 font-medium cursor-pointer ${activeTab === 'all' ? 'text-navy-600 dark:text-navy-400 font-bold border-b-2 border-navy-600' : 'text-slate-500'}`}
            >
              All ({counts.total})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('colleges')}
              className={`py-1 px-2 font-medium cursor-pointer ${activeTab === 'colleges' ? 'text-navy-600 dark:text-navy-400 font-bold border-b-2 border-navy-600' : 'text-slate-500'}`}
            >
              Colleges ({counts.colleges})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('portals')}
              className={`py-1 px-2 font-medium cursor-pointer ${activeTab === 'portals' ? 'text-navy-600 dark:text-navy-400 font-bold border-b-2 border-navy-600' : 'text-slate-500'}`}
            >
              Portals ({counts.portals})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('timeline')}
              className={`py-1 px-2 font-medium cursor-pointer ${activeTab === 'timeline' ? 'text-navy-600 dark:text-navy-400 font-bold border-b-2 border-navy-600' : 'text-slate-500'}`}
            >
              Timeline
            </button>
            <button
              type="button"
              onClick={() => setCurrentView('landing')}
              className="py-1 px-2 font-medium text-slate-500 cursor-pointer"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => setCurrentView('profile')}
              className="py-1 px-2 font-medium text-slate-500 cursor-pointer"
            >
              Profile
            </button>
          </div>
        )}

      </div>
    </header>
  );
};
