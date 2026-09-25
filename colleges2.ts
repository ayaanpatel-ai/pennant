import { PresetCollege } from '../types';
import { getFullMajorsList } from './commonMajors';

export const COLLEGES_PART_2: PresetCollege[] = [
  {
    id: 'uw_seattle',
    name: 'University of Washington (UW Seattle)',
    shortName: 'UW Seattle',
    location: 'Seattle, WA',
    color: '#4B2E83',
    emoji: '🐕',
    portalType: 'Common App',
    website: 'https://admissions.uw.edu',
    majorsUrl: 'https://www.washington.edu/undergraduate/majors/',
    acceptanceRate: '41.8%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2026-11-15',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Computer Science (Paul G. Allen School - Direct Admit)',
      'Computer Engineering (Allen School)',
      'Business Administration (Foster School of Business)',
      'Bioengineering',
      'Mechanical Engineering',
      'Aeronautics & Astronautics',
      'Informatics (iSchool)',
      'Neuroscience',
      'Public Health - Global Health',
      'Human Centered Design & Engineering (HCDE)',
      'Nursing (BSN)'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: '500-650 word essay.', category: 'essay', wordLimit: '650 words' },
      { title: 'UW Short Answer: Diversity & Cultural Perspective', description: 'Describe how your experiences with culture or diverse communities shaped your views.', category: 'supplemental', wordLimit: '300 words' },
      { title: 'Self-Reported Academic Coursework (CADR)', description: 'Direct reporting of high school coursework meeting Washington CADR rules.', category: 'academics' }
    ]
  },
  {
    id: 'rutgers',
    name: 'Rutgers University - New Brunswick',
    shortName: 'Rutgers',
    location: 'New Brunswick, NJ',
    color: '#CC0033',
    emoji: '⚔️',
    portalType: 'Common App',
    website: 'https://admissions.rutgers.edu',
    majorsUrl: 'https://admissions.rutgers.edu/academics/find-your-major',
    acceptanceRate: '66.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Computer Science',
      'Finance (Rutgers Business School, RBS)',
      'Supply Chain Management (RBS)',
      'Biomedical Engineering',
      'Pharmacy (6-year PharmD, Ernest Mario)',
      'Biological Sciences / Pre-Med',
      'Mechanical Engineering',
      'Nursing (BSN)',
      'Economics',
      'Information Technology and Informatics'
    ]),
    defaultSections: [
      { title: 'Common App Core Profile & Essay', description: '650-word personal essay.', category: 'essay' },
      { title: 'Rutgers SRAR (Self-Reported Academic Record)', description: 'Mandatory completion of the Rutgers SRAR high school grade portal.', category: 'academics' }
    ]
  },
  {
    id: 'umd',
    name: 'University of Maryland - College Park (UMD)',
    shortName: 'Maryland',
    location: 'College Park, MD',
    color: '#E03A3E',
    emoji: '🐢',
    portalType: 'Common App',
    website: 'https://admissions.umd.edu',
    majorsUrl: 'https://admissions.umd.edu/academics/majors',
    acceptanceRate: '44.3%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Computer Science (LEP - Limited Enrollment Program)',
      'Finance (Robert H. Smith School of Business)',
      'Aerospace Engineering (Clark School)',
      'Bioengineering (Clark)',
      'Mechanical Engineering',
      'Biological Sciences',
      'Information Science (InfoSci)',
      'Criminology and Criminal Justice',
      'Government and Politics',
      'Journalism (Philip Merrill)'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay' },
      { title: 'UMD Short Questions (5 quick takes)', description: '5 short answers (650 chars max total) covering curiosity, favorite book, and inspiration.', category: 'supplemental', wordLimit: '5 × 130 chars' },
      { title: 'Counselor Recommendation & 2 Academic Teacher Letters', description: 'Secondary school report and evaluations.', category: 'recommendations' }
    ]
  },
  {
    id: 'osu',
    name: 'Ohio State University (OSU)',
    shortName: 'Ohio State',
    location: 'Columbus, OH',
    color: '#BB0000',
    emoji: '🌰',
    portalType: 'Common App',
    website: 'https://undergrad.osu.edu',
    majorsUrl: 'https://undergrad.osu.edu/majors-and-academics/majors',
    acceptanceRate: '52.7%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Finance (Fisher College of Business)',
      'Computer Science and Engineering (CSE)',
      'Mechanical Engineering',
      'Aviation / Commercial Flight',
      'Biomedical Engineering',
      'Biology / Pre-Med',
      'Health Sciences',
      'Nursing (BSN)',
      'Agricultural Communication & Agribusiness',
      'Data Analytics'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'OSU Honors & Scholars Application Essay (Optional)', description: 'Supplemental application for Honors and Scholars cohorts.', category: 'supplemental' }
    ]
  },
  {
    id: 'purdue',
    name: 'Purdue University',
    shortName: 'Purdue',
    location: 'West Lafayette, IN',
    color: '#CEB888',
    emoji: '🚂',
    portalType: 'Common App',
    website: 'https://www.admissions.purdue.edu',
    majorsUrl: 'https://www.admissions.purdue.edu/academics/majors.php',
    acceptanceRate: '52.7%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Aeronautical and Astronautical Engineering (AAE - Cradle of Astronauts)',
      'First-Year Engineering (FYE) / Mechanical Engineering',
      'Computer Science (College of Science)',
      'Electrical and Computer Engineering (ECE)',
      'Aviation Management & Flight',
      'Finance (Mitchell E. Daniels, Jr. School of Business)',
      'Biomedical Engineering',
      'Data Science',
      'Agricultural & Biological Engineering',
      'Nursing (BSN)'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay' },
      { title: 'Purdue Why Major Essay', description: 'How will your chosen major help you achieve your career and educational goals?', category: 'supplemental', wordLimit: '100 words' },
      { title: 'Purdue Why Purdue Essay', description: 'Briefly discuss why Purdue University specifically matches your interests.', category: 'supplemental', wordLimit: '100 words' },
      { title: 'Self-Reported High School Grades', description: 'Direct self-reported coursework and grades.', category: 'academics' }
    ]
  },
  {
    id: 'lehigh',
    name: 'Lehigh University',
    shortName: 'Lehigh',
    location: 'Bethlehem, PA',
    color: '#653819',
    emoji: '🏔️',
    portalType: 'Common App',
    website: 'https://www1.lehigh.edu/admissions',
    majorsUrl: 'https://www1.lehigh.edu/academics/undergraduate-majors-minors',
    acceptanceRate: '37.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Computer Science and Business (CSB - Dual Accredited)',
      'Integrated Business and Engineering (IBE)',
      'Finance',
      'Mechanical Engineering',
      'Bioengineering',
      'Civil Engineering',
      'Accounting',
      'Behavioral Neuroscience',
      'Design & Architecture'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Essay', description: 'Standard 650-word personal statement.', category: 'essay' },
      { title: 'Lehigh Curiosity Essay', description: 'What is something you would like to delve into at Lehigh and why?', category: 'supplemental', wordLimit: '300 words' },
      { title: 'Counselor Recommendation & 2 Teacher Letters', description: 'Transcripts and recommendations.', category: 'recommendations' }
    ]
  },
  {
    id: 'bu',
    name: 'Boston University (BU)',
    shortName: 'Boston University',
    location: 'Boston, MA',
    color: '#CC0000',
    emoji: '🐾',
    portalType: 'Common App',
    website: 'https://www.bu.edu/admissions',
    majorsUrl: 'https://www.bu.edu/admissions/why-bu/academics/majors/',
    acceptanceRate: '11.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-04',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Business Administration (Questrom)',
      'Biomedical Engineering',
      'Computer Science (Faculty of Computing & Data Sciences, CDS)',
      'Film & Television (College of Communication)',
      'Journalism (COM)',
      'Health Science (Sargent College)',
      'Mechanical Engineering',
      'Biology / Pre-Med',
      'Psychology',
      'Hospitality Administration (SHA)'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Essay', description: 'Standard 650-word personal essay.', category: 'essay' },
      { title: 'Boston University Why BU Essay', description: 'What about being a student at BU most excites you?', category: 'supplemental', wordLimit: '300 words' },
      { title: 'Kilachand Honors College Essay (Optional)', description: 'Supplemental essay for Kilachand Honors College applicants.', category: 'supplemental' },
      { title: 'Counselor Recommendation & 2 Teacher Letters', description: 'School report, transcripts, and evaluations.', category: 'recommendations' }
    ]
  },
  {
    id: 'rochester',
    name: 'University of Rochester',
    shortName: 'Rochester',
    location: 'Rochester, NY',
    color: '#002855',
    emoji: '🐝',
    portalType: 'Common App',
    website: 'https://admissions.rochester.edu',
    majorsUrl: 'https://admissions.rochester.edu/academics/majors/',
    acceptanceRate: '39.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-05',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Optics (Institute of Optics - Oldest in US)',
      'Biomedical Engineering',
      'Music Performance (Eastman School of Music)',
      'Brain & Cognitive Sciences (BCS)',
      'Computer Science',
      'Audio & Music Engineering (AME)',
      'Economics',
      'Biological Sciences / Pre-Med',
      'Business (Simon Undergraduate)'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'Rochester Meliora Essay (Ever Better)', description: 'Describe how you live the university motto "Meliora" through your achievements or community contributions.', category: 'supplemental', wordLimit: '250 words' },
      { title: 'Eastman Audition & Music Portfolio (if applicable)', description: 'Required audition for Eastman applicants.', category: 'portfolio' }
    ]
  },
  {
    id: 'wake_forest',
    name: 'Wake Forest University',
    shortName: 'Wake Forest',
    location: 'Winston-Salem, NC',
    color: '#9E7E38',
    emoji: '🎩',
    portalType: 'Common App',
    website: 'https://admissions.wfu.edu',
    majorsUrl: 'https://admissions.wfu.edu/academics/majors-minors/',
    acceptanceRate: '21.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Finance (School of Business)',
      'Mathematical Business',
      'Biochemistry and Molecular Biology',
      'Accountancy',
      'Computer Science',
      'Health and Exercise Science',
      'Political Science',
      'Communication',
      'Engineering'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal statement.', category: 'essay' },
      { title: 'Wake Forest Top 10 List Prompt', description: 'Give us your Top 10 list on any topic of your choosing.', category: 'supplemental', wordLimit: 'List of 10' },
      { title: 'Wake Forest Short Questions (3 questions)', description: 'Books enjoyed, creative endeavor, and intellectual spark.', category: 'supplemental', wordLimit: '3 × 150 words' },
      { title: 'Optional Video Interview Submission', description: 'Virtual interview or pre-recorded video prompt.', category: 'portfolio' }
    ]
  },
  {
    id: 'cwru',
    name: 'Case Western Reserve University (CWRU)',
    shortName: 'Case Western',
    location: 'Cleveland, OH',
    color: '#0A304E',
    emoji: '⚔️',
    portalType: 'Common App',
    website: 'https://case.edu/admission',
    majorsUrl: 'https://case.edu/admission/academics/majors-and-programs',
    acceptanceRate: '27.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Biomedical Engineering (BME #1 with Cleveland Clinic)',
      'Pre-Medicine / Biology',
      'Pre-Professional Scholars Program (PPSP 8-year MD)',
      'Computer Science',
      'Mechanical Engineering',
      'Nursing (Frances Payne Bolton BSN)',
      'Finance (Weatherhead)',
      'Polymer Science and Engineering',
      'Neuroscience'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'CWRU PPSP Medical / Dental Dual-Degree Essays (if applicable)', description: 'Specific supplemental essays for direct 8-year medical school entry.', category: 'supplemental' }
    ]
  },
  {
    id: 'fsu',
    name: 'Florida State University (FSU)',
    shortName: 'FSU',
    location: 'Tallahassee, FL',
    color: '#782F40',
    emoji: '🏹',
    portalType: 'Common App',
    website: 'https://admissions.fsu.edu',
    majorsUrl: 'https://admissions.fsu.edu/academics/majors/',
    acceptanceRate: '25.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-10-15',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Motion Picture Arts (Film School #4 Nationally)',
      'Finance',
      'Criminology & Criminal Justice',
      'Biological Science / Pre-Med',
      'Computer Science',
      'Risk Management and Insurance',
      'Psychology',
      'Mechanical Engineering (FAMU-FSU College of Engineering)',
      'Nursing (BSN)'
    ]),
    defaultSections: [
      { title: 'Common App Core Profile & Personal Essay', description: 'Standard 650-word personal essay.', category: 'essay' },
      { title: 'Florida SSAR Self-Reported Academic Record', description: 'Mandatory completion of the Florida SSAR portal.', category: 'academics' }
    ]
  },
  {
    id: 'umn',
    name: 'University of Minnesota - Twin Cities',
    shortName: 'Minnesota',
    location: 'Minneapolis, MN',
    color: '#7A0019',
    emoji: '🐿️',
    portalType: 'Common App',
    website: 'https://admissions.tc.umn.edu',
    majorsUrl: 'https://admissions.tc.umn.edu/academics/majors',
    acceptanceRate: '75.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Chemical Engineering (College of Science & Engineering, CSE)',
      'Computer Science (CSE / CLA)',
      'Finance (Carlson School of Management)',
      'Biomedical Engineering',
      'Mechanical Engineering',
      'Mortuary Science',
      'Animal Science / Pre-Vet',
      'Psychology',
      'Nursing (BSN)'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'Self-Reported Academic Record (SRAR)', description: 'Direct self-reported coursework and grades.', category: 'academics' }
    ]
  },
  {
    id: 'wm',
    name: 'William & Mary',
    shortName: 'William & Mary',
    location: 'Williamsburg, VA',
    color: '#115740',
    emoji: '🦅',
    portalType: 'Common App',
    website: 'https://www.wm.edu/admission',
    majorsUrl: 'https://www.wm.edu/as/undergraduate/majors-minors/',
    acceptanceRate: '33.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-05',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Government / International Relations',
      'Finance (Mason School of Business)',
      'Computer Science',
      'History',
      'Biology / Pre-Med',
      'Data Science',
      'Psychology',
      'Neuroscience',
      'St Andrews Joint Degree Programme'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'William & Mary Optional Supplemental Essay', description: 'Beyond your grades and activities, tell us something that makes you uniquely you.', category: 'supplemental', wordLimit: '500 words' }
    ]
  },
  {
    id: 'stony_brook',
    name: 'Stony Brook University (SUNY)',
    shortName: 'Stony Brook',
    location: 'Stony Brook, NY',
    color: '#990000',
    emoji: '🐺',
    portalType: 'Common App',
    website: 'https://www.stonybrook.edu/undergraduate-admissions',
    majorsUrl: 'https://www.stonybrook.edu/undergraduate-admissions/academics/majors-minors/',
    acceptanceRate: '49.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-15',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Computer Science (CEAS)',
      'Applied Mathematics and Statistics (AMS)',
      'Biomedical Engineering',
      'Biology / Pre-Med',
      'Physics',
      'Mechanical Engineering',
      'Health Science',
      'Marine Vertebrate Biology',
      'Nursing (BSN)'
    ]),
    defaultSections: [
      { title: 'Common App Core & Essay', description: 'Standard 650-word personal statement.', category: 'essay' },
      { title: 'Honors College / WISE / Scholars Supplement (if applicable)', description: 'Specific supplemental essay for Stony Brook honors programs.', category: 'supplemental' }
    ]
  },
  {
    id: 'uconn',
    name: 'University of Connecticut (UConn)',
    shortName: 'UConn',
    location: 'Storrs, CT',
    color: '#000E2F',
    emoji: '🐺',
    portalType: 'Common App',
    website: 'https://admissions.uconn.edu',
    majorsUrl: 'https://admissions.uconn.edu/academics/majors/',
    acceptanceRate: '54.5%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-15',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Finance (School of Business)',
      'Puppetry (Puppet Arts BFA #1 in US)',
      'Mechanical Engineering',
      'Computer Science',
      'Biomedical Engineering',
      'Allied Health Sciences',
      'Nursing (BSN)',
      'Animal Science',
      'Psychological Sciences'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay' }
    ]
  },
  {
    id: 'penn_state',
    name: 'Penn State University - University Park',
    shortName: 'Penn State',
    location: 'University Park, PA',
    color: '#041E42',
    emoji: '🦁',
    portalType: 'Common App',
    website: 'https://admissions.psu.edu',
    majorsUrl: 'https://bulletins.psu.edu/undergraduate/programs/majors/',
    acceptanceRate: '55.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Mechanical Engineering',
      'Finance (Smeal College of Business)',
      'Computer Science (EECS)',
      'Supply Chain and Information Systems (Smeal)',
      'Aerospace Engineering',
      'Meteorology and Atmospheric Science',
      'Biology / Pre-Med',
      'Nursing (BSN)',
      'Telecommunications'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'Penn State SRAR (Self-Reported Academic Record)', description: 'Mandatory completion of the Penn State SRAR coursework portal.', category: 'academics' },
      { title: 'Schreyer Honors College Application (Optional)', description: 'Extensive supplemental essays for Schreyer Honors College applicants.', category: 'supplemental' }
    ]
  },
  {
    id: 'pitt',
    name: 'University of Pittsburgh (Pitt)',
    shortName: 'Pitt',
    location: 'Pittsburgh, PA',
    color: '#003594',
    emoji: '🐆',
    portalType: 'Common App',
    website: 'https://admissions.pitt.edu',
    majorsUrl: 'https://admissions.pitt.edu/academics/majors-minors/',
    acceptanceRate: '49.0%',
    defaultPlan: 'Rolling',
    actualDeadline: '2027-02-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Bioengineering (Swanson)',
      'GAP Medicine (Guaranteed Admissions Program 8-year MD)',
      'Nursing (School of Nursing BSN #10)',
      'Computer Science (SCI)',
      'Finance (College of Business Administration)',
      'Rehabilitation Science',
      'Neuroscience',
      'Mechanical Engineering',
      'Pharmacy (PharmD Guaranteed)'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'Pitt Short Answer Questions (Optional but Recommended)', description: '3 short answers reflecting curiosity, diversity, and life goals.', category: 'supplemental', wordLimit: '3 × 250 words' },
      { title: 'Pitt Guaranteed Admissions Program (GAP) Supplements', description: 'Required supplemental application for Medicine, Law, or Nursing guarantees.', category: 'supplemental' }
    ]
  },
  {
    id: 'brandeis',
    name: 'Brandeis University',
    shortName: 'Brandeis',
    location: 'Waltham, MA',
    color: '#003865',
    emoji: '🦉',
    portalType: 'Common App',
    website: 'https://www.brandeis.edu/admissions',
    majorsUrl: 'https://www.brandeis.edu/programs/index.html',
    acceptanceRate: '35.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Neuroscience',
      'Business',
      'Health: Science, Society and Policy (HSSP)',
      'Computer Science',
      'Biology / Pre-Med',
      'Economics',
      'International and Global Studies',
      'Psychology',
      'Near Eastern and Judaic Studies (NEJS)'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay' },
      { title: 'Brandeis Social Justice & Purpose Essay', description: 'Brandeis was established by those with a commitment to equal access and social justice. Tell us about a time you worked for justice.', category: 'supplemental', wordLimit: '250 words' }
    ]
  },
  {
    id: 'santa_clara',
    name: 'Santa Clara University (SCU)',
    shortName: 'Santa Clara',
    location: 'Santa Clara, CA',
    color: '#862633',
    emoji: '🐴',
    portalType: 'Common App',
    website: 'https://www.scu.edu/admission',
    majorsUrl: 'https://www.scu.edu/academics/undergraduate-majors/',
    acceptanceRate: '44.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Computer Science and Engineering (School of Engineering - Silicon Valley)',
      'Finance (Leavey School of Business)',
      'Web Design and Engineering',
      'Management Information Systems (MIS)',
      'Bioengineering',
      'Mechanical Engineering',
      'Economics',
      'Public Health Science',
      'Marketing (Leavey)'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'Santa Clara Silicon Valley & Jesuit Mission Essay', description: 'How does SCU’s location in Silicon Valley and its mission to build a more humane world resonate with your goals?', category: 'supplemental', wordLimit: '300 words' }
    ]
  },
  {
    id: 'villanova',
    name: 'Villanova University',
    shortName: 'Villanova',
    location: 'Villanova, PA',
    color: '#00205B',
    emoji: '🐱',
    portalType: 'Common App',
    website: 'https://www1.villanova.edu/university/undergraduate-admission.html',
    majorsUrl: 'https://www1.villanova.edu/university/undergraduate-admission/academics/majors.html',
    acceptanceRate: '23.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-01',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Finance (Villanova School of Business, VSB)',
      'Accounting (VSB)',
      'Mechanical Engineering',
      'Nursing (Fitzpatrick College of Nursing BSN)',
      'Computer Science',
      'Chemical Engineering',
      'Biology / Pre-Med',
      'Communication',
      'Political Science'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'Villanova Augustinian Values Essay (Choose 1 of 4)', description: 'Reflect on Veritas, Unitas, Caritas, community service, or global leadership.', category: 'supplemental', wordLimit: '250 words' }
    ]
  },
  {
    id: 'tulane',
    name: 'Tulane University',
    shortName: 'Tulane',
    location: 'New Orleans, LA',
    color: '#006747',
    emoji: '🌊',
    portalType: 'Common App',
    website: 'https://admission.tulane.edu',
    majorsUrl: 'https://admission.tulane.edu/academics/programs-and-degrees',
    acceptanceRate: '11.5%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-15',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Public Health (Celia Scott Weatherhead School of Public Health)',
      'Finance (Freeman School of Business)',
      'Biomedical Engineering',
      'Cell and Molecular Biology / Pre-Med',
      'Architecture (5-year B.Arch)',
      'Legal Studies in Business',
      'Neuroscience',
      'Political Economy',
      'Music / Jazz Studies'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Essay', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'Tulane Why Tulane & New Orleans Essay', description: 'Please describe why you are interested in attending Tulane and living in New Orleans.', category: 'supplemental', wordLimit: '500 words' }
    ]
  },
  {
    id: 'gwu',
    name: 'George Washington University (GWU)',
    shortName: 'GWU',
    location: 'Washington, DC',
    color: '#002B49',
    emoji: '🏛️',
    portalType: 'Common App',
    website: 'https://undergraduate.admissions.gwu.edu',
    majorsUrl: 'https://undergraduate.admissions.gwu.edu/explore-programs',
    acceptanceRate: '49.0%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-05',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'International Affairs (Elliott School of International Affairs)',
      'Political Science / Political Communication',
      'Finance (GWSB)',
      'Biomedical Engineering (SEAS)',
      'Computer Science',
      'Public Health (Milken Institute SPH)',
      'Journalism and Mass Communication (SMPA)',
      'Economics',
      'Peace Studies'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Essay', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'GWU Only at GW Essay', description: 'What is something that you would only be able to experience or pursue at GW in Washington, DC?', category: 'supplemental', wordLimit: '250 words' }
    ]
  },
  {
    id: 'syracuse',
    name: 'Syracuse University',
    shortName: 'Syracuse',
    location: 'Syracuse, NY',
    color: '#D44500',
    emoji: '🍊',
    portalType: 'Common App',
    website: 'https://www.syracuse.edu/admissions',
    majorsUrl: 'https://www.syracuse.edu/academics/undergraduate-majors-minors/',
    acceptanceRate: '51.8%',
    defaultPlan: 'Regular Decision',
    actualDeadline: '2027-01-05',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Broadcast & Digital Journalism (Newhouse School of Public Communications)',
      'Public Relations (Newhouse)',
      'Architecture (B.Arch #5 in US)',
      'Finance (Whitman School of Management)',
      'Sport Management (Falk College)',
      'Bandier Program in Recording & Entertainment Industries',
      'Aerospace Engineering',
      'Computer Science'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word personal essay.', category: 'essay' },
      { title: 'Syracuse Why Major & Campus Community Essay', description: 'Why are you interested in your chosen major, and how will Syracuse prepare you for the future?', category: 'supplemental', wordLimit: '250 words' }
    ]
  },
  {
    id: 'vt',
    name: 'Virginia Tech',
    shortName: 'Virginia Tech',
    location: 'Blacksburg, VA',
    color: '#861F41',
    emoji: '🦃',
    portalType: 'Common App',
    website: 'https://vt.edu/admissions/undergraduate.html',
    majorsUrl: 'https://vt.edu/admissions/undergraduate/majors.html',
    acceptanceRate: '57.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-11-15',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Mechanical Engineering (College of Engineering)',
      'Computer Science',
      'Aerospace Engineering',
      'Finance (Pamplin College of Business)',
      'Architecture (5-year B.Arch)',
      'Animal and Poultry Sciences',
      'Civil Engineering',
      'Industrial and Systems Engineering',
      'Packaging Systems & Design'
    ]),
    defaultSections: [
      { title: 'Common App Core & Personal Statement', description: 'Standard 650-word essay.', category: 'essay' },
      { title: 'Virginia Tech Ut Prosim Essays (4 short essays)', description: 'Four 120-word essays reflecting service, community engagement, and leadership.', category: 'supplemental', wordLimit: '4 × 120 words' }
    ]
  },
  {
    id: 'clemson',
    name: 'Clemson University',
    shortName: 'Clemson',
    location: 'Clemson, SC',
    color: '#F56600',
    emoji: '🐅',
    portalType: 'Common App',
    website: 'https://www.clemson.edu/admissions',
    majorsUrl: 'https://www.clemson.edu/degrees/index.html',
    acceptanceRate: '43.0%',
    defaultPlan: 'Early Action',
    actualDeadline: '2026-10-15',
    defaultTargetBufferDays: 14,
    majors: getFullMajorsList([
      'Engineering (General Engineering First-Year)',
      'Automotive Engineering',
      'Finance (Wilbur O. and Ann Powers College of Business)',
      'Packaging Science',
      'Computer Science',
      'Nursing (BSN)',
      'Biological Sciences',
      'Graphic Communications',
      'Landscape Architecture'
    ]),
    defaultSections: [
      { title: 'Common App Core Profile & Essay', description: 'Standard application profile and 650-word personal statement.', category: 'essay' }
    ]
  }
];
