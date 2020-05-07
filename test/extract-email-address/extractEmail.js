// @flow

import test from 'ava';
import extractEmail from '../../src/extractEmail';

const fixtures = [
  'gajus@gajus.com',
  'foo gajus@gajus.com bar',
  'foo gajus [at] gajus   [dot]   com',
  'foo g a j u s [at] g a j u s   [dot]   c o m',
];

for (const fixture of fixtures) {
  test('extracts email ("' + fixture + '")', (t) => {
    t.deepEqual(extractEmail(fixture), [
      {
        email: 'gajus@gajus.com',
      },
    ]);
  });
}

test('removes duplicates email', (t) => {
  t.deepEqual(extractEmail('gajus@gajus.com gajus@gajus.com'), [
    {
      email: 'gajus@gajus.com',
    },
  ]);
});
