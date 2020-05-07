// @flow

export default (input: string): string => {
  return input
    .replace(/(?<=\s|^)([a-z0-9.-_@])\s?(?=[a-z0-9.-_@](?:\s|$))/g, '$1')
    .replace(/\s+at\s+/g, '@')
    .replace(/\s+dot\s+/g, '.')
    .replace(/\s*<at>\s*/g, '@')
    .replace(/\s*<dot>\s*/g, '.')
    .replace(/\s*\(at\)\s*/g, '@')
    .replace(/\s*\(dot\)\s*/g, '.')
    .replace(/\s*\[at\]\s*/g, '@')
    .replace(/\s*\[dot\]\s*/g, '.');
};