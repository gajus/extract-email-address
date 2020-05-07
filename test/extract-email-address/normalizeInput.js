// @flow

import test from 'ava';
import normalizeInput from '../../src/normalizeInput';

test('normalizes different email formats', (t) => {
  t.is(normalizeInput('GAJUS@GAJUS.COM'), 'gajus@gajus.com');
  t.is(normalizeInput('：gajus@gajus.com'), 'gajus@gajus.com');
  t.is(normalizeInput('📧gajus@gajus.com'), 'gajus@gajus.com');
  t.is(normalizeInput('g a j u s [at] g a j u s [dot] c o m'), 'gajus@gajus.com');
  t.is(normalizeInput('foo g a j u s [at] g a j u s [dot] c o m bar'), 'foo gajus@gajus.com bar');
  t.is(normalizeInput('gajus[at]gajus[dot]co[dot]uk'), 'gajus@gajus.co.uk');
  t.is(normalizeInput('gajus[at]gajus[dot]com'), 'gajus@gajus.com');
  t.is(normalizeInput('gajus(at)gajus(dot)com'), 'gajus@gajus.com');
  t.is(normalizeInput('gajus [at] gajus   [dot]   com'), 'gajus@gajus.com');
  t.is(normalizeInput('gajus (at) gajus   (dot)   com'), 'gajus@gajus.com');
  t.is(normalizeInput('gajus <at> gajus   <dot>   com'), 'gajus@gajus.com');
  t.is(normalizeInput('gajus at gajus   dot   com'), 'gajus@gajus.com');
});
