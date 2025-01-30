import { extractEmail } from './extractEmail';
import test from 'ava';

const fixtures = [
  'gajus@gajus.com',
  'GAJUS@GAJUS.COM',
  '：gajus@gajus.com',
  '📧gajus@gajus.com',
  'gajus@gajus.com.',
  'foo gajus@gajus.com bar',
  'foo gajus [at] gajus   [dot]   com',
  'foo g a j u s [at] g a j u s   [dot]   c o m',
  '<gajus@gajus.com>',
  '【email: gajus@gajus.com】',
  '<a href="/contact">contact: gajus@gajus.com</a>',
  '"mailto:gajus@gajus.com"',
  'https://gajus@gajus.com',
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

test('extracts multiple email addresses', (t) => {
  t.deepEqual(extractEmail('foo@bar.com baz@qux.com'), [
    {
      email: 'foo@bar.com',
    },
    {
      email: 'baz@qux.com',
    },
  ]);
});

test('extracts email (gajus+test@gajus.com)', (t) => {
  t.deepEqual(extractEmail('gajus+test@gajus.com'), [
    {
      email: 'gajus+test@gajus.com',
    },
  ]);
});

test('excludes emails with invalid TLD (gajus@gajus.png)', (t) => {
  t.deepEqual(extractEmail('gajus@gajus.png'), []);
});

test('removes duplicates email', (t) => {
  t.deepEqual(extractEmail('gajus@gajus.com gajus@gajus.com'), [
    {
      email: 'gajus@gajus.com',
    },
  ]);
});

test('extracts email mailto', (t) => {
  t.deepEqual(extractEmail('mailto%3Ajohn%2Bsmith%40gajus.com'), [
    {
      email: 'john+smith@gajus.com',
    },
  ]);
});
