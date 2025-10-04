import cvJson from '$lib/data/cv.json';

import { type LocalizedString, type Lang } from '../utils/languageSetup';

/**
 * ---------------------------------------------------------------------
 * JSON schema interfaces (raw data)
 * ---------------------------------------------------------------------
 */
interface JSONWorkPlace {
  organization: string;
  location: string;
  position: LocalizedString;
  startDate: string;
  endDate?: string;
  descriptionShort: LocalizedString;
  descriptionLong?: LocalizedString;
  highlights?: LocalizedString[];
}

interface JSONEducation {
  organization: string;
  location: string;
  fieldOfStudy: LocalizedString;
  degree: LocalizedString;
  startDate: string;
  endDate?: string;
  descriptionShort: LocalizedString;
  descriptionLong?: LocalizedString;
}

interface JSONOther {
  title: LocalizedString;
  startDate: string;
  endDate?: string;
  descriptionShort: LocalizedString;
  descriptionLong?: LocalizedString;
}

/**
 * ---------------------------------------------------------------------
 * Localized view interfaces (flattened & ready for UI)
 * ---------------------------------------------------------------------
 */
interface LocalizedWorkPlace {
  organization: string;
  location: string;
  position: string;
  startDate: string;
  endDate?: string;
  timeframe: string;
  descriptionShort: string;
  descriptionLong: string;
  highlights: string[];
}

interface LocalizedEducation {
  organization: string;
  location: string;
  fieldOfStudy: string;
  degree: string;
  startDate: string;
  endDate?: string;
  timeframe: string;
  descriptionShort: string;
  descriptionLong: string;
}

interface LocalizedOther {
  title: string;
  startDate: string;
  endDate?: string;
  timeframe: string;
  descriptionShort: string;
  descriptionLong: string;
  organization?: string;
}

export type LocalizedEntry =
  | (LocalizedWorkPlace & { entryType: 'work' })
  | (LocalizedEducation & { entryType: 'education' })
  | (LocalizedOther & { entryType: 'other' });

/**
 * ---------------------------------------------------------------------
 * Load JSON
 * ---------------------------------------------------------------------
 */
const workplaces: JSONWorkPlace[] = cvJson.work;
const education: JSONEducation[] = cvJson.education;
const others: JSONOther[] = cvJson.other;

/**
 * ---------------------------------------------------------------------
 * Date formatting helpers
 * ---------------------------------------------------------------------
 */

// Format a single YYYY-MM string into "Mon YYYY"
function formatDate(dateStr: string, lang: Lang): string {
  if (!dateStr) return '';
  const [year, month] = dateStr.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return new Intl.DateTimeFormat(lang === 'de' ? 'de-DE' : 'en-US', {
    month: 'short',
    year: 'numeric'
  }).format(date);
}

// Format a start + end into a timeframe
function formatDateRange(start: string, end: string | undefined, lang: Lang): string {
  const presentLabels: Record<Lang, string> = {
    en: 'Present',
    de: 'heute'
  };

  if (!end) {
    // ongoing
    return `${formatDate(start, lang)} – ${presentLabels[lang]}`;
  }
  if (start === end) {
    // one-off event
    return formatDate(start, lang);
  }
  // normal range
  return `${formatDate(start, lang)} – ${formatDate(end, lang)}`;
}

function getLongDescription(
  source: LocalizedString | undefined,
  fallback: LocalizedString,
  lang: Lang
): string {
  return source?.[lang] ?? fallback[lang];
}

/**
 * ---------------------------------------------------------------------
 * Transformation helpers
 * ---------------------------------------------------------------------
 */
export function getWorkspaceByLanguage(lang: Lang): LocalizedWorkPlace[] {
  return workplaces.map((wp) => ({
    organization: wp.organization,
    location: wp.location,
    position: wp.position[lang],
    startDate: wp.startDate,
    endDate: wp.endDate,
    timeframe: formatDateRange(wp.startDate, wp.endDate, lang),
    descriptionShort: wp.descriptionShort[lang],
    descriptionLong: getLongDescription(wp.descriptionLong, wp.descriptionShort, lang),
    highlights: wp.highlights?.map((h) => h[lang]) ?? []
  }));
}

export function getEducationByLanguage(lang: Lang): LocalizedEducation[] {
  return education.map((e) => ({
    organization: e.organization,
    location: e.location,
    startDate: e.startDate,
    endDate: e.endDate,
    timeframe: formatDateRange(e.startDate, e.endDate, lang),
    descriptionShort: e.descriptionShort[lang],
    descriptionLong: getLongDescription(e.descriptionLong, e.descriptionShort, lang),
    fieldOfStudy: e.fieldOfStudy[lang],
    degree: e.degree[lang]
  }));
}

export function getOtherByLanguage(lang: Lang): LocalizedOther[] {
  return others.map((o) => ({
    title: o.title[lang],
    startDate: o.startDate,
    endDate: o.endDate,
    timeframe: formatDateRange(o.startDate, o.endDate, lang),
    descriptionShort: o.descriptionShort[lang],
    descriptionLong: getLongDescription(o.descriptionLong, o.descriptionShort, lang)
  }));
}

/**
 * ---------------------------------------------------------------------
 * Complete CV
 * ---------------------------------------------------------------------
 */

function getEndDateValue(entry: LocalizedEntry): number {
  // Treat ongoing (no endDate) as far future
  if (!entry.endDate) return Infinity;
  return new Date(entry.endDate).getTime();
}

function compareByStartDate(a: LocalizedEntry, b: LocalizedEntry): number {
  return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
}

function isSingleEvent(entry: LocalizedEntry): boolean {
  return !!entry.endDate && entry.startDate === entry.endDate;
}

function compareByEndDate(a: LocalizedEntry, b: LocalizedEntry): number {
  const singleA = isSingleEvent(a);
  const singleB = isSingleEvent(b);

  // Ongoing vs single → ongoing comes first
  if (singleA && !singleB) return 1;
  if (!singleA && singleB) return -1;

  // Otherwise compare actual end dates
  return getEndDateValue(b) - getEndDateValue(a);
}

export function getCompleteCV(lang: Lang): LocalizedEntry[] {
  const work = getWorkspaceByLanguage(lang).map(
    (wp): LocalizedEntry => ({ ...wp, entryType: 'work' })
  );

  const edu = getEducationByLanguage(lang).map(
    (ed): LocalizedEntry => ({ ...ed, entryType: 'education' })
  );

  const oth = getOtherByLanguage(lang).map((o): LocalizedEntry => ({ ...o, entryType: 'other' }));

  return [...work, ...edu, ...oth].sort((a, b) => {
    // 1) Compare by start date
    const startDiff = compareByStartDate(a, b);
    if (startDiff !== 0) return startDiff;

    // 2) If same start date → compare by end date
    return compareByEndDate(a, b);
  });
}
