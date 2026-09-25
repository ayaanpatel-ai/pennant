import { PresetPortal } from '../types';

export const PORTAL_PRESETS: PresetPortal[] = [
  {
    id: 'common_app',
    name: 'Common Application (Common App)',
    shortName: 'Common App',
    description: 'Centralized portal accepted by over 1,000 higher education institutions worldwide.',
    color: '#0284c7', // Sky Blue
    emoji: '📘',
    website: 'https://www.commonapp.org',
    defaultActualDeadline: '2027-01-01',
    defaultTargetBufferDays: 14,
    defaultSections: [
      {
        title: 'Profile (Personal Information)',
        description: 'Legal name, preferred name, permanent address, contact details, demographics, and languages spoken.',
        category: 'general'
      },
      {
        title: 'Family Information',
        description: 'Household information, parent education, marital status, occupations, and sibling details.',
        category: 'general'
      },
      {
        title: 'Education & Senior Year Coursework',
        description: 'Current high school, CEEB code, counselor details, colleges attended, current courses, and academic honors.',
        category: 'academics'
      },
      {
        title: 'Standardized Testing',
        description: 'Self-reported SAT, ACT, AP, IB, or TOEFL scores, or selecting test-optional participation.',
        category: 'testing'
      },
      {
        title: 'Activities List (Up to 10 Activities)',
        description: 'Ranked list of extracurricular activities, leadership positions, hours per week, and 150-character descriptions.',
        category: 'general'
      },
      {
        title: 'Common App Personal Essay',
        description: 'Main personal statement answering one of the seven prompts (250–650 words).',
        category: 'essay',
        wordLimit: '650 words'
      },
      {
        title: 'Additional Information & Extenuating Circumstances',
        description: 'Optional section for context regarding health, COVID-19 impact, family hardship, or school changes.',
        category: 'essay',
        wordLimit: '650 words'
      },
      {
        title: 'Courses & Grades (Self-Reported Transcripts)',
        description: 'Manual entry of high school transcripts and letter grades for participating member colleges.',
        category: 'academics'
      },
      {
        title: 'FERPA Release Authorization & Recommenders',
        description: 'Waive rights under FERPA, assign counselor, and invite teacher & other recommenders.',
        category: 'recommendations'
      }
    ]
  },
  {
    id: 'uc_app',
    name: 'University of California Application (UC App)',
    shortName: 'UC App',
    description: 'Shared application for all 9 undergraduate UC campuses (Berkeley, UCLA, UCSD, UCSB, UCI, UCD, UCSC, UCR, UCM).',
    color: '#1d4ed8', // UC Blue / Gold
    emoji: '🐻',
    website: 'https://apply.universityofcalifornia.edu',
    defaultActualDeadline: '2026-11-30',
    defaultTargetBufferDays: 10,
    defaultSections: [
      {
        title: 'About You (Personal Background)',
        description: 'Contact information, citizenship, California residency status, household income, and parents’ educational background.',
        category: 'general'
      },
      {
        title: 'Campuses & Majors Selection',
        description: 'Select intended UC campuses, first-choice major, and alternate major for each campus.',
        category: 'general'
      },
      {
        title: 'Academic History (A-G Coursework)',
        description: 'Detailed high school coursework in History, English, Math, Science, Language, Arts, and College Prep with exact term grades.',
        category: 'academics'
      },
      {
        title: 'Test Scores (AP, IB, International Exams)',
        description: 'Self-reported AP exams, IB higher level exams, and TOEFL/IELTS (UC is test-free for SAT/ACT).',
        category: 'testing'
      },
      {
        title: 'Activities & Awards (Up to 20 Entries)',
        description: 'Coursework other than A-G, Educational prep programs, Volunteer service, Work experience, Awards & Honors, Extracurricular activities (350 characters each).',
        category: 'general',
        wordLimit: '350 chars each'
      },
      {
        title: 'Scholarships & Support Programs',
        description: 'Select categories reflecting specific talents, affiliations, and opt into Educational Opportunity Program (EOP).',
        category: 'financial'
      },
      {
        title: 'Personal Insight Questions (PIQs - 4 of 8)',
        description: 'Answer 4 chosen prompts out of 8 reflecting leadership, creativity, talent, educational hurdles, or community passion (350 words max each).',
        category: 'essay',
        wordLimit: '4 × 350 words'
      },
      {
        title: 'Additional Comments (Academic History & General)',
        description: 'Optional clarification for grades, unusual grading systems, gaps, or unique personal circumstances (up to 550 words).',
        category: 'essay',
        wordLimit: '550 words'
      },
      {
        title: 'Review, Fee Payment & Submission',
        description: 'System check for missing items, fee waiver verification / payment ($80 per campus), and official electronic signature.',
        category: 'general'
      }
    ]
  },
  {
    id: 'csu_apply',
    name: 'Cal State Apply (CSU App)',
    shortName: 'CSU Apply',
    description: 'Application portal for all 23 California State University campuses (Cal Poly SLO, SDSU, SJSU, CSULB, etc.).',
    color: '#b91c1c', // Crimson / Red
    emoji: '☀️',
    website: 'https://www.calstate.edu/apply',
    defaultActualDeadline: '2026-11-30',
    defaultTargetBufferDays: 10,
    defaultSections: [
      {
        title: 'Quadrant 1: Personal Information',
        description: 'Contact details, citizenship, residency status, parent/guardian info, and demographic background.',
        category: 'general'
      },
      {
        title: 'Quadrant 2: High School Coursework & A-G Matching',
        description: 'Complete entry of all 9th-12th grade high school courses, summer sessions, and A-G subject classification verification.',
        category: 'academics'
      },
      {
        title: 'Quadrant 2: Standardized Test Scores',
        description: 'Self-reported AP and IB scores for college credit placement (CSU is test-free for SAT/ACT admissions).',
        category: 'testing'
      },
      {
        title: 'Quadrant 3: Supporting Information & EOP',
        description: 'Educational Opportunity Program (EOP) application questions, applicant recommendations, and work/extracurricular hours.',
        category: 'financial'
      },
      {
        title: 'Quadrant 4: Program Materials & Campus Questions',
        description: 'Campus-specific prerequisites, major questions, supplemental information, and multi-criteria admission answers.',
        category: 'supplemental'
      },
      {
        title: 'Review, Application Fees & Final Submission',
        description: 'Verification of eligibility index / A-G GPA calculation, fee waiver check, fee payment ($70 per campus), and submission.',
        category: 'general'
      }
    ]
  },
  {
    id: 'coalition_app',
    name: 'Coalition App on Scoir',
    shortName: 'Coalition App',
    description: 'Application platform supported by 170+ member universities dedicated to college access.',
    color: '#059669', // Emerald
    emoji: '🌱',
    website: 'https://www.scoir.com',
    defaultActualDeadline: '2027-01-05',
    defaultTargetBufferDays: 14,
    defaultSections: [
      {
        title: 'Personal & Family Profile',
        description: 'Personal bio, legal and preferred names, contact details, household size, and parent background.',
        category: 'general'
      },
      {
        title: 'High School Profile & Course History',
        description: 'Current high school verification, senior year academic coursework, and GPA scale.',
        category: 'academics'
      },
      {
        title: 'Honors & Distinctions',
        description: 'Academic honors, scholastic recognitions, and school/state/national distinction awards.',
        category: 'academics'
      },
      {
        title: 'Activities & Experiences (Up to 8)',
        description: 'Key extracurricular commitments, leadership positions, hobbies, work, and community initiatives.',
        category: 'general'
      },
      {
        title: 'Coalition Essay (Main Personal Essay)',
        description: 'Answer one of the Coalition prompts showcasing your unique perspective and voice (500–650 words).',
        category: 'essay',
        wordLimit: '650 words'
      },
      {
        title: 'Scoir Locker & Supplemental Media',
        description: 'Digital locker uploads for documents, resumes, creative portfolios, video introductions, or awards.',
        category: 'portfolio'
      },
      {
        title: 'Recommendation Requests',
        description: 'Requesting counselor letters, high school teacher evaluations, and outside recommender endorsements.',
        category: 'recommendations'
      }
    ]
  }
];
