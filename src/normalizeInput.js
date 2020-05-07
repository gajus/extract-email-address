// @flow

import createEmojiRegex from 'emoji-regex';

const emojiRegex = createEmojiRegex();

export default (input: string): string => {
  return input
    .replace(emojiRegex, ' ')
    .replace(/(?<=\s|^)([a-z0-9.-_@])\s?(?=[a-z0-9.-_@](?:\s|$))/g, '$1')
    .replace(/\s+at\s+/g, '@')
    .replace(/\s+dot\s+/g, '.')
    .replace(/\s*<at>\s*/g, '@')
    .replace(/\s*<dot>\s*/g, '.')
    .replace(/\s*\(at\)\s*/g, '@')
    .replace(/\s*\(dot\)\s*/g, '.')
    .replace(/\s*\[at\]\s*/g, '@')
    .replace(/\s*\[dot\]\s*/g, '.')

    // Matches all ASCII characters from the space to tilde.
    .replace(/[^ -~]/g, ' ')
    .trim()
    .toLowerCase();
};
