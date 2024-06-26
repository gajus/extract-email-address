const auto = require('eslint-config-canonical/configurations/auto');

module.exports = [
  {
    files: ['**/*.cjs', '**/*.ts', '**/*.tsx'],
  },
  {
    files: ['**/*.ts'],
    rules: {
      'id-length': 0,
    },
  },
  ...auto,
  {
    ignores: ['**/package-lock.json'],
  },
];
