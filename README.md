<a name="extract-email-address"></a>
# extract-email-address 📧

[![Travis build status](http://img.shields.io/travis/gajus/extract-email-address/master.svg?style=flat-square)](https://travis-ci.org/gajus/extract-email-address)
[![Coveralls](https://img.shields.io/coveralls/gajus/extract-email-address.svg?style=flat-square)](https://coveralls.io/github/gajus/extract-email-address)
[![NPM version](http://img.shields.io/npm/v/extract-email-address.svg?style=flat-square)](https://www.npmjs.org/package/extract-email-address)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)
[![Twitter Follow](https://img.shields.io/twitter/follow/kuizinas.svg?style=social&label=Follow)](https://twitter.com/kuizinas)

Extracts email address from an arbitrary text input.

* [extract-email-address 📧](#extract-email-address)
    * [API](#extract-email-address-api)
    * [Usage](#extract-email-address-usage)
    * [Filtering results](#extract-email-address-filtering-results)
    * [Related projects](#extract-email-address-related-projects)


<a name="extract-email-address-api"></a>
## API

```js
import extractEmail from 'extract-email-address';
import type {
  EmailMatchType,
} from 'extract-email-address';

extractEmail(input: string): $ReadOnlyArray<EmailMatchType>;

```

<a name="extract-email-address-usage"></a>
## Usage

```js
import extractEmail from 'extract-email-address';

extractEmail('extracts email from anywhere within the input gajus@gajus.com');
// [{email: 'gajus@gajus.com'}]

extractEmail('extracts multiple emails located anywhere within the input: foo@gajus.com, bar@gajus.com');
// [{email: 'foo@gajus.com'}, {email: 'bar@gajus.com'}]

extractEmail('extracts all sorts of obfuscated emails, e.g. f o o @ b a r . c o m or baz [at] qux [dot] com');
// [{email: 'foo@bar.com'}, {email: 'baz@qux.com'}]

extractEmail('extracts tagged emails, e.g. gajus+foo@gajus.com');
// [{email: 'gajus+foo@gajus.com'}]

extractEmail('extracts emails surrounded by odd unicode characters, e.g. 邮箱：gajus@gajus.com');
// [{email: 'gajus@gajus.com'}]

extractEmail('extracts emails surrounded by emojis, e.g. 📧gajus@gajus.com');
// [{email: 'gajus@gajus.com'}]

extractEmail('excludes invalid emails with invalid TLDs, e.g. gajus@gajus.png');
// []

extractEmail('ignores invalid emails foo@bar');
// []

```

<a name="extract-email-address-filtering-results"></a>
## Filtering results

Some matches might be syntactically valid email addresses, but not actual email addresses, e.g. `apple-touch-icon@2.png`.

`extract-email-address` uses a list of valid top-level domains to filter out matches that are definitely not emails (such as `png` example), but you might still need to filter out domain specific false-positives.

<a name="extract-email-address-related-projects"></a>
## Related projects

* [`extract-date`](https://github.com/gajus/extract-date) – Extracts date from an arbitrary text input.
* [`extract-price`](https://github.com/gajus/extract-price) – Extracts price from an arbitrary text input.
* [`extract-time`](https://github.com/gajus/extract-time) – Extracts time from an arbitrary text input.
