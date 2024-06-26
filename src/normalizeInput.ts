import createEmojiRegex from 'emoji-regex';

const emojiRegex = createEmojiRegex();

export const normalizeInput = (input: string): string => {
  return (
    decodeURIComponent(input)
      .replace(emojiRegex, ' ')
      .replaceAll(/(?<=\s|^)([.\-_a-z])\s?(?=[.\-_a-z](?:\s|$))/gu, '$1')
      .replaceAll(/\s+at\s+/gu, '@')
      .replaceAll(/\s+dot\s+/gu, '.')
      .replaceAll(/\s*<at>\s*/gu, '@')
      .replaceAll(/\s*<dot>\s*/gu, '.')
      .replaceAll(/\s*\(at\)\s*/gu, '@')
      .replaceAll(/\s*\(dot\)\s*/gu, '.')
      .replaceAll(/\s*\[at\]\s*/gu, '@')
      .replaceAll(/\s*\[dot\]\s*/gu, '.')

      // Matches all ASCII characters from the space to tilde.
      // eslint-disable-next-line regexp/no-obscure-range
      .replaceAll(/[^ -~]/gu, ' ')
      .trim()
      .toLowerCase()
  );
};
