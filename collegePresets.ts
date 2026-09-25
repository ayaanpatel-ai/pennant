import { PresetCollege } from '../types';
import { COLLEGES_PART_1 } from './colleges1';
import { COLLEGES_PART_2 } from './colleges2';
import { COLLEGES_PART_3 } from './colleges3';
import { COLLEGES_PART_4 } from './colleges4';

// Aggregated Top Colleges Database with official undergraduate majors and institutional requirements
export const COLLEGE_PRESETS: PresetCollege[] = [
  ...COLLEGES_PART_1,
  ...COLLEGES_PART_2,
  ...COLLEGES_PART_3,
  ...COLLEGES_PART_4
];

// Helper to look up a college preset by id, name, shortName, or aliases
export function findCollegePreset(query: string): PresetCollege | undefined {
  const q = query.toLowerCase().trim();
  return COLLEGE_PRESETS.find(
    (c) =>
      c.id.toLowerCase() === q ||
      c.name.toLowerCase() === q ||
      c.shortName.toLowerCase() === q ||
      c.name.toLowerCase().includes(q) ||
      c.shortName.toLowerCase().includes(q) ||
      (c.aliases && c.aliases.some((a) => a.toLowerCase() === q || a.toLowerCase().includes(q)))
  );
}
