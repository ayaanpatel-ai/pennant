// Shared catalog of standard undergraduate disciplines & specialized fields
export const STANDARD_MAJORS_CATALOG = {
  stem: [
    'Computer Science (BS / BA)',
    'Mechanical Engineering',
    'Electrical Engineering & Computer Science (EECS)',
    'Bioengineering / Biomedical Engineering',
    'Chemical Engineering',
    'Civil & Environmental Engineering',
    'Data Science & Analytics',
    'Applied Mathematics & Statistics',
    'Physics & Astrophysics',
    'Chemistry & Chemical Biology',
    'Molecular, Cell & Developmental Biology',
    'Neuroscience & Neurobiology',
    'Cognitive Science',
    'Materials Science & Engineering',
    'Aerospace / Astronautical Engineering',
    'Robotics & Autonomous Systems',
    'Environmental Science & Sustainability'
  ],
  business: [
    'Business Administration & Management',
    'Finance & Real Estate',
    'Economics (BS / BA)',
    'Marketing & Consumer Behavior',
    'Accounting & Taxation',
    'Supply Chain & Operations Management',
    'Entrepreneurship & Innovation',
    'Information Systems / Business Analytics'
  ],
  humanitiesSocial: [
    'Political Science & International Relations',
    'Public Policy Analysis',
    'Psychology (BS / BA)',
    'Philosophy, Politics and Economics (PPE)',
    'History',
    'English & Creative Writing',
    'Sociology & Anthropology',
    'Linguistics',
    'Communication & Media Studies',
    'Government / Political Theory',
    'Global & Area Studies',
    'Criminology, Law & Society'
  ],
  healthArts: [
    'Nursing (BSN)',
    'Public Health & Epidemiology',
    'Pre-Medical / Pre-Health Studies',
    'Kinesiology & Sports Medicine',
    'Architecture & Urban Planning',
    'Design & Interactive Digital Media',
    'Film, Cinema & Media Production',
    'Studio Art & Visual Arts',
    'Music Performance & Composition',
    'Theater & Dramatic Arts'
  ],
  undecided: [
    'Undeclared / General Humanities',
    'Undeclared / General STEM & Engineering',
    'Undeclared / General Social Sciences',
    'Undeclared / University Exploration'
  ]
};

export function getFullMajorsList(specificMajors: string[] = []): string[] {
  const combined = [
    ...specificMajors,
    ...STANDARD_MAJORS_CATALOG.undecided,
    ...STANDARD_MAJORS_CATALOG.stem,
    ...STANDARD_MAJORS_CATALOG.business,
    ...STANDARD_MAJORS_CATALOG.humanitiesSocial,
    ...STANDARD_MAJORS_CATALOG.healthArts
  ];
  return Array.from(new Set(combined));
}
