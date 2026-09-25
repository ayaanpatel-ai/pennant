import React, { useState, useEffect } from 'react';
import { TrackerItem, TrackerSection, SectionStatus, UserProfile } from './types';
import { 
  getSavedUser, 
  saveUser, 
  getUserItems, 
  saveUserItems, 
  getDaysRemaining, 
  calculateItemProgress,
  getInitialItems
} from './services/storageService';
import { Navbar } from './components/Navbar';
import { StatsBanner } from './components/StatsBanner';
import { TrackerCard } from './components/TrackerCard';
import { TrackerDetailModal } from './components/TrackerDetailModal';
import { AddCollegeModal } from './components/AddCollegeModal';
import { AddPortalModal } from './components/AddPortalModal';
import { DeadlineTimeline } from './components/DeadlineTimeline';
import { LandingPage } from './components/LandingPage';
import { ProfilePage } from './components/ProfilePage';
import { GoogleAuthModal } from './components/GoogleAuthModal';
import { Plus, Globe, Building2, Calendar, Sparkles, FolderDown, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  // Current user
  const [user, setUser] = useState<UserProfile>(() => getSavedUser());

  // View state: 'dashboard' | 'profile' | 'landing'
  const [currentView, setCurrentView] = useState<'dashboard' | 'profile' | 'landing'>(() => 
    user.isLoggedIn ? 'dashboard' : 'landing'
  );
  
  // Tracked items
  const [items, setItems] = useState<TrackerItem[]>([]);
  
  // Navigation & Filtering
  const [activeTab, setActiveTab] = useState<'all' | 'colleges' | 'portals' | 'timeline'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'incomplete' | 'completed'>('all');
  const [sortBy, setSortBy] = useState<'target_deadline' | 'actual_deadline' | 'progress' | 'name'>('target_deadline');

  // Modals state
  const [isAddCollegeOpen, setIsAddCollegeOpen] = useState(false);
  const [isAddPortalOpen, setIsAddPortalOpen] = useState(false);
  const [selectedDetailItem, setSelectedDetailItem] = useState<TrackerItem | null>(null);
  const [isGoogleAuthOpen, setIsGoogleAuthOpen] = useState(false);

  // Load items on mount or user email change
  useEffect(() => {
    if (user && user.email) {
      const savedItems = getUserItems(user.email);
      setItems(savedItems);
    }
  }, [user.email]);

  // Keep currentView in sync with login status
  useEffect(() => {
    if (!user.isLoggedIn) {
      setCurrentView('landing');
    }
  }, [user.isLoggedIn]);

  // Save items whenever items change
  const updateItems = (newItems: TrackerItem[]) => {
    setItems(newItems);
    if (user && user.email) {
      saveUserItems(user.email, newItems);
    }
  };

  // Google Login Handler
  const handleGoogleLogin = (newUser: UserProfile) => {
    const updatedUser = { ...newUser, isLoggedIn: true };
    setUser(updatedUser);
    saveUser(updatedUser);
    setCurrentView('dashboard');
  };

  // Google Logout Handler
  const handleGoogleLogout = () => {
    const loggedOutUser = { ...user, isLoggedIn: false };
    setUser(loggedOutUser);
    saveUser(loggedOutUser);
    setCurrentView('landing');
  };

  // Save Profile Handler
  const handleSaveProfile = (updatedUser: UserProfile) => {
    setUser(updatedUser);
    saveUser(updatedUser);
  };

  // Update Section Status directly from card or modal
  const handleUpdateSectionStatus = (itemId: string, sectionId: string, newStatus: SectionStatus) => {
    const updated = items.map((item) => {
      if (item.id === itemId) {
        const updatedSections = item.sections.map((sec) =>
          sec.id === sectionId ? { ...sec, status: newStatus, updatedAt: new Date().toISOString() } : sec
        );

        // Check if item just reached 100% finished/submitted
        const prog = calculateItemProgress(updatedSections);
        if (prog.allDone) {
          try {
            confetti({
              particleCount: 80,
              spread: 60,
              origin: { y: 0.6 }
            });
          } catch (e) {
            // Safe fallback
          }
        }

        return {
          ...item,
          sections: updatedSections,
          updatedAt: new Date().toISOString()
        };
      }
      return item;
    });

    updateItems(updated);
  };

  // Add College
  const handleAddCollege = (newCollege: TrackerItem) => {
    const updated = [newCollege, ...items];
    updateItems(updated);
  };

  // Add Portal
  const handleAddPortal = (newPortal: TrackerItem) => {
    const updated = [newPortal, ...items];
    updateItems(updated);
  };

  // Save Item from detail modal
  const handleSaveItem = (updatedItem: TrackerItem) => {
    const updated = items.map((i) => (i.id === updatedItem.id ? updatedItem : i));
    updateItems(updated);
    setSelectedDetailItem(null);
  };

  // Delete Item
  const handleDeleteItem = (itemId: string) => {
    const updated = items.filter((i) => i.id !== itemId);
    updateItems(updated);
    setSelectedDetailItem(null);
  };

  // Export JSON backup
  const handleExportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(items, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `college_tracker_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Filter items
  const filteredItems = items.filter((item) => {
    // Tab filter
    if (activeTab === 'colleges' && item.type !== 'college') return false;
    if (activeTab === 'portals' && item.type !== 'portal') return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchMajor = item.intendedMajor?.toLowerCase().includes(q);
      const matchLocation = item.location?.toLowerCase().includes(q);
      const matchSection = item.sections.some(s => s.title.toLowerCase().includes(q));
      if (!matchName && !matchMajor && !matchLocation && !matchSection) return false;
    }

    // Status filter
    if (statusFilter !== 'all') {
      const prog = calculateItemProgress(item.sections);
      if (statusFilter === 'completed' && !prog.allDone) return false;
      if (statusFilter === 'incomplete' && prog.allDone) return false;
    }

    return true;
  });

  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'progress') {
      const progA = calculateItemProgress(a.sections).percent;
      const progB = calculateItemProgress(b.sections).percent;
      return progB - progA;
    }
    if (sortBy === 'actual_deadline') {
      return a.actualDeadline.localeCompare(b.actualDeadline);
    }
    // Default: target_deadline
    return a.targetDeadline.localeCompare(b.targetDeadline);
  });

  // Counts for tabs
  const counts = {
    total: items.length,
    colleges: items.filter(i => i.type === 'college').length,
    portals: items.filter(i => i.type === 'portal').length
  };

  // If user is logged out or explicitly on landing page, show Landing Page
  if (!user.isLoggedIn || currentView === 'landing') {
    return (
      <>
        <LandingPage
          user={user}
          onSignInWithGoogle={() => setIsGoogleAuthOpen(true)}
          onGoToTracker={() => setCurrentView('dashboard')}
          onLogout={handleGoogleLogout}
        />

        <GoogleAuthModal
          isOpen={isGoogleAuthOpen}
          onClose={() => setIsGoogleAuthOpen(false)}
          onLogin={handleGoogleLogin}
          defaultEmail={user.email || 'patelkandeel@gmail.com'}
        />
      </>
    );
  }

  // If viewing Profile Page
  if (currentView === 'profile') {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
        <Navbar
          user={user}
          currentView="profile"
          setCurrentView={setCurrentView}
          onLogout={handleGoogleLogout}
          onOpenAddCollege={() => setIsAddCollegeOpen(true)}
          onOpenAddPortal={() => setIsAddPortalOpen(true)}
          onOpenGoogleLogin={() => setIsGoogleAuthOpen(true)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          counts={counts}
        />

        <main className="flex-1">
          <ProfilePage
            user={user}
            items={items}
            onSaveProfile={handleSaveProfile}
            onLogout={handleGoogleLogout}
            onBackToDashboard={() => setCurrentView('dashboard')}
            onGoToHome={() => setCurrentView('landing')}
          />
        </main>

        <AddCollegeModal
          isOpen={isAddCollegeOpen}
          onClose={() => setIsAddCollegeOpen(false)}
          onAddCollege={handleAddCollege}
        />

        <AddPortalModal
          isOpen={isAddPortalOpen}
          onClose={() => setIsAddPortalOpen(false)}
          onAddPortal={handleAddPortal}
        />
      </div>
    );
  }

  // Main Dashboard Tracker View
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-navy-500 selection:text-white">
      
      {/* Top Application Navbar */}
      <Navbar
        user={user}
        currentView="dashboard"
        setCurrentView={setCurrentView}
        onLogout={handleGoogleLogout}
        onOpenAddCollege={() => setIsAddCollegeOpen(true)}
        onOpenAddPortal={() => setIsAddPortalOpen(true)}
        onOpenGoogleLogin={() => setIsGoogleAuthOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        counts={counts}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Comprehensive Statistics & Progress Banner */}
        <StatsBanner
          items={items}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          onOpenAddCollege={() => setIsAddCollegeOpen(true)}
          onOpenAddPortal={() => setIsAddPortalOpen(true)}
        />

        {/* View Content: Cards vs Timeline */}
        {activeTab === 'timeline' ? (
          <DeadlineTimeline
            items={items}
            onOpenDetails={(item) => setSelectedDetailItem(item)}
          />
        ) : (
          <div className="space-y-4">
            {/* Cards Grid or Empty State */}
            {sortedItems.length === 0 ? (
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-dashed border-slate-300 dark:border-slate-800 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-navy-50 dark:bg-navy-950/60 text-navy-600 dark:text-navy-400 mx-auto flex items-center justify-center">
                  <Building2 className="w-8 h-8" />
                </div>
                <div className="max-w-md mx-auto">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {searchQuery || statusFilter !== 'all' ? 'No matching applications found' : 'Your tracker is ready for your college list'}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {searchQuery || statusFilter !== 'all' 
                      ? 'Try clearing your search query or adjusting your filters.'
                      : 'Add your target colleges from our pre-loaded Top 100 database or connect application portals like Common App and UC Application.'}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsAddPortalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-300 transition-colors cursor-pointer"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    + Add Portal (UC, CommonApp)
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsAddCollegeOpen(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-navy-600 hover:bg-navy-700 transition-colors cursor-pointer shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    + Add College
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedItems.map((item) => (
                  <TrackerCard
                    key={item.id}
                    item={item}
                    onUpdateSectionStatus={handleUpdateSectionStatus}
                    onOpenDetails={(itemToOpen) => setSelectedDetailItem(itemToOpen)}
                    onDeleteItem={handleDeleteItem}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Footer info & backup helper */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3">
          <p>
            Logged in with Google as <strong className="text-slate-700 dark:text-slate-300">{user.email}</strong> • Changes auto-save
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleExportData}
              className="inline-flex items-center gap-1.5 hover:text-navy-600 dark:hover:text-navy-400 cursor-pointer transition-colors"
            >
              <FolderDown className="w-3.5 h-3.5" />
              <span>Export Tracker Backup (JSON)</span>
            </button>
          </div>
        </div>

      </main>

      {/* Add College Modal */}
      <AddCollegeModal
        isOpen={isAddCollegeOpen}
        onClose={() => setIsAddCollegeOpen(false)}
        onAddCollege={handleAddCollege}
      />

      {/* Add Application Portal Modal */}
      <AddPortalModal
        isOpen={isAddPortalOpen}
        onClose={() => setIsAddPortalOpen(false)}
        onAddPortal={handleAddPortal}
      />

      {/* Item Detail / Checklist Modal */}
      <TrackerDetailModal
        item={selectedDetailItem}
        isOpen={!!selectedDetailItem}
        onClose={() => setSelectedDetailItem(null)}
        onSaveItem={handleSaveItem}
        onDeleteItem={handleDeleteItem}
      />

      {/* Google Authentication Modal */}
      <GoogleAuthModal
        isOpen={isGoogleAuthOpen}
        onClose={() => setIsGoogleAuthOpen(false)}
        onLogin={handleGoogleLogin}
        defaultEmail={user.email || 'patelkandeel@gmail.com'}
      />

    </div>
  );
}
