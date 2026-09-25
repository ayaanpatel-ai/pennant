export type SectionStatus = 'not_started' | 'in_progress' | 'finished' | 'submitted';

export type CategoryType = 
  | 'essay' 
  | 'academics' 
  | 'testing' 
  | 'recommendations' 
  | 'general' 
  | 'portfolio' 
  | 'financial' 
  | 'supplemental';

export interface TrackerSection {
  id: string;
  title: string;
  description?: string;
  category?: CategoryType;
  status: SectionStatus;
  notes?: string;
  draftUrl?: string; // e.g. Google Doc link
  wordLimit?: string;
  updatedAt: string;
}

export type TrackerItemType = 'college' | 'portal';

export interface TrackerItem {
  id: string;
  type: TrackerItemType;
  name: string;
  institutionCode?: string;
  portalType?: string; // 'Common App' | 'UC Application' | 'CSU Apply' | 'Coalition App' | 'Institutional' | 'Other'
  location?: string;
  color?: string; // hex or tailwind theme color
  bannerEmoji?: string;
  targetDeadline: string; // YYYY-MM-DD
  actualDeadline: string; // YYYY-MM-DD
  decisionPlan?: 'Regular Decision' | 'Early Action' | 'Early Decision' | 'Early Decision II' | 'Rolling' | 'Transfer' | 'Standard';
  intendedMajor?: string;
  alternateMajor?: string;
  sections: TrackerSection[];
  notes?: string;
  portalUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  email: string;
  name: string;
  highSchool?: string;
  graduationYear?: string;
  gpa?: string;
  testScore?: string;
  bio?: string;
  intendedMajor?: string;
  targetBufferDays?: number;
  isLoggedIn: boolean;
}

export interface PresetCollege {
  id: string;
  name: string;
  shortName: string;
  aliases?: string[];
  location: string;
  color: string;
  emoji: string;
  portalType: string;
  website: string;
  acceptanceRate?: string;
  defaultPlan: 'Regular Decision' | 'Early Action' | 'Early Decision' | 'Rolling';
  actualDeadline: string; // e.g. 2026-11-01 or 2027-01-05
  defaultTargetBufferDays: number; // e.g. 14 days before actual
  majorsUrl?: string;
  majors: string[];
  defaultSections: Array<{
    title: string;
    description: string;
    category: CategoryType;
    wordLimit?: string;
  }>;
}

export interface PresetPortal {
  id: string;
  name: string;
  shortName: string;
  description: string;
  color: string;
  emoji: string;
  website: string;
  defaultActualDeadline: string;
  defaultTargetBufferDays: number;
  defaultSections: Array<{
    title: string;
    description: string;
    category: CategoryType;
    wordLimit?: string;
  }>;
}
