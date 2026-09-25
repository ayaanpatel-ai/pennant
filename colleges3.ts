import { PresetCollege } from '../types';
import { getFullMajorsList } from './commonMajors';

export const COLLEGES_PART_3: PresetCollege[] = [
  {
    id: 'williams',
    name: 'Williams College',
    shortName: 'Williams',
    location: 'Williamstown, MA',
    color: '#502D79',
    emoji: '🏔️',
    portalType: 'Common App',
    website: 'https://admission.williams.edu',
    majorsUrl: 'https://admission.williams.edu/learning-at-williams/areas-of-study/',
    acceptanceRate: '8.5%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-08',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Economics',
      'Oxford Tutorial Program',
      'Art History (Williams Art Mafia)',
      'Mathematics & Statistics',
      'Biology / Pre-Med',
      'Political Science',
      'Computer Science',
      'Psychology',
      'English'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay' },
      { title: 'Williams Oxford Tutorial / Perspective Essay', description: 'At Williams, tutorials pair two students with a professor. Describe how you learn in dialogue.', category: 'supplemental', wordLimit: '300 words' }
    ]
  },
  {
    id: 'amherst',
    name: 'Amherst College',
    shortName: 'Amherst',
    location: 'Amherst, MA',
    color: '#4B286D',
    emoji: '💜',
    portalType: 'Common App',
    website: 'https://www.amherst.edu/admission',
    majorsUrl: 'https://www.amherst.edu/academiclife/departments',
    acceptanceRate: '9.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-04',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Open Curriculum (No Distribution Requirements)',
      'Economics',
      'Mathematics and Computer Science',
      'Political Science',
      'English and Literary Studies',
      'Neuroscience',
      'Law, Jurisprudence and Social Thought (LJST)',
      'Biology / Pre-Med'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay' },
      { title: 'Amherst Writing Option (Choose 1 of 3)', description: 'Submit a graded high school paper OR respond to one of Amherst’s quotation prompts.', category: 'supplemental', wordLimit: '300 words' }
    ]
  },
  {
    id: 'swarthmore',
    name: 'Swarthmore College',
    shortName: 'Swarthmore',
    location: 'Swarthmore, PA',
    color: '#990000',
    emoji: '🌸',
    portalType: 'Common App',
    website: 'https://www.swarthmore.edu/admissions-aid',
    majorsUrl: 'https://www.swarthmore.edu/academics/majors-minors',
    acceptanceRate: '6.9%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-04',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Honors Program (External Examiner System)',
      'Engineering (General BS in Engineering)',
      'Computer Science',
      'Economics',
      'Political Science',
      'Biology / Pre-Med',
      'Peace and Conflict Studies',
      'Psychology'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay' },
      { title: 'Swarthmore Intellectual Curiosity Essay', description: 'Please write about why you are interested in Swarthmore College and learning here.', category: 'supplemental', wordLimit: '250 words' }
    ]
  },
  {
    id: 'pomona',
    name: 'Pomona College',
    shortName: 'Pomona',
    location: 'Claremont, CA',
    color: '#005596',
    emoji: '🌴',
    portalType: 'Common App',
    website: 'https://www.pomona.edu/admissions',
    majorsUrl: 'https://www.pomona.edu/academics/majors-and-minors',
    acceptanceRate: '7.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-08',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Claremont Colleges Consortium Access',
      'Economics',
      'Computer Science',
      'Politics',
      'Neuroscience',
      'Molecular Biology / Pre-Med',
      'Public Policy Analysis',
      'Mathematics',
      'Environmental Analysis'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay' },
      { title: 'Pomona Academic Interest Short Essay', description: 'What academic interest are you eager to explore at Pomona?', category: 'supplemental', wordLimit: '150 words' },
      { title: 'Pomona Community Reflection (Choose 1 of 3)', description: 'Reflect on dialogue, courage, or a moment of personal transformation.', category: 'supplemental', wordLimit: '250 words' }
    ]
  },
  {
    id: 'wellesley',
    name: 'Wellesley College',
    shortName: 'Wellesley',
    location: 'Wellesley, MA',
    color: '#002B66',
    emoji: '👑',
    portalType: 'Common App',
    website: 'https://www.wellesley.edu/admission',
    majorsUrl: 'https://www.wellesley.edu/academics/majors-and-minors',
    acceptanceRate: '13.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-08',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Economics',
      'Political Science',
      'Computer Science (MIT Cross-Registration)',
      'Biological Sciences / Pre-Med',
      'Neuroscience',
      'Peace & Justice Studies',
      'International Relations',
      'Women’s and Gender Studies'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay' },
      { title: 'Wellesley 100 Essay', description: 'When choosing a college, you are choosing an intellectual community. Which item from the Wellesley 100 resonates most with you?', category: 'supplemental', wordLimit: '300 words' }
    ]
  },
  {
    id: 'bowdoin',
    name: 'Bowdoin College',
    shortName: 'Bowdoin',
    location: 'Brunswick, ME',
    color: '#000000',
    emoji: '🐻',
    portalType: 'Common App',
    website: 'https://www.bowdoin.edu/admissions',
    majorsUrl: 'https://www.bowdoin.edu/academics/departments-programs/index.html',
    acceptanceRate: '9.2%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-05',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Government and Legal Studies',
      'Economics',
      'Biology',
      'Computer Science',
      'Earth and Oceanographic Science (EOS)',
      'Environmental Studies (Schiller Coastal Studies Center)',
      'History',
      'Mathematics'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'Bowdoin Common Good Essay', description: 'Generations of students have found meaning in "The Offer of the College". Reflect on a line from the Offer.', category: 'supplemental', wordLimit: '250 words' }
    ]
  },
  {
    id: 'carleton',
    name: 'Carleton College',
    shortName: 'Carleton',
    location: 'Northfield, MN',
    color: '#003366',
    emoji: '🐧',
    portalType: 'Common App',
    website: 'https://www.carleton.edu/admissions',
    majorsUrl: 'https://www.carleton.edu/academics/majors-and-minors/',
    acceptanceRate: '16.6%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-15',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Computer Science',
      'Biology / Pre-Med',
      'Economics',
      'Political Science / International Relations',
      'Geology',
      'Mathematics and Statistics',
      'Cinema and Media Studies (CAMS)',
      'Cognitive Science'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'Carleton Community & Quirky Curiosity Essay', description: 'Tell us about a time you connected with someone with a different worldview.', category: 'supplemental', wordLimit: '300 words' }
    ]
  },
  {
    id: 'cmc',
    name: 'Claremont McKenna College (CMC)',
    shortName: 'Claremont McKenna',
    location: 'Claremont, CA',
    color: '#8A100B',
    emoji: '🦌',
    portalType: 'Common App',
    website: 'https://www.cmc.edu/admission',
    majorsUrl: 'https://www.cmc.edu/academics/departments',
    acceptanceRate: '10.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-10',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Economics (Robert Day School of Economics and Finance)',
      'Government / Political Science',
      'Philosophy, Politics, and Economics (PPE)',
      'Computer Science',
      'International Relations',
      'Biophysics & Integrated Sciences (Kravis Dept of Integrated Sciences)',
      'Public Policy'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'CMC Leadership & Constructive Dialogue Essay', description: 'Describe a time when you sought out different viewpoints or engaged in constructive dialogue.', category: 'supplemental', wordLimit: '300 words' }
    ]
  },
  {
    id: 'middlebury',
    name: 'Middlebury College',
    shortName: 'Middlebury',
    location: 'Middlebury, VT',
    color: '#002B49',
    emoji: '🐆',
    portalType: 'Common App',
    website: 'https://www.middlebury.edu/admissions',
    majorsUrl: 'https://www.middlebury.edu/college/academics/majors-and-minors',
    acceptanceRate: '12.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-03',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Environmental Studies',
      'International and Global Studies',
      'Language Schools (Arabic, Chinese, Russian, Spanish, French, etc.)',
      'Economics',
      'Political Science',
      'Computer Science',
      'Neuroscience',
      'Molecular Biology & Biochemistry'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' }
    ]
  },
  {
    id: 'harvey_mudd',
    name: 'Harvey Mudd College (HMC)',
    shortName: 'Harvey Mudd',
    location: 'Claremont, CA',
    color: '#EE7623',
    emoji: '📐',
    portalType: 'Common App',
    website: 'https://www.hmc.edu/admission',
    majorsUrl: 'https://www.hmc.edu/academics/majors/',
    acceptanceRate: '13.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-05',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Computer Science (Clinic Program)',
      'General Engineering (Clinic Program)',
      'Joint Major in Computer Science and Mathematics',
      'Mathematical and Computational Biology',
      'Joint Major in Chemistry and Biology',
      'Physics',
      'Chemistry'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'Harvey Mudd Why HMC & Curriculum Essay', description: 'What influenced you to apply to Harvey Mudd College and our STEM curriculum?', category: 'supplemental', wordLimit: '300 words' },
      { title: 'Harvey Mudd Hum / Arts / Social Science Essay', description: 'What is an interest in the humanities, social sciences, or arts that you want to continue?', category: 'supplemental', wordLimit: '300 words' }
    ]
  },
  {
    id: 'indiana_bloomington',
    name: 'Indiana University Bloomington (IU)',
    shortName: 'IU Bloomington',
    location: 'Bloomington, IN',
    color: '#990000',
    emoji: '🔴',
    portalType: 'Common App',
    website: 'https://admissions.indiana.edu',
    majorsUrl: 'https://admissions.indiana.edu/academics/majors/index.html',
    acceptanceRate: '82.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Finance (Kelley School of Business Direct Admit)',
      'Accounting (Kelley)',
      'Management Information Systems (Kelley)',
      'Music Performance (Jacobs School of Music)',
      'Informatics (Luddy School of Informatics, Computing, and Engineering)',
      'Computer Science (Luddy)',
      'Public Affairs / Policy (O’Neill SPEA #1 in US)',
      'Media (The Media School)'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'IU Bloomington Academic Journey Essay', description: 'Describe your academic and career goals and how IU will help you achieve them.', category: 'supplemental', wordLimit: '400 words' }
    ]
  },
  {
    id: 'cu_boulder',
    name: 'University of Colorado Boulder (CU Boulder)',
    shortName: 'CU Boulder',
    location: 'Boulder, CO',
    color: '#CFB87C',
    emoji: '🏔️',
    portalType: 'Common App',
    website: 'https://www.colorado.edu/admissions',
    majorsUrl: 'https://www.colorado.edu/academics/programs',
    acceptanceRate: '79.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-15',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Aerospace Engineering Sciences (Ann and H.J. Smead)',
      'Computer Science (College of Engineering & Applied Science)',
      'Mechanical Engineering',
      'Finance (Leeds School of Business)',
      'Environmental Studies / Climate Science',
      'Integrative Physiology (IPHY / Pre-Med)',
      'Physics',
      'Cinema Studies'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'CU Boulder Diversity & Community Perspective Essay', description: 'At CU Boulder, no two Buffs are alike. Share a perspective that has shaped who you are.', category: 'supplemental', wordLimit: '250 words' }
    ]
  },
  {
    id: 'nc_state',
    name: 'North Carolina State University (NC State)',
    shortName: 'NC State',
    location: 'Raleigh, NC',
    color: '#CC0000',
    emoji: '🐺',
    portalType: 'Common App',
    website: 'https://admissions.ncsu.edu',
    majorsUrl: 'https://admissions.ncsu.edu/academics/majors/',
    acceptanceRate: '47.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Computer Science (College of Engineering)',
      'Mechanical Engineering',
      'Textile Engineering / Fashion Product Design (Wilson College of Textiles)',
      'Business Administration (Poole College of Management)',
      'Chemical Engineering',
      'Animal Science / Pre-Vet',
      'Aerospace Engineering',
      'Industrial Design'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'NC State Why Major & Experience Essay', description: 'Discuss an academic challenge you faced and how you overcame it.', category: 'supplemental', wordLimit: '250 words' }
    ]
  },
  {
    id: 'miami',
    name: 'University of Miami (UM)',
    shortName: 'UMiami',
    location: 'Coral Gables, FL',
    color: '#F47321',
    emoji: '🌴',
    portalType: 'Common App',
    website: 'https://admissions.miami.edu',
    majorsUrl: 'https://admissions.miami.edu/undergraduate/academics/majors-and-programs/index.html',
    acceptanceRate: '19.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Marine Biology and Ecology (Rosenstiel School)',
      'Finance (Miami Herbert Business School)',
      'Music Industry (Frost School of Music)',
      'Biomedical Engineering',
      'Computer Science',
      'Nursing (BSN)',
      'Motion Pictures (School of Communication)',
      'Biology / Pre-Med'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay' },
      { title: 'Frost Music Audition & Portfolio (if applicable)', description: 'Audition for Frost School of Music applicants.', category: 'portfolio' }
    ]
  },
  {
    id: 'stevens',
    name: 'Stevens Institute of Technology',
    shortName: 'Stevens',
    location: 'Hoboken, NJ',
    color: '#9D2235',
    emoji: '🌉',
    portalType: 'Common App',
    website: 'https://www.stevens.edu/admissions',
    majorsUrl: 'https://www.stevens.edu/academics/undergraduate-study/undergraduate-majors',
    acceptanceRate: '46.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-15',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Quantitative Finance (Q-Fin)',
      'Computer Science',
      'Mechanical Engineering',
      'Cybersecurity',
      'Biomedical Engineering',
      'Software Engineering',
      'Business & Technology'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'Stevens Why Major & NYC Skyline Essay', description: 'Why is Stevens the right place for you to study your chosen STEM discipline?', category: 'supplemental', wordLimit: '250 words' }
    ]
  },
  {
    id: 'howard',
    name: 'Howard University',
    shortName: 'Howard',
    location: 'Washington, DC',
    color: '#003A63',
    emoji: '🦬',
    portalType: 'Common App',
    website: 'https://admission.howard.edu',
    majorsUrl: 'https://admission.howard.edu/academics/undergraduate-programs',
    acceptanceRate: '35.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Biology / Pre-Med (#1 producer of Black medical students)',
      'Political Science / Pre-Law',
      'Finance (School of Business)',
      'Media, Journalism & Film (Cathy Hughes)',
      'Computer Science (College of Engineering and Architecture)',
      'Mechanical Engineering',
      'Nursing (BSN)',
      'Psychology'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'Howard University Truth and Service Essay', description: 'Howard’s motto is Veritas et Utilitas (Truth and Service). How have you demonstrated service to your community?', category: 'supplemental', wordLimit: '250 words' }
    ]
  },
  {
    id: 'baylor',
    name: 'Baylor University',
    shortName: 'Baylor',
    location: 'Waco, TX',
    color: '#154734',
    emoji: '🐻',
    portalType: 'Common App',
    website: 'https://admissions.baylor.edu',
    majorsUrl: 'https://admissions.baylor.edu/academics/majors',
    acceptanceRate: '45.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Biology / Pre-Med (Health Science Studies)',
      'Finance (Hankamer School of Business)',
      'Nursing (Louise Herrington School of Nursing BSN)',
      'Mechanical Engineering',
      'Computer Science',
      'Entrepreneurship & Corporate Innovation',
      'Aviation Sciences',
      'Medical Humanities'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'Baylor Faith and Community Short Answer', description: 'What are you looking for in a university experience and why does Baylor appeal to you?', category: 'supplemental', wordLimit: '250 words' }
    ]
  },
  {
    id: 'pepperdine',
    name: 'Pepperdine University',
    shortName: 'Pepperdine',
    location: 'Malibu, CA',
    color: '#00205B',
    emoji: '🌊',
    portalType: 'Common App',
    website: 'https://seaver.pepperdine.edu/admission/',
    majorsUrl: 'https://seaver.pepperdine.edu/academics/majors-minors/',
    acceptanceRate: '49.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Business Administration',
      'Finance',
      'Communication Studies',
      'Sports Medicine (BS)',
      'Computer Science / Math',
      'Biology / Pre-Med',
      'Integrated Marketing Communication',
      'International Studies'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'Pepperdine Christian Mission & Community Essay', description: 'How does Pepperdine’s mission of purpose, service, and leadership align with your personal goals?', category: 'supplemental', wordLimit: '300 words' }
    ]
  },
  {
    id: 'calpoly_slo',
    name: 'Cal Poly San Luis Obispo',
    shortName: 'Cal Poly SLO',
    location: 'San Luis Obispo, CA',
    color: '#154734',
    emoji: '🐎',
    portalType: 'CSU Apply',
    website: 'https://www.calpoly.edu/admissions',
    majorsUrl: 'https://www.calpoly.edu/major-selection',
    acceptanceRate: '29.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2026-11-30',
    defaultTargetBufferDays: 10,
    majors: getFullMajorsList([
      'Computer Science (College of Engineering - Learn by Doing)',
      'Mechanical Engineering',
      'Architecture (5-year B.Arch #3 in US)',
      'Business Administration (Orfalea)',
      'Civil Engineering',
      'Aerospace Engineering',
      'Biomedical Engineering',
      'Wine and Viticulture',
      'Graphic Communication',
      'Animal Science'
    ]),
    defaultSections: [
      { title: 'CSU Apply Academic History Quadrant', description: 'Complete high school course entry and semester grades.', category: 'academics' },
      { title: 'Declared Direct-to-Major Selection', description: 'Cal Poly requires applicants to apply directly to a declared major.', category: 'general' },
      { title: 'Work Experience & Extracurricular Hours Log', description: 'Report weekly hours of work and leadership commitments.', category: 'general' }
    ]
  }
];
