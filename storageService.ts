import { TrackerItem, TrackerSection, SectionStatus, UserProfile } from '../types';
import { PORTAL_PRESETS } from '../data/portalPresets';
import { COLLEGE_PRESETS } from '../data/collegePresets';

const USER_KEY = 'college_tracker_current_user';
const ITEMS_PREFIX = 'college_tracker_items_';

export const DEFAULT_USER: UserProfile = {
  email: 'patelkandeel@gmail.com',
  name: 'Kandeel Patel',
  isLoggedIn: true
};

// Initial starter data for new users (empty for clean testing)
export function getInitialItems(): TrackerItem[] {
  return [];
}

// User Profile Storage
export function getSavedUser(): UserProfile {
  try {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return DEFAULT_USER;
    const parsed = JSON.parse(raw);
    const user = { ...DEFAULT_USER, ...parsed, isLoggedIn: parsed.isLoggedIn !== undefined ? parsed.isLoggedIn : true };
    let hasChanges = false;
    if (user.applicationCycle) {
      delete user.applicationCycle;
      hasChanges = true;
    }
    if (user.avatarUrl) {
      delete user.avatarUrl;
      hasChanges = true;
    }
    if (hasChanges) {
      saveUser(user);
    }
    return user;
  } catch (e) {
    console.error('Failed to read user from storage', e);
    return DEFAULT_USER;
  }
}

export function saveUser(user: UserProfile | null): void {
  try {
    if (!user) {
      localStorage.removeItem(USER_KEY);
    } else {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
  } catch (e) {
    console.error('Failed to save user to storage', e);
  }
}

// Items Storage
export function getUserItems(userEmail: string): TrackerItem[] {
  try {
    const key = `${ITEMS_PREFIX}${userEmail.toLowerCase().trim()}`;
    const raw = localStorage.getItem(key);
    if (!raw) {
      const initial = getInitialItems();
      saveUserItems(userEmail, initial);
      return initial;
    }
    const parsed: TrackerItem[] = JSON.parse(raw);
    // Ensure no pre-added starter portals or colleges exist
    const filtered = parsed.filter(item => !item.id.startsWith('starter_'));
    if (filtered.length !== parsed.length) {
      saveUserItems(userEmail, filtered);
    }
    return filtered;
  } catch (e) {
    console.error('Failed to get items', e);
    return getInitialItems();
  }
}

export function saveUserItems(userEmail: string, items: TrackerItem[]): void {
  try {
    const key = `${ITEMS_PREFIX}${userEmail.toLowerCase().trim()}`;
    localStorage.setItem(key, JSON.stringify(items));
  } catch (e) {
    console.error('Failed to save items', e);
  }
}

// Helper: Calculate progress percentage
export function calculateItemProgress(sections: TrackerSection[]): {
  percent: number;
  total: number;
  notStarted: number;
  inProgress: number;
  finished: number;
  submitted: number;
  allDone: boolean;
} {
  if (!sections || sections.length === 0) {
    return { percent: 0, total: 0, notStarted: 0, inProgress: 0, finished: 0, submitted: 0, allDone: false };
  }

  let notStarted = 0;
  let inProgress = 0;
  let finished = 0;
  let submitted = 0;

  for (const s of sections) {
    if (s.status === 'not_started') notStarted++;
    else if (s.status === 'in_progress') inProgress++;
    else if (s.status === 'finished') finished++;
    else if (s.status === 'submitted') submitted++;
  }

  // Weighting: Submitted = 1.0, Finished = 0.9, In Progress = 0.4
  const weightedScore = (submitted * 1.0) + (finished * 0.9) + (inProgress * 0.4);
  const percent = Math.min(100, Math.round((weightedScore / sections.length) * 100));
  const allDone = (finished + submitted) === sections.length;

  return {
    percent,
    total: sections.length,
    notStarted,
    inProgress,
    finished,
    submitted,
    allDone
  };
}

// Helper: Days until deadline calculation
export function getDaysRemaining(deadlineStr: string): {
  days: number;
  formatted: string;
  isPast: boolean;
  isToday: boolean;
  urgency: 'critical' | 'warning' | 'normal' | 'past';
} {
  if (!deadlineStr) {
    return { days: 0, formatted: 'No date', isPast: false, isToday: false, urgency: 'normal' };
  }

  const targetDate = new Date(`${deadlineStr}T23:59:59`);
  const now = new Date();
  
  // Date formatting
  const formatted = targetDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const diffMs = targetDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return { days: Math.abs(diffDays), formatted, isPast: true, isToday: false, urgency: 'past' };
  }

  if (diffDays === 0) {
    return { days: 0, formatted, isPast: false, isToday: true, urgency: 'critical' };
  }

  let urgency: 'critical' | 'warning' | 'normal' = 'normal';
  if (diffDays <= 7) urgency = 'critical';
  else if (diffDays <= 21) urgency = 'warning';

  return { days: diffDays, formatted, isPast: false, isToday: false, urgency };
}

// Helper: Compute status color configuration
export const STATUS_CONFIG: Record<
  SectionStatus,
  {
    label: string;
    bgClass: string;
    borderClass: string;
    textClass: string;
    dotClass: string;
    badgeClass: string;
    iconName: string;
  }
> = {
  not_started: {
    label: 'Not Started',
    bgClass: 'bg-slate-100 dark:bg-slate-800/80',
    borderClass: 'border-slate-300 dark:border-slate-700',
    textClass: 'text-slate-600 dark:text-slate-300',
    dotClass: 'bg-slate-400',
    badgeClass: 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
    iconName: 'circle'
  },
  in_progress: {
    label: 'In Progress',
    bgClass: 'bg-amber-50 dark:bg-amber-950/40',
    borderClass: 'border-amber-300 dark:border-amber-700',
    textClass: 'text-amber-800 dark:text-amber-300',
    dotClass: 'bg-amber-500 animate-pulse',
    badgeClass: 'bg-amber-100 text-amber-900 border-amber-300 hover:bg-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-700',
    iconName: 'loader'
  },
  finished: {
    label: 'Finished',
    bgClass: 'bg-emerald-50 dark:bg-emerald-950/40',
    borderClass: 'border-emerald-300 dark:border-emerald-700',
    textClass: 'text-emerald-800 dark:text-emerald-300',
    dotClass: 'bg-emerald-500',
    badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300 hover:bg-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-700',
    iconName: 'check-circle'
  },
  submitted: {
    label: 'Submitted',
    bgClass: 'bg-navy-50 dark:bg-navy-950/40',
    borderClass: 'border-navy-300 dark:border-navy-700',
    textClass: 'text-navy-800 dark:text-navy-300',
    dotClass: 'bg-navy-600',
    badgeClass: 'bg-navy-100 text-navy-900 border-navy-300 hover:bg-navy-200 dark:bg-navy-950/60 dark:text-navy-300 dark:border-navy-700',
    iconName: 'sparkles'
  }
};
