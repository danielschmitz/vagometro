import { ExperienceLevels, experienceLevelRelatedTerms } from './experience-levels.data';
import { Languages, languageRelatedTerms } from './languages.data';
import { keywords } from './technologies.data';

export function matchLanguages(content: string | undefined): Languages[] {
  if (!content) return [];

  const sanitizedContent = sanitizeString(content);
  const matchedLanguages = languageRelatedTerms
    .filter((languageTerm) => languageTerm.termsForMatching.some((term) => sanitizedContent.includes(term)))
    .map((languageTerm) => languageTerm.defaultTerm);

  return getUniqueStrings(matchedLanguages) as Languages[];
}

export function matchExperienceLevel(content: { title: string | undefined; description: string | undefined }): ExperienceLevels[] {
  const matchedExperienceLevels: ExperienceLevels[] = [];

  // Split is necessary to avoid matching abbreviations like sr (sênior) and pl (pleno)
  if (content.title) {
    const sanitizedContent = sanitizeString(content.title).split(' ');
    matchedExperienceLevels.push(...matchExperienceLevelTerms(sanitizedContent));
  }

  // If you didn't found the level in the title, try the description
  if (matchedExperienceLevels.length == 0 && content.description) {
    const sanitizedContent = sanitizeString(content.description).split(' ');
    matchedExperienceLevels.push(...matchExperienceLevelTerms(sanitizedContent));
  }

  return (getUniqueStrings(matchedExperienceLevels) as ExperienceLevels[]) || [ExperienceLevels.unknown];
}

export function matchKeywords(content: { title: string | undefined; description: string | undefined }): string[] {
  const jobKeywords: string[] = [];

  if (content.title) {
    const sanitizedTitle = sanitizeString(content.title).split(' ');
    sanitizedTitle.forEach((substring: string) => {
      // The typeof check is necessary to prevent the keywords constructor being matched.
      if (keywords[substring] && typeof keywords[substring] === 'string') jobKeywords.push(keywords[substring]);
    });
  }

  if (content.description) {
    const sanitizedDescription = sanitizeString(content.description).split(' ');
    sanitizedDescription.forEach((substring: string) => {
      // The typeof check is necessary to prevent the keywords constructor being matched.
      if (keywords[substring] && typeof keywords[substring] === 'string') jobKeywords.push(keywords[substring]);
    });
  }

  return getUniqueStrings(jobKeywords);
}

function matchExperienceLevelTerms(splittedContent: string[]): ExperienceLevels[] {
  return experienceLevelRelatedTerms
    .filter((experienceLevelTerms) => experienceLevelTerms.termsForMatching.some((term) => splittedContent.includes(term)))
    .map((experienceLevelTerms) => experienceLevelTerms.defaultTerm);
}

function sanitizeString(content: string): string {
  return removeSymbols(removeAccents(content)).toLowerCase();
}

function removeSymbols(string: string): string {
  // Do not add the dot symbol. Think about .NET first
  return string
    .replaceAll('/', ' ')
    .replaceAll(',', ' ')
    .replaceAll('(', ' ')
    .replaceAll(')', ' ')
    .replaceAll('-', ' ')
    .replaceAll('[', ' ')
    .replaceAll(']', ' ')
    .replaceAll(';', ' ');
}

function removeAccents(string: string): string {
  //TODO Understand how it works
  return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function getUniqueStrings(strings: string[]): string[] {
  const uniqueSet = new Set(strings);
  const uniqueArray = Array.from(uniqueSet);
  return uniqueArray;
}
