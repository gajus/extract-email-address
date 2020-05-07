# extract-email-address 📧

[![Travis build status](http://img.shields.io/travis/gajus/extract-email-address/master.svg?style=flat-square)](https://travis-ci.org/gajus/extract-email-address)
[![Coveralls](https://img.shields.io/coveralls/gajus/extract-email-address.svg?style=flat-square)](https://coveralls.io/github/gajus/extract-email-address)
[![NPM version](http://img.shields.io/npm/v/extract-email-address.svg?style=flat-square)](https://www.npmjs.org/package/extract-email-address)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)
[![Twitter Follow](https://img.shields.io/twitter/follow/kuizinas.svg?style=social&label=Follow)](https://twitter.com/kuizinas)

Extracts email address from an arbitrary text input.

{"gitdown": "contents"}

## API

```js
import type {
  EmailMatchType,
} from 'extract-email-address';

```

## Usage

```js
import extractEmail from 'extract-email-address';

extractEmail('extracts email from anywhere within the input gajus@gajus.com');
// [{email: 'gajus@gajus.com'}]

extractEmail('extracts multiple emails located anywhere within the input: foo@gajus.com, bar@gajus.com');
// [{email: 'foo@gajus.com'}, {email: 'bar@gajus.com'}]

extractEmail('extracts all sorts of obfuscated emails, e.g. f o o @ b a r . c o m or baz [at] qux [dot] com');
// [{email: 'foo@bar.com'}, {email: 'baz@qux.com'}]

extractEmail('ignores invalid emails foo@bar');
// []

```

## Related projects

* [`extract-date`](https://github.com/gajus/extract-date) – Extracts date from an arbitrary text input.
* [`extract-price`](https://github.com/gajus/extract-price) – Extracts price from an arbitrary text input.
* [`extract-time`](https://github.com/gajus/extract-time) – Extracts time from an arbitrary text input.
