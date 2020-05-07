// @flow

import normalizeInput from './normalizeInput';
import type {
  EmailMatchType,
} from './types';

export default (input: string): $ReadOnlyArray<EmailMatchType> => {
  const matches = normalizeInput(input).match(/(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g);

  if (!matches) {
    return [];
  }

  return matches
    .map((email) => {
      return email;
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
