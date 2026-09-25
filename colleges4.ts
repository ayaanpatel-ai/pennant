import { PresetCollege } from '../types';
import { getFullMajorsList } from './commonMajors';

export const COLLEGES_PART_4: PresetCollege[] = [
  {
    id: 'northeastern',
    name: 'Northeastern University',
    shortName: 'Northeastern',
    aliases: ['NEU', 'Northeastern', 'Boston', 'Co-op', 'Khoury'],
    location: 'Boston, MA',
    color: '#CC0000',
    emoji: '🐾',
    portalType: 'Common App',
    website: 'https://admissions.northeastern.edu',
    majorsUrl: 'https://catalog.northeastern.edu/undergraduate/programs/',
    acceptanceRate: '5.6%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Computer Science (Khoury College of Computer Sciences)',
      'Combined Majors (CS + Business, CS + Design, CS + Music)',
      'Finance (D’Amore-McKim School of Business)',
      'Cooperative Education (Co-op 6-Month Professional Rotations)',
      'Bioengineering',
      'Mechanical Engineering',
      'Data Science (Khoury)',
      'Health Science (Bouvé College of Health Sciences)',
      'Architecture',
      'Nursing (BSN)',
      'Cybersecurity (Khoury)'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay', wordLimit: '650 words' },
      { title: 'Campus Choice & Global Scholar Designation', description: 'Select preferred entry terms and campus options (Boston, London, Oakland).', category: 'general' },
      { title: 'Counselor Recommendation & 1-2 Teacher Letters', description: 'Secondary school report and teacher evaluations.', category: 'recommendations' }
    ]
  },
  {
    id: 'tamu',
    name: 'Texas A&M University - College Station',
    shortName: 'Texas A&M',
    aliases: ['TAMU', 'A&M', 'Aggies', 'Texas A&M', 'College Station'],
    location: 'College Station, TX',
    color: '#500000',
    emoji: '👍',
    portalType: 'Common App',
    website: 'https://admissions.tamu.edu',
    majorsUrl: 'https://admissions.tamu.edu/academics/degrees-and-majors',
    acceptanceRate: '62.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-10-15',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'General Engineering (Entry-to-a-Major ETAM Process)',
      'Petroleum Engineering (Harold Vance Dept #1 in US)',
      'Aerospace Engineering',
      'Computer Science (College of Engineering)',
      'Mechanical Engineering',
      'Finance (Mays Business School)',
      'Accounting (Mays)',
      'Biomedical Engineering',
      'Animal Science / Pre-Vet',
      'Construction Science',
      'Agricultural Economics'
    ]),
    defaultSections: [
      { title: 'Common App Core / Topic A Essay', description: 'Tell us your story and how your experiences shaped your world.', category: 'essay', wordLimit: '500–700 words' },
      { title: 'Texas A&M Short Answer 1: Why Major?', description: 'Describe why you chose your intended majors and career goals.', category: 'supplemental', wordLimit: '250 words' },
      { title: 'Texas A&M Short Answer 2: Life Experience / Impact', description: 'Describe a life event or challenge that offered a new perspective.', category: 'supplemental', wordLimit: '250 words' },
      { title: 'Self-Reported Academic Record (SRAR)', description: 'Mandatory completion of Texas A&M SRAR grade reporting.', category: 'academics' }
    ]
  },
  {
    id: 'uga',
    name: 'University of Georgia (UGA)',
    shortName: 'Georgia (UGA)',
    aliases: ['UGA', 'Georgia', 'Bulldogs', 'Athens', 'University of Georgia'],
    location: 'Athens, GA',
    color: '#BA0C2F',
    emoji: '🐶',
    portalType: 'Common App',
    website: 'https://admissions.uga.edu',
    majorsUrl: 'https://admissions.uga.edu/academics/majors/',
    acceptanceRate: '35.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-10-15',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Finance (Terry College of Business)',
      'Risk Management and Insurance (Terry #1 Nationally)',
      'Marketing (Terry)',
      'Biological Science / Pre-Med (Franklin College)',
      'Computer Science',
      'Mechanical Engineering',
      'Journalism & Mass Communication (Grady)',
      'Public Relations (Grady)',
      'International Affairs (SPIA)',
      'Veterinary Medicine / Animal Science'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay' },
      { title: 'UGA Short Answer: What Excites You?', description: 'Tell us something about you that isn’t found in your transcript or test scores.', category: 'supplemental', wordLimit: '200–300 words' },
      { title: 'Official Test Scores Submission (SAT / ACT)', description: 'Mandatory test scores submission required by Georgia Board of Regents.', category: 'testing' },
      { title: 'Counselor Recommendation & High School Transcript', description: 'Secondary school report and transcript.', category: 'recommendations' }
    ]
  },
  {
    id: 'msu',
    name: 'Michigan State University (MSU)',
    shortName: 'Michigan State',
    aliases: ['MSU', 'Michigan State', 'Spartans', 'East Lansing'],
    location: 'East Lansing, MI',
    color: '#18453B',
    emoji: '⚔️',
    portalType: 'Common App',
    website: 'https://admissions.msu.edu',
    majorsUrl: 'https://admissions.msu.edu/academics/majors-degrees-programs',
    acceptanceRate: '88.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Supply Chain Management (Broad College of Business #1 in US)',
      'Finance (Broad)',
      'Packaging (School of Packaging #1 in US)',
      'Mechanical Engineering',
      'Computer Science',
      'Veterinary Medicine / Animal Science',
      'James Madison College (Public Affairs)',
      'Kinesiology',
      'Nursing (BSN)',
      'Pre-Law Humanities'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay' },
      { title: 'MSU Self-Reported High School Academic Record', description: 'Self-reported coursework and grades.', category: 'academics' }
    ]
  },
  {
    id: 'ucsc',
    name: 'UC Santa Cruz (UCSC)',
    shortName: 'UC Santa Cruz',
    aliases: ['UCSC', 'Santa Cruz', 'Banana Slugs', 'UC Santa Cruz', 'Baskin'],
    location: 'Santa Cruz, CA',
    color: '#003C6C',
    emoji: '🐌',
    portalType: 'UC Application',
    website: 'https://admissions.ucsc.edu',
    majorsUrl: 'https://admissions.ucsc.edu/programs',
    acceptanceRate: '65.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2026-11-30',
    defaultTargetBufferDays: 10,
    majors: getFullMajorsList([
      'Computer Science: Computer Game Design (Baskin Engineering)',
      'Computer Science (Baskin Engineering)',
      'Marine Biology (Ocean Health & Monterey Bay proximity)',
      'Robotics Engineering (Baskin)',
      'Astrophysics',
      'Biomolecular Engineering and Bioinformatics',
      'Technology and Information Management',
      'Environmental Studies / Agroecology',
      'Film and Digital Media',
      'Psychology'
    ]),
    defaultSections: [
      { title: 'UC Application Base Profile & A-G History', description: '9th-12th coursework, California A-G alignment, and grades.', category: 'academics' },
      { title: 'UC Activities & Awards (20 slots)', description: 'Extracurriculars, work experiences, and honors.', category: 'general' },
      { title: '4 Personal Insight Questions (PIQs)', description: 'Four 350-word essays from the official University of California prompts.', category: 'essay', wordLimit: '4 × 350 words' }
    ]
  },
  {
    id: 'ucr',
    name: 'UC Riverside (UCR)',
    shortName: 'UC Riverside',
    location: 'Riverside, CA',
    aliases: ['UCR', 'Riverside', 'Highlanders', 'Bourns', 'UC Riverside'],
    color: '#003B5C',
    emoji: '🐻',
    portalType: 'UC Application',
    website: 'https://admissions.ucr.edu',
    majorsUrl: 'https://admissions.ucr.edu/majors',
    acceptanceRate: '70.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2026-11-30',
    defaultTargetBufferDays: 10,
    majors: getFullMajorsList([
      'Computer Science (Bourns College of Engineering, BCOE)',
      'Computer Science with Business Applications (CSBA)',
      'Bioengineering (BCOE)',
      'Mechanical Engineering',
      'Business Administration (School of Business)',
      'Entomology (World Ranked #2)',
      'Neuroscience',
      'Biomedical Sciences (Thomas Haider Program in UCR School of Medicine)',
      'Plant Biology',
      'Psychology'
    ]),
    defaultSections: [
      { title: 'UC Application Base Profile & A-G Courses', description: 'High school courses and letter grades.', category: 'academics' },
      { title: 'UC Activities & Awards (20 entries)', description: 'Extracurricular leadership and jobs.', category: 'general' },
      { title: '4 Personal Insight Questions (PIQs)', description: 'Four 350-word essays from official UC prompts.', category: 'essay', wordLimit: '4 × 350 words' }
    ]
  },
  {
    id: 'uc_merced',
    name: 'UC Merced',
    shortName: 'UC Merced',
    aliases: ['UCM', 'Merced', 'Bobcats', 'UC Merced'],
    location: 'Merced, CA',
    color: '#002855',
    emoji: '🐱',
    portalType: 'UC Application',
    website: 'https://admissions.ucmerced.edu',
    majorsUrl: 'https://admissions.ucmerced.edu/academics',
    acceptanceRate: '89.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2026-11-30',
    defaultTargetBufferDays: 10,
    majors: getFullMajorsList([
      'Computer Science and Engineering (School of Engineering)',
      'Mechanical Engineering',
      'Biological Sciences (Health Sciences emphasis)',
      'Management and Business Economics',
      'Bioengineering',
      'Environmental Engineering',
      'Psychology',
      'Cognitive Science'
    ]),
    defaultSections: [
      { title: 'UC Application Academic History', description: 'Self-reported A-G high school courses and grades.', category: 'academics' },
      { title: '4 Personal Insight Questions (PIQs)', description: 'Four 350-word responses chosen from the 8 official prompts.', category: 'essay', wordLimit: '4 × 350 words' }
    ]
  },
  {
    id: 'barnard',
    name: 'Barnard College',
    shortName: 'Barnard',
    aliases: ['Barnard', 'Columbia', 'NYC', 'Women’s College'],
    location: 'New York, NY',
    color: '#003366',
    emoji: '🐻',
    portalType: 'Common App',
    website: 'https://barnard.edu/admissions',
    majorsUrl: 'https://barnard.edu/departments',
    acceptanceRate: '6.5%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Columbia University Cross-Registration (Access to all Columbia courses)',
      'Economics',
      'Political Science',
      'Computer Science (Collaborative with Columbia SEAS)',
      'English & Creative Writing',
      'Psychology',
      'Neuroscience & Behavior',
      'Art History',
      'Dance',
      'Women’s, Gender, and Sexuality Studies'
    ]),
    defaultSections: [
      { title: 'Common App Core Profile & Personal Essay', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'Barnard Women’s College Essay: Why Barnard?', description: 'What factors led you to apply to Barnard College and how do you plan to use our resources?', category: 'supplemental', wordLimit: '300 words' },
      { title: 'Barnard Conversation with a Historic Woman', description: 'Pick one woman from history with whom you would like to have an hour-long conversation. What would you discuss?', category: 'supplemental', wordLimit: '300 words' },
      { title: 'Counselor Recommendation & 2 Teacher Letters', description: 'Transcripts and recommendations.', category: 'recommendations' }
    ]
  },
  {
    id: 'rpi',
    name: 'Rensselaer Polytechnic Institute (RPI)',
    shortName: 'RPI',
    aliases: ['RPI', 'Rensselaer', 'Engineers', 'Troy', 'Polytechnic'],
    location: 'Troy, NY',
    color: '#E2231A',
    emoji: '🚀',
    portalType: 'Common App',
    website: 'https://admissions.rpi.edu',
    majorsUrl: 'https://admissions.rpi.edu/academics',
    acceptanceRate: '64.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Aeronautical Engineering',
      'Mechanical Engineering',
      'Computer Science',
      'Games and Simulation Arts and Sciences (GSAS #3 Nationally)',
      'Biomedical Engineering',
      'Electrical Engineering',
      'Architecture (5-year B.Arch)',
      'Accelerated Physician-Scientist Program (BS/MD 7-year)',
      'Materials Science and Engineering'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'RPI Why Major & Polytechnic Innovation Essay', description: 'Explain your interest in studying your designated STEM discipline at Rensselaer.', category: 'supplemental', wordLimit: '250 words' }
    ]
  },
  {
    id: 'wpi',
    name: 'Worcester Polytechnic Institute (WPI)',
    shortName: 'WPI',
    aliases: ['WPI', 'Worcester Poly', 'Robotics', 'Goat'],
    location: 'Worcester, MA',
    color: '#AC2B37',
    emoji: '🐐',
    portalType: 'Common App',
    website: 'https://www.wpi.edu/admissions/undergraduate',
    majorsUrl: 'https://www.wpi.edu/academics/study',
    acceptanceRate: '57.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Robotics Engineering (First Undergraduate Robotics Program in US)',
      'Computer Science',
      'Interactive Media & Game Development (IMGD)',
      'Biomedical Engineering',
      'Mechanical Engineering',
      'Aerospace Engineering',
      'The WPI Plan (Seven-Week Terms & Major Qualifying Project MQP)'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay' }
    ]
  },
  {
    id: 'fordham',
    name: 'Fordham University',
    shortName: 'Fordham',
    aliases: ['Fordham', 'Rams', 'Rose Hill', 'Lincoln Center', 'NYC'],
    location: 'New York, NY',
    color: '#860038',
    emoji: '🐏',
    portalType: 'Common App',
    website: 'https://www.fordham.edu/admissions',
    majorsUrl: 'https://www.fordham.edu/undergraduate-admission/academics/majors-and-minors/',
    acceptanceRate: '54.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Finance (Gabelli School of Business - Wall Street Proximity)',
      'Global Business (Gabelli Lincoln Center)',
      'Theatre & Performance (Lincoln Center Acting)',
      'Communications & Media Studies',
      'Psychology',
      'Political Science',
      'Computer Science',
      'Pre-Law Studies',
      'Integrative Neuroscience'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'Campus Designation (Rose Hill vs Lincoln Center)', description: 'Select your preferred NYC campus environment.', category: 'general' }
    ]
  },
  {
    id: 'smu',
    name: 'Southern Methodist University (SMU)',
    shortName: 'SMU',
    aliases: ['SMU', 'Mustangs', 'Dallas', 'Cox'],
    location: 'Dallas, TX',
    color: '#003366',
    emoji: '🐎',
    portalType: 'Common App',
    website: 'https://www.smu.edu/admission',
    majorsUrl: 'https://www.smu.edu/academics/majors',
    acceptanceRate: '52.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Finance (Cox School of Business)',
      'Management Information Systems (Cox)',
      'Mechanical Engineering (Lyle School of Engineering)',
      'Computer Science (Lyle)',
      'Advertising (Meadows School of the Arts)',
      'Film and Media Arts (Meadows)',
      'Fashion Media',
      'Economics'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'SMU Why SMU & Dallas City Match Essay', description: 'What attracted you to SMU and how will you take advantage of opportunities in Dallas?', category: 'supplemental', wordLimit: '250 words' }
    ]
  },
  {
    id: 'tcu',
    name: 'Texas Christian University (TCU)',
    shortName: 'TCU',
    aliases: ['TCU', 'Horned Frogs', 'Fort Worth', 'Neeley'],
    location: 'Fort Worth, TX',
    color: '#4D1979',
    emoji: '🐸',
    portalType: 'Common App',
    website: 'https://admissions.tcu.edu',
    majorsUrl: 'https://admissions.tcu.edu/academics/majors-minors/',
    acceptanceRate: '56.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Finance (Neeley School of Business)',
      'Nursing (Harris College of Nursing & Health Sciences BSN)',
      'Strategic Communication (Bob Schieffer College of Communication)',
      'Movement Science / Kinesiology',
      'Biology / Pre-Med',
      'Computer Science',
      'Ranch Management (Direct Certificate / BS)',
      'Musical Theatre'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'TCU Short Answer (Choose 1 of 3)', description: 'Share a story about an experience that changed how you view the world.', category: 'supplemental', wordLimit: '200 words' }
    ]
  },
  {
    id: 'uoregon',
    name: 'University of Oregon (UO)',
    shortName: 'Oregon',
    aliases: ['UO', 'Oregon', 'Ducks', 'Eugene', 'Nike', 'Lundquist'],
    location: 'Eugene, OR',
    color: '#154734',
    emoji: '🦆',
    portalType: 'Common App',
    website: 'https://admissions.uoregon.edu',
    majorsUrl: 'https://admissions.uoregon.edu/majors',
    acceptanceRate: '86.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Sports Business (Warsaw Sports Marketing Center #1 in US)',
      'Business Administration (Lundquist)',
      'Architecture (College of Design #1 Sustainable Architecture)',
      'Journalism & Advertising (SOJC)',
      'Human Physiology (Pre-Med / Athletic Medicine)',
      'Product Design',
      'Computer Science',
      'Marine Biology (OIMB)'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay' }
    ]
  },
  {
    id: 'uofa',
    name: 'University of Arizona',
    shortName: 'Arizona',
    aliases: ['UofA', 'Arizona', 'Wildcats', 'Tucson', 'Eller'],
    location: 'Tucson, AZ',
    color: '#CC0033',
    emoji: '🐱',
    portalType: 'Common App',
    website: 'https://www.arizona.edu/admissions',
    majorsUrl: 'https://www.arizona.edu/degree-search',
    acceptanceRate: '87.0%',
    defaultPlan: 'Rolling',
    actualDeadline: '2027-02-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Optical Sciences and Engineering (Wyant College of Optical Sciences)',
      'Management Information Systems (Eller #1 Public MIS in US)',
      'Astronomy & Planetary Sciences (Space Exploration / NASA Grants)',
      'Finance (Eller College of Management)',
      'Aerospace Engineering',
      'Nursing (BSN)',
      'Architecture (5-year B.Arch)',
      'Speech, Language, and Hearing Sciences'
    ]),
    defaultSections: [
      { title: 'Common App Core Profile & Academic Record', description: 'Self-reported coursework and grades.', category: 'academics' }
    ]
  },
  {
    id: 'asu',
    name: 'Arizona State University (ASU)',
    shortName: 'Arizona State (ASU)',
    aliases: ['ASU', 'Sun Devils', 'Tempe', 'W.P. Carey', 'Fulton', 'Innovation'],
    location: 'Tempe, AZ',
    color: '#8C1D40',
    emoji: '🔱',
    portalType: 'Common App',
    website: 'https://admission.asu.edu',
    majorsUrl: 'https://admission.asu.edu/academics/degrees',
    acceptanceRate: '90.0%',
    defaultPlan: 'Rolling',
    actualDeadline: '2027-02-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Supply Chain Management (W.P. Carey #2 Nationally)',
      'Computer Science (Ira A. Fulton Schools of Engineering)',
      'Sustainability (School of Sustainability - First in US)',
      'Aviation / Professional Flight',
      'Finance (W.P. Carey)',
      'Journalism and Mass Communication (Walter Cronkite)',
      'Mechanical Engineering',
      'Biomedical Engineering',
      'Nursing (Edson College BSN)'
    ]),
    defaultSections: [
      { title: 'Common App Core Application & Self-Reported Grades', description: 'Coursework and semester grades.', category: 'academics' },
      { title: 'Barrett, The Honors College Application (Optional)', description: 'Supplemental creative essays for Barrett Honors College.', category: 'supplemental' }
    ]
  },
  {
    id: 'sdsu',
    name: 'San Diego State University (SDSU)',
    shortName: 'SDSU',
    aliases: ['SDSU', 'San Diego State', 'Aztecs', 'CSU San Diego'],
    location: 'San Diego, CA',
    color: '#A6192E',
    emoji: '☀️',
    portalType: 'CSU Apply',
    website: 'https://admissions.sdsu.edu',
    majorsUrl: 'https://admissions.sdsu.edu/academic-programs/majors',
    acceptanceRate: '38.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2026-11-30',
    defaultTargetBufferDays: 10,
    majors: getFullMajorsList([
      'Nursing (Direct BSN Impacted Program)',
      'International Business (Ranked #8 in US)',
      'Finance (Fowler College of Business)',
      'Mechanical Engineering',
      'Computer Science',
      'Aerospace Engineering',
      'Kinesiology / Athletic Training',
      'Television, Film, and New Media Production',
      'Hospitality and Tourism Management'
    ]),
    defaultSections: [
      { title: 'CSU Apply Academic History Quadrant', description: 'Complete 9th-12th high school coursework and grades.', category: 'academics' },
      { title: 'SDSU Direct-to-Major Selection', description: 'Declared impacted major choice.', category: 'general' }
    ]
  },
  {
    id: 'sjsu',
    name: 'San Jose State University (SJSU)',
    shortName: 'San Jose State (SJSU)',
    aliases: ['SJSU', 'San Jose State', 'Silicon Valley', 'Spartans', 'CSU'],
    location: 'San Jose, CA',
    color: '#0055A2',
    emoji: '💻',
    portalType: 'CSU Apply',
    website: 'https://www.sjsu.edu/admissions',
    majorsUrl: 'https://www.sjsu.edu/admissions/programs/index.php',
    acceptanceRate: '75.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2026-11-30',
    defaultTargetBufferDays: 10,
    majors: getFullMajorsList([
      'Software Engineering (Silicon Valley #1 Tech Feeder)',
      'Computer Science (Impacted)',
      'Computer Engineering (Charles W. Davidson)',
      'Animation / Illustration (World Renowned Shrek / Pixar Alumni)',
      'Business Administration: Management Information Systems (Lucas)',
      'Aviation & Aerospace Engineering',
      'Nursing (BSN Impacted)',
      'Industrial Design'
    ]),
    defaultSections: [
      { title: 'CSU Apply Academic History Quadrant', description: 'Complete high school A-G coursework entry.', category: 'academics' }
    ]
  },
  {
    id: 'uiowa',
    name: 'University of Iowa',
    shortName: 'Iowa',
    aliases: ['Iowa', 'Hawkeyes', 'Tippie', 'Iowa City'],
    location: 'Iowa City, IA',
    color: '#000000',
    emoji: '🦅',
    portalType: 'Common App',
    website: 'https://admissions.uiowa.edu',
    majorsUrl: 'https://admissions.uiowa.edu/academics/majors',
    acceptanceRate: '86.0%',
    defaultPlan: 'Rolling',
    actualDeadline: '2027-02-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'English and Creative Writing (Iowa Writers’ Workshop Proximity)',
      'Finance (Tippie College of Business Direct Admit)',
      'Nursing (BSN Direct Entry)',
      'Biomedical Engineering',
      'Actuarial Science',
      'Speech and Hearing Science',
      'Mechanical Engineering',
      'Psychology'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' }
    ]
  },
  {
    id: 'davidson',
    name: 'Davidson College',
    shortName: 'Davidson',
    aliases: ['Davidson', 'Wildcats', 'North Carolina', 'Steph Curry'],
    location: 'Davidson, NC',
    color: '#AC1A2F',
    emoji: '🐱',
    portalType: 'Common App',
    website: 'https://www.davidson.edu/admission-and-financial-aid',
    majorsUrl: 'https://www.davidson.edu/academics/majors-minors',
    acceptanceRate: '14.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-05',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Economics',
      'Political Science',
      'Biology / Pre-Med',
      'Computer Science',
      'Mathematics',
      'Public Policy',
      'Psychology',
      'History'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay' },
      { title: 'Davidson Honor Code & Community Essay', description: 'Reflect on how the Davidson Honor Code and community would shape your experience.', category: 'supplemental', wordLimit: '250–300 words' }
    ]
  },
  {
    id: 'colgate',
    name: 'Colgate University',
    shortName: 'Colgate',
    aliases: ['Colgate', 'Raiders', 'Hamilton NY'],
    location: 'Hamilton, NY',
    color: '#820000',
    emoji: '🏛️',
    portalType: 'Common App',
    website: 'https://www.colgate.edu/admission-aid',
    majorsUrl: 'https://www.colgate.edu/academics/departments-programs',
    acceptanceRate: '12.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-15',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Economics',
      'Political Science / International Relations',
      'Computer Science',
      'Biology / Pre-Med',
      'Mathematical Economics',
      'Peace and Conflict Studies',
      'Environmental Studies'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay' }
    ]
  },
  {
    id: 'vassar',
    name: 'Vassar College',
    shortName: 'Vassar',
    aliases: ['Vassar', 'Brewers', 'Poughkeepsie', 'Seven Sisters'],
    location: 'Poughkeepsie, NY',
    color: '#862633',
    emoji: '🌸',
    portalType: 'Common App',
    website: 'https://www.vassar.edu/admission',
    majorsUrl: 'https://www.vassar.edu/admission/academics/majors',
    acceptanceRate: '18.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Cognitive Science (First Degree-Granting Program in US)',
      'Drama and Film',
      'Economics',
      'Political Science',
      'Computer Science',
      'Art History',
      'Biology / Pre-Med',
      'Philosophy'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay' },
      { title: 'Vassar Space Question: Your Place in Community', description: 'How do you envision creating and occupying space within Vassar’s learning community?', category: 'supplemental', wordLimit: '300 words' }
    ]
  }
];
