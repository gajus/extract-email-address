import { normalizeInput } from './normalizeInput';
import tlds from 'tlds';

export type EmailMatch = {
  email: string;
};

export const extractEmail = (input: string): readonly EmailMatch[] => {
  const matches = normalizeInput(input).match(
    // eslint-disable-next-line unicorn/better-regex, require-unicode-regexp, regexp/no-unused-capturing-group
    /\b[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
  );

  if (!matches) {
    return [];
  }

  return matches
    .map((email) => {
      return email;
    })
    .filter((email) => {
      for (const tld of tlds) {
        if (email.endsWith('.' + tld)) {
          return true;
        }
      }

      return false;
    })
    .filter((email, index, self) => {
      return self.indexOf(email) === index;
    })
    .map((email) => {
      return {
        email,
      };
    });
};
